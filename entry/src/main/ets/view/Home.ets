/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import TabBar from '../view/TabBar';
import { FULL_WIDTH } from '../common/constant/CommonConstant';
import CommonUtils from '../common/utils/CommonUtils';


/**
 * Home tab content
 */
@Component
@Preview
export default struct Home {
  @State changeValue: string = '';
  @State submitValue: string = '';
  @State userSchoolType: String = '';
  private userSchoolTypeArray: Resource = $r('app.strarray.user_school_type_array');

  controller: SearchController = new SearchController();

  build() {
    Column() {

      Row() {
        Image($r('app.media.TsingHua'))
          .width($r('app.float.image_back_size'))
          .height($r('app.float.image_back_size'))
          .onClick(() => {
            CommonUtils.textPickerDialog(this.userSchoolTypeArray, (typeValue: string) => {
              this.userSchoolType = typeValue;
            });
          })
        Search({ value: this.changeValue, placeholder: '企业内推', controller: this.controller })
          .searchButton('搜索')
          .width(320)
          .height(40)
          .backgroundColor(Color.White)
          .placeholderColor(Color.Grey)
          .placeholderFont({ size: 14, weight: 400 })
          .textFont({ size: 14, weight: 400 })
          .onSubmit((value: string) => {
            this.submitValue = value;
          })
          .onChange((value: string) => {
            this.changeValue = value;
          })
          .margin(20)
      }.justifyContent(FlexAlign.SpaceBetween)

      TabBar()
    }
    .width(FULL_WIDTH)
    .backgroundColor($r('app.color.listColor'))
    .justifyContent(FlexAlign.Center)
  }
}
