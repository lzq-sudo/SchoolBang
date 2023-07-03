
import common from '@ohos.app.ability.common';
import router from '@ohos.router';
import data_preferences from '@ohos.data.preferences';
import Logger from '../common/utils/Logger';
import commonConst from '../common/constants/CommonConstants';

// app preferences name
const SCHOOL_BANG: string = 'SchoolBang';
const IS_LOGIN: string = 'isLogin';

@Entry
@Component
struct SplashIndex {
  context: common.UIAbilityContext = getContext(this) as common.UIAbilityContext;

  // onConfirm() {
  //   let preferences = data_preferences.getPreferences(this.context, H_STORE);
  //   preferences.then((res) => {
  //     res.put(IS_PRIVACY, true).then(() => {
  //       res.flush();
  //       Logger.info('SplashPage','isPrivacy is put success');
  //     }).catch((err) => {
  //       Logger.info('SplashPage','isPrivacy put failed. Cause:' + err);
  //     });
  //   })
  //   this.jumpAdPage();
  // }

  exitApp() {
    this.context.terminateSelf();
  }

  jumpLoginPage() {
    setTimeout(() => {
      router.replaceUrl({ url: 'pages/LoginPage' });
    }, commonConst.LAUNCHER_DELAY_TIME);
  }

  jumpMainPage() {
    setTimeout(() => {
      router.replaceUrl({ url: 'pages/MainPage' });
    }, commonConst.LAUNCHER_DELAY_TIME);
  }

  aboutToAppear() {
    // let preferences = data_preferences.getPreferences(this.context, H_STORE);
    // preferences.then((res) => {
    //   res.get(IS_LOGIN, false).then((isPrivate) => {
    //     if (isPrivate === true) {
          this.jumpLoginPage();
    //     } else {
    //       this.dialogController.open();
    //     }
    //   });
    // });
  }

  aboutToDisappear() {
    clearTimeout();
  }

  build() {
    Column() {
      Image($r('app.media.SchoolLogo'))
        .width('200vp')
        .height($r('app.float.logo_image_size'))
        .margin({ top: '200vp', bottom: $r('app.float.logo_margin_bottom') })

      Text($r('app.string.login_more'))
        .fontSize($r('app.float.normal_text_size'))
        .fontColor($r('app.color.login_more_text_color'))
        .margin({ bottom: $r('app.float.login_more_margin_bottom'), top: $r('app.float.login_more_margin_top') })
    }
    .width('100%')
    .height('100%')
    .backgroundImagePosition({x: 0, y: 0})
    .backgroundColor($r('app.color.start_window_background'))
    .backgroundImageSize({ width: '100%', height: '100%' })
  }
}