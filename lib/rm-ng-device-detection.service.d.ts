import { ReTree } from './retree';
import * as i0 from "@angular/core";
export interface DeviceInfo {
    userAgent: string;
    os: string;
    browser: string;
    device: string;
    os_version: string;
    browser_version: string;
    deviceType: string;
    orientation: string;
}
export declare enum DeviceType {
    Mobile = "mobile",
    Tablet = "tablet",
    Desktop = "desktop",
    Unknown = "unknown"
}
export declare enum OrientationType {
    Portrait = "portrait",
    Landscape = "landscape"
}
export declare class RmNgDeviceDetectionService {
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
