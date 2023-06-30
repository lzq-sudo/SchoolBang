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
import fs from '@ohos:file.fs';
import request from '@ohos:request';
import picker from '@ohos:file.picker';
import Constants from '@bundle:com.example.component/entry/ets/common/constants/Constants';
import ResponseResult from '@bundle:com.example.component/entry/ets/common/bean/ResponseResult';
import Logger from '@bundle:com.example.component/entry/ets/common/utils/Logger';
import { showToast } from '@bundle:com.example.component/entry/ets/common/utils/ToastUtil';
/**
 * PhotoViewPicker
 *
 * @returns uri The uri for the selected file.
 */
export async function fileSelect() {
    let photoSelectOptions = new picker.PhotoSelectOptions();
    photoSelectOptions.MIMEType = picker.PhotoViewMIMETypes.VIDEO_TYPE;
    photoSelectOptions.maxSelectNumber = 1;
    let photoPicker = new picker.PhotoViewPicker();
    try {
        let photoSelectResult = await photoPicker.select(photoSelectOptions);
        if (photoSelectResult && photoSelectResult.photoUris && photoSelectResult.photoUris.length > 0) {
            let imgUri = photoSelectResult.photoUris[0];
            if (imgUri.indexOf('media/image') < 0) {
                showToast({ "id": 16777334, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                return null;
            }
            return photoSelectResult.photoUris[0];
        }
        else {
            return null;
        }
    }
    catch (err) {
        Logger.error('SelectedImage failed', JSON.stringify(err));
        return null;
    }
}
/**
 * Upload file.
 *
 * @param context Indicates the application BaseContext.
 * @param fileUri The local storage path of the file.
 * @returns the promise returned by the function.
 */
export function fileUpload(context, fileUri) {
    // Obtaining the Application File Path.
    let cacheDir = context.cacheDir;
    let imgName = fileUri.split('/').pop() + '.jpg';
    let dstPath = cacheDir + '/' + imgName;
    let url = Constants.SERVER + Constants.UPLOAD_FILE;
    let uploadRequestOptions = {
        url: url,
        header: {
            'Content-Type': "multipart/form-data" /* FORM */
        },
        method: "POST" /* POST */,
        files: [{
                filename: imgName,
                name: 'file',
                uri: 'internal://cache/' + imgName,
                type: 'jpg'
            }],
        data: []
    };
    let serverData = new ResponseResult();
    return new Promise((resolve, reject) => {
        try {
            // Copy the URI to the cacheDir directory and upload the file.
            let srcFile = fs.openSync(fileUri);
            let dstFile = fs.openSync(dstPath, fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE);
            fs.copyFileSync(srcFile.fd, dstFile.fd);
            fs.closeSync(srcFile);
            fs.closeSync(dstFile);
            // Upload the file.
            request.uploadFile(context, uploadRequestOptions).then((data) => {
                data.on("complete" /* COMPLETE */, (result) => {
                    Logger.info('uploadFile success', JSON.stringify(result));
                    if (result && result.length >= 1) {
                        serverData.code = Constants.SERVER_CODE_SUCCESS;
                        serverData.msg = result[0].message;
                        serverData.data = Constants.IMAGE_PREFIX + result[0].path;
                        resolve(serverData);
                    }
                });
                data.on("fail" /* FAIL */, (result) => {
                    Logger.info('uploadFile failed', JSON.stringify(result));
                    if (result && result.length >= 1) {
                        serverData.msg = { "id": 16777385, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
                        reject(serverData);
                    }
                });
            }).catch((err) => {
                Logger.error('uploadFile failed', JSON.stringify(err));
                reject(serverData);
            });
        }
        catch (err) {
            Logger.error('uploadFile failed', JSON.stringify(err));
            reject(serverData);
        }
    });
}
//# sourceMappingURL=FileUtil.js.map