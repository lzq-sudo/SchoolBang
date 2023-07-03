

import router from '@ohos.router';
import Constants from '../common/constants/Constants';
import { fileSelect, fileUpload } from '../common/utils/FileUtil';
import { NewsFile, NewsData } from '../common/bean/NewsData';
import NewsViewModel from '../viewmodel/NewsViewModel';
import { showToast } from '../common/utils/ToastUtil';
import UploadingLayout from '../view/UploadingLayout';
import TextLaunchCommonWidget from '../view/TextLaunchCommonWidget';
import CommonUtils from '../common/utils/CommonUtils';

/**
 * LaunchEditPage.
 */
@Entry
@Component
@Preview
export default struct LaunchEditPage {
  title: string = '';
  content: string = '';
  @State launchType: string = '';
  private launchTypeArray: Resource = $r('app.strarray.launch_type_array');

  @State imageUri: string = '';
  @State isUploading: boolean = false;

  selectImage() {
    fileSelect().then((uri) => {
      this.imageUri = uri || '';
    });
  }

  uploadNewsData() {
    if (!this.title) {
      showToast($r('app.string.prompt_no_title'));
      return;
    }
    if (!this.content) {
      showToast($r('app.string.prompt_no_content'));
      return;
    }
    if (!this.imageUri) {
      showToast($r('app.string.prompt_no_file'));
      return;
    }
    this.isUploading = true;
    let serverData = fileUpload(getContext(this), this.imageUri);
    serverData.then((data) => {
      let imageUrl = data.data;
      let newsFile = new NewsFile(0, imageUrl, 0, 0);
      let newsData: NewsData = new NewsData(this.title, this.content, [newsFile], '');
      NewsViewModel.uploadNews(newsData).then(() => {
        this.isUploading = false;
        globalThis.isBackRouter = true;
        router.back();
      }).catch(() => {
        this.isUploading = false;
        showToast($r('app.string.upload_error_message'));
      });
    }).catch(() => {
      this.isUploading = false;
      showToast($r('app.string.upload_error_message'));
    });
  }

  build() {
    Stack() {
      Navigation() {
        Column() {
          Column() {
            TextLaunchCommonWidget({
              title: $r('app.string.title_launch_type'),
              content: $launchType,
              onItemClick: () => {
                CommonUtils.textPickerDialog(this.launchTypeArray, (typeValue: string) => {
                  this.launchType = typeValue;
                });
              }
            })
            Divider()
              .opacity($r('app.float.divider_opacity'))
              .color($r('app.color.title_color'))
              .width(Constants.DIVIDER_WIDTH)

            TextInput({ placeholder: $r('app.string.title_default_text') })
              .fontSize($r('app.float.title_font'))
              .placeholderFont({ size: $r('app.float.title_font') })
              .margin({ top: $r('app.float.common_padding') })
              .fontColor($r('app.color.title_color'))
              .backgroundColor(Color.White)
              .onChange((value: string) => {
                this.title = value;
              })
              .width(Constants.FULL_PERCENT)
              .height($r('app.float.input_height'))
            Divider()
              .opacity($r('app.float.divider_opacity'))
              .color($r('app.color.title_color'))
              .width(Constants.DIVIDER_WIDTH)
            TextArea({ placeholder: $r('app.string.content_default_text') })
              .placeholderFont({ size: $r('app.float.title_font') })
              .fontColor($r('app.color.title_color'))
              .height($r('app.float.area_height'))
              .fontSize($r('app.float.title_font'))
              .margin({ top: $r('app.float.normal_padding') })
              .backgroundColor(Color.White)
              .onChange((value: string) => {
                this.content = value;
              })
            Scroll() {
              Row() {
                Image(this.imageUri ? this.imageUri : $r('app.media.ic_add_pic'))
                  .width($r('app.float.img_size'))
                  .height($r('app.float.img_size'))
                  .objectFit(ImageFit.Cover)
                  .onClick(this.selectImage.bind(this))
              }
              .padding($r('app.float.common_padding'))
            }
            .width(Constants.FULL_PERCENT)
            .scrollable(ScrollDirection.Horizontal)
            .align(Alignment.Start)
          }
          .borderRadius($r('app.float.edit_view_radius'))
          .backgroundColor(Color.White)
          .width(Constants.FULL_PERCENT)

          Button($r('app.string.release_btn'))
            .fontSize($r('app.float.title_font'))
            .backgroundColor($r('app.color.logoYellow'))
            .fontColor($r('app.color.black'))
            .height($r('app.float.release_btn_height'))
            .width($r('app.float.release_btn_width'))
            .margin({ bottom: $r('app.float.common_padding') })
            .onClick(this.uploadNewsData.bind(this))
        }
        .padding({
          left: $r('app.float.common_padding'),
          right: $r('app.float.common_padding'),
          bottom: $r('app.float.common_padding')
        })
        .height(Constants.FULL_PERCENT)
        .justifyContent(FlexAlign.SpaceBetween)
      }
      .height(Constants.FULL_PERCENT)
      .title(Constants.RELEASE_TITLE)
      .titleMode(NavigationTitleMode.Full)
      .backgroundColor($r('app.color.listColor'))

      if (this.isUploading) {
        UploadingLayout()
      }
    }
  }

  pageTransition() {
    PageTransitionEnter({ duration: 600, curve: Curve.Smooth }).slide(SlideEffect.Bottom);
    PageTransitionExit({ duration: 600, curve: Curve.Smooth }).slide(SlideEffect.Right);
  }
}

