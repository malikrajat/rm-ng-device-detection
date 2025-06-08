
<a href="https://github.com/malikrajat/rm-ng-device-detection">
  <h1 align="center">rm-ng-device-detection</h1>
</a>

<p align="center">
rm-ng-device-detection Library is a powerful tool for detecting and classifying devices in Angular applications. It provides an easy-to-use service that can identify the user's device type (mobile, tablet, desktop), operating system, browser, and more based on the user agent string. This library is designed to help developers tailor user experiences based on device characteristics, enhancing responsiveness and usability.
</p>

## Installation

To install this library, run:

```bash
$ npm install rm-ng-device-detection --save
```

## Live DEMO

[See the implementation here](https://stackblitz.com/edit/stackblitz-starters-terqbx)


In your component where you want to use the Device Service

```typescript
  import { Component } from '@angular/core';
  ...
  import { RmNgDeviceDetectionService, DeviceInfo } from 'rm-ng-device-detection';
  ...
  @Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
  })

  export class HomeComponent {
    deviceInfo: null | DeviceInfo = null;
    constructor(private service: RmNgDeviceDetectionService) {
      this.getDeviceInfo();
    }
    ...
    getDeviceInfo(): void {
      this.deviceInfo = this.service.getDeviceInfo();
      const isMobile = this.service.isMobile();
      const isTablet = this.service.isTablet();
      const isDesktop = this.service.isDesktop();
      console.log(this.deviceInfo);
      console.log(isMobile); 
      console.log(isTablet); 
      console.log(isDesktop); 
    }
    ...
  }

```

## Device service

Holds the following properties

- browser
- os
- device
- userAgent
- os_version

## Helper Methods

- **isMobile() :** returns if the device is a mobile device (android / iPhone/ windows-phone etc)
- **isTablet() :** returns if the device us a tablet (iPad etc)
- **isDesktop() :** returns if the app is running on a Desktop browser.


<a name="versuion"/>

### Version Mapping

| Version | Ng   |
|---------|------|
| 1.x.x   | 18.x |
| 2.x.x   | 19.x |
| 3.x.x   | 20.x |


<a name="issues"/>

## Issues

If you identify any errors in this component, or have an idea for an improvement, please open
an [issue](https://github.com/malikrajat/rm-ng-device-detection/issues). I am excited to see what the community thinks of this
project, and I would love your input!

<a name="Author Services"/>

## Author services

Are you interested in this library but lacks features? Write to the author, he can do it for you.


## Credits

The library is inspired by one other library.

<a name="author"/>

## Author

**Rajat Malik**

- [github/malikrajat](https://github.com/malikrajat)
