import UIAbility from '@ohos.app.ability.UIAbility';
import bundleManager from '@ohos.bundle.bundleManager';
import Log from '@ohos/flutter_ohos/src/main/ets/util/Log';
import { ErrorCallback } from './ErrorCallback';
import PermissionConstants from './PermissionConstants';

export class AppSettingManager {
  openAppSettings(ability: UIAbility, successCallback: OpenAppSettingsSuccessCallback, errorCallback: ErrorCallback): void {
    if(ability == null) {
      Log.d(PermissionConstants.LOG_TAG, "Context cannot be null.");
      errorCallback?.onError("PermissionHandler.AppSettingsManager", "Android context cannot be null.");
      return;
    }
    bundleManager.getBundleInfoForSelf(bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_APPLICATION).then((bundleInfo) => {
      if (bundleInfo == null) {
        successCallback.onSuccess(false);
        return;
      }
      let want = {
        abilityName: 'com.huawei.hmos.settings.AppInfoAbility',
        bundleName: 'com.huawei.hmos.settings',
        parameters: {
          "settingsParamBundleName" : bundleInfo.name
        }
      };
      try {
        ability.context.startAbility(want).then(() => {
          successCallback.onSuccess(true);
        });
      } catch (error) {
        Log.i(PermissionConstants.LOG_TAG, "start ability exception");
        successCallback?.onSuccess(false);
      }
    });
  }
}

export interface OpenAppSettingsSuccessCallback {
  onSuccess(appSettingsOpenedSuccessfully : boolean): void;
}