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
import ItemData from '@bundle:com.example.component/entry/ets/common/bean/ItemData';
/**
 * Binds data to components and provides interfaces.
 */
export class MainViewModel {
    /**
     * Get swiper image data.
     *
     * @return {Array<Resource>} swiperImages.
     */
    getSwiperImages() {
        let swiperImages = [
            { "id": 16777518, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
            { "id": 16777519, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
            { "id": 16777520, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
            { "id": 16777521, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
        ];
        return swiperImages;
    }
    /**
     * Get data of the first grid.
     *
     * @return {Array<PageResource>} firstGridData.
     */
    getFirstGridData() {
        let firstGridData = [
            new ItemData({ "id": 16777261, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777560, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777237, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777569, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777256, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777562, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777293, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777573, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777260, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777575, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777234, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777513, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777231, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777517, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777275, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777570, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" })
        ];
        return firstGridData;
    }
    /**
     * Get data of the second grid.
     *
     * @return {Array<PageResource>} secondGridData.
     */
    getSecondGridData() {
        let secondGridData = [
            new ItemData({ "id": 16777254, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777576, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777253, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777247, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777565, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777252, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777245, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777512, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777250, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777246, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777522, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777251, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" })
        ];
        return secondGridData;
    }
    /**
     * Get data of the setting list.
     *
     * @return {Array<PageResource>} settingListData.
     */
    getSettingListData() {
        let settingListData = [
            new ItemData({ "id": 16777289, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777566, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777292, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777287, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777514, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, null),
            new ItemData({ "id": 16777288, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777561, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, null),
            new ItemData({ "id": 16777286, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777509, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, null),
            new ItemData({ "id": 16777291, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777574, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, null),
            new ItemData({ "id": 16777290, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777568, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, null)
        ];
        return settingListData;
    }
}
export default new MainViewModel();
//# sourceMappingURL=MainViewModel.js.map