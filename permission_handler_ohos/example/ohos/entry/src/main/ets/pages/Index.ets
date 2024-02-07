import { FlutterPage } from '@ohos/flutter_ohos/src/main/ets/embedding/ohos/FlutterPage';

@Entry
@Component
struct Index {
  build() {
    Row() {
      Column() {
        FlutterPage();
      }
      .width('100%')
    }
    .height('100%')
  }
}