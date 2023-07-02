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
            { "id": 16777433, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
            { "id": 16777451, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
            { "id": 16777428, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
            { "id": 16777218, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
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
            new ItemData({ "id": 16777352, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777286, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777328, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777459, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777347, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777462, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777384, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777473, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777351, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777460, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777325, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777468, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777322, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777298, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777366, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777478, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" })
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
            new ItemData({ "id": 16777345, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777283, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777344, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777338, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777480, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777343, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777336, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777454, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777341, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777337, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777270, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777342, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" })
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
            new ItemData({ "id": 16777380, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777458, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777383, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777378, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777291, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, null),
            new ItemData({ "id": 16777379, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777287, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, null),
            new ItemData({ "id": 16777377, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777444, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, null),
            new ItemData({ "id": 16777382, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777471, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, null),
            new ItemData({ "id": 16777381, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777440, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, null)
        ];
        return settingListData;
    }
}
export default new MainViewModel();
//# sourceMappingURL=MainViewModel.js.map