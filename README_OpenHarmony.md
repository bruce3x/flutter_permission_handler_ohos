# permission_handler

原始仓来源：https://github.com/baseflow/flutter-permission-handler

## 仓库简介
permission_handler是一个用于处理Flutter应用中权限请求的插件，旨在帮助开发者在Flutter应用中请求、检查和处理各种系统权限。  
该仓库为permission_handler适配OpenHarmony的仓库。

## 引入背景简述
OpenHarmony北向生态发展过程中，已经适配Flutter的厂商在接入OpenHarmony过程中存在使用permission_handler的诉求。鉴于此OpenHarmony为支持北向生态伙伴快速接入适配、快速实现产品化而提供的permission_handler，本方案采用插件化的适配器模式实现permission_handler适配OpenHarmony平台。

## 使用场景
本方案仅供应用厂商中已支持Flutter框架的设备在移植OpenHarmony系统过程中作为备选方案使用。

## 使用文档

适配OpenHarmony平台的使用指导请见：[Flutter使用指导文档](https://gitee.com/openharmony-sig/flutter_samples/blob/master/ohos/docs/07_plugin/ohos%E5%B9%B3%E5%8F%B0%E9%80%82%E9%85%8Dflutter%E4%B8%89%E6%96%B9%E5%BA%93%E6%8C%87%E5%AF%BC.md)

## License

MIT License

见 [LICENSE](LICENSE)