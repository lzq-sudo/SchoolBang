

import { FULL_WIDTH } from '../common/constant/CommonConstant';
import LaunchSubPage from '../view/LaunchSubPage';
import router from '@ohos.router';
import Constants from '../common/constants/Constants';


/**
 * Home tab content
 */
@Component
export default struct Launch {
  build() {
    Stack() {
      Image($r('app.media.ic_add'))
        .width($r('app.float.btn_size'))
        .height($r('app.float.btn_size'))
        .margin({ bottom: $r('app.float.btn_margin'), right: $r('app.float.btn_margin') })
        .onClick(() => {
          router.pushUrl({ url: 'pages/LaunchEditPage' });
        })
    }

    // Column() {
    //   LaunchSubPage()
    // }
    // .width(FULL_WIDTH)
    // .backgroundColor($r('app.color.listColor'))
    // .justifyContent(FlexAlign.Center)
  }
}
