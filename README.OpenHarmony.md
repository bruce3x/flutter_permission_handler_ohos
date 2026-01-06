> Template version: v0.0.1

<p align="center">
  <h1 align="center"> <code>permission_handler</code></h1>
</p>

This project is based on [permission_handler](https://pub.dev/packages/permission_handler).

## 1. Installation and Usage

### 1.1 Installation

Go to the project directory and add the following dependencies in pubspec.yaml

<!-- tabs:start -->

#### pubspec.yaml

```yaml
...

dependencies:
  permission_handler_ohos:
    git: 
      url: https://gitcode.com/openharmony-sig/flutter_permission_handler.git
      path: permission_handler_ohos
      ref: br_permission_handler_v12.0.1_ohos
      
...
```

Execute Command

```bash
flutter pub get
```

<!-- tabs:end -->

### 1.2 Usage

1. For use cases [permission_handler_ohos/example](/permission_handler_ohos/example/lib/main.dart).
2. [Declare permissions](https://docs.openharmony.cn/pages/v5.0/zh-cn/application-dev/security/AccessToken/declare-permissions.md), when the application applies for permissions, it needs to declare the required permissions one by one in the project's configuration file, otherwise the application will not be able to obtain authorization.

## 2. Constraints

### 2.1 Compatibility

This document is verified based on the following versions:

1. Flutter: 3.22.1-ohos-1.0.1; SDK: 5.0.0(12); IDE: DevEco Studio: 5.0.13.200; ROM: 5.1.0.120 SP3;
2.Flutter: 3.35.7-ohos-0.0.1; SDK: 6.0.1(21); IDE: DevEco Studio: 6.0.1.260; ROM: 6.0.0.120 SP6;


## 3. API

> [!TIP] If the value of **ohos Support** is **yes**, it means that the ohos platform supports this property; **no** means the opposite; **partially** means some capabilities of this property are supported. The usage method is the same on different platforms and the effect is the same as that of iOS or Android.

| Name                                 | Description                                                                                                      | Type     | Input                         | Output                                     | ohos Support |
|--------------------------------------|------------------------------------------------------------------------------------------------------------------|----------|-------------------------------|--------------------------------------------|--------------|
| checkServiceStatus                   | Checks the current status of the service associated with the given [Permission]                                  | function | Permission permission         | Future<ServiceStatus>                      | yes          |
| checkPermissionStatus                | Checks the current status of the given [Permission]                                                              | function | Permission permission         | Future<PermissionStatus>                   | yes          |
| requestPermissions                   | Requests the user for access to the supplied list of [Permission]s, if they have not already been granted before | function | List<Permission> permissions  | Future<Map<Permission, PermissionStatus>>  | yes          |
| shouldShowRequestPermissionRationale | Checks if you should show a rationale for requesting permission                                                  | function | Permission permission         | Future<bool>                               | yes          |
| openAppSettings                      | Opens the app settings page                                                                                      | function | /                             | Future<bool>                               | yes          |

## 4. Properties

> [!TIP] If the value of **ohos Support** is **yes**, it means that the ohos platform supports this property; **no** means the opposite; **partially** means some capabilities of this property are supported. The usage method is the same on different platforms and the effect is the same as that of iOS or Android.

### Parameters

| Name         | Description                      | Type              | ohos Support |
|--------------|----------------------------------|-------------------|--------------|
| permission   | Application request permissions  | Permission        | yes          |


## 5. Known Issues


## 6. Others

### 6.1 Permission request return value extension

> [!TIP] Currently, this library only returns two permission statuses when requesting or checking permissions: PERMISSION_STATUS_DENIED and PERMISSION_STATUS_GRANTED. If you need to distinguish whether the returned PERMISSION_STATUS_DENIED means "not yet asked" or "explicitly denied," it is recommended to differentiate them using the following approach:

**6.1.1 Modify the toPermissionStatus method in the file permission_handler_ohos/ohos/src/main/ets/com/baseflow/permissionhandler/PermissionUtils.ets to:**

```typescript
static toPermissionStatus(authResult: number, result:PermissionRequestResult): number {
  if (authResult == -1 && result.dialogShownResults && result.dialogShownResults.length > 0) {
    if (result.dialogShownResults[0]){
      return PermissionConstants.PERMISSION_STATUS_DENIED;
    } else {
      return PermissionConstants.PERMISSION_STATUS_NEVER_ASK_AGAIN;
    }
  } 
  if (authResult == 2) {
    return PermissionConstants.PERMISSION_STATUS_RESTRICTED;
  }
return PermissionConstants.PERMISSION_STATUS_GRANTED;
}
```

**6.1.2 When using checkPermissionStatus to detect that a permission status is PERMISSION_STATUS_DENIED, directly call requestPermissions to request the permission:**

- If it returns PermissionConstants.PERMISSION_STATUS_DENIED, it means the user has denied the permission for the first time.
- If it returns PermissionConstants.PERMISSION_STATUS_NEVER_ASK_AGAIN, it indicates the user has previously denied the permission and this is the second request; in this case, it's recommended to guide the user to the system settings page.
- If it returns PermissionConstants.PERMISSION_GRANTED, it means the user has granted the permission.
- If the result is PERMISSION_STATUS_RESTRICTED, the request is invalid. Possible reasons include:

  - The target permission was not declared in the configuration file;
  - The permission name is invalid;
  - Certain permissions have special requirements that were not met when requesting them.

**6.1.3 The status mapping between Dart and ETS in this solution:**

| ets                               | dart |
|-----------------------------------|-------------|
| PERMISSION_STATUS_DENIED          | PermissionStatus.denied     |
| PERMISSION_STATUS_GRANTED         | PermissionStatus.granted     |
| PERMISSION_STATUS_NEVER_ASK_AGAIN | PermissionStatus.permanentlyDenied     |
| PERMISSION_STATUS_RESTRICTED      | PermissionStatus.restricted     |

## 7. License

This project is licensed under [MIT License](/LICENSE).
