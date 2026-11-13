# HarbuScanner — Agent Instructions

Build a playful privacy-first cyberpunk PWA for mobile browsers, inspired by game scanning aesthetics but using original UI assets.

## Architecture
Vanilla HTML/CSS/ES modules, no build step. index.html is entry point. js/app.js controls camera lifecycle and scanning state. js/tracking.js uses MediaPipe Pose Landmarker and returns normalized pose bounding boxes. js/profiles.js generates fictional profiles. css/scanner.css renders the dark cyan HUD. service-worker.js caches the app shell.

## Hard constraints
- Never identify a real person, infer age/attributes from video, recognize faces, store biometric data, or upload camera frames.
- Every profile is randomly generated fiction; keep the fiction disclosure visible.
- Request camera permission only after user interaction; stop all tracks on stop/pagehide.
- Optimize for portrait mobile first and support accessibility/reduced motion.
- Avoid backend and credentials; keep all UI self-contained.
- Use feature branches and PRs; update ROADMAP.md with progress.

## Testing
Serve over localhost or HTTPS. Validate on real Android/iOS; camera requires secure context. MediaPipe's WASM and model currently load over the network, so first-run tracking is not offline-capable. Do not claim otherwise.
