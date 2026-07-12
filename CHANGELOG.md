# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [5.0.1](https://github-personal/malikrajat/device-detectione/compare/v5.0.0...v5.0.1) (2026-07-11)
### Added
- New `DeviceInfo` fields: `osDistro` (best-effort Linux distro name), `isBot` (crawler/bot/HTTP-client detection), `width`/`height` (CSS pixel viewport), `resolution` (physical screen resolution), and `devicePixelRatio` (HiDPI/Retina ratio).
- Standalone, Angular-free `parseUserAgent(ua, options)` function and `ParsedUserAgent` type for parsing arbitrary user-agent strings (e.g. from SSR request headers) without touching `window`/`navigator`.
- `DetectionOptions.basicMode` to skip ~150 obsolete legacy device regexes for a meaningful perf win on high-traffic paths (e.g. SSR middleware).
- Extensibility hooks: `registerCustomDevice()`, `registerCustomBrowser()`, `registerCustomOS()`, and `clearCustomDetectors()` for adding custom detection without forking the library.
- `RmNgDeviceDetectionService.updateScreenInfo()` public method to refresh viewport/screen values (e.g. from a `window:resize` listener) without re-running UA parsing.
- `RmNgDeviceDetectionService.detectWindows11ViaClientHints()` async helper to distinguish Windows 11 from Windows 10 via the User-Agent Client Hints API.
- `RmNgDeviceDetectionService.isBraveViaFeatureDetection()` async helper for Brave detection via feature detection.
- `ready` flag on the service, set once detection has run at least once.
- New detection constants: `BOTS_RE`, `LINUX_DISTROS_RE`, `OS_VERSION_GROUPS`, generic Android/HarmonyOS mobile & tablet heuristics, PS5/Xbox devices, and `HEAVY_LEGACY_MOBILE_KEYS`/`HEAVY_LEGACY_TABLET_KEYS`.
- Added `baseline-browser-mapping` (`2.10.42`) dependency.

### Changed
- Refactored the detection engine into pure, dependency-free, testable resolver functions (`resolveOS`, `resolveBrowser`, `resolveDevice`, `resolveOsVersion`, `resolveOsDistro`, etc.), replacing the previous reduce-based mapping logic.
- Added a bounded LRU-style result cache so repeatedly parsing the same UA avoids re-running ~250 regexes.
- Version-detection now only tests OS-relevant version regexes via `OS_VERSION_GROUPS` instead of all of them.
- Bumped package version to `5.0.1`.

### Fixed
- Generic Windows/Linux desktops that previously resolved to `Unknown` are now correctly detected as desktop, using OS family as the primary signal.
- Specific phone brand/model matches now win over the generic "no Mobile token = tablet" heuristic, fixing legacy phones being misclassified as tablets.
- Consoles/TV/streaming devices (PS4/PS5/Xbox, Chromecast, Apple TV, Google TV, Vita) are correctly excluded from desktop classification even on Linux-based OSes.
- Blank/missing user-agent strings now report honestly as `Unknown` instead of defaulting to desktop.
- Detection never throws: malformed UAs, bad custom regexes, or unexpected runtime quirks degrade gracefully to `Unknown` results.

## [5.0.0](https://github-personal/malikrajat/device-detectione/compare/v4.0.0...v5.0.0) (2026-07-10)
### Added
- Added `vitest` and `istanbul-lib-instrument` to support improved test tooling.

### Changed
- Upgraded Angular runtime and build packages from `21.x` to `22.0.1`.
- Upgraded `ng-packagr` from `21.x` to `22.0.0`.
- Upgraded TypeScript from `5.9.3` to `6.0.3`.
- Bumped package version to `5.0.0`.

### Fixed
- Fixed dist packaging script to copy `README.md` into `dist/README.md` (instead of copying `LICENSE`).

## [4.0.0] - 2025-11-29
### Added
- Angular 21 support.
- Updated RxJS to v8.
- Updated TypeScript to 5.5+.
- Added new keywords for better npm discoverability.
- Added SSR-safe improvements.
- Introduced new CHANGELOG tracking.

### Changed
- Updated internal device detection logic for better accuracy.
- Updated ng-packagr to version 21.
- Improved TypeScript types and performance.

### Fixed
- Fixed incorrect detection for some newer Android devices.
- Fixed SSR fallback where user agent was undefined.

---

## [3.0.0] - 2024
### Added
- Angular 18/19 compatibility.
- Improved browser detection logic.
- Minor documentation updates.

### Changed
- Refactored service to reduce bundle size.
- Updated dependencies to latest Angular versions.

### Fixed
- Issue with mobile detection on iOS 17.
- Type definitions mismatch for SSR builds.

---

## [2.0.0] - 2023
### Added
- Angular 16/17 support.
- New API: `isMobile()`, `isTablet()`, `isDesktop()` with improved results.
- Added support for detecting OS (Windows, macOS, Android, iOS).

### Changed
- Refactored library to use standalone APIs.
- Cleaner tree-shakable structure.

### Fixed
- Bug where browser version was misdetected on Chrome 110.
- Device detection issues in Safari.

---

## [1.0.0] - 2021 (Initial Release)
### Added
- Core device detection service.
- Browser detection (Chrome, Firefox, Safari, Edge, etc.).
- Device type detection (Mobile, Tablet, Desktop).
- Simple API for Angular developers.

---

## Unreleased
### Planned
- Add unit test coverage (Vitest).
- Add device-breakpoint events.
- Add option to override user-agent for testing.
- Provide full SSR-friendly examples.

---

# 📌 Notes

- Each new version should be added on top.
- Use clear categories: **Added, Changed, Fixed, Removed, Deprecated**.
- Always date your release version.

