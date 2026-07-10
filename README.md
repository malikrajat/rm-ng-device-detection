# rm-ng-device-detection

<p align="left">
  <img src="https://img.shields.io/npm/v/rm-ng-device-detection.svg" alt="npm version">
  <img src="https://img.shields.io/badge/Stability-production--ready-success" alt="Production ready">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="license">
  <img src="https://img.shields.io/badge/Angular-14%20to%2022-blue" alt="Angular support range">
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
-  **OS & Browser Detection** - Detect operating systems and browsers
-  **Lightweight & Fast** - Minimal bundle size with tree-shaking support
-  **Easy Integration** - Simple service-based API
-  **Standalone Support** - Works with Angular 14+ standalone components
-  **No Dependencies** - Pure TypeScript implementation
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
import { Component, OnInit } from '@angular/core';
import { RmNgDeviceDetectionService, DeviceInfo } from 'rm-ng-device-detection';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  deviceInfo: DeviceInfo | null = null;

  constructor(private deviceService: RmNgDeviceDetectionService) {}

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
    <p>Device Type: {{ deviceInfo.device }}</p>
    <p>Browser: {{ deviceInfo.browser }}</p>
    <p>Operating System: {{ deviceInfo.os }}</p>
    <p>OS Version: {{ deviceInfo.os_version }}</p>
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
  browser: string;        // Browser name (e.g., 'Chrome', 'Firefox', 'Safari')
  os: string;            // Operating system (e.g., 'Windows', 'macOS', 'Android')
  device: string;        // Device type (e.g., 'mobile', 'tablet', 'desktop')
  userAgent: string;     // Full user agent string
  os_version: string;    // Operating system version
}
```

### Service Methods

#### `getDeviceInfo(): DeviceInfo`
Returns complete device information including browser, OS, device type, user agent, and OS version.

**Example:**
```typescript
const deviceInfo = this.deviceService.getDeviceInfo();
console.log(deviceInfo);
// Output: { browser: 'Chrome', os: 'Windows', device: 'desktop', ... }
```

#### `isMobile(): boolean`
Returns `true` if the device is a mobile device (Android, iPhone, Windows Phone, etc.).

**Example:**
```typescript
if (this.deviceService.isMobile()) {
  // Load mobile-optimized components
}
```

#### `isTablet(): boolean`
Returns `true` if the device is a tablet (iPad, Android tablets, etc.).

**Example:**
```typescript
if (this.deviceService.isTablet()) {
  // Adjust layout for tablets
}
```

#### `isDesktop(): boolean`
Returns `true` if the device is a desktop/laptop computer.

**Example:**
```typescript
if (this.deviceService.isDesktop()) {
  // Enable advanced desktop features
}
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

---

## Configuration & Advanced Usage

### Server-Side Rendering (SSR)

The library is compatible with Angular Universal. The user agent is automatically detected from the request headers:

```typescript
// Works automatically with SSR - no special configuration needed
const deviceInfo = this.deviceService.getDeviceInfo();
```

### Custom User Agent

If you need to test with a custom user agent string, you can initialize the service with your own user agent:

```typescript
// Note: This is typically not needed as the library auto-detects
// This example is for testing purposes only
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

No. The library is built with pure TypeScript and does not depend on any third-party runtime libraries.

### Which Angular versions are supported?

The library is compatible with Angular 14 through 22 and supports both standalone and NgModule-based applications.

### Why is my device being detected as `unknown`?

This can happen when the user agent string doesn't match any pattern in the detection regexes. You can pass the raw user agent string directly to `getDeviceInfo()` or update to the latest version.

### Can I use a custom user agent for testing?

Yes. All detection methods accept an optional user agent string:

```typescript
this.deviceService.isMobile('Mozilla/5.0 (iPhone...');
this.deviceService.isTablet('Mozilla/5.0 (iPad...');
this.deviceService.isDesktop('Mozilla/5.0 (Windows...');
```

### Does it work with lazy-loaded modules?

Yes. Because the service is `providedIn: 'root'`, it is available application-wide without any module imports or eager-loading requirements.

### How do I get the full device info object?

Use `getDeviceInfo()`, which returns a `DeviceInfo` object containing `device`, `os`, `browser`, `userAgent`, `os_version`, `browser_version`, `deviceType`, and `orientation`.

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
- <a href="https://www.npmjs.com/settings/codewithrajat/packages" target="_blank" rel="noopener noreferrer">npm: @codewithrajat</a>
- <a href="https://www.npmjs.com/settings/rajatmalik/packages" target="_blank" rel="noopener noreferrer">npm: rajatmalik</a>
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
