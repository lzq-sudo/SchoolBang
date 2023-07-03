
import router from '@ohos.router';

/**
 * Launch content
 */
@Entry
@Component
export default struct Launch {

  aboutToAppear() {
    setTimeout(() => {
      router.pushUrl({ url: 'pages/LaunchEditPage' });
    }, 2000);
  }

  build() {}

}
