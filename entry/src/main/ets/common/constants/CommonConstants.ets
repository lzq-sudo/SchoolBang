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

/**
 * Common constants for all features.
 */
export default class CommonConstants {
  static readonly LAUNCHER_DELAY_TIME: number = 2000; // 2000ms

  /**
   * Input length of the account.
   */
  static readonly INPUT_ACCOUNT_LENGTH = 11;

  /**
   *  Input length of the password.
   */
  static readonly INPUT_PASSWORD_LENGTH = 8;

  /**
   *  Left padding of the input box
   */
  static readonly INPUT_PADDING_LEFT = 0;

  /**
   * Delay time of simulated login
   */
  static readonly LOGIN_DELAY_TIME = 2000;

  /**
   * Common Spacing of Components
   */
  static readonly COMMON_SPACE = 12;

  /**
   * Title text of the home page
   */
  static readonly HOME_TITLE = '首页';

  /**
   * Title text of the setting page
   */
  static readonly LAUNCH_TITLE = '发布';

  /**
   * Title text of the setting page
   */
  static readonly MINE_TITLE = '我的';

  /**
   * Spacing of other login methods
   */
  static readonly LOGIN_METHODS_SPACE = 44;

  /**
   * The width or height of the component is spread across the parent component.
   */
  static readonly FULL_PARENT = '100%';

  /**
   * The width of button
   */
  static readonly BUTTON_WIDTH = '90%';

  /**
   * The width of register button
   */
  static readonly REGISTER_BUTTON_WIDTH = '40%';

  /**
   * Home tab index
   */
  static readonly HOME_TAB_INDEX = 0;

  /**
   * Launch tab index
   */
  static readonly LAUNCH_TAB_INDEX = 1;

  /**
   * Mine tab index
   */
  static readonly MINE_TAB_INDEX = 2;

  /**
   * The entry ability tag.
   */
  static readonly TAG_ABILITY: string = 'EntryAbility';

  /**
   * The home page tag.
   */
  static readonly TAG_HOME: string = 'HomePage';

  /**
   * The Common utils tag.
   */
  static readonly TAG_COMMON_UTILS: string = 'CommonUtils';

  /**
   * Custom dialog widget tag.
   */
  static readonly TAG_CUSTOM: string = 'CustomDialogWidget';

  /**
   * Width the percentage of the 100.
   */
  static readonly FULL_WIDTH: string = '100%';

  /**
   * Height the percentage of the 100.
   */
  static readonly FULL_HEIGHT: string = '100%';

  /**
   * Date year
   */
  static readonly DATE_YEAR: string = '年';

  /**
   * Date month
   */
  static readonly DATE_MONTH: string = '月';

  /**
   * Date day
   */
  static readonly DATE_DAY: string = '日';

  /**
   * Date dialog start time.
   */
  static readonly START_TIME: string = '1900-1-1';

  /**
   * Date dialog select time.
   */
  static readonly SELECT_TIME: string = '1990-1-1';

  /**
   * Image back margin left of the 7.2.
   */
  static readonly BACK_MARGIN_LEFT: string = '7.2%';

  /**
   * Image avatar margin top of the 5.5.
   */
  static readonly AVATAR_MARGIN_TOP: string = '5.5%';

  /**
   * Text personal margin top of the 2.1.
   */
  static readonly PERSONAL_MARGIN_TOP: string = '2.1%';

  /**
   * Common dialog width of the 93.3.
   */
  static readonly COMMON_DIALOG_WIDTH: string = '93.3%';

  /**
   * Join comma
   */
  static readonly COMMA: string = '，';

  /**
   * Image back margin top of the 19.
   */
  static readonly BACK_MARGIN_TOP: number = 19;

  /**
   * Font weight of the 500.
   */
  static readonly BIGGER: number = 500;

  /**
   * Dialog y-axis offset distance of the 20.
   */
  static readonly DY_OFFSET: number = -20;

  /**
   * Current month plus one.
   */
  static readonly PLUS_ONE: number = 1;

  /**
   * Layout weight size of the 1.
   */
  static readonly WEIGHT_ONE: number = 1;

  /**
   * Text common max lines of the 1.
   */
  static readonly ONE_LINES: number = 1;

}

