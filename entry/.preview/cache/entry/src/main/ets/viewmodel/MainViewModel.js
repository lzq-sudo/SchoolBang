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
            { "id": 16777395, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
            { "id": 16777407, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
            { "id": 16777390, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
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
            new ItemData({ "id": 16777325, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777269, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777301, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777413, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777320, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777415, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777357, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777425, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777324, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777414, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777298, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777421, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777295, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777279, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777339, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777430, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" })
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
            new ItemData({ "id": 16777318, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777267, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777317, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777311, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777432, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777316, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777309, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777410, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777314, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777310, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777257, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777315, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" })
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
            new ItemData({ "id": 16777353, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777412, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777356, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777351, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777273, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, null),
            new ItemData({ "id": 16777352, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777270, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, null),
            new ItemData({ "id": 16777350, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777402, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, null),
            new ItemData({ "id": 16777355, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777423, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, null),
            new ItemData({ "id": 16777354, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777398, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, null)
        ];
        return settingListData;
    }
}
export default new MainViewModel();
//# sourceMappingURL=MainViewModel.js.map