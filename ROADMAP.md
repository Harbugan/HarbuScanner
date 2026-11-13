# HarbuScanner Roadmap

## v0.1 — First working prototype
- [x] Fullscreen mobile camera and HUD
- [x] MediaPipe single-person pose tracking
- [x] Target lock and 2.2-second scan
- [x] Fictional random profile generator
- [x] Rescan and stop camera
- [x] Basic PWA manifest and shell caching
- [ ] Test on real Android and iOS devices
- [ ] Verify pose model loads and FPS on mobile
- [ ] Add PNG app icons for broader install support

## v0.2 — Polish
- [ ] Scanner sound effects with mute control
- [ ] Better tracking stability and target selection
- [ ] Fun rare/legendary profile variations
- [ ] Shareable fictional profile card with consent

## Principles
No face recognition, identity lookup, biometric storage, image upload, or real personal data. Camera runs locally; MediaPipe model resources are fetched from third-party hosts on first load. HTTPS required outside localhost.
