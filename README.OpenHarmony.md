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
  permission_handler:
    git: 
      url: https://gitcode.com/openharmony-sig/flutter_permission_handler.git
      path: permission_handler
      
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

1. Flutter: 3.7.12-ohos-1.0.6; SDK: 5.0.0(12); IDE: DevEco Studio: 5.0.13.200; ROM: 5.1.0.120 SP3;


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


## 7. License

This project is licensed under [MIT License](/LICENSE).
