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
    /** Best-effort Linux distro name (Ubuntu, Fedora, UOS, Kylin, ...) — only populated when the
     *  browser actually exposes it in the UA string (mainly Firefox). `Unknown` otherwise. */
    osDistro: string;
    /** True for known crawlers/bots/HTTP clients (Googlebot, curl, PostmanRuntime, headless
     *  Chrome, ...). Check this before trusting `deviceType`/`device` for analytics — a bot UA
     *  matches none of the human device regexes and would otherwise silently read as a generic
     *  desktop, which quietly skews traffic numbers. */
    isBot: boolean;
    /** CSS pixel viewport width (`window.innerWidth`). `0` outside a browser. */
    width: number;
    /** CSS pixel viewport height (`window.innerHeight`). `0` outside a browser. */
    height: number;
    /** Physical screen resolution as `"{screen.width}x{screen.height}"`, independent of zoom/DPR. */
    resolution: string;
    /** `window.devicePixelRatio` — 1 on standard displays, 2+ on Retina/HiDPI. `1` outside a browser. */
    devicePixelRatio: number;
}
/** Same shape as DeviceInfo minus the viewport-only fields, returned by the standalone
 *  `parseUserAgent()` function, which has no notion of "the current browser window" (it may be
 *  parsing someone else's UA string, e.g. from a server-side request header). */
type ParsedUserAgent = Omit<DeviceInfo, 'width' | 'height' | 'resolution' | 'devicePixelRatio'>;
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
interface DetectionOptions {
    /**
     * Skip ~150 obsolete 2009-2015-era feature-phone/tablet brand regexes (see
     * `HEAVY_LEGACY_MOBILE_KEYS`/`HEAVY_LEGACY_TABLET_KEYS` in the constants file) and rely on the
     * modern brand list + the generic Android "Mobile token" heuristic instead. Roughly halves the
     * number of regexes evaluated per call with no accuracy loss on real 2020+ traffic. Off by
     * default so existing behavior/output doesn't silently change; turn on for high-traffic /
     * perf-sensitive paths (e.g. SSR middleware running on every request).
     */
    basicMode?: boolean;
}
/**
 * Register a custom device detector, checked with top priority before the built-in list.
 * Example: `registerCustomDevice('MyCorp Kiosk', /MyCorpKioskApp\/[\d.]+/)`.
 */
declare function registerCustomDevice(name: string, regex: RegExp): void;
/**
 * Register a custom browser detector, checked with top priority before the built-in list.
 * `versionRegex`, if given, should have one capture group for the version string.
 */
declare function registerCustomBrowser(name: string, regex: RegExp, versionRegex?: RegExp): void;
/**
 * Register a custom OS detector, checked with top priority before the built-in list. Pass
 * `isDesktopOS: true` if this OS should count as a desktop for `isDesktop()`/`deviceType`.
 */
declare function registerCustomOS(name: string, regex: RegExp, opts?: {
    isDesktopOS?: boolean;
}): void;
/** Clears all custom registrations. Mainly useful in tests. */
declare function clearCustomDetectors(): void;
/**
 * Pure, Angular-free UA parser. Safe to call with any UA string from anywhere (including a
 * server processing many different requests concurrently) — it holds no shared mutable state
 * per call, only the small bounded result cache above.
 *
 * Never throws: on any unexpected error it falls back to an all-`Unknown` result rather than
 * taking down the caller.
 */
declare function parseUserAgent(ua: string, options?: DetectionOptions): ParsedUserAgent;
declare class RmNgDeviceDetectionService {
    private platformId;
    ua: string;
    userAgent: string;
    os: string;
    browser: string;
    device: string;
    os_version: string;
    browser_version: string;
    osDistro: string;
    isBot: boolean;
    reTree: ReTree;
    deviceType: string;
    orientation: string;
    width: number;
    height: number;
    resolution: string;
    devicePixelRatio: number;
    /** True once setDeviceInfo() has run at least once without an unexpected error. Useful in
     *  templates/guards that want to wait for real detection before branching on deviceType. */
    ready: boolean;
    private lastBasicMode;
    constructor(platformId: any);
    /**
     * Runs full detection for the given UA (defaults to the current browser's). Wrapped in a
     * try/catch internally via `parseUserAgent()` — a bad UA string or unexpected runtime quirk
     * degrades to `Unknown` fields rather than throwing.
     *
     * Pass `{ basicMode: true }` to skip ~150 obsolete legacy device regexes for a meaningful perf
     * win on high-traffic paths; see `DetectionOptions.basicMode` for details.
     */
    setDeviceInfo(ua?: string, options?: DetectionOptions): void;
    /**
     * Refreshes width/height/resolution/devicePixelRatio from the current window/screen state.
     * Called automatically inside setDeviceInfo(), but it's also public so you can call it from
     * your own `window:resize` HostListener to keep these values current without re-running the
     * (comparatively expensive) UA parsing.
     */
    updateScreenInfo(): void;
    getDeviceInfo(): DeviceInfo;
    isMobile(userAgent?: string): boolean;
    isTablet(userAgent?: string): boolean;
    isDesktop(userAgent?: string): boolean;
    /**
     * Best-effort, ASYNC Windows 11 detection using the User-Agent Client Hints API.
     *
     * Why this exists: Chromium, Firefox and Safari all freeze the UA string's platform token at
     * `Windows NT 10.0` for Windows 10 *and* 11 (and future versions) as an anti-fingerprinting
     * measure — there is no synchronous, UA-string-only way to tell them apart, in this library or
     * any other. Call this after `setDeviceInfo()`; if it resolves `true`, set
     * `this.os_version = 'windows-11'` yourself, since mutating shared state from inside an async
     * callback here would be surprising.
     */
    detectWindows11ViaClientHints(): Promise<boolean>;
    /**
     * Best-effort Brave detection via feature detection rather than the UA string, since Brave
     * deliberately reports itself as plain Chrome to resist fingerprinting.
     */
    isBraveViaFeatureDetection(): Promise<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RmNgDeviceDetectionService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RmNgDeviceDetectionService>;
}

export { DeviceType, OrientationType, ReTree, RmNgDeviceDetectionService, clearCustomDetectors, parseUserAgent, registerCustomBrowser, registerCustomDevice, registerCustomOS };
export type { DetectionOptions, DeviceInfo, ParsedUserAgent };
