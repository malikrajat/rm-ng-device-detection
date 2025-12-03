# Changelog
All notable changes to **rm-ng-device-detection** will be documented in this file.

This project follows **[Semantic Versioning](https://semver.org/)** and the format is based on  
**[Keep a Changelog](https://keepachangelog.com/en/1.0.0/)**.

---

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

