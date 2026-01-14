> 模板版本: v0.0.1

<p align="center">
  <h1 align="center"> <code>permission_handler</code></h1>
</p>

本项目基于 [permission_handler](https://pub.dev/packages/permission_handler) 开发。

## 1. 安装与使用

### 1.1 安装方式

进入到工程目录并在 pubspec.yaml 中添加以下依赖：

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

执行命令

```bash
flutter pub get
```

<!-- tabs:end -->

### 1.2 使用案例

1. 使用案例详见 [permission_handler_ohos/example](/permission_handler_ohos/example/lib/main.dart)
2. [声明权限](https://docs.openharmony.cn/pages/v5.0/zh-cn/application-dev/security/AccessToken/declare-permissions.md)，应用在申请权限时，需要在项目的配置文件中，逐个声明需要的权限，否则应用将无法获取授权。

## 2. 约束与限制

### 2.1 兼容性

在以下版本中已测试通过

1.Flutter: 3.22.1-ohos-1.0.1; SDK: 5.0.0(12); IDE: DevEco Studio: 5.0.13.200; ROM: 5.1.0.120 SP3;
2.Flutter: 3.35.7-ohos-0.0.1; SDK: 6.0.1(21); IDE: DevEco Studio: 6.0.1.260; ROM: 6.0.0.120 SP6;



## 3. API

> [!TIP] "ohos Support"列为 yes 表示 ohos 平台支持该属性；no 则表示不支持；partially 表示部分支持。使用方法跨平台一致，效果对标 iOS 或 Android 的效果。

| Name                                 | Description                  | Type     | Input                         | Output                                     | ohos Support |
|--------------------------------------|------------------------------|----------|-------------------------------|--------------------------------------------|--------------|
| checkServiceStatus                   | 检查与给定[权限]相关联的服务的当前状态         | function | Permission permission         | Future<ServiceStatus>                      | yes          |
| checkPermissionStatus                | 检查给定[权限]的当前状态                | function | Permission permission         | Future<PermissionStatus>                   | yes          |
| requestPermissions                   | 请求用户访问提供的权限列表，如果他们之前还没有被授予的话 | function | List<Permission> permissions  | Future<Map<Permission, PermissionStatus>>  | yes          |
| shouldShowRequestPermissionRationale | 检查你是否应该为请求权限提供理由             | function | Permission permission         | Future<bool>                               | yes          |
| openAppSettings                      | 打开应用程序设置页面                   | function | /                             | Future<bool>                               | yes          |


## 4. 属性

> [!TIP] "ohos Support"列为 yes 表示 ohos 平台支持该属性；no 则表示不支持；partially 表示部分支持。使用方法跨平台一致，效果对标 iOS 或 Android 的效果。

### Parameters

| Name         | Description | Type              | ohos Support |
|--------------|-------------|-------------------|--------------|
| permission   | 应用请求的权限     | Permission        | yes          |



## 5. 遗留问题


## 6. 其他

### 6.1 权限请求返回值拓展

> [!TIP] 该库目前在请求和检查权限返回的状态只有 PERMISSION_STATUS_DENIED 和 PERMISSION_STATUS_GRANTED，如需区分返回的 PERMISSION_STATUS_DENIED 是尚未询问还是已拒绝，建议按照以下方案进行区分

**6.1.1 permission_handler_ohos/ohos/src/main/ets/com/baseflow/permissionhandler/PermissionUtils.ets 文件的 toPermissionStatus 方法改为：**

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

**6.1.2 通过 checkPermissionStatus 去检测权限是 PERMISSION_STATUS_DENIED 的时候，直接调用 requestPermissions 去申请权限：**

- 如果返回 PermissionConstants.PERMISSION_STATUS_DENIED 表示用户第一次拒绝，
- 如果返回PermissionConstants.PERMISSION_STATUS_NEVER_ASK_AGAIN表示用户已经拒绝过，这是第二次申请，建议引导用户跳转到设置界面，
- 如果返回PermissionConstants.PERMISSION_GRANTED，表示用户授予了权限。 
- 如果返回 PERMISSION_STATUS_RESTRICTED 表示请求无效,可能原因有：

    1. 未在设置文件中声明目标权限；
    2. 权限名非法；
    3. 部分权限存在特殊申请条件，在申请对应权限时未满足其指定的条件。

**6.1.3 该方案 dart 与 ets 状态对应关系**

| ets                               | dart |
|-----------------------------------|-------------|
| PERMISSION_STATUS_DENIED          | PermissionStatus.denied     |
| PERMISSION_STATUS_GRANTED         | PermissionStatus.granted     |
| PERMISSION_STATUS_NEVER_ASK_AGAIN | PermissionStatus.permanentlyDenied     |
| PERMISSION_STATUS_RESTRICTED      | PermissionStatus.restricted     |

## 7. 开源协议


本项目基于 [MIT License](/LICENSE) ，请自由地享受和参与开源。