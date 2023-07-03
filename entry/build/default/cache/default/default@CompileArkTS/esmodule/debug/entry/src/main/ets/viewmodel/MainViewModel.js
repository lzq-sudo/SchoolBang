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
            { "id": 16777612, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
            { "id": 16777613, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
            { "id": 16777614, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
            { "id": 16777615, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
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
            new ItemData({ "id": 16777269, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777672, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777245, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777684, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777264, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777674, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777304, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777688, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777268, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777690, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777242, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777607, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777239, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777611, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777285, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777685, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" })
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
            new ItemData({ "id": 16777262, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777691, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777261, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777255, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777680, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777260, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777253, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777606, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777258, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777254, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777618, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777259, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" })
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
            new ItemData({ "id": 16777300, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777681, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777303, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777298, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777608, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, null),
            new ItemData({ "id": 16777299, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777673, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, null),
            new ItemData({ "id": 16777297, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777602, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, null),
            new ItemData({ "id": 16777302, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777689, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, null),
            new ItemData({ "id": 16777301, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777683, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, null)
        ];
        return settingListData;
    }
}
export default new MainViewModel();
//# sourceMappingURL=MainViewModel.js.map