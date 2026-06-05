# Cape Town 14-Day Program

A mobile-first, installable **PWA** for a HYROX-flavoured, calf-smart 14-day gym block. Works fully offline once loaded; progress is saved on your device.

## Features
- All 14 days with intensity tags, running caps, warm-up & cooldown
- Check off exercises, log weights/reps, session notes
- Benchmark time logging (Day 1 vs Day 13)
- Built-in rest timer (60s / 90s / 2m) with beep + vibrate
- Block progress tracking — everything persists in `localStorage`

## Install on your phone
Open the hosted link in Safari/Chrome → **Share → Add to Home Screen**.

## Run locally
```bash
python3 -m http.server 8765
# then open http://localhost:8765
```

## Tech
Plain HTML/CSS/JS. No build step. Service worker for offline; web manifest for installability.
