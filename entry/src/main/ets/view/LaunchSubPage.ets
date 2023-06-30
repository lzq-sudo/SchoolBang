/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License,Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import NewsList from '../view/newslist';
import { TabBars, FULL_HEIGHT } from '../common/constant/CommonConstant';
import { getData } from '../common/utils/DataUtilsTest';
/**
 * The tabBar component.
 */
@Component
@Preview
@Entry
export default struct LaunchSubPage {
  @State tabBarArray: Array<any> = TabBars.DEFAULT_SERVICE_TYPES;
  @State currentIndex: number = 0;
  @State currentPage: number = 1;
  @State abc:String = '';
  controller: WebController = new WebController();


  // @Builder TabBuilder(index: number) {
  //   Column() {
  //     Text(this.tabBarArray[index].name)
  //       .height(FULL_HEIGHT)
  //       .padding({ left: TabBars.HORIZONTAL_PADDING, right: TabBars.HORIZONTAL_PADDING })
  //       .fontSize(this.currentIndex === index ? TabBars.SELECT_TEXT_FONT_SIZE : TabBars.UN_SELECT_TEXT_FONT_SIZE)
  //       .fontWeight(this.currentIndex === index ? TabBars.SELECT_TEXT_FONT_WEIGHT : TabBars.UN_SELECT_TEXT_FONT_WEIGHT)
  //       .fontColor($r('app.color.fontColor_text3'))
  //   }
  // }

  // aboutToAppear() {
  //   // 请求新闻类别
  //   loadNewsTypes({
  //     onSuccess: (value) => this.tabBarArray = value,
  //     onFail: () => this.tabBarArray = TabBars.DEFAULT_SERVICE_TYPES
  //   });
  // }

  // aboutToAppear() {
  //   // Request news data.
  //   // @ts-ignore
  //   this.abc = getData()
  // }

  build() {
    Column() {
      Text($r('app.string.text_personal_title'))
        .fontColor(Color.Black)
        .fontSize($r('app.float.personal_font_size'))
        .alignSelf(ItemAlign.Center)

      // Column() {
      //   Web({ src: 'https://www.baidu.com/', controller: this.controller })
      // }
      // @ts-ignore
      // Text(this.abc)
      //   .fontColor(Color.Black)
      //   .fontSize($r('app.float.personal_font_size'))
      //   .alignSelf(ItemAlign.Center)
    }

    // Column() {
    //   Image($r('app.media.ic_back'))
    //     .width($r('app.float.image_back_size'))
    //   Text($r('app.string.text_personal_title'))
    //     .fontColor(Color.Black)
    //     .fontSize($r('app.float.personal_font_size'))
    //     .alignSelf(ItemAlign.Center)
    // }
    // .backgroundColor($r('app.color.column_background_color'))
  }
}