import { FlutterAbility } from '@ohos/flutter_ohos/src/main/ets/embedding/ohos/FlutterAbility';
import PermissionHandlerPlugin from '@ohos/permission_handle/src/main/ets/com/baseflow/permissionhandler/PermissionHandlerPlugin';

export default class EntryAbility extends FlutterAbility {
  onFlutterEngineReady(): void {
    super.onFlutterEngineReady();
    this.addPlugin(new PermissionHandlerPlugin());
  }
}
