/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

import promptAction from '@ohos.promptAction';
import {
  SERVER,
  GET_NEWS_TYPE,
  GET_NEWS_LIST,
  GET_TAB_DATA_CURRENT_PAGE,
  SERVER_CODE_SUCCESS,
  LOCAL_DATA,
  DEFAULT_SERVER
} from '../constant/CommonConstant';

/**
 * Initiate request for tab data.
 *
 * @param currentPage The current page number.
 * @param pageSize The number of current pages.
 * @param currentIndex The current index.
 * @param callback The function callback.
 */
import http from '@ohos.net.http';

export async function getData() {
  let httpRequest = http.createHttp();
  let url= "https://service-info-private.oss-cn-hangzhou.aliyuncs.com/1304420266526275/template/15771631-c408-489d-aff1-ae2e24ebb87e.json";
  let promise = httpRequest.request(
    // 请求url地址
    url,
    {
      // 请求方式
      method: http.RequestMethod.POST,
      // 可选，默认为60s
      connectTimeout: 60000,
      // 可选，默认为60s
      readTimeout: 60000,
      // 开发者根据自身业务需要添加header字段
      header: {
        'Content-Type': 'application/json'
      }
    });
  promise.then((data) => {
    if (data.responseCode === http.ResponseCode.OK) {
      console.info('11111111111111111111111112code:' + data.responseCode);
      console.info('111111111111111111111111123Result:' + data.result);
      console.info('111111111111111111111111134Result:' + data);
      console.info('11111111111111111111111113code:' + data.responseCode);
      return data.result;
    }
  }).catch((err) => {
    console.info('111111111111111111111111111error:' + JSON.stringify(err));
    return JSON.stringify(err);
  });
}