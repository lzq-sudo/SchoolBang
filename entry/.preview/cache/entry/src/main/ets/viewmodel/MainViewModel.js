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
            { "id": 16777447, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
            { "id": 16777464, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
            { "id": 16777441, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
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
            new ItemData({ "id": 16777362, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777297, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777338, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777472, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777357, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777475, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777397, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777492, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777361, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777473, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777335, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777483, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777332, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777308, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777378, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777497, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" })
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
            new ItemData({ "id": 16777355, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777294, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777354, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777348, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777499, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777353, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777346, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777467, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777351, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777347, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777279, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777352, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" })
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
            new ItemData({ "id": 16777393, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777471, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777396, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777391, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777302, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, null),
            new ItemData({ "id": 16777392, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777298, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, null),
            new ItemData({ "id": 16777390, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777455, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, null),
            new ItemData({ "id": 16777395, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777489, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, null),
            new ItemData({ "id": 16777394, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777450, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, null)
        ];
        return settingListData;
    }
}
export default new MainViewModel();
//# sourceMappingURL=MainViewModel.js.map