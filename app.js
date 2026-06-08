(function () {
  "use strict";
  const P = window.PROGRAM;
  const KEY = "ctgym.v1";
  const view = document.getElementById("view");
  const appbarTitle = document.getElementById("appbarTitle");
  const backBtn = document.getElementById("backBtn");
  const resetBtn = document.getElementById("resetBtn");

  // ---------- State ----------
  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || { days: {} }; }
    catch (e) { return { days: {} }; }
  }
  function save() { localStorage.setItem(KEY, JSON.stringify(state)); }
  let state = load();
  function dayState(n) {
    if (!state.days[n]) state.days[n] = { items: {}, logs: {}, notes: "", done: false };
    return state.days[n];
  }

  // ---------- Helpers ----------
  const el = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  };
  const tagClass = (t) => "tag " + t.replace("-", "");
  function daysDone() { return P.days.filter(d => state.days[d.n] && state.days[d.n].done).length; }

  let toastTimer;
  function toast(msg) {
    let t = document.querySelector(".toast");
    if (!t) { t = el("div", "toast"); document.body.appendChild(t); }
    t.textContent = msg; t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 1600);
  }

  // ---------- Router ----------
  function go(hash) { location.hash = hash; }
  function route() {
    const h = location.hash.replace("#", "");
    const m = h.match(/^day\/(\d+)$/);
    if (m) renderDay(parseInt(m[1], 10));
    else renderHome();
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);
  backBtn.addEventListener("click", () => go(""));

  // ---------- Home ----------
  function renderHome() {
    backBtn.hidden = true;
    appbarTitle.textContent = "Cape Town 14-Day";
    view.innerHTML = "";

    const hero = el("div", "hero");
    hero.appendChild(el("h1", null, P.title));
    hero.appendChild(el("p", null, P.subtitle));
    hero.appendChild(el("p", null, P.built));
    view.appendChild(hero);

    // overall progress
    const done = daysDone();
    const pct = Math.round((done / P.days.length) * 100);
    const ov = el("div", "overall");
    ov.innerHTML =
      '<div class="row"><b>Block progress</b><small>' + done + " / " + P.days.length + " days</small></div>" +
      '<div class="bar"><span style="width:' + pct + '%"></span></div>';
    view.appendChild(ov);

    // rules
    view.appendChild(el("div", "section-label", "Rules of the block"));
    const rules = el("div", "overall");
    rules.style.fontSize = "14px";
    rules.innerHTML = P.rules.map(r => "• " + r).join("<br><br>");
    view.appendChild(rules);

    // day list, grouped by week
    for (let w = 0; w < 2; w++) {
      view.appendChild(el("div", "weekhead", "WEEK " + (w + 1)));
      const grid = el("div", "daygrid");
      P.days.slice(w * 7, w * 7 + 7).forEach(d => grid.appendChild(dayCard(d)));
      view.appendChild(grid);
    }
  }

  function dayCard(d) {
    const ds = state.days[d.n];
    const isDone = ds && ds.done;
    const card = el("button", "daycard" + (isDone ? " done" : ""));
    card.appendChild(el("div", "daynum", isDone ? '<span class="check">✓</span>' : ("D" + d.n)));
    const info = el("div", "dayinfo");
    info.appendChild(el("div", "t", d.title));
    const meta = el("div", "meta");
    meta.appendChild(el("span", tagClass(d.tag), d.tag));
    meta.appendChild(el("small", null, d.time + (d.running !== "No" ? " · " + d.running : "")));
    info.appendChild(meta);
    card.appendChild(info);
    card.appendChild(el("div", "daychev", "›"));
    card.addEventListener("click", () => go("day/" + d.n));
    return card;
  }

  // ---------- Day detail ----------
  function renderDay(n) {
    const d = P.days.find(x => x.n === n);
    if (!d) return go("");
    const ds = dayState(n);
    backBtn.hidden = false;
    appbarTitle.textContent = "Day " + n;
    view.innerHTML = "";

    const head = el("div", "dayhead");
    head.appendChild(el("div", "kicker", "Day " + n + " of 14"));
    head.appendChild(el("h1", null, d.title));
    const meta = el("div", "meta");
    meta.appendChild(el("span", tagClass(d.tag), d.tag));
    meta.appendChild(el("span", "pill", d.time));
    meta.appendChild(el("span", "pill", "Running: " + d.running));
    head.appendChild(meta);
    view.appendChild(head);

    if (d.intro) view.appendChild(el("div", "intro", d.intro));

    // Warm-up
    view.appendChild(standardSection(P.warmup, "🔥"));

    // Blocks
    d.blocks.forEach((block, bi) => view.appendChild(renderBlock(n, block, bi)));

    // Cooldown
    view.appendChild(standardSection(P.cooldown, "🧘"));

    // Notes
    const nb = el("div", "notesblock");
    const hasTime = d.blocks.some(b => b.log === "time");
    const lbl = el("label", null, "Session notes" + (hasTime ? " · log your time here" : ""));
    const ta = el("textarea");
    ta.placeholder = "How it felt, weights, time, anything to remember…";
    ta.value = ds.notes || "";
    ta.addEventListener("input", () => { ds.notes = ta.value; save(); });
    nb.appendChild(lbl); nb.appendChild(ta);
    view.appendChild(nb);

    // Done button
    const bar = el("div", "donebar");
    const btn = el("button", "bigbtn" + (ds.done ? " done" : ""), ds.done ? "✓ Completed — tap to undo" : "Mark day complete");
    btn.addEventListener("click", () => {
      ds.done = !ds.done; save();
      btn.className = "bigbtn" + (ds.done ? " done" : "");
      btn.textContent = ds.done ? "✓ Completed — tap to undo" : "Mark day complete";
      toast(ds.done ? "Day " + n + " complete 💪" : "Marked incomplete");
    });
    bar.appendChild(btn);
    view.appendChild(bar);
  }

  function renderBlock(n, block, bi) {
    const ds = dayState(n);
    const wrap = el("div", "block");
    const bh = el("div", "bhead");
    bh.appendChild(el("h2", null, block.title));
    if (block.sub) bh.appendChild(el("span", "sub", block.sub));
    if (block.rounds) bh.appendChild(el("span", "rounds-tag", "× " + block.rounds + " rounds"));
    wrap.appendChild(bh);

    block.items.forEach((item, ii) => {
      const id = bi + "-" + ii;
      const checked = !!ds.items[id];
      const row = el("div", "item" + (checked ? " checked" : ""));

      const cb = el("div", "cbox", "✓");
      cb.addEventListener("click", () => {
        ds.items[id] = !ds.items[id];
        if (!ds.items[id]) delete ds.items[id];
        save();
        row.classList.toggle("checked", !!ds.items[id]);
      });
      row.appendChild(cb);

      const body = el("div", "ibody");
      body.appendChild(el("div", "iname", item.name));
      if (item.detail) body.appendChild(el("div", "idetail", item.detail));
      if (item.log) {
        const lw = el("div", "logwrap");
        const inp = el("input");
        inp.type = "text";
        inp.placeholder = item.log === "weight" ? "Weight used…" : "Time / score…";
        inp.value = ds.logs[id] || "";
        inp.addEventListener("input", () => { ds.logs[id] = inp.value; save(); });
        lw.appendChild(inp);
        body.appendChild(lw);
      }
      row.appendChild(body);
      wrap.appendChild(row);
    });
    return wrap;
  }

  function standardSection(sec, icon) {
    const det = el("details", "standard");
    const sum = el("summary");
    sum.innerHTML = "<span>" + icon + " " + sec.title + " · <span style='color:var(--muted);font-weight:400'>" + sec.sub + "</span></span><span class='arr'>›</span>";
    det.appendChild(sum);
    const inner = el("div", "inner");
    sec.items.forEach(it => {
      const row = el("div", "item");
      row.style.opacity = ".95";
      const body = el("div", "ibody");
      body.appendChild(el("div", "iname", it.name));
      if (it.detail) body.appendChild(el("div", "idetail", it.detail));
      row.appendChild(body);
      inner.appendChild(row);
    });
    det.appendChild(inner);
    return det;
  }

  // ---------- Reset ----------
  resetBtn.addEventListener("click", () => {
    if (confirm("Reset ALL progress (checkmarks, logs, notes)? This can't be undone.")) {
      state = { days: {} };
      save();
      route();
      toast("Progress reset");
    }
  });

  // ---------- Rest timer ----------
  const fab = document.getElementById("timerFab");
  const dock = document.getElementById("timerDock");
  const disp = document.getElementById("timerDisplay");
  let remaining = 0, tHandle = null;

  function fmt(s) { const m = Math.floor(s / 60); return m + ":" + String(s % 60).padStart(2, "0"); }
  function paint() {
    disp.textContent = fmt(Math.max(0, remaining));
    disp.classList.toggle("warn", remaining <= 10 && remaining > 0);
  }
  function tick() {
    remaining--; paint();
    if (remaining <= 0) {
      clearInterval(tHandle); tHandle = null;
      beep(); toast("Rest done — go!");
    }
  }
  function startTimer(sec) {
    dock.hidden = false;
    remaining = sec; paint();
    if (tHandle) clearInterval(tHandle);
    tHandle = setInterval(tick, 1000);
  }
  function beep() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      o.frequency.value = 880; o.type = "sine";
      g.gain.setValueAtTime(0.001, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.3, ctx.currentTime + 0.02);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
      o.start(); o.stop(ctx.currentTime + 0.5);
      if (navigator.vibrate) navigator.vibrate([200, 80, 200]);
    } catch (e) {}
  }
  fab.addEventListener("click", () => {
    dock.hidden = !dock.hidden;
    if (!dock.hidden && !tHandle) { remaining = 90; paint(); }
  });
  dock.querySelectorAll("[data-sec]").forEach(b =>
    b.addEventListener("click", () => startTimer(parseInt(b.dataset.sec, 10))));
  document.getElementById("timerStop").addEventListener("click", () => {
    if (tHandle) clearInterval(tHandle); tHandle = null;
    dock.hidden = true;
  });

  // ---------- Go ----------
  route();
})();
