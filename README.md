# rm-ng-device-detection

<p align="center">
  <img src="https://img.shields.io/npm/v/rm-ng-device-detection.svg" alt="npm version">
  <img src="https://img.shields.io/npm/dm/rm-ng-device-detection.svg" alt="npm downloads">
  <img src="https://img.shields.io/npm/l/rm-ng-device-detection.svg" alt="license">
  <img src="https://img.shields.io/badge/Angular-14%2B-red.svg" alt="Angular 14+">
</p>

<p align="center">
A lightweight, tree-shakable Angular library for detecting and classifying devices. Identify device type, OS, browser, and more based on user agent strings to create responsive, device-specific user experiences.
</p>

---

##  See It In Action

<div align="center">
  
  <img src="https://github.com/malikrajat/rm-ng-device-detection/blob/main/assets/code.png" alt="rm-ng-device-detection Demo" width="800"/>

</div>

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
<div *ngIf="deviceInfo">
  <h2>Device Information</h2>
  <p>Device Type: {{ deviceInfo.device }}</p>
  <p>Browser: {{ deviceInfo.browser }}</p>
  <p>Operating System: {{ deviceInfo.os }}</p>
  <p>OS Version: {{ deviceInfo.os_version }}</p>
</div>

<!-- Conditional rendering based on device type -->
<div *ngIf="deviceService.isMobile()">
  <p>Mobile-specific content</p>
</div>

<div *ngIf="deviceService.isDesktop()">
  <p>Desktop-specific content</p>
</div>
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
    <ng-container *ngIf="isMobile">
      <app-mobile-header></app-mobile-header>
    </ng-container>
    <ng-container *ngIf="!isMobile">
      <app-desktop-header></app-desktop-header>
    </ng-container>
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

## 🎬 Live Demo

Try the library in action with our interactive demos:

| Platform | Link |
|----------|------|
| StackBlitz | [![Open in StackBlitz](https://img.shields.io/badge/StackBlitz-Open-1976D2?logo=stackblitz)](https://stackblitz.com/edit/stackblitz-starters-terqbx) |
| npm | [![npm](https://img.shields.io/badge/npm-package-red?logo=npm)](https://www.npmjs.com/package/rm-ng-device-detection) |
| GitHub | [![GitHub](https://img.shields.io/badge/GitHub-repository-black?logo=github)](https://github.com/malikrajat/rm-ng-device-detection) |

---

##  Compatibility

### Angular Version Support

| Angular Version | Supported | Standalone | Package Version |
|----------------|-----------|------------|-----------------|
| 14.x |  Full |  Yes | 1.x.x - 3.x.x |
| 15.x |  Full |  Yes | 1.x.x - 3.x.x |
| 16.x |  Full |  Yes | 1.x.x - 3.x.x |
| 17.x |  Full |  Yes | 1.x.x - 3.x.x |
| 18.x |  Full |  Yes | 1.x.x |
| 19.x |  Full |  Yes | 2.x.x |
| 20.x |  Full |  Yes | 3.x.x |
| 21.x |  Full |  Yes | Latest |

### Browser Support

| Browser | Minimum Version | Support Status |
|---------|-----------------|----------------|
| Chrome | 80+ |  Full |
| Firefox | 75+ |  Full |
| Safari | 13+ |  Full |
| Edge | 80+ |  Full |
| Opera | 67+ |  Full |

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

## Tree-Shaking & Bundle Size

This library is optimized for modern Angular applications:

- Marked as `sideEffects: false` for aggressive tree-shaking
- Service-based API only imports what you use
- No external runtime dependencies
- Minimal bundle impact (~2KB gzipped)

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

##  Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the [Angular Style Guide](https://angular.dev/style-guide)
- Write unit tests for new features
- Update documentation for API changes
- Keep commits focused and descriptive

---

## Issues & Support

Need help or found a bug?

| Type | Link |
|------|------|
| Bug Report | [Report a Bug](https://github.com/malikrajat/rm-ng-device-detection/issues/new?template=bug_report.md) |
| Feature Request | [Request a Feature](https://github.com/malikrajat/rm-ng-device-detection/issues/new?template=feature_request.md) |
| Discussions | [Join Discussion](https://github.com/malikrajat/rm-ng-device-detection/discussions) |
| Email | [mr.rajatmalik@gmail.com](mailto:mr.rajatmalik@gmail.com?subject=rm-ng-device-detection%20Support) |

---

## Changelog

See [CHANGELOG.md](https://github.com/malikrajat/rm-ng-device-detection/blob/main/CHANGELOG.md) for release history.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

##  Author

**Rajat Malik**

-  Website: [rajatmalik.dev](https://rajatmalik.dev)
-  Email: [mr.rajatmalik@gmail.com](mailto:mr.rajatmalik@gmail.com)
-  LinkedIn: [errajatmalik](https://linkedin.com/in/errajatmalik)
-  GitHub: [@malikrajat](https://github.com/malikrajat)

---

## Support This Project

If **rm-ng-device-detection** has helped you build better Angular applications, please consider:

### ⭐ Star This Repository

A star helps other developers discover this library and shows your appreciation!

[![GitHub stars](https://img.shields.io/github/stars/malikrajat/rm-ng-device-detection?style=social)](https://github.com/malikrajat/rm-ng-device-detection/stargazers)

### 🌟 Why Star?

- Help increase visibility in the Angular community
- Support ongoing development and improvements
- Show appreciation for free, quality tools
- Encourage more open-source contributions

### Explore More Libraries

Check out my other Angular libraries that might help your project:

[![GitHub](https://img.shields.io/badge/View_All_Repositories-181717?logo=github)](https://github.com/malikrajat?tab=repositories)

---

## Acknowledgments

This library was inspired by the need for a lightweight, modern device detection solution for Angular applications. Special thanks to the Angular community for their feedback and contributions.

---

<p align="center">Made with ❤️ by <a href="https://rajatmalik.dev">Rajat Malik</a></p>

<p align="center">
  <a href="https://github.com/malikrajat/rm-ng-device-detection"> Star on GitHub</a> •
  <a href="https://www.npmjs.com/package/rm-ng-device-detection"> View on npm</a> •
  <a href="https://github.com/malikrajat/rm-ng-device-detection/issues">Report Issue</a>
</p>