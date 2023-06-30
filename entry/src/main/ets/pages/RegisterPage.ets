/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

import Context from '@ohos.app.ability.common';
import CommonUtils from '../common/utils/CommonUtils';
import CommonConstants from '../common/constants/CommonConstants';
import TextCommonWidget from '../view/TextCommonWidget';
import TextRegisterCommonWidget from '../view/TextRegisterCommonWidget';
import Logger from '../common/utils/Logger';
import router from '@ohos.router';
import prompt from '@ohos.promptAction';
import CustomDialogWidget from '../view/CustomDialogWidget';


@Extend(TextInput) function inputStyle () {
  .placeholderColor($r('app.color.placeholder_color'))
  .height($r('app.float.login_input_height'))
  .fontSize($r('app.float.big_text_size'))
  .backgroundColor($r('app.color.background'))
  .width(CommonConstants.FULL_PARENT)
  .padding({ left: CommonConstants.INPUT_PADDING_LEFT })
  .margin({ top: $r('app.float.input_margin_top') })
}

@Extend(Line) function lineStyle () {
  .width(CommonConstants.FULL_PARENT)
  .height($r('app.float.line_height'))
  .backgroundColor($r('app.color.line_color'))
}

/**
 * There are four dialog modes on the personal information page.
 * Date pop-up window, text pop-up window, warning pop-up window, and custom pop-up window.
 * Developers can modify the content displayed in the pop-up window.
 */
@Entry
@Component
struct RegisterPage {
  @State userType: string = '';
  @State phone: string = '';
  @State school: string = '';
  @State schoolNumber: string = '';
  @State EType: string = '';
  @State password: string = '';
  @State name: string = '';
  @State supplierName: string = '';
  @State userId: string = '';
  @State companyName: string = '';
  @State city: string = '';
  @State educationalBackground: string = '';

  private timeOutId = null;
  private userTypeArray: Resource = $r('app.strarray.user_type_array');
  private schoolArray: Resource = $r('app.strarray.school_type_array');
  private educationalBackgroundArray: Resource = $r('app.strarray.educational_background');

  // customDialogController: CustomDialogController = new CustomDialogController({
  //   builder: CustomDialogWidget({
  //     hobbies: $hobbies,
  //   }),
  //   alignment: DialogAlignment.Bottom,
  //   customStyle: true,
  //   offset: {
  //     dx: 0,
  //     dy: CommonConstants.DY_OFFSET
  //   }
  // });

  @Builder student() {
    this.base()
    TextRegisterCommonWidget({
      title: $r('app.string.title_school'),
      content: $school,
      onItemClick: () => {
        CommonUtils.textPickerDialog(this.schoolArray, (typeValue: string) => {
          this.school = typeValue;
        });
      }
    })
    Line().lineStyle()
    TextInput({ placeholder: $r('app.string.title_school_number') })
      .maxLength(CommonConstants.INPUT_ACCOUNT_LENGTH)
      .type(InputType.Normal)
      .inputStyle().margin({ left: '12vp' })
      .backgroundColor($r('app.color.white'))
      .onChange((value: string) => {
        this.schoolNumber = value;
      })
    Line().lineStyle()
    TextRegisterCommonWidget({
      title: $r('app.string.title_educational_background'),
      content: $educationalBackground,
      onItemClick: () => {
        CommonUtils.textPickerDialog(this.educationalBackgroundArray, (typeValue: string) => {
          this.educationalBackground = typeValue;
        });
      }
    })
    Line().lineStyle()
  }

  @Builder supplier() {
    this.base()
    TextInput({ placeholder: $r('app.string.title_user_id') })
      .maxLength(CommonConstants.INPUT_ACCOUNT_LENGTH)
      .type(InputType.Normal)
      .inputStyle().margin({ left: '12vp' })
      .backgroundColor($r('app.color.white'))
      .onChange((value: string) => {
        this.userId = value;
      })
    Line().lineStyle()
    TextInput({ placeholder: $r('app.string.title_supplier_name') })
      .maxLength(CommonConstants.INPUT_ACCOUNT_LENGTH)
      .type(InputType.Normal)
      .inputStyle().margin({ left: '12vp' })
      .backgroundColor($r('app.color.white'))
      .onChange((value: string) => {
        this.supplierName = value;
      })
    Line().lineStyle()

    TextInput({ placeholder: $r('app.string.title_city') })
      .maxLength(CommonConstants.INPUT_ACCOUNT_LENGTH)
      .type(InputType.Normal)
      .inputStyle().margin({ left: '12vp' })
      .backgroundColor($r('app.color.white'))
      .onChange((value: string) => {
        this.city = value;
      })
    Line().lineStyle()

    TextInput({ placeholder: $r('app.string.title_school') })
      .maxLength(CommonConstants.INPUT_ACCOUNT_LENGTH)
      .type(InputType.Normal)
      .inputStyle().margin({ left: '12vp' })
      .backgroundColor($r('app.color.white'))
      .onChange((value: string) => {
        this.school = value;
      })
    Line().lineStyle()
  }

  @Builder company() {
    this.base()
    TextInput({ placeholder: $r('app.string.title_user_id') })
      .maxLength(CommonConstants.INPUT_ACCOUNT_LENGTH)
      .type(InputType.Normal)
      .inputStyle().margin({ left: '12vp' })
      .backgroundColor($r('app.color.white'))
      .onChange((value: string) => {
        this.userId = value;
      })
    Line().lineStyle()

    TextInput({ placeholder: $r('app.string.title_company_name') })
      .maxLength(CommonConstants.INPUT_ACCOUNT_LENGTH)
      .type(InputType.Normal)
      .inputStyle().margin({ left: '12vp' })
      .backgroundColor($r('app.color.white'))
      .onChange((value: string) => {
        this.companyName = value;
      })
    Line().lineStyle()
  }

  @Builder base() {
    TextInput({ placeholder: $r('app.string.title_phone') })
      .maxLength(CommonConstants.INPUT_ACCOUNT_LENGTH)
      .type(InputType.Normal)
      .inputStyle()
      .margin({ left: '12vp' })
      .backgroundColor($r('app.color.white'))
      .onChange((value: string) => {
        this.phone = value;
      })
    Line().lineStyle()

    TextInput({ placeholder: $r('app.string.title_password') })
      .maxLength(CommonConstants.INPUT_ACCOUNT_LENGTH)
      .type(InputType.Normal)
      .inputStyle().margin({ left: '12vp' })
      .backgroundColor($r('app.color.white'))
      .onChange((value: string) => {
        this.password = value;
      })
    Line().lineStyle()

    TextInput({ placeholder: $r('app.string.title_user_name') })
      .maxLength(CommonConstants.INPUT_ACCOUNT_LENGTH)
      .type(InputType.Normal)
      .inputStyle().margin({ left: '12vp' })
      .backgroundColor($r('app.color.white'))
      .onChange((value: string) => {
        this.name = value;
      })
    Line().lineStyle()
  }

  register() {
    if (this.userType === '' || this.name === '') {
      prompt.showToast({
        message: $r('app.string.input_empty_tips')
      })
    } else {
    if (this.timeOutId === null) {
      this.timeOutId = setTimeout(() => {
        router.replaceUrl({ url: 'pages/MainPage' });
      }, CommonConstants.LOGIN_DELAY_TIME);
    }
    }
  }

  aboutToAppear() {
    let context = getContext(this);
    if ((CommonUtils.isEmpty(context)) || (CommonUtils.isEmpty(context.resourceManager))) {
      Logger.error(CommonConstants.TAG_HOME, 'context or resourceManager is null');
      return;
    }
    let manager = context.resourceManager;
  }

  build() {
    Column() {
      Image($r('app.media.ic_back'))
        .width($r('app.float.image_back_size'))
        .height($r('app.float.image_back_size'))
        .alignSelf(ItemAlign.Start)
        .margin({
          left: CommonConstants.BACK_MARGIN_LEFT,
          top: CommonConstants.BACK_MARGIN_TOP
        })
        .onClick(() => {
          router.replaceUrl({ url: 'pages/LoginPage' });
        })
      Text($r('app.string.text_personal_title'))
        .fontColor(Color.Black)
        .fontSize($r('app.float.personal_font_size'))
        .margin({ top: CommonConstants.PERSONAL_MARGIN_TOP })
        .alignSelf(ItemAlign.Center)
      TextCommonWidget({
        title: $r('app.string.title_user_type'),
        content: $userType,
        onItemClick: () => {
          CommonUtils.textPickerDialog(this.userTypeArray, (typeValue: string) => {
            this.userType = typeValue;
          });
        }
      })
      Line().lineStyle()

      Column() {
        if (this.userType == 'student' || this.userType == '学生') {
          this.student()
        } else if (this.userType == 'supplier' || this.userType == '商家') {
          this.supplier()
        } else if (this.userType == 'company' || this.userType == '企业') {
          this.company()
        }
      }

      Blank()

      Button($r('app.string.register_button'), { type: ButtonType.Capsule })
        .width(CommonConstants.BUTTON_WIDTH)
        .height($r('app.float.login_button_height'))
        .fontSize($r('app.float.normal_text_size'))
        .fontWeight(FontWeight.Medium)
        .fontColor($r('app.color.black'))
        .backgroundColor($r('app.color.logoYellow'))
        .margin({ bottom: $r('app.float.setting_button_bottom')})
        .onClick(() => {
          this.register();
        })
    }
    .backgroundColor($r('app.color.start_window_background'))
    .height(CommonConstants.FULL_PARENT)
    .width(CommonConstants.FULL_PARENT)
    .padding({
      left: $r('app.float.page_padding_hor'),
      right: $r('app.float.page_padding_hor'),
      bottom: $r('app.float.login_page_padding_bottom')
    })
  }
}