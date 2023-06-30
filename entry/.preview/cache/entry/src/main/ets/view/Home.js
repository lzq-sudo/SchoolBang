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
import TabBar from '@bundle:com.example.component/entry/ets/view/TabBar';
import { FULL_WIDTH } from '@bundle:com.example.component/entry/ets/common/constant/CommonConstant';
import CommonUtils from '@bundle:com.example.component/entry/ets/common/utils/CommonUtils';
export default class Home extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__changeValue = new ObservedPropertySimplePU('', this, "changeValue");
        this.__submitValue = new ObservedPropertySimplePU('', this, "submitValue");
        this.__userSchoolType = new ObservedPropertyObjectPU('', this, "userSchoolType");
        this.userSchoolTypeArray = { "id": 16777260, "type": 10009, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
        this.controller = new SearchController();
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.changeValue !== undefined) {
            this.changeValue = params.changeValue;
        }
        if (params.submitValue !== undefined) {
            this.submitValue = params.submitValue;
        }
        if (params.userSchoolType !== undefined) {
            this.userSchoolType = params.userSchoolType;
        }
        if (params.userSchoolTypeArray !== undefined) {
            this.userSchoolTypeArray = params.userSchoolTypeArray;
        }
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__changeValue.purgeDependencyOnElmtId(rmElmtId);
        this.__submitValue.purgeDependencyOnElmtId(rmElmtId);
        this.__userSchoolType.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__changeValue.aboutToBeDeleted();
        this.__submitValue.aboutToBeDeleted();
        this.__userSchoolType.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get changeValue() {
        return this.__changeValue.get();
    }
    set changeValue(newValue) {
        this.__changeValue.set(newValue);
    }
    get submitValue() {
        return this.__submitValue.get();
    }
    set submitValue(newValue) {
        this.__submitValue.set(newValue);
    }
    get userSchoolType() {
        return this.__userSchoolType.get();
    }
    set userSchoolType(newValue) {
        this.__userSchoolType.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("view/Home.ets(35:5)");
            Column.width(FULL_WIDTH);
            Column.backgroundColor({ "id": 16777237, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Column.justifyContent(FlexAlign.Center);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("view/Home.ets(37:7)");
            Row.justifyContent(FlexAlign.SpaceBetween);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777408, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.debugLine("view/Home.ets(38:9)");
            Image.width({ "id": 16777483, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.height({ "id": 16777483, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.onClick(() => {
                CommonUtils.textPickerDialog(this.userSchoolTypeArray, (typeValue) => {
                    this.userSchoolType = typeValue;
                });
            });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Search.create({ value: this.changeValue, placeholder: '企业内推', controller: this.controller });
            Search.debugLine("view/Home.ets(46:9)");
            Search.searchButton('搜索');
            Search.width(320);
            Search.height(40);
            Search.backgroundColor(Color.White);
            Search.placeholderColor(Color.Grey);
            Search.placeholderFont({ size: 14, weight: 400 });
            Search.textFont({ size: 14, weight: 400 });
            Search.onSubmit((value) => {
                this.submitValue = value;
            });
            Search.onChange((value) => {
                this.changeValue = value;
            });
            Search.margin(20);
            if (!isInitialRender) {
                Search.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Search.pop();
        Row.pop();
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new TabBar(this, {}, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
if (getPreviewComponentFlag()) {
    previewComponent();
}
else {
    storePreviewComponents(1, "Home", new Home(undefined, {}));
}
//# sourceMappingURL=Home.js.map