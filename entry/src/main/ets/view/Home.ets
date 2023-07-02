
import { StyleConstants } from '../common/constants/StyleConstants';
import { BreakpointConstants } from '../common/constants/BreakpointConstants';
import { searchSwiper, classifyTitle, swiperImage } from '../viewmodel/HomeData';
import { productData, ProductDataModel, aspectRatio } from '../viewmodel/NewProductData';
import { CommonDataSource } from '../common/utils/CommonDataSource';
import { BreakPointType } from '../common/utils/BreakpointSystem';
import router from '@ohos.router';

/**
 * Home tab content
 */
@Component
@Preview
export default struct Home {
  @State changeValue: string = '';
  @State submitValue: string = '';
  @State userSchoolType: String = '';
  @StorageProp('currentBreakpoint') currentBreakpoint: string = 'sm';
  // @State commodityList: Commodity[] = [];
  @State titleIndex: number = 0;
  @State activityTitleIndex: number = 0;
  // private localDataManger: LocalDataManager = LocalDataManager.instance();
  private onClickItem: (Commodity) => void;
  private userSchoolTypeArray: Resource = $r('app.strarray.user_school_type_array');

  controller: SearchController = new SearchController();

  @Builder SearchTitle() {
    Column() {
      Row() {
        Image($r('app.media.search'))
          .width($r('app.float.vp_twenty'))
          .height($r('app.float.vp_twenty'))
          .margin({
            left: $r('app.float.vp_twelve'),
            right: $r('app.float.vp_eight')
          })
        Swiper() {
          ForEach(searchSwiper, (item: Resource) => {
            Column() {
              Text(item)
                .fontSize($r('app.float.small_font_size'))
                .fontColor(Color.Black)
            }
            .alignItems(HorizontalAlign.Start)
          }, item => JSON.stringify(item))
        }
        .autoPlay(true)
        .loop(true)
        .vertical(true)
        .indicator(false)
      }
      .height($r('app.float.search_swiper_height'))
      .width(StyleConstants.FULL_WIDTH)
      .borderRadius($r('app.float.vp_twenty'))
      .backgroundColor(Color.White)
    }
    .width(StyleConstants.FULL_WIDTH)
    .padding({ top: $r('app.float.vp_twelve'), bottom: $r('app.float.vp_twelve') })
    .onClick(() => {
      router.replaceUrl({ url: 'pages/Search' });
    })
  }

  @Builder ClassifyTitle() {
    Flex({ justifyContent: FlexAlign.SpaceBetween }) {
      ForEach(classifyTitle, (item: Resource, index: number) => {
        Text(item)
          .fontSize($r('app.float.middle_font_size'))
          .opacity(this.titleIndex === index ? StyleConstants.FULL_OPACITY : StyleConstants.EIGHTY_OPACITY)
          .fontWeight(this.titleIndex === index ? StyleConstants.FONT_WEIGHT_SEVEN : StyleConstants.FONT_WEIGHT_FOUR)
          .fontColor(Color.Black)
          .onClick(() => {
            this.titleIndex = index;
          })
      }, item => JSON.stringify(item))
      Row() {
        Image($r('app.media.ic_split_line'))
          .width($r('app.float.vp_one'))
          .height($r('app.float.vp_fourteen'))
        Image($r('app.media.more_icon'))
          .width($r('app.float.vp_sixteen'))
          .height($r('app.float.vp_sixteen'))
          .margin({
            left: $r('app.float.vp_two'),
            right: $r('app.float.vp_two')
          })
        Text('其他')
          .fontSize($r('app.float.middle_font_size'))
          .fontColor(Color.Black)
          .opacity(this.titleIndex === undefined ? StyleConstants.FULL_OPACITY : StyleConstants.EIGHTY_OPACITY)
          .fontWeight(this.titleIndex === undefined ?
          StyleConstants.FONT_WEIGHT_SEVEN : StyleConstants.FONT_WEIGHT_FOUR)
      }
      .onClick(() => {
        this.titleIndex = undefined;
      })
    }
    .margin({ top: $r('app.float.vp_eight') })
    .width(StyleConstants.FULL_WIDTH)
  }

  @Builder CustomSwiper() {
    Swiper() {
      ForEach(swiperImage, (item: Resource) => {
        Image(item)
          .width(StyleConstants.FULL_WIDTH)
          .aspectRatio(StyleConstants.IMAGE_ASPECT_RATIO)
          .borderRadius($r('app.float.vp_sixteen'))
          .backgroundColor(Color.White)
      }, item => JSON.stringify(item))
    }
    .indicatorStyle({ selectedColor: $r('app.color.indicator_select') })
    .autoPlay(true)
    .itemSpace(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? 0 : StyleConstants.ITEM_SPACE)
    .width(StyleConstants.FULL_WIDTH)
    .indicator(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM)
    .displayCount(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? StyleConstants.DISPLAY_THREE :
      (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_MD ? StyleConstants.DISPLAY_TWO :
      StyleConstants.DISPLAY_ONE))
    .margin({ top: $r('app.float.vp_twelve'), bottom: $r('app.float.vp_twelve') })
  }

  @Builder ProductList() {
    List({ space: StyleConstants.TWELVE_SPACE }) {
      LazyForEach(new CommonDataSource<ProductDataModel>(productData), (item: ProductDataModel) => {
        ListItem() {
          Column() {
            Image($r('app.media.TsingHua'))
              .width(StyleConstants.FULL_WIDTH)
              .aspectRatio(new BreakPointType({
                sm: aspectRatio.sm,
                md: aspectRatio.md,
                lg: aspectRatio.lg
              }).getValue(this.currentBreakpoint))
              .objectFit(ImageFit.Fill)
            Column(){
              if (item.comment) {
                Text(item.comment)
                  .fontSize($r('app.float.smaller_font_size'))
                  .border({
                    width: $r('app.float.vp_one'),
                    color: $r('app.color.three_alpha_black'),
                    radius: $r('app.float.vp_fourteen')
                  })
                  .height($r('app.float.comment_text_height'))
                  .padding({
                    left: $r('app.float.vp_eight'),
                    right: $r('app.float.vp_eight')
                  })
                  .margin({
                    left: $r('app.float.vp_eight'),
                    top: $r('app.float.vp_eight')
                  })
              }
              Text(item.des)
                .fontSize($r('app.float.small_font_size'))
                .margin({
                  top: $r('app.float.vp_eight'),
                  bottom: $r('app.float.vp_eight'),
                  left: $r('app.float.vp_eight')
                })
              Row() {
                Image($r('app.media.ic_person'))
                  .width($r('app.float.vp_twenty'))
                  .height($r('app.float.vp_twenty'))
                Text(item.user)
                  .fontSize($r('app.float.small_font_size'))
                  .margin({ left: $r('app.float.vp_eight') })
              }
              .margin({
                left: $r('app.float.vp_ten'),
                bottom: $r('app.float.vp_ten')
              })
            }
            .width(StyleConstants.FULL_WIDTH)
            .backgroundColor(Color.White)
            .alignItems(HorizontalAlign.Start)
            .justifyContent(FlexAlign.Start)
            .borderRadius({ bottomLeft: $r('app.float.vp_eight'), bottomRight: $r('app.float.vp_eight') })
          }
          .borderRadius($r('app.float.vp_eight'))
        }
        .margin({
          left: $r('app.float.vp_six'),
          right: $r('app.float.vp_six')
        })
      }, item => JSON.stringify(item))
    }
    .lanes(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ?
    StyleConstants.DISPLAY_TWO : StyleConstants.DISPLAY_THREE)
  }

  build() {

    Stack({ alignContent: Alignment.Top }) {
      Image($r('app.media.yelloBack'))
        .width(StyleConstants.FULL_WIDTH)
        .height($r('app.float.image_background_height'))
        .objectFit(ImageFit.Auto)
      Flex({ direction: FlexDirection.Column }) {
        this.SearchTitle()
        Scroll() {
          Column() {
            this.ClassifyTitle()
            this.CustomSwiper()
            this.ProductList()

            // CommodityList({
            //   commodityList: $commodityList,
            //   column: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? StyleConstants.DISPLAY_FOUR :
            //     (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_MD ?
            //     StyleConstants.DISPLAY_THREE : StyleConstants.DISPLAY_TWO),
            //   onClickItem: (data: Commodity) => this.onClickItem(data)
            // })
          }
        }
        .scrollBar(BarState.Off)
      }
      .padding({ left: $r('app.float.vp_twelve'), right: $r('app.float.vp_twelve') })
    }

    // Column() {

    //   Row() {
    //     Image($r('app.media.TsingHua'))
    //       .width($r('app.float.image_back_size'))
    //       .height($r('app.float.image_back_size'))
    //       .onClick(() => {
    //         CommonUtils.textPickerDialog(this.userSchoolTypeArray, (typeValue: string) => {
    //           this.userSchoolType = typeValue;
    //         });
    //       })
    //     Search({ value: this.changeValue, placeholder: '企业内推', controller: this.controller })
    //       .searchButton('搜索')
    //       .width(320)
    //       .height(40)
    //       .backgroundColor(Color.White)
    //       .placeholderColor(Color.Grey)
    //       .placeholderFont({ size: 14, weight: 400 })
    //       .textFont({ size: 14, weight: 400 })
    //       .onSubmit((value: string) => {
    //         this.submitValue = value;
    //       })
    //       .onChange((value: string) => {
    //         this.changeValue = value;
    //       })
    //       .margin(20)
    //   }.justifyContent(FlexAlign.SpaceBetween)
    //
    //   TabBar()
    // }
    // .width(FULL_WIDTH)
    // .backgroundColor($r('app.color.listColor'))
    // .justifyContent(FlexAlign.Center)
  }
}
