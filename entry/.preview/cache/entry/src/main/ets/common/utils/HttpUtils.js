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
import http from '@ohos:net.http';
import ResponseResult from '@bundle:com.example.component/entry/ets/common/bean/ResponseResult';
import Constants from '@bundle:com.example.component/entry/ets/common/constants/Constants';
/**
 * Initiate an HTTP GET request to the specified URL.
 *
 * @param url URL for initiating an HTTP request.
 */
export function httpRequestGet(url) {
    return httpRequest(url, http.RequestMethod.GET);
}
/**
 * Initiate an HTTP POST request to the specified URL.
 *
 * @param url URL for initiating an HTTP request
 * @param newsData Additional data of the request
 * @returns
 */
export function httpRequestPost(url, newsData) {
    return httpRequest(url, http.RequestMethod.POST, newsData);
}
/**
 * Initiates an HTTP request to a given URL.
 *
 * @param url URL for initiating an HTTP request
 * @param method Request method.
 * @param extraData Additional data of the request.
 * @returns Returns {@link ResponseResult}.
 */
function httpRequest(url, method, params) {
    let httpRequest = http.createHttp();
    let responseResult = httpRequest.request(url, {
        method: method,
        readTimeout: Constants.HTTP_READ_TIMEOUT,
        header: {
            'Content-Type': "application/json" /* JSON */
        },
        connectTimeout: Constants.HTTP_READ_TIMEOUT,
        extraData: params || {}
    });
    let serverData = new ResponseResult();
    // Processes the data and returns.
    return responseResult.then((value) => {
        if (value.responseCode === Constants.HTTP_CODE_200) {
            // Obtains the returned data.
            let result = `${value.result}`;
            let resultJson = JSON.parse(result);
            if (resultJson.code === Constants.SERVER_CODE_SUCCESS) {
                serverData.data = resultJson.data;
            }
            serverData.code = resultJson.code;
            serverData.msg = resultJson.msg;
        }
        else {
            serverData.msg = `${{ "id": 16777340, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }}&${value.responseCode}`;
        }
        return serverData;
    }).catch(() => {
        serverData.msg = { "id": 16777340, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
        return serverData;
    });
}
//# sourceMappingURL=HttpUtils.js.map