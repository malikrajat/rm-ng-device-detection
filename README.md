# rm-ng-device-detection

<p align="left">
  <img src="https://img.shields.io/npm/v/rm-ng-device-detection.svg" alt="npm version">
  <img src="https://img.shields.io/badge/Stability-production--ready-success" alt="Production ready">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="license">
  <img src="https://img.shields.io/badge/Angular-16%20to%22-blue" alt="Angular support range">
  <img src="https://img.shields.io/badge/Ivy-compatible-blue" alt="Ivy compatible">
  <img src="https://img.shields.io/badge/Standalone-supported-success" alt="Standalone API">
  <img src="https://img.shields.io/badge/AOT-compatible-blue" alt="AOT compatible">
  <img src="https://img.shields.io/badge/SSR-compatible-success" alt="SSR compatible">
  <img src="https://img.shields.io/badge/TypeScript-strict-blue" alt="Strict TS">
  <img src="https://img.shields.io/badge/tree--shaking-supported-success" alt="Tree-shakable">
  <img src="https://img.shields.io/badge/Side%20Effects-none-blue" alt="No side effects">
  <img src="https://img.shields.io/badge/Linting-enabled-success" alt="Linting">
  <img src="https://img.shields.io/badge/Tests-covered-blue" alt="Tests">
  <img src="https://img.shields.io/badge/Coverage-90%25-success" alt="Coverage">
  <img src="https://img.shields.io/badge/A11y-WCAG%202.1-success" alt="Accessibility compliant">
  <img src="https://img.shields.io/badge/API-documented-blue" alt="API docs">
  <img src="https://img.shields.io/badge/Examples-available-success" alt="Examples">
  <img src="https://img.shields.io/badge/Dependencies-none-success" alt="No dependencies">
  <img src="https://img.shields.io/npm/dt/rm-ng-device-detection" alt="total downloads">
  <img src="https://img.shields.io/npm/last-update/rm-ng-device-detection" alt="Last update">
  <img src="https://img.shields.io/badge/Maintained-yes-success" alt="Maintained">
  <img src="https://img.shields.io/badge/SemVer-compliant-blue" alt="SemVer">
</p>


---

##  See It In Action

<div align="center">
  
  <img src="https://github.com/malikrajat/rm-ng-device-detection/blob/main/assets/code.png" alt="rm-ng-device-detection Demo" width="800"/>

</div>

---

<p align="center">
A lightweight, tree-shakable Angular library for detecting and classifying devices. Identify device type, OS, browser, and more based on user agent strings to create responsive, device-specific user experiences.
</p>

---

## Features

-  **Device Detection** - Identify mobile, tablet, and desktop devices
-  **OS & Browser Detection** - Detect operating systems, browsers, and their versions
-  **Modern Device Coverage** - Recognises current-generation phones (Pixel, OnePlus, Xiaomi, Oppo, Vivo, Realme, Nothing, Huawei/Honor), tablets (Surface, Galaxy Tab, Lenovo Tab, Amazon Fire), and desktop-class devices (Windows PC, Linux PC, Steam Deck, Surface Laptop, Chromebook)
-  **New OS Support** - HarmonyOS, Chrome OS, Unix, plus Windows/macOS/Android/iOS version detection through the latest releases
-  **Linux Distro Detection** - Best-effort distro name (Ubuntu, Fedora, Mint, Debian, Arch, Manjaro, Pop!_OS, openSUSE, Kali, UOS, Kylin, openEuler, and more)
-  **Bot / Crawler Detection** - Flag Googlebot, Bingbot, social scrapers, `curl`, Postman, headless Chrome, and other automated clients so they don't skew your analytics
-  **Viewport & Screen Info** - Access viewport width/height, physical resolution, and device pixel ratio (HiDPI/Retina)
-  **Framework-free Parser** - Use `parseUserAgent()` anywhere (Node scripts, SSR middleware) without Angular, `window`, or `navigator`
-  **Extensible** - Register your own device/browser/OS matchers without forking the library
-  **Performance Mode** - Opt-in `basicMode` skips ~150 obsolete legacy regexes for high-traffic paths, plus a built-in bounded parse cache
-  **Resilient** - Never throws; malformed or empty user agents degrade gracefully to `Unknown`
-  **Lightweight & Fast** - Minimal bundle size with tree-shaking support
-  **Easy Integration** - Simple service-based API
-  **Standalone Support** - Works with Angular standalone components
-  **No Runtime Dependencies** - Pure TypeScript implementation (only `tslib`)
-  **SSR Compatible** - Works with Angular Universal

---

## Live Demo & Playground

<div align="center">

  <table>
  <tr>
    <td align="center" width="50%">
      <a href="https://stackblitz.com/edit/stackblitz-starters-terqbx" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/badge/StackBlitz_Demo-1976D2?style=for-the-badge&logo=stackblitz&logoColor=white" alt="StackBlitz Demo"/>
      </a>
      <br/><br/>
      <sub><b>Interactive Playground</b></sub><br/>
      <sub>Try all features live in your browser</sub>
    </td>
    <td align="center" width="50%">
      <a href="#quick-start" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/badge/Code_Examples-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Examples"/>
      </a>
      <br/><br/>
      <sub><b>Complete Examples</b></sub><br/>
      <sub>Copy-paste ready code samples</sub>
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <a href="https://www.npmjs.com/package/rm-ng-device-detection" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/badge/npm_Package-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm Package"/>
      </a>
      <br/><br/>
      <sub><b>npm Registry</b></sub><br/>
      <sub>Install and view package details</sub>
    </td>
    <td align="center" width="50%">
      <a href="https://github.com/malikrajat/rm-ng-device-detection" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/badge/GitHub_Repo-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repository"/>
      </a>
      <br/><br/>
      <sub><b>Source Code</b></sub><br/>
      <sub>Star, fork, and contribute</sub>
    </td>
  </tr>
</table>

</div>

---

## Installation

Install the library using npm or yarn:

```bash
npm install rm-ng-device-detection --save
```

or

```bash
yarn add rm-ng-device-detection
```

---
<div id="#quick-start"></div>

## Quick Start

### Step 1: Import the Service

Import the service in your component (works with both standalone and module-based apps):

```typescript
import { Component, inject, OnInit } from '@angular/core';
import { RmNgDeviceDetectionService, DeviceInfo } from 'rm-ng-device-detection';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  protected deviceInfo: DeviceInfo | null = null;
  protected readonly deviceService = inject(RmNgDeviceDetectionService)

  ngOnInit(): void {
    this.detectDevice();
  }

  private detectDevice(): void {
    // Get complete device information
    this.deviceInfo = this.deviceService.getDeviceInfo();
    
    // Use helper methods for specific checks
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    const isDesktop = this.deviceService.isDesktop();
    
    console.log('Device Info:', this.deviceInfo);
    console.log('Is Mobile:', isMobile);
    console.log('Is Tablet:', isTablet);
    console.log('Is Desktop:', isDesktop);
  }
}
```

### Step 2: Use in Your Template

```html
@if (deviceInfo) {
  <div>
    <h2>Device Information</h2>
    <p>Device: {{ deviceInfo.device }}</p>
    <p>Device Type: {{ deviceInfo.deviceType }}</p>
    <p>Browser: {{ deviceInfo.browser }} ({{ deviceInfo.browser_version }})</p>
    <p>Operating System: {{ deviceInfo.os }}</p>
    <p>OS Version: {{ deviceInfo.os_version }}</p>
    <p>Linux Distro: {{ deviceInfo.osDistro }}</p>
    <p>Orientation: {{ deviceInfo.orientation }}</p>
    <p>Viewport: {{ deviceInfo.width }} x {{ deviceInfo.height }}</p>
    <p>Resolution: {{ deviceInfo.resolution }} @ {{ deviceInfo.devicePixelRatio }}x</p>
    <p>Is Bot: {{ deviceInfo.isBot }}</p>
  </div>
}

<!-- Conditional rendering based on device type -->
@if (deviceService.isMobile()) {
  <p>Mobile-specific content</p>
}

@if (deviceService.isDesktop()) {
  <p>Desktop-specific content</p>
}
```

---

## API Reference

### DeviceInfo Interface

The `getDeviceInfo()` method returns a `DeviceInfo` object with the following properties:

```typescript
interface DeviceInfo {
  userAgent: string;         // Full user agent string
  os: string;                // Operating system (e.g., 'Windows', 'Mac', 'Android', 'iOS', 'HarmonyOS', 'Linux', 'Chrome-OS')
  browser: string;           // Browser name (e.g., 'Chrome', 'Firefox', 'Safari', 'MS-Edge-Chromium', 'Vivaldi', 'Yandex')
  device: string;            // Device brand/model (e.g., 'iPhone', 'Google Pixel', 'Samsung', 'Windows PC', 'Steam Deck')
  os_version: string;        // Operating system version (e.g., 'windows-10-or-11', 'android-15', 'mac-os-x-15')
  browser_version: string;   // Browser version string (e.g., '124.0.0.0'), or '0' when unknown
  deviceType: string;        // 'mobile' | 'tablet' | 'desktop' | 'unknown'
  orientation: string;       // 'portrait' | 'landscape' | 'Unknown'
  osDistro: string;          // Best-effort Linux distro name (e.g., 'Ubuntu', 'Fedora'); 'Unknown' otherwise
  isBot: boolean;            // true for known crawlers/bots/HTTP clients
  width: number;             // CSS pixel viewport width (window.innerWidth); 0 outside a browser
  height: number;            // CSS pixel viewport height (window.innerHeight); 0 outside a browser
  resolution: string;        // Physical screen resolution as "{width}x{height}" (e.g., '1920x1080')
  devicePixelRatio: number;  // window.devicePixelRatio (1 standard, 2+ Retina/HiDPI); 1 outside a browser
}
```

### Additional Exported Types

```typescript
// Returned by the standalone parseUserAgent() function. Same as DeviceInfo but WITHOUT the
// viewport-only fields (width, height, resolution, devicePixelRatio), since a UA string alone
// carries no notion of "the current browser window".
type ParsedUserAgent = Omit<DeviceInfo, 'width' | 'height' | 'resolution' | 'devicePixelRatio'>;

enum DeviceType {
  Mobile = 'mobile',
  Tablet = 'tablet',
  Desktop = 'desktop',
  Unknown = 'unknown',
}

enum OrientationType {
  Portrait = 'portrait',
  Landscape = 'landscape',
}

interface DetectionOptions {
  // Skip ~150 obsolete 2009-2015-era feature-phone/tablet regexes and rely on the modern brand
  // list + generic Android/HarmonyOS heuristics instead. Roughly halves the regexes evaluated
  // per call with no accuracy loss on real 2020+ traffic. Off by default. Turn on for
  // high-traffic / perf-sensitive paths (e.g. SSR middleware running on every request).
  basicMode?: boolean;
}
```

### Service Methods

#### `getDeviceInfo(): DeviceInfo`
Returns the complete `DeviceInfo` object for the current environment.

**Example:**
```typescript
const deviceInfo = this.deviceService.getDeviceInfo();
console.log(deviceInfo);
// { browser: 'Chrome', os: 'Windows', device: 'Windows PC', deviceType: 'desktop', isBot: false, ... }
```

#### `setDeviceInfo(ua?: string, options?: DetectionOptions): void`
Re-runs full detection for the given user agent (defaults to the current browser's). Pass
`{ basicMode: true }` for a faster, lighter parse on high-traffic paths. Called automatically in
the constructor, but you can call it again to re-parse a custom UA string.

**Example:**
```typescript
// Parse a specific UA in fast mode
this.deviceService.setDeviceInfo(someUserAgent, { basicMode: true });
const info = this.deviceService.getDeviceInfo();
```

#### `isMobile(userAgent?: string): boolean`
Returns `true` if the device is a mobile device (Android phones, iPhone, etc.).

#### `isTablet(userAgent?: string): boolean`
Returns `true` if the device is a tablet (iPad including iPadOS 13+ desktop mode, Android/HarmonyOS tablets, Surface, etc.).

#### `isDesktop(userAgent?: string): boolean`
Returns `true` if the device is a desktop/laptop. Now uses the OS family (Windows/macOS/Linux/Chrome OS/Unix) as the primary signal, so generic desktops are no longer misreported as `Unknown`.

#### `updateScreenInfo(): void`
Refreshes `width`, `height`, `resolution`, and `devicePixelRatio` from the current window/screen
state without re-running the (comparatively expensive) UA parsing. Ideal to call from a
`window:resize` listener.

**Example:**
```typescript
@HostListener('window:resize')
onResize(): void {
  this.deviceService.updateScreenInfo();
}
```

#### `detectWindows11ViaClientHints(): Promise<boolean>`
Async, best-effort Windows 11 detection via the User-Agent Client Hints API. Browsers freeze the
UA string's platform token at `Windows NT 10.0` for both Windows 10 and 11, so this is the only
reliable way to tell them apart. Resolves `false` when Client Hints are unsupported (Safari,
Firefox, older Chromium).

**Example:**
```typescript
if (await this.deviceService.detectWindows11ViaClientHints()) {
  this.deviceService.os_version = 'windows-11';
}
```

#### `isBraveViaFeatureDetection(): Promise<boolean>`
Async, best-effort Brave detection via feature detection. Brave deliberately reports itself as
plain Chrome in the UA string, so it can only be detected at runtime.

**Example:**
```typescript
const isBrave = await this.deviceService.isBraveViaFeatureDetection();
```

### Service Properties

In addition to the methods above, the service exposes the parsed values directly:
`userAgent`, `os`, `browser`, `device`, `os_version`, `browser_version`, `osDistro`, `isBot`,
`deviceType`, `orientation`, `width`, `height`, `resolution`, `devicePixelRatio`, and `ready`
(a boolean set to `true` once detection has run at least once).

### Standalone Functions (framework-free)

These are exported at the package root and work without Angular — perfect for SSR middleware,
Node scripts, or parsing an arbitrary request's `User-Agent` header.

#### `parseUserAgent(ua: string, options?: DetectionOptions): ParsedUserAgent`
Pure, dependency-free UA parser. Never touches `window`/`navigator`, is safe to call with any UA
string, is internally cached, and never throws (falls back to an all-`Unknown` result on error).

```typescript
import { parseUserAgent } from 'rm-ng-device-detection';

const info = parseUserAgent(request.headers['user-agent'] ?? '');
if (info.isBot) {
  // serve a lightweight response to crawlers
}
```

#### `registerCustomDevice(name: string, regex: RegExp): void`
#### `registerCustomBrowser(name: string, regex: RegExp, versionRegex?: RegExp): void`
#### `registerCustomOS(name: string, regex: RegExp, opts?: { isDesktopOS?: boolean }): void`
#### `clearCustomDetectors(): void`
Register custom matchers (checked with top priority, before the built-in lists) so you can detect
in-house apps/kiosks or override a misdetected built-in without forking. `clearCustomDetectors()`
removes all registrations (handy in tests).

```typescript
import { registerCustomDevice, registerCustomBrowser, registerCustomOS } from 'rm-ng-device-detection';

registerCustomDevice('MyCorp Kiosk', /MyCorpKioskApp\/[\d.]+/);
registerCustomBrowser('MyBrowser', /MyBrowser\//, /MyBrowser\/([\d.]+)/);
registerCustomOS('MyOS', /MyOS/, { isDesktopOS: true });
```

---

## Usage Examples

### Example 1: Responsive Component Loading

```typescript
import { Component, OnInit } from '@angular/core';
import { RmNgDeviceDetectionService } from 'rm-ng-device-detection';

@Component({
  selector: 'app-responsive',
  template: `
    @if (isMobile) {
      <app-mobile-header></app-mobile-header>
    }
    @if (!isMobile) {
      <app-desktop-header></app-desktop-header>
    }
  `
})
export class ResponsiveComponent implements OnInit {
  isMobile: boolean = false;

  constructor(private deviceService: RmNgDeviceDetectionService) {}

  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
  }
}
```

### Example 2: Analytics & Tracking

```typescript
import { Component, OnInit } from '@angular/core';
import { RmNgDeviceDetectionService } from 'rm-ng-device-detection';

@Component({
  selector: 'app-analytics'
})
export class AnalyticsComponent implements OnInit {
  constructor(
    private deviceService: RmNgDeviceDetectionService,
    private analyticsService: AnalyticsService
  ) {}

  ngOnInit(): void {
    const deviceInfo = this.deviceService.getDeviceInfo();
    
    // Send device info to analytics
    this.analyticsService.trackEvent('device_info', {
      device: deviceInfo.device,
      browser: deviceInfo.browser,
      os: deviceInfo.os,
      os_version: deviceInfo.os_version
    });
  }
}
```

### Example 3: Device-Specific Styling

```typescript
import { Component, OnInit } from '@angular/core';
import { RmNgDeviceDetectionService } from 'rm-ng-device-detection';

@Component({
  selector: 'app-styled',
  template: `
    <div [class]="deviceClass">
      <h1>Content adapts to your device</h1>
    </div>
  `,
  styles: [`
    .mobile { font-size: 14px; padding: 10px; }
    .tablet { font-size: 16px; padding: 15px; }
    .desktop { font-size: 18px; padding: 20px; }
  `]
})
export class StyledComponent implements OnInit {
  deviceClass: string = 'desktop';

  constructor(private deviceService: RmNgDeviceDetectionService) {}

  ngOnInit(): void {
    if (this.deviceService.isMobile()) {
      this.deviceClass = 'mobile';
    } else if (this.deviceService.isTablet()) {
      this.deviceClass = 'tablet';
    } else {
      this.deviceClass = 'desktop';
    }
  }
}
```

### Example 4: Filtering Out Bots in Analytics

```typescript
import { Component, OnInit } from '@angular/core';
import { RmNgDeviceDetectionService } from 'rm-ng-device-detection';

@Component({ selector: 'app-bot-aware' })
export class BotAwareComponent implements OnInit {
  constructor(private deviceService: RmNgDeviceDetectionService) {}

  ngOnInit(): void {
    const info = this.deviceService.getDeviceInfo();
    if (info.isBot) {
      // Skip analytics / heavy hydration for crawlers (Googlebot, curl, headless Chrome, ...)
      return;
    }
    // ...track real user
  }
}
```

### Example 5: Reacting to Viewport & Screen Changes

```typescript
import { Component, HostListener, OnInit } from '@angular/core';
import { RmNgDeviceDetectionService } from 'rm-ng-device-detection';

@Component({
  selector: 'app-viewport',
  template: `
    <p>Viewport: {{ width }} x {{ height }}</p>
    <p>Resolution: {{ resolution }} @ {{ dpr }}x</p>
  `
})
export class ViewportComponent implements OnInit {
  width = 0;
  height = 0;
  resolution = '';
  dpr = 1;

  constructor(private deviceService: RmNgDeviceDetectionService) {}

  ngOnInit(): void {
    this.sync();
  }

  @HostListener('window:resize')
  onResize(): void {
    // Cheap: refreshes screen values without re-parsing the user agent
    this.deviceService.updateScreenInfo();
    this.sync();
  }

  private sync(): void {
    const info = this.deviceService.getDeviceInfo();
    this.width = info.width;
    this.height = info.height;
    this.resolution = info.resolution;
    this.dpr = info.devicePixelRatio;
  }
}
```

---

## Configuration & Advanced Usage

### Server-Side Rendering (SSR)

The library is compatible with Angular Universal. In the browser the user agent is detected from
`window.navigator`. On the server, use the framework-free `parseUserAgent()` helper with the
incoming request's `User-Agent` header:

```typescript
import { parseUserAgent } from 'rm-ng-device-detection';

// Express / Angular Universal server handler
const info = parseUserAgent(req.headers['user-agent'] ?? '');
console.log(info.deviceType, info.os, info.browser, info.isBot);
```

### Performance / Lightweight Mode

On high-traffic paths (e.g. SSR middleware running on every request), enable `basicMode` to skip
~150 obsolete legacy device regexes:

```typescript
// Service
this.deviceService.setDeviceInfo(ua, { basicMode: true });

// Standalone
const info = parseUserAgent(ua, { basicMode: true });
```

Repeated parses of the same UA are also served from a built-in bounded cache automatically.

### Custom User Agent

All detection methods accept an optional user agent string, and you can re-run full detection
with `setDeviceInfo()`:

```typescript
this.deviceService.isMobile('Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 ...)');
this.deviceService.isTablet('Mozilla/5.0 (iPad; CPU OS 17_0 ...)');
this.deviceService.setDeviceInfo('Mozilla/5.0 (Windows NT 10.0; Win64; x64) ...');
const info = this.deviceService.getDeviceInfo();
```

### Registering Custom Detectors

```typescript
import { registerCustomDevice, registerCustomBrowser, clearCustomDetectors } from 'rm-ng-device-detection';

// Detect an in-house app that isn't part of the built-in lists
registerCustomDevice('MyCorp Kiosk', /MyCorpKioskApp\/[\d.]+/);
registerCustomBrowser('MyBrowser', /MyBrowser\//, /MyBrowser\/([\d.]+)/);

// Later, e.g. in tests:
clearCustomDetectors();
```

---

## Use Cases

-  **Analytics**: Track device types, browsers, and OS versions
-  **Responsive Design**: Load device-specific components and styles
-  **Content Adaptation**: Serve different content based on device capabilities
-  **Performance**: Lazy load features based on device type
-  **Feature Detection**: Enable/disable features based on device capabilities
-  **Progressive Web Apps**: Optimize PWA experience per device
-  **A/B Testing**: Run device-specific experiments

---

## Detection Scope

The library ships with an extensive, regularly modernised set of detection patterns.

### Operating Systems

| Category | Supported |
|----------|-----------|
| Desktop | Windows, Mac (macOS), Linux, Chrome OS, Unix |
| Mobile | iOS, Android, HarmonyOS, Windows Phone, Firefox OS |

### OS Versions

| OS | Versions |
|----|----------|
| Windows | 3.11, 95, 98, ME, CE, NT 4.0, 2000, XP, Server 2003, Vista, 7, 8, 8.1, 10, 10-or-11 (see Windows 11 note) |
| macOS | Mac OS X 10.2 - 10.16, 11.0 |
| Android | 9, 10, 11, 12, 13, 14, 15, 16 |
| iOS | iPhone OS versions |
| Windows Phone | 7.5, 8.1, 10 |

> **Windows 11 note:** browsers freeze the UA at `Windows NT 10.0` for both Windows 10 and 11, so the UA-string result is `windows-10-or-11`. Use the async `detectWindows11ViaClientHints()` for accurate Windows 11 detection.

### Browsers

Chrome, Firefox, Safari, Opera, Internet Explorer, MS-Edge, MS-Edge-Chromium, Samsung Internet,
UC Browser, Vivaldi, Yandex, DuckDuckGo, Facebook Messenger.

> **Brave & Arc** are Chromium-based and deliberately report as `Chrome`. Use the async `isBraveViaFeatureDetection()` to detect Brave at runtime.

### Devices

| Type | Examples |
|------|----------|
| Modern phones | Google Pixel, OnePlus, Xiaomi, Oppo, Vivo, Realme, Nothing Phone, Huawei/Honor, iPhone, generic Android/HarmonyOS phones |
| Legacy phones | Samsung, Motorola, LG, Sony, HTC, Nokia Lumia, BlackBerry, Micromax, and many more |
| Tablets | iPad (incl. iPadOS 13+ desktop mode), Samsung Galaxy Tab, Surface, Lenovo Tab, Amazon Fire, generic Android/HarmonyOS tablets, plus many legacy brands |
| Desktop-class | Windows PC, Linux PC, Steam Deck, Surface Laptop, Chromebook, Macintosh, Tesla |
| Consoles / TV | PS4, PS5, Xbox, Chromecast, Apple TV, Google TV, PS Vita, Nintendo |

### Linux Distributions (best-effort)

Ubuntu, Fedora, Linux Mint, Debian, Manjaro, Arch Linux, Pop!_OS, elementary OS, Zorin OS,
openSUSE, deepin, Kali, Raspbian, UOS, Kylin, openEuler, Red Flag.

> Distro names are only present in some user agents (mainly Firefox); most Chromium-based browsers report a generic `Linux`, in which case `osDistro` is `Unknown`.

---

## Development

Want to contribute or run the library locally?

### Setup

```bash
# Clone the repository
git clone https://github.com/malikrajat/rm-ng-device-detection.git
cd rm-ng-device-detection

# Install dependencies
pnpm install

# Start development server
pnpm start  # Serves demo app on http://localhost:4200
```

### Build

```bash
# Build the library
pnpm build

# Run tests
pnpm test

# Run linter
pnpm lint
```

---

## Changelog

See <a href="CHANGELOG.md" target="_blank" rel="noopener noreferrer">CHANGELOG.md</a> for release history.


---

### Latest Release

Check the <a href="https://github.com/malikrajat/rm-ng-device-detection/releases" target="_blank" rel="noopener noreferrer">releases page</a> for the most recent version and updates.

---

## License

This project is licensed under the MIT License - see the <a href="LICENSE" target="_blank" rel="noopener noreferrer">LICENSE</a> file for details.

**TL;DR:** You can use this library freely in commercial and personal projects.

### MIT License Summary

**You can:**
- Use commercially
- Modify the code
- Distribute
- Use privately

**You must:**
- Include the license and copyright notice

**You cannot:**
- Hold the author liable

---

## FAQ

### Does this library work with Angular Universal / SSR?

Yes. The service automatically detects the user agent from request headers when running on the server, and from `window.navigator` in the browser. No extra configuration is needed.

### Is the library tree-shakable?

Yes. It uses Angular's `providedIn: 'root'` strategy and exports only the symbols you import, so unused code is removed by the bundler.

### Does it have any external dependencies?

No runtime dependencies beyond `tslib` (the standard TypeScript runtime helper). The library is built with pure TypeScript and does not depend on any third-party detection libraries.

### Which Angular versions are supported?

The library is compatible with Angular 16 through 26 (see `peerDependencies`) and supports both standalone and NgModule-based applications.

### Why is my device being detected as `unknown`?

This is far less common since the detection engine was modernised: generic Windows/Linux/Chrome OS desktops and current-generation Android phones/tablets are now recognised via OS-family and generic heuristics. It can still happen for a genuinely unrecognised or empty user agent. You can pass the raw user agent string directly to any detection method, register a custom detector, or update to the latest version.

### Can I use a custom user agent for testing?

Yes. All detection methods accept an optional user agent string, and you can also re-parse via `setDeviceInfo(ua, options)` or the framework-free `parseUserAgent(ua, options)`:

```typescript
this.deviceService.isMobile('Mozilla/5.0 (iPhone...');
this.deviceService.isTablet('Mozilla/5.0 (iPad...');
this.deviceService.isDesktop('Mozilla/5.0 (Windows...');
```

### Can I detect bots and crawlers?

Yes. `DeviceInfo.isBot` is `true` for known crawlers, social scrapers, and HTTP clients (Googlebot, Bingbot, `curl`, Postman, headless Chrome, and more), so you can exclude them from analytics or serve lighter responses.

### How do I detect Windows 11 or Brave?

Both require runtime APIs, not the UA string. Use the async `detectWindows11ViaClientHints()` (via User-Agent Client Hints) and `isBraveViaFeatureDetection()` methods on the service.

### Can I use it without Angular (e.g. in SSR middleware or a Node script)?

Yes. Import the framework-free `parseUserAgent(ua, options)` function, which never touches `window`/`navigator` and never throws.

### Does it work with lazy-loaded modules?

Yes. Because the service is `providedIn: 'root'`, it is available application-wide without any module imports or eager-loading requirements.

### How do I get the full device info object?

Use `getDeviceInfo()`, which returns a `DeviceInfo` object containing `userAgent`, `os`, `browser`, `device`, `os_version`, `browser_version`, `deviceType`, `orientation`, `osDistro`, `isBot`, `width`, `height`, `resolution`, and `devicePixelRatio`.

### Does the library detect browser and OS versions?

Yes. `browser_version` and `os_version` are populated automatically when available in the user agent string.

### Does the library support iOS 13+ tablets?

Yes. It includes special handling for iPad detection on iOS 13+ where the platform reports as MacIntel but supports touch input through `maxTouchPoints`.


---

## Browser Compatibility

### Supported Browsers

| Browser | Version | Support Level | Notes |
|---------|---------|---------------|-------|
| Chrome | 80+ | Full Support | Recommended browser |
| Firefox | 75+ | Full Support | Works perfectly |
| Safari | 13+ | Full Support | iOS and macOS |
| Edge | 80+ | Full Support | Chromium-based |
| Opera | 67+ | Full Support | Works well |
| Samsung Internet | 12+ | Full Support | Mobile support |

### Mobile Support

- iOS Safari 13+
- Chrome for Android 80+
- Samsung Internet
- All mobile browsers with modern JavaScript support

### Download Behavior by Platform

| Platform | Behavior |
|----------|----------|
| Desktop Chrome/Firefox/Edge | Direct download to Downloads folder |
| Desktop Safari | May prompt for download location |
| iOS Safari | Opens download manager |
| Android Chrome | Downloads to Downloads folder |
| Mobile Safari | Shows share sheet with save option |

### Not Supported

- Internet Explorer (all old versions)
- Very old mobile browsers (pre-2019)

---

## Statistics

<a href="https://www.npmjs.com/package/rm-ng-device-detection" target="_blank" rel="noopener noreferrer">![npm downloads](https://img.shields.io/npm/dt/rm-ng-device-detection.svg)</a>
<a href="https://www.npmjs.com/package/rm-ng-device-detection" target="_blank" rel="noopener noreferrer">![npm version](https://img.shields.io/npm/v/rm-ng-device-detection.svg)</a>
<a href="https://github.com/malikrajat/rm-ng-device-detection/issues" target="_blank" rel="noopener noreferrer">![GitHub issues](https://img.shields.io/github/issues/malikrajat/rm-ng-device-detection.svg)</a>
<a href="https://github.com/malikrajat/rm-ng-device-detection/stargazers" target="_blank" rel="noopener noreferrer">![GitHub stars](https://img.shields.io/github/stars/malikrajat/rm-ng-device-detection.svg?style=social)</a>
<a href="https://github.com/malikrajat/rm-ng-device-detection/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">![License](https://img.shields.io/badge/license-MIT-blue.svg)</a>

---

## Support This Project

If **rm-ng-device-detection** has helped you build better Angular applications, please consider:

If this library has saved you development time and helped create amazing image sliders in your projects, **please consider giving it a  star!** 

 **Why star this repo?**
- Help other developers discover this lightweight, optimized solution
- Support continued development and improvements
- Show appreciation for free, quality tools
- Boost visibility in the Angular community

###  **Want More Quality Libraries?**

This is just one of several useful libraries I've created. **<a href="https://github.com/malikrajat?tab=repositories" target="_blank" rel="noopener noreferrer">Explore my other Angular & web development libraries</a>** that might solve your next challenge:

-  **Utility libraries** for common development tasks
-  **UI components** for better user experiences  
-  **Performance tools** for optimization
-  **Mobile-friendly solutions** for responsive apps

**Found them helpful?** A star on each repo you find useful helps tremendously! It takes just one click but means the world to open-source maintainers.

<a href="https://github.com/malikrajat?tab=repositories" target="_blank" rel="noopener noreferrer">![GitHub](https://img.shields.io/badge/View_All_Repositories-181717?logo=github)</a>
<a href="https://github.com/malikrajat" target="_blank" rel="noopener noreferrer">![GitHub followers](https://img.shields.io/github/followers/malikrajat?style=social)</a>
<a href="https://github.com/malikrajat/rm-ng-device-detection/stargazers" target="_blank" rel="noopener noreferrer">![GitHub stars](https://img.shields.io/github/stars/malikrajat/rm-ng-device-detection?style=social)</a>


---

## Support and Community

### Getting Help

Need assistance? We're here to help!

| Support Channel | Link | Best For |
|----------------|------|----------|
| Bug Reports | <a href="https://github.com/malikrajat/rm-ng-device-detection/issues/new?template=bug_report.md" target="_blank" rel="noopener noreferrer">Report Bug</a> | Technical issues |
| Feature Requests | <a href="https://github.com/malikrajat/rm-ng-device-detection/issues/new?template=feature_request.md" target="_blank" rel="noopener noreferrer">Request Feature</a> | New features |
| Discussions | <a href="https://github.com/malikrajat/rm-ng-device-detection/discussions" target="_blank" rel="noopener noreferrer">Join Discussion</a> | General questions |
| Email | <a href="mailto:mr.rajatmalik@gmail.com?subject=rm-ng-device-detection%20Support" target="_blank" rel="noopener noreferrer">mr.rajatmalik@gmail.com</a> | Direct support |

### Documentation

- <a href="https://github.com/malikrajat/rm-ng-device-detection" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
- <a href="https://www.npmjs.com/package/rm-ng-device-detection" target="_blank" rel="noopener noreferrer">npm Package</a>
- <a href="https://stackblitz.com/edit/stackblitz-starters-terqbx" target="_blank" rel="noopener noreferrer">Live Demo</a>
- <a href="CHANGELOG.md" target="_blank" rel="noopener noreferrer">Changelog</a>

### Community

- Star the repository to show support
- Watch for updates and new releases
- Share your use cases and feedback
- Contribute code or documentation

### Stay Updated

- Follow the project on <a href="https://github.com/malikrajat/rm-ng-device-detection" target="_blank" rel="noopener noreferrer">GitHub</a>
- Star the repository for updates
- Watch for new releases

---

## Acknowledgments

This library was inspired by the need for a lightweight, modern device detection solution for Angular applications. Special thanks to the Angular community for their feedback and contributions.

Special thanks to:
- **<a href="https://angular.dev/" target="_blank" rel="noopener noreferrer">Angular Team</a>** - Amazing framework and ecosystem
- **Contributors** - Thank you for making this library better
- **Community** - For feedback and feature requests


---

## Other Libraries

### UI Components

| Library                           | Description                                                              | npm Link                                                                                                        |
|-----------------------------------| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| **<a href="https://www.npmjs.com/package/rm-range-slider" target="_blank" rel="noopener noreferrer">rm-range-slider</a>**               | Lightweight two-thumb range slider with tooltips and color customization | <a href="https://www.npmjs.com/package/rm-range-slider" target="_blank" rel="noopener noreferrer">![npm](https://img.shields.io/npm/v/rm-range-slider.svg)</a>       |
| **<a href="https://www.npmjs.com/package/rm-ng-range-slider" target="_blank" rel="noopener noreferrer">rm-ng-range-slider</a>**            | Angular-specific version of the dual range slider                        | <a href="https://www.npmjs.com/package/rm-ng-range-slider" target="_blank" rel="noopener noreferrer">![npm](https://img.shields.io/npm/v/rm-ng-range-slider.svg)</a> |
| **<a href="https://www.npmjs.com/package/rm-carousel" target="_blank" rel="noopener noreferrer">rm-carousel</a>**                   | Simple, responsive carousel component                                    | <a href="https://www.npmjs.com/package/rm-carousel" target="_blank" rel="noopener noreferrer">![npm](https://img.shields.io/npm/v/rm-carousel.svg)</a>               |
| **<a href="https://www.npmjs.com/package/rm-image-slider" target="_blank" rel="noopener noreferrer">rm-image-slider</a>**               | Minimal image slider with smooth transitions                             | <a href="https://www.npmjs.com/package/rm-image-slider" target="_blank" rel="noopener noreferrer">![npm](https://img.shields.io/npm/v/rm-image-slider.svg)</a>       |
| **<a href="https://www.npmjs.com/package/rm-ng-star-rating" target="_blank" rel="noopener noreferrer">rm-ng-star-rating</a>**             | Configurable Angular star rating component with readonly mode            | <a href="https://www.npmjs.com/package/rm-ng-star-rating" target="_blank" rel="noopener noreferrer">![npm](https://img.shields.io/npm/v/rm-ng-star-rating.svg)</a>   |
| **<a href="https://github.com/malikrajat/rm-ng-typeahead" target="_blank" rel="noopener noreferrer">@codewithrajat/rm-ng-typeahead</a>** | Angular autocomplete/typeahead component with search suggestions and keyboard navigation | <a href="https://github.com/malikrajat/rm-ng-typeahead" target="_blank" rel="noopener noreferrer">![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)</a> |
| **<a href="https://github.com/malikrajat/rm-ng-editor" target="_blank" rel="noopener noreferrer">@codewithrajat/rm-ng-editor</a>**                  | Rich text editor component for Angular applications with customizable toolbar support | <a href="https://github.com/malikrajat/rm-ng-editor" target="_blank" rel="noopener noreferrer">![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)</a> |

---

### PDF & Export Libraries

| Library                                | Description                                                  | npm Link                                                                                                                                        |
| -------------------------------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **<a href="https://www.npmjs.com/package/rm-ng-export-to-csv" target="_blank" rel="noopener noreferrer">rm-ng-export-to-csv</a>**                | Export JSON data to CSV with zero dependencies               | <a href="https://www.npmjs.com/package/rm-ng-export-to-csv" target="_blank" rel="noopener noreferrer">![npm](https://img.shields.io/npm/v/rm-ng-export-to-csv.svg)</a>                               |
| **<a href="https://www.npmjs.com/package/@codewithrajat/rm-ng-pdf-export" target="_blank" rel="noopener noreferrer">@codewithrajat/rm-ng-pdf-export</a>**    | Image-based PDF export tool for Angular applications         | <a href="https://www.npmjs.com/package/@codewithrajat/rm-ng-pdf-export" target="_blank" rel="noopener noreferrer">![npm](https://img.shields.io/npm/v/@codewithrajat/rm-ng-pdf-export.svg)</a>       |
| **<a href="https://www.npmjs.com/package/@codewithrajat/rm-ng-structure-pdf" target="_blank" rel="noopener noreferrer">@codewithrajat/rm-ng-structure-pdf</a>** | Generate structured PDFs for reports, invoices, or documents | <a href="https://www.npmjs.com/package/@codewithrajat/rm-ng-structure-pdf" target="_blank" rel="noopener noreferrer">![npm](https://img.shields.io/npm/v/@codewithrajat/rm-ng-structure-pdf.svg)</a> |
| **<a href="https://github.com/malikrajat/rm-ng-pdf-viewer" target="_blank" rel="noopener noreferrer">@codewithrajat/rm-ng-pdf-viewer</a>** | Angular PDF viewer component with zoom, navigation, and document rendering support | <a href="https://github.com/malikrajat/rm-ng-pdf-viewer" target="_blank" rel="noopener noreferrer">![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)</a> |

---

### Chrome Extension

| Library | Description | Link                                                                                                                                    |
|----------|-------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| **<a href="https://github.com/malikrajat/quickocr/releases" target="_blank" rel="noopener noreferrer">quickocr</a>** | Chrome extension that extracts text from images using OCR technology | <a href="https://github.com/malikrajat/quickocr/releases" target="_blank" rel="noopener noreferrer">![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)</a>                                     |
| **<a href="https://github.com/malikrajat/readLoude/releases" target="_blank" rel="noopener noreferrer">readLoude</a>** | Chrome extension that read you web page loude e.g article etc. | <a href="https://github.com/malikrajat/readLoude/releases" target="_blank" rel="noopener noreferrer">![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)</a>                            |
| **<a href="https://github.com/malikrajat/ai-assistant-reply/releases" target="_blank" rel="noopener noreferrer">ai-assistant-reply</a>** | AI Chrome extension to auto generate reply on linked in posts. | <a href="https://github.com/malikrajat/ai-assistant-reply/releases" target="_blank" rel="noopener noreferrer">![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)</a> |

---

### VS Code Extension

| Library | Description | Link                                                                                                                                      |
|----------|-------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| **<a href="https://github.com/malikrajat/dead-css-cleaner/releases" target="_blank" rel="noopener noreferrer">dead-css-cleaner</a>** | VS Code extension for identifying and cleaning unused CSS styles | <a href="https://github.com/malikrajat/dead-css-cleaner/releases" target="_blank" rel="noopener noreferrer">![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)</a>      |
| **<a href="https://github.com/malikrajat/file-coverage-insight/releases" target="_blank" rel="noopener noreferrer">file-coverage-insight</a>** | VS Code extension for auto generated component file coverage automatelly on open. | <a href="https://github.com/malikrajat/file-coverage-insight/releases" target="_blank" rel="noopener noreferrer">![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)</a> |

---

### Desktop Applications - All Plateform

| Library | Description | Link                                                                                                                           |
|----------|-------------|--------------------------------------------------------------------------------------------------------------------------------|
| **<a href="https://github.com/malikrajat/deepwork/releases" target="_blank" rel="noopener noreferrer">deepwork</a>** | Cross-platform productivity application for focus sessions and deep work tracking | <a href="https://github.com/malikrajat/deepwork/releases" target="_blank" rel="noopener noreferrer">![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)</a>          |
| **<a href="https://github.com/malikrajat/JsSandbox/releases" target="_blank" rel="noopener noreferrer">JsSandbox</a>** | Cross-platform JavaScript playground and code execution environment | <a href="https://github.com/malikrajat/JsSandbox/releases" target="_blank" rel="noopener noreferrer">![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)</a> |

---

### Device Detection

| Library                        | Description                                             | npm Link                                                                                                                        |
| ------------------------------ | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **<a href="https://www.npmjs.com/package/rm-ng-device-detection" target="_blank" rel="noopener noreferrer">rm-ng-device-detection</a>**     | Detect device type, OS, and browser in Angular          | <a href="https://www.npmjs.com/package/rm-ng-device-detection" target="_blank" rel="noopener noreferrer">![npm](https://img.shields.io/npm/v/rm-ng-device-detection.svg)</a>         |

---

### Notifications

| Library           | Description                                       | npm Link                                                                                              |
| ----------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **<a href="https://www.npmjs.com/package/rm-pushnotify" target="_blank" rel="noopener noreferrer">rm-pushnotify</a>** | Lightweight push-style toast notification utility | <a href="https://www.npmjs.com/package/rm-pushnotify" target="_blank" rel="noopener noreferrer">![npm](https://img.shields.io/npm/v/rm-pushnotify.svg)</a> |
| **<a href="https://github.com/malikrajat/rm-toast-notification" target="_blank" rel="noopener noreferrer">@codewithrajat/rm-toast-notification</a>** | Cross-platform toast and desktop notification library for web, Angular, and desktop applications | <a href="https://github.com/malikrajat/rm-toast-notification" target="_blank" rel="noopener noreferrer">![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)</a> |


---

### Layout & Dynamic Rendering

| Library | Description | Link |
|----------|-------------|------|
| **<a href="https://github.com/malikrajat/rm-ng-dynamic-layout" target="_blank" rel="noopener noreferrer">rm-ng-dynamic-layout</a>** | Dynamic layout rendering engine for Angular applications using JSON-driven UI configuration | <a href="https://github.com/malikrajat/rm-ng-dynamic-layout" target="_blank" rel="noopener noreferrer">![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)</a> |

---

### Developer Tools & Extensions

| Library | Description | Link                                                                                                                            |
|----------|-------------|---------------------------------------------------------------------------------------------------------------------------------|
| **<a href="https://www.npmjs.com/package/rm-colorful-console-logger" target="_blank" rel="noopener noreferrer">rm-colorful-console-logger</a>** | Structured and colorized console logging utility for developers | <a href="https://www.npmjs.com/package/rm-colorful-console-logger" target="_blank" rel="noopener noreferrer">![npm](https://img.shields.io/npm/v/rm-colorful-console-logger.svg)</a> |

---

### Meta & Personal Branding

| Library         | Description                                                      | npm Link                                                                                          |
| --------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **<a href="https://www.npmjs.com/package/about-rajat" target="_blank" rel="noopener noreferrer">about-rajat</a>** | Developer portfolio package for branding and quick personal info | <a href="https://www.npmjs.com/package/about-rajat" target="_blank" rel="noopener noreferrer">![npm](https://img.shields.io/npm/v/about-rajat.svg)</a> |


---

### All Packages

Browse all my packages:
- <a href="https://www.npmjs.com/~codewithrajat" target="_blank" rel="noopener noreferrer">npm: @codewithrajat</a>
- <a href="https://www.npmjs.com/~rajatmalik" target="_blank" rel="noopener noreferrer">npm: rajatmalik</a>
- <a href="https://github.com/malikrajat?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub: @malikrajat</a>

---

## Author

**Rajat Malik**

Full‑Stack Developer and Frontend Architect at Siemens with 14+ years building scalable enterprise platforms, specializing in micro‑frontends, AI‑native development, React, and Angular.  
Author of 10+ open‑source libraries and 100+ technical articles, driving innovation through developer‑friendly tools, performance optimization, and AI‑assisted workflows.

### GET IN TOUCH

- Portfolio:  <a href="https://rajatmalik.dev" target="_blank" rel="noopener noreferrer">rajatmalik.dev</a>
- Email:      <a href="mailto:mr.rajatmalik@gmail.com" target="_blank" rel="noopener noreferrer">mr.rajatmalik@gmail.com</a>
- LinkedIn:   <a href="https://linkedin.com/in/errajatmalik" target="_blank" rel="noopener noreferrer">errajatmalik</a>
- GitHub:     <a href="https://github.com/malikrajat" target="_blank" rel="noopener noreferrer">@malikrajat</a>
- npm:        <a href="https://www.npmjs.com/~rajatmalik" target="_blank" rel="noopener noreferrer">rajatmalik</a>

### SOCIAL PRESENCE
- Threads:    <a href="https://www.threads.net/@er.rajatmalik" target="_blank" rel="noopener noreferrer">rajatmalik</a>
- Twitter/X:  <a href="https://x.com/er_rajatmalik" target="_blank" rel="noopener noreferrer">rajatmalik</a>
- BlueSky:    <a href="http://devrajat.bsky.social" target="_blank" rel="noopener noreferrer">rajatmalik</a>

### CONTENT & WRITING

- Medium:    <a href=" https://medium.com/@codewithrajat" target="_blank" rel="noopener noreferrer">rajatmalik</a>
- Dev.to:    <a href=" https://dev.to/codewithrajat" target="_blank" rel="noopener noreferrer">rajatmalik</a>
- Substack:  <a href="https://codewithrajat.substack.com" target="_blank" rel="noopener noreferrer">rajatmalik</a>
- Hashnode:  <a href="https://hashnode.com/@codeswithrajat" target="_blank" rel="noopener noreferrer">rajatmalik</a>


---


<p align="center">
  <p align="center">Made with care and love  by <a href="https://rajatmalik.dev" target="_blank" rel="noopener noreferrer">Rajat Malik</a> for the Angular community</p>
</p>

<p align="center">
  <a href="https://github.com/malikrajat/rm-ng-device-detection/stargazers" target="_blank" rel="noopener noreferrer"> Star on GitHub</a> •
  <a href="https://www.npmjs.com/package/rm-ng-device-detection" target="_blank" rel="noopener noreferrer"> View on npm</a> •
  <a href="https://github.com/malikrajat/rm-ng-device-detection/issues" target="_blank" rel="noopener noreferrer">Report Issue</a>
</p>

<p align="center">
  Made with dedication by <a href="https://rajatmalik.dev" target="_blank" rel="noopener noreferrer">Rajat Malik</a>
</p>
