import * as i0 from '@angular/core';

/**
 * Created by ahsanayaz on 08/11/2016.
 */
declare class ReTree {
    constructor();
    test(str: string, regex: any): any;
    exec(str: string, regex: any): any;
}

interface DeviceInfo {
    userAgent: string;
    os: string;
    browser: string;
    device: string;
    os_version: string;
    browser_version: string;
    deviceType: string;
    orientation: string;
}
declare enum DeviceType {
    Mobile = "mobile",
    Tablet = "tablet",
    Desktop = "desktop",
    Unknown = "unknown"
}
declare enum OrientationType {
    Portrait = "portrait",
    Landscape = "landscape"
}
declare class RmNgDeviceDetectionService {
    private platformId;
    ua: string;
    userAgent: string;
    os: string;
    browser: string;
    device: string;
    os_version: string;
    browser_version: string;
    reTree: ReTree;
    deviceType: string;
    orientation: string;
    constructor(platformId: any);
    setDeviceInfo(ua?: string): void;
    getDeviceInfo(): DeviceInfo;
    isMobile(userAgent?: string): boolean;
    isTablet(userAgent?: string): boolean;
    isDesktop(userAgent?: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<RmNgDeviceDetectionService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RmNgDeviceDetectionService>;
}

export { DeviceType, OrientationType, ReTree, RmNgDeviceDetectionService };
export type { DeviceInfo };
