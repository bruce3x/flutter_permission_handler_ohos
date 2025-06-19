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
  permission_handler:
    git:
      url: https://gitcode.com/openharmony-sig/flutter_permission_handler.git
      path: permission_handler

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

1. Flutter: 3.7.12-ohos-1.0.6; SDK: 5.0.0(12); IDE: DevEco Studio: 5.0.13.200; ROM: 5.1.0.120 SP3;


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


## 7. 开源协议


本项目基于 [MIT License](/LICENSE) ，请自由地享受和参与开源。