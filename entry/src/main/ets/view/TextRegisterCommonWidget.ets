

import CommonConstants from '../common/constants/CommonConstants';

@Component
export default struct TextCommonWidget {
  @Link content: string;
  private textImage: Resource;
  private title: Resource;
  onItemClick: () => void;

  build() {
    Row() {
      Text(this.title)
        .fontSize($r('app.float.text_size'))
        .margin({ left: $r('app.float.image_left_distance') })
        .height(CommonConstants.FULL_HEIGHT)
        .fontColor($r('app.color.other_login_text_color'))
      Text(this.content)
        .fontSize($r('app.float.text_size'))
        .textAlign(TextAlign.End)
        .textOverflow({ overflow: TextOverflow.Ellipsis })
        .maxLines(CommonConstants.ONE_LINES)
        .margin({
          left: $r('app.float.content_left_distance'),
          right: $r('app.float.content_right_distance')
        })
        .layoutWeight(CommonConstants.WEIGHT_ONE)
        .width(CommonConstants.FULL_WIDTH)
      Image($r('app.media.ic_arrow'))
        .width($r('app.float.arrow_image_width'))
        .height($r('app.float.arrow_image_height'))
        .margin({ right: $r('app.float.arrow_right_distance') })
    }
    .margin({ top: '8' })
    .borderRadius($r('app.float.row_radius'))
    .backgroundColor(Color.White)
    .width(CommonConstants.COMMON_DIALOG_WIDTH)
    .height('40')
    .onClick(this.onItemClick)
  }
}