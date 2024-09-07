import { PLATFORM_ID, Inject, Injectable } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as Constants from './device-detector.constants';
import { ReTree } from './retree';
import * as i0 from "@angular/core";
export var DeviceType;
(function (DeviceType) {
    DeviceType["Mobile"] = "mobile";
    DeviceType["Tablet"] = "tablet";
    DeviceType["Desktop"] = "desktop";
    DeviceType["Unknown"] = "unknown";
})(DeviceType || (DeviceType = {}));
export var OrientationType;
(function (OrientationType) {
    OrientationType["Portrait"] = "portrait";
    OrientationType["Landscape"] = "landscape";
})(OrientationType || (OrientationType = {}));
const iPad = 'iPad';
export class RmNgDeviceDetectionService {
    platformId;
    ua = '';
    userAgent = '';
    os = '';
    browser = '';
    device = '';
    os_version = '';
    browser_version = '';
    reTree = new ReTree();
    deviceType = '';
    orientation = '';
    constructor(platformId) {
        this.platformId = platformId;
        if (isPlatformBrowser(this.platformId) && typeof window !== 'undefined') {
            this.userAgent = window.navigator.userAgent;
        }
        this.setDeviceInfo(this.userAgent);
    }
    setDeviceInfo(ua = this.userAgent) {
        if (ua !== this.userAgent) {
            this.userAgent = ua;
        }
        const mappings = [
            { const: 'OS', prop: 'os' },
            { const: 'BROWSERS', prop: 'browser' },
            { const: 'DEVICES', prop: 'device' },
            { const: 'OS_VERSIONS', prop: 'os_version' },
        ];
        mappings.forEach((mapping) => {
            this[mapping.prop] = Object.keys(Constants[mapping.const]).reduce((obj, item) => {
                if (Constants[mapping.const][item] === 'device') {
                    // hack for iOS 13 Tablet
                    if (isPlatformBrowser(this.platformId) &&
                        (!!this.reTree.test(this.userAgent, Constants.TABLETS_RE[iPad]) ||
                            (navigator.platform === 'MacIntel' &&
                                navigator.maxTouchPoints > 1))) {
                        obj[Constants[mapping.const][item]] =
                            iPad;
                        return Object;
                    }
                }
                // obj[Constants[mapping.const  as keyof typeof Constants][item]] = this.reTree.test(ua, Constants[`${mapping.const}_RE`][item]);
                obj[Constants[mapping.const][item]] = this.reTree.test(ua, Constants[`${mapping.const}_RE`][item]);
                return obj;
            }, {});
        });
        // mappings.forEach(mapping => {
        //   this[mapping.prop] = Object.keys(Constants[mapping.const  as keyof typeof Constants])
        //     .map(key => {
        //       return Constants[mapping.const  as keyof typeof Constants][key];
        //     })
        //     .reduce((previousValue, currentValue) => {
        //       if (mapping.prop === 'device' && previousValue === Constants[mapping.const  as keyof typeof Constants].ANDROID) {
        //         // if we have the actual device found, instead of 'Android', return the actual device
        //         return this[mapping.prop][currentValue] ? currentValue : previousValue;
        //       } else {
        //         return previousValue === Constants[mapping.const  as keyof typeof Constants].UNKNOWN && this[mapping.prop][currentValue]
        //           ? currentValue
        //           : previousValue;
        //       }
        //     }, Constants[mapping.const  as keyof typeof Constants].UNKNOWN);
        // });
        // mappings.forEach(mapping => {
        //   const prop = this[mapping.prop];
        //   if (typeof prop === 'object' && prop !== null) {
        //     this[mapping.prop] = Object.keys(Constants[mapping.const as keyof typeof Constants])
        //       .map(key => {
        //         return Constants[mapping.const as keyof typeof Constants][key];
        //       })
        //       .reduce((previousValue, currentValue) => {
        //         if (mapping.prop === 'device' && previousValue === Constants[mapping.const as keyof typeof Constants].ANDROID) {
        //           return prop[currentValue] ? currentValue : previousValue;
        //         } else {
        //           return previousValue === Constants[mapping.const as keyof typeof Constants].UNKNOWN && prop[currentValue]
        //             ? currentValue
        //             : previousValue;
        //         }
        //       }, Constants[mapping.const as keyof typeof Constants].UNKNOWN);
        //   }
        // });
        mappings.forEach((mapping) => {
            // Cast `this[mapping.prop]` as an object with string keys and any values
            const prop = this[mapping.prop];
            // Cast Constants[mapping.const] to the expected type
            const constantsMapping = Constants[mapping.const];
            // Ensure `mapping.prop` is an object and not null
            if (typeof prop === 'object' && prop !== null) {
                this[mapping.prop] = Object.keys(constantsMapping)
                    .map((key) => constantsMapping[key])
                    .reduce((previousValue, currentValue) => {
                    if (mapping.prop === 'device' &&
                        previousValue ===
                            Constants[mapping.const].ANDROID) {
                        // Return the actual device if found
                        return prop[currentValue] ? currentValue : previousValue;
                    }
                    else {
                        // Return the currentValue if it’s found in `prop`
                        return previousValue ===
                            Constants[mapping.const].UNKNOWN &&
                            prop[currentValue]
                            ? currentValue
                            : previousValue;
                    }
                }, Constants[mapping.const].UNKNOWN);
            }
        });
        this.browser_version = '0';
        if (this.browser !== Constants.BROWSERS.UNKNOWN) {
            const re = Constants.BROWSER_VERSIONS_RE[this.browser];
            const res = this.reTree.exec(ua, re);
            if (!!res) {
                this.browser_version = res[1];
            }
        }
        if (typeof window !== 'undefined' && window && window.matchMedia) {
            this.orientation = window.matchMedia('(orientation: landscape)').matches
                ? OrientationType.Landscape
                : OrientationType.Portrait;
        }
        else {
            this.orientation = Constants.GENERAL.UKNOWN;
        }
        this.deviceType = this.isTablet()
            ? DeviceType.Tablet
            : this.isMobile(this.userAgent)
                ? DeviceType.Mobile
                : this.isDesktop(this.userAgent)
                    ? DeviceType.Desktop
                    : DeviceType.Unknown;
    }
    getDeviceInfo() {
        const deviceInfo = {
            userAgent: this.userAgent,
            os: this.os,
            browser: this.browser,
            device: this.device,
            os_version: this.os_version,
            browser_version: this.browser_version,
            deviceType: this.deviceType,
            orientation: this.orientation,
        };
        return deviceInfo;
    }
    isMobile(userAgent = this.userAgent) {
        if (this.isTablet(userAgent)) {
            return false;
        }
        const match = Object.keys(Constants.MOBILES_RE).find((mobile) => {
            return this.reTree.test(userAgent, Constants.MOBILES_RE[mobile]);
        });
        return !!match;
    }
    isTablet(userAgent = this.userAgent) {
        if (isPlatformBrowser(this.platformId) &&
            (!!this.reTree.test(this.userAgent, Constants.TABLETS_RE[iPad]) ||
                (typeof navigator !== 'undefined' &&
                    navigator.platform === 'MacIntel' &&
                    navigator.maxTouchPoints > 1))) {
            return true;
        }
        const match = Object.keys(Constants.TABLETS_RE).find((mobile) => {
            return !!this.reTree.test(userAgent, Constants.TABLETS_RE[mobile]);
        });
        return !!match;
    }
    isDesktop(userAgent = this.userAgent) {
        if (this.device === Constants.DEVICES.UNKNOWN) {
            if (this.isMobile(userAgent) || this.isTablet(userAgent)) {
                return false;
            }
        }
        return Constants.DESKTOP_DEVICES.indexOf(this.device) > -1;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.3", ngImport: i0, type: RmNgDeviceDetectionService, deps: [{ token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.3", ngImport: i0, type: RmNgDeviceDetectionService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.3", ngImport: i0, type: RmNgDeviceDetectionService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm0tbmctZGV2aWNlLWRldGVjdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvcm0tbmctZGV2aWNlLWRldGVjdGlvbi9zcmMvbGliL3JtLW5nLWRldmljZS1kZXRlY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFZLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUQsT0FBTyxLQUFLLFNBQVMsTUFBTSw2QkFBNkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDOztBQVlsQyxNQUFNLENBQU4sSUFBWSxVQUtYO0FBTEQsV0FBWSxVQUFVO0lBQ3BCLCtCQUFpQixDQUFBO0lBQ2pCLCtCQUFpQixDQUFBO0lBQ2pCLGlDQUFtQixDQUFBO0lBQ25CLGlDQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFMVyxVQUFVLEtBQVYsVUFBVSxRQUtyQjtBQUNELE1BQU0sQ0FBTixJQUFZLGVBR1g7QUFIRCxXQUFZLGVBQWU7SUFDekIsd0NBQXFCLENBQUE7SUFDckIsMENBQXVCLENBQUE7QUFDekIsQ0FBQyxFQUhXLGVBQWUsS0FBZixlQUFlLFFBRzFCO0FBRUQsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDO0FBS3BCLE1BQU0sT0FBTywwQkFBMEI7SUFXSTtJQVZ6QyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ1IsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUNmLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDUixPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ2IsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNaLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDaEIsZUFBZSxHQUFHLEVBQUUsQ0FBQztJQUNyQixNQUFNLEdBQUcsSUFBSSxN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O1lBQ2YsQ0FBQztRQUNILENBQUM7UUFDRCxPQUFPLFNBQVMsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO3VHQTlNVSwwQkFBMEIsa0JBV2pCLFdBQVc7MkdBWHBCLDBCQUEwQixjQUZ6QixNQUFNOzsyRkFFUCwwQkFBMEI7a0JBSHRDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzswQkFZYyxNQUFNOzJCQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQTEFURk9STV9JRCwgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERPQ1VNRU5ULCBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tICcuL2RldmljZS1kZXRlY3Rvci5jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBSZVRyZWUgfSBmcm9tICcuL3JldHJlZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERldmljZUluZm8ge1xyXG4gIHVzZXJBZ2VudDogc3RyaW5nO1xyXG4gIG9zOiBzdHJpbmc7XHJcbiAgYnJvd3Nlcjogc3RyaW5nO1xyXG4gIGRldmljZTogc3RyaW5nO1xyXG4gIG9zX3ZlcnNpb246IHN0cmluZztcclxuICBicm93c2VyX3ZlcnNpb246IHN0cmluZztcclxuICBkZXZpY2VUeXBlOiBzdHJpbmc7XHJcbiAgb3JpZW50YXRpb246IHN0cmluZztcclxufVxyXG5leHBvcnQgZW51bSBEZXZpY2VUeXBlIHtcclxuICBNb2JpbGUgPSAnbW9iaWxlJyxcclxuICBUYWJsZXQgPSAndGFibGV0JyxcclxuICBEZXNrdG9wID0gJ2Rlc2t0b3AnLFxyXG4gIFVua25vd24gPSAndW5rbm93bicsXHJcbn1cclxuZXhwb3J0IGVudW0gT3JpZW50YXRpb25UeXBlIHtcclxuICBQb3J0cmFpdCA9ICdwb3J0cmFpdCcsXHJcbiAgTGFuZHNjYXBlID0gJ2xhbmRzY2FwZScsXHJcbn1cclxuXHJcbmNvbnN0IGlQYWQgPSAnaVBhZCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm1OZ0RldmljZURldGVjdGlvblNlcnZpY2Uge1xyXG4gIHVhID0gJyc7XHJcbiAgdXNlckFnZW50ID0gJyc7XHJcbiAgb3MgPSAnJztcclxuICBicm93c2VyID0gJyc7XHJcbiAgZGV2aWNlID0gJyc7XHJcbiAgb3NfdmVyc2lvbiA9ICcnO1xyXG4gIGJyb3dzZXJfdmVyc2lvbiA9ICcnO1xyXG4gIHJlVHJlZSA9IG5ldyBSZVRyZWUoKTtcclxuICBkZXZpY2VUeXBlID0gJyc7XHJcbiAgb3JpZW50YXRpb24gPSAnJztcclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSkge1xyXG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgdGhpcy51c2VyQWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0RGV2aWNlSW5mbyh0aGlzLnVzZXJBZ2VudCk7XHJcbiAgfVxyXG5cclxuICBzZXREZXZpY2VJbmZvKHVhID0gdGhpcy51c2VyQWdlbnQpOiB2b2lkIHtcclxuICAgIGlmICh1YSAhPT0gdGhpcy51c2VyQWdlbnQpIHtcclxuICAgICAgdGhpcy51c2VyQWdlbnQgPSB1YTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1hcHBpbmdzOiB7XHJcbiAgICAgIGNvbnN0OiBrZXlvZiB0eXBlb2YgQ29uc3RhbnRzO1xyXG4gICAgICBwcm9wOiBrZXlvZiBSbU5nRGV2aWNlRGV0ZWN0aW9uU2VydmljZTtcclxuICAgIH1bXSA9IFtcclxuICAgICAgeyBjb25zdDogJ09TJywgcHJvcDogJ29zJyB9LFxyXG4gICAgICB7IGNvbnN0OiAnQlJPV1NFUlMnLCBwcm9wOiAnYnJvd3NlcicgfSxcclxuICAgICAgeyBjb25zdDogJ0RFVklDRVMnLCBwcm9wOiAnZGV2aWNlJyB9LFxyXG4gICAgICB7IGNvbnN0OiAnT1NfVkVSU0lPTlMnLCBwcm9wOiAnb3NfdmVyc2lvbicgfSxcclxuICAgIF07XHJcblxyXG4gICAgbWFwcGluZ3MuZm9yRWFjaCgobWFwcGluZykgPT4ge1xyXG4gICAgICB0aGlzW21hcHBpbmcucHJvcF0gPSBPYmplY3Qua2V5cyhcclxuICAgICAgICBDb25zdGFudHNbbWFwcGluZy5jb25zdCBhcyBrZXlvZiB0eXBlb2YgQ29uc3RhbnRzXSxcclxuICAgICAgKS5yZWR1Y2UoKG9iajogYW55LCBpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBDb25zdGFudHNbbWFwcGluZy5jb25zdCBhcyBrZXlvZiB0eXBlb2YgQ29uc3RhbnRzXVtpdGVtXSA9PT0gJ2RldmljZSdcclxuICAgICAgICApIHtcclxuICAgICAgICAgIC8vIGhhY2sgZm9yIGlPUyAxMyBUYWJsZXRcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSAmJlxyXG4gICAgICAgICAgICAoISF0aGlzLnJlVHJlZS50ZXN0KHRoaXMudXNlckFnZW50LCBDb25zdGFudHMuVEFCTEVUU19SRVtpUGFkXSkgfHxcclxuICAgICAgICAgICAgICAobmF2aWdhdG9yLnBsYXRmb3JtID09PSAnTWFjSW50ZWwnICYmXHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAxKSlcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICBvYmpbQ29uc3RhbnRzW21hcHBpbmcuY29uc3QgYXMga2V5b2YgdHlwZW9mIENvbnN0YW50c11baXRlbV1dID1cclxuICAgICAgICAgICAgICBpUGFkO1xyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBvYmpbQ29uc3RhbnRzW21hcHBpbmcuY29uc3QgIGFzIGtleW9mIHR5cGVvZiBDb25zdGFudHNdW2l0ZW1dXSA9IHRoaXMucmVUcmVlLnRlc3QodWEsIENvbnN0YW50c1tgJHttYXBwaW5nLmNvbnN0fV9SRWBdW2l0ZW1dKTtcclxuICAgICAgICBvYmpbQ29uc3RhbnRzW21hcHBpbmcuY29uc3QgYXMga2V5b2YgdHlwZW9mIENvbnN0YW50c11baXRlbV1dID0gdGhpcy5yZVRyZWUudGVzdCh1YSwgQ29uc3RhbnRzW2Ake21hcHBpbmcuY29uc3R9X1JFYCBhcyBrZXlvZiB0eXBlb2YgQ29uc3RhbnRzXVtpdGVtXSk7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgfSwge30pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbWFwcGluZ3MuZm9yRWFjaChtYXBwaW5nID0+IHtcclxuICAgIC8vICAgdGhpc1ttYXBwaW5nLnByb3BdID0gT2JqZWN0LmtleXMoQ29uc3RhbnRzW21hcHBpbmcuY29uc3QgIGFzIGtleW9mIHR5cGVvZiBDb25zdGFudHNdKVxyXG4gICAgLy8gICAgIC5tYXAoa2V5ID0+IHtcclxuICAgIC8vICAgICAgIHJldHVybiBDb25zdGFudHNbbWFwcGluZy5jb25zdCAgYXMga2V5b2YgdHlwZW9mIENvbnN0YW50c11ba2V5XTtcclxuICAgIC8vICAgICB9KVxyXG4gICAgLy8gICAgIC5yZWR1Y2UoKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRWYWx1ZSkgPT4ge1xyXG4gICAgLy8gICAgICAgaWYgKG1hcHBpbmcucHJvcCA9PT0gJ2RldmljZScgJiYgcHJldmlvdXNWYWx1ZSA9PT0gQ29uc3RhbnRzW21hcHBpbmcuY29uc3QgIGFzIGtleW9mIHR5cGVvZiBDb25zdGFudHNdLkFORFJPSUQpIHtcclxuICAgIC8vICAgICAgICAgLy8gaWYgd2UgaGF2ZSB0aGUgYWN0dWFsIGRldmljZSBmb3VuZCwgaW5zdGVhZCBvZiAnQW5kcm9pZCcsIHJldHVybiB0aGUgYWN0dWFsIGRldmljZVxyXG4gICAgLy8gICAgICAgICByZXR1cm4gdGhpc1ttYXBwaW5nLnByb3BdW2N1cnJlbnRWYWx1ZV0gPyBjdXJyZW50VmFsdWUgOiBwcmV2aW91c1ZhbHVlO1xyXG4gICAgLy8gICAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuIHByZXZpb3VzVmFsdWUgPT09IENvbnN0YW50c1ttYXBwaW5nLmNvbnN0ICBhcyBrZXlvZiB0eXBlb2YgQ29uc3RhbnRzXS5VTktOT1dOICYmIHRoaXNbbWFwcGluZy5wcm9wXVtjdXJyZW50VmFsdWVdXHJcbiAgICAvLyAgICAgICAgICAgPyBjdXJyZW50VmFsdWVcclxuICAgIC8vICAgICAgICAgICA6IHByZXZpb3VzVmFsdWU7XHJcbiAgICAvLyAgICAgICB9XHJcbiAgICAvLyAgICAgfSwgQ29uc3RhbnRzW21hcHBpbmcuY29uc3QgIGFzIGtleW9mIHR5cGVvZiBDb25zdGFudHNdLlVOS05PV04pO1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgLy8gbWFwcGluZ3MuZm9yRWFjaChtYXBwaW5nID0+IHtcclxuICAgIC8vICAgY29uc3QgcHJvcCA9IHRoaXNbbWFwcGluZy5wcm9wXTtcclxuXHJcbiAgICAvLyAgIGlmICh0eXBlb2YgcHJvcCA9PT0gJ29iamVjdCcgJiYgcHJvcCAhPT0gbnVsbCkge1xyXG4gICAgLy8gICAgIHRoaXNbbWFwcGluZy5wcm9wXSA9IE9iamVjdC5rZXlzKENvbnN0YW50c1ttYXBwaW5nLmNvbnN0IGFzIGtleW9mIHR5cGVvZiBDb25zdGFudHNdKVxyXG4gICAgLy8gICAgICAgLm1hcChrZXkgPT4ge1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gQ29uc3RhbnRzW21hcHBpbmcuY29uc3QgYXMga2V5b2YgdHlwZW9mIENvbnN0YW50c11ba2V5XTtcclxuICAgIC8vICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAucmVkdWNlKChwcmV2aW91c1ZhbHVlLCBjdXJyZW50VmFsdWUpID0+IHtcclxuICAgIC8vICAgICAgICAgaWYgKG1hcHBpbmcucHJvcCA9PT0gJ2RldmljZScgJiYgcHJldmlvdXNWYWx1ZSA9PT0gQ29uc3RhbnRzW21hcHBpbmcuY29uc3QgYXMga2V5b2YgdHlwZW9mIENvbnN0YW50c10uQU5EUk9JRCkge1xyXG4gICAgLy8gICAgICAgICAgIHJldHVybiBwcm9wW2N1cnJlbnRWYWx1ZV0gPyBjdXJyZW50VmFsdWUgOiBwcmV2aW91c1ZhbHVlO1xyXG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgIHJldHVybiBwcmV2aW91c1ZhbHVlID09PSBDb25zdGFudHNbbWFwcGluZy5jb25zdCBhcyBrZXlvZiB0eXBlb2YgQ29uc3RhbnRzXS5VTktOT1dOICYmIHByb3BbY3VycmVudFZhbHVlXVxyXG4gICAgLy8gICAgICAgICAgICAgPyBjdXJyZW50VmFsdWVcclxuICAgIC8vICAgICAgICAgICAgIDogcHJldmlvdXNWYWx1ZTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgfSwgQ29uc3RhbnRzW21hcHBpbmcuY29uc3QgYXMga2V5b2YgdHlwZW9mIENvbnN0YW50c10uVU5LTk9XTik7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0pO1xyXG5cclxuXHJcbiAgICBtYXBwaW5ncy5mb3JFYWNoKChtYXBwaW5nKSA9PiB7XHJcbiAgICAgIC8vIENhc3QgYHRoaXNbbWFwcGluZy5wcm9wXWAgYXMgYW4gb2JqZWN0IHdpdGggc3RyaW5nIGtleXMgYW5kIGFueSB2YWx1ZXNcclxuICAgICAgY29uc3QgcHJvcCA9IHRoaXNbbWFwcGluZy5wcm9wXSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xyXG5cclxuICAgICAgLy8gQ2FzdCBDb25zdGFudHNbbWFwcGluZy5jb25zdF0gdG8gdGhlIGV4cGVjdGVkIHR5cGVcclxuICAgICAgY29uc3QgY29uc3RhbnRzTWFwcGluZyA9IENvbnN0YW50c1tcclxuICAgICAgICBtYXBwaW5nLmNvbnN0IGFzIGtleW9mIHR5cGVvZiBDb25zdGFudHNcclxuICAgICAgXSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xyXG5cclxuICAgICAgLy8gRW5zdXJlIGBtYXBwaW5nLnByb3BgIGlzIGFuIG9iamVjdCBhbmQgbm90IG51bGxcclxuICAgICAgaWYgKHR5cGVvZiBwcm9wID09PSAnb2JqZWN0JyAmJiBwcm9wICE9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpc1ttYXBwaW5nLnByb3BdID0gT2JqZWN0LmtleXMoY29uc3RhbnRzTWFwcGluZylcclxuICAgICAgICAgIC5tYXAoKGtleSkgPT4gY29uc3RhbnRzTWFwcGluZ1trZXldKVxyXG4gICAgICAgICAgLnJlZHVjZShcclxuICAgICAgICAgICAgKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIG1hcHBpbmcucHJvcCA9PT0gJ2RldmljZScgJiZcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzVmFsdWUgPT09XHJcbiAgICAgICAgICAgICAgICAgIENvbnN0YW50c1ttYXBwaW5nLmNvbnN0IGFzIGtleW9mIHR5cGVvZiBDb25zdGFudHNdLkFORFJPSURcclxuICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIC8vIFJldHVybiB0aGUgYWN0dWFsIGRldmljZSBpZiBmb3VuZFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BbY3VycmVudFZhbHVlXSA/IGN1cnJlbnRWYWx1ZSA6IHByZXZpb3VzVmFsdWU7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFJldHVybiB0aGUgY3VycmVudFZhbHVlIGlmIGl04oCZcyBmb3VuZCBpbiBgcHJvcGBcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2aW91c1ZhbHVlID09PVxyXG4gICAgICAgICAgICAgICAgICBDb25zdGFudHNbbWFwcGluZy5jb25zdCBhcyBrZXlvZiB0eXBlb2YgQ29uc3RhbnRzXS5VTktOT1dOICYmXHJcbiAgICAgICAgICAgICAgICAgIHByb3BbY3VycmVudFZhbHVlXVxyXG4gICAgICAgICAgICAgICAgICA/IGN1cnJlbnRWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICA6IHByZXZpb3VzVmFsdWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBDb25zdGFudHNbbWFwcGluZy5jb25zdCBhcyBrZXlvZiB0eXBlb2YgQ29uc3RhbnRzXS5VTktOT1dOLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5icm93c2VyX3ZlcnNpb24gPSAnMCc7XHJcbiAgICBpZiAodGhpcy5icm93c2VyICE9PSBDb25zdGFudHMuQlJPV1NFUlMuVU5LTk9XTikge1xyXG4gICAgICBjb25zdCByZSA9IENvbnN0YW50cy5CUk9XU0VSX1ZFUlNJT05TX1JFW3RoaXMuYnJvd3Nlcl07XHJcbiAgICAgIGNvbnN0IHJlcyA9IHRoaXMucmVUcmVlLmV4ZWModWEsIHJlKTtcclxuICAgICAgaWYgKCEhcmVzKSB7XHJcbiAgICAgICAgdGhpcy5icm93c2VyX3ZlcnNpb24gPSByZXNbMV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cgJiYgd2luZG93Lm1hdGNoTWVkaWEpIHtcclxuICAgICAgdGhpcy5vcmllbnRhdGlvbiA9IHdpbmRvdy5tYXRjaE1lZGlhKCcob3JpZW50YXRpb246IGxhbmRzY2FwZSknKS5tYXRjaGVzXHJcbiAgICAgICAgPyBPcmllbnRhdGlvblR5cGUuTGFuZHNjYXBlXHJcbiAgICAgICAgOiBPcmllbnRhdGlvblR5cGUuUG9ydHJhaXQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm9yaWVudGF0aW9uID0gQ29uc3RhbnRzLkdFTkVSQUwuVUtOT1dOO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGV2aWNlVHlwZSA9IHRoaXMuaXNUYWJsZXQoKVxyXG4gICAgICA/IERldmljZVR5cGUuVGFibGV0XHJcbiAgICAgIDogdGhpcy5pc01vYmlsZSh0aGlzLnVzZXJBZ2VudClcclxuICAgICAgICA/IERldmljZVR5cGUuTW9iaWxlXHJcbiAgICAgICAgOiB0aGlzLmlzRGVza3RvcCh0aGlzLnVzZXJBZ2VudClcclxuICAgICAgICAgID8gRGV2aWNlVHlwZS5EZXNrdG9wXHJcbiAgICAgICAgICA6IERldmljZVR5cGUuVW5rbm93bjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXREZXZpY2VJbmZvKCk6IERldmljZUluZm8ge1xyXG4gICAgY29uc3QgZGV2aWNlSW5mbzogRGV2aWNlSW5mbyA9IHtcclxuICAgICAgdXNlckFnZW50OiB0aGlzLnVzZXJBZ2VudCxcclxuICAgICAgb3M6IHRoaXMub3MsXHJcbiAgICAgIGJyb3dzZXI6IHRoaXMuYnJvd3NlcixcclxuICAgICAgZGV2aWNlOiB0aGlzLmRldmljZSxcclxuICAgICAgb3NfdmVyc2lvbjogdGhpcy5vc192ZXJzaW9uLFxyXG4gICAgICBicm93c2VyX3ZlcnNpb246IHRoaXMuYnJvd3Nlcl92ZXJzaW9uLFxyXG4gICAgICBkZXZpY2VUeXBlOiB0aGlzLmRldmljZVR5cGUsXHJcbiAgICAgIG9yaWVudGF0aW9uOiB0aGlzLm9yaWVudGF0aW9uLFxyXG4gICAgfTtcclxuICAgIHJldHVybiBkZXZpY2VJbmZvO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzTW9iaWxlKHVzZXJBZ2VudCA9IHRoaXMudXNlckFnZW50KTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5pc1RhYmxldCh1c2VyQWdlbnQpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1hdGNoID0gT2JqZWN0LmtleXMoQ29uc3RhbnRzLk1PQklMRVNfUkUpLmZpbmQoKG1vYmlsZSkgPT4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZVRyZWUudGVzdCh1c2VyQWdlbnQsIChDb25zdGFudHMuTU9CSUxFU19SRSBhcyBhbnkpW21vYmlsZV0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gISFtYXRjaDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc1RhYmxldCh1c2VyQWdlbnQgPSB0aGlzLnVzZXJBZ2VudCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpICYmXHJcbiAgICAgICghIXRoaXMucmVUcmVlLnRlc3QodGhpcy51c2VyQWdlbnQsIENvbnN0YW50cy5UQUJMRVRTX1JFW2lQYWRdKSB8fFxyXG4gICAgICAgICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJlxyXG4gICAgICAgICAgbmF2aWdhdG9yLnBsYXRmb3JtID09PSAnTWFjSW50ZWwnICYmXHJcbiAgICAgICAgICBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAxKSlcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1hdGNoID0gT2JqZWN0LmtleXMoQ29uc3RhbnRzLlRBQkxFVFNfUkUpLmZpbmQoKG1vYmlsZSkgPT4ge1xyXG4gICAgICByZXR1cm4gISF0aGlzLnJlVHJlZS50ZXN0KFxyXG4gICAgICAgIHVzZXJBZ2VudCxcclxuICAgICAgICAoQ29uc3RhbnRzLlRBQkxFVFNfUkUgYXMgYW55KVttb2JpbGVdLFxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gISFtYXRjaDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0Rlc2t0b3AodXNlckFnZW50ID0gdGhpcy51c2VyQWdlbnQpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmRldmljZSA9PT0gQ29uc3RhbnRzLkRFVklDRVMuVU5LTk9XTikge1xyXG4gICAgICBpZiAodGhpcy5pc01vYmlsZSh1c2VyQWdlbnQpIHx8IHRoaXMuaXNUYWJsZXQodXNlckFnZW50KSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIENvbnN0YW50cy5ERVNLVE9QX0RFVklDRVMuaW5kZXhPZih0aGlzLmRldmljZSkgPiAtMTtcclxuICB9XHJcbn1cclxuIl19