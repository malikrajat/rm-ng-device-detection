# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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

