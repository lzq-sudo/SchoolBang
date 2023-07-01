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
import Logger from '@bundle:com.example.component/entry/ets/common/utils/Logger';
import HobbyBean from '@bundle:com.example.component/entry/ets/common/bean/HobbyBean';
import CommonUtils from '@bundle:com.example.component/entry/ets/common/utils/CommonUtils';
import CommonConstants from '@bundle:com.example.component/entry/ets/common/constants/CommonConstants';
export default class CustomDialogWidget extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__hobbyBeans = new ObservedPropertyObjectPU([], this, "hobbyBeans");
        this.__hobbies = new SynchedPropertySimpleTwoWayPU(params.hobbies, this, "hobbies");
        this.controller = undefined;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.hobbyBeans !== undefined) {
            this.hobbyBeans = params.hobbyBeans;
        }
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__hobbyBeans.purgeDependencyOnElmtId(rmElmtId);
        this.__hobbies.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__hobbyBeans.aboutToBeDeleted();
        this.__hobbies.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get hobbyBeans() {
        return this.__hobbyBeans.get();
    }
    set hobbyBeans(newValue) {
        this.__hobbyBeans.set(newValue);
    }
    get hobbies() {
        return this.__hobbies.get();
    }
    set hobbies(newValue) {
        this.__hobbies.set(newValue);
    }
    setController(ctr) {
        this.controller = ctr;
    }
    aboutToAppear() {
        let context = getContext(this);
        if (CommonUtils.isEmpty(context) || CommonUtils.isEmpty(context.resourceManager)) {
            Logger.error(CommonConstants.TAG_CUSTOM, 'context or resourceManager is null');
            return;
        }
        let manager = context.resourceManager;
        manager.getStringArrayValue($r('app.strarray.hobbies_data').id, (error, hobbyArray) => {
            if (!CommonUtils.isEmpty(error)) {
                Logger.error(CommonConstants.TAG_CUSTOM, 'error = ' + JSON.stringify(error));
            }
            else {
                hobbyArray.forEach((hobbyItem) => {
                    let hobbyBean = new HobbyBean();
                    hobbyBean.label = hobbyItem;
                    hobbyBean.isChecked = false;
                    this.hobbyBeans.push(hobbyBean);
                });
            }
        });
    }
    /**
     * Set hobbies value
     *
     * @param {HobbyBean[]} hobby bean array
     */
    setHobbiesValue(hobbyBeans) {
        if (CommonUtils.isEmptyArr(hobbyBeans)) {
            Logger.error(CommonConstants.TAG_HOME, 'hobbyBeans length is 0');
            return;
        }
        let hobbiesText = '';
        hobbiesText = hobbyBeans.filter((isCheckItem) => isCheckItem === null || isCheckItem === void 0 ? void 0 : isCheckItem.isChecked)
            .map((checkedItem) => {
            return checkedItem.label;
        })
            .join(CommonConstants.COMMA);
        if (hobbiesText.length > 0) {
            this.hobbies = hobbiesText;
        }
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("view/CustomDialogWidget.ets(70:5)");
            Column.width(CommonConstants.COMMON_DIALOG_WIDTH);
            Column.padding({
                top: { "id": 16777459, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                bottom: { "id": 16777456, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
            });
            Column.borderRadius({ "id": 16777458, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Column.backgroundColor(Color.White);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777368, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.debugLine("view/CustomDialogWidget.ets(71:7)");
            Text.fontColor({ "id": 16777228, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.fontSize({ "id": 16777573, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.lineHeight({ "id": 16777575, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.fontWeight(CommonConstants.BIGGER);
            Text.alignSelf(ItemAlign.Start);
            Text.margin({ left: { "id": 16777574, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            List.create();
            List.debugLine("view/CustomDialogWidget.ets(78:7)");
            List.margin({
                top: { "id": 16777503, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                bottom: { "id": 16777502, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
            });
            List.divider({
                strokeWidth: { "id": 16777460, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                color: { "id": 16777230, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
            });
            List.listDirection(Axis.Vertical);
            List.edgeEffect(EdgeEffect.None);
            List.width(CommonConstants.FULL_WIDTH);
            List.height({ "id": 16777532, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            if (!isInitialRender) {
                List.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const itemHobby = _item;
                {
                    const isLazyCreate = true;
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ListItem.create(deepRenderFunction, isLazyCreate);
                        ListItem.debugLine("view/CustomDialogWidget.ets(80:11)");
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const observedShallowRender = () => {
                        this.observeComponentCreation(itemCreation);
                        ListItem.pop();
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation(itemCreation);
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Row.create();
                            Row.debugLine("view/CustomDialogWidget.ets(81:13)");
                            Row.height({ "id": 16777531, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                            Row.margin({
                                top: { "id": 16777533, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                                bottom: { "id": 16777530, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
                            });
                            if (!isInitialRender) {
                                Row.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(itemHobby.label);
                            Text.debugLine("view/CustomDialogWidget.ets(82:15)");
                            Text.fontSize({ "id": 16777500, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                            Text.fontColor({ "id": 16777228, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                            Text.layoutWeight(CommonConstants.WEIGHT_ONE);
                            Text.textAlign(TextAlign.Start);
                            Text.fontWeight(CommonConstants.BIGGER);
                            Text.margin({ left: { "id": 16777499, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Toggle.create({ type: ToggleType.Checkbox, isOn: false });
                            Toggle.debugLine("view/CustomDialogWidget.ets(89:15)");
                            Toggle.onChange((isCheck) => {
                                itemHobby.isChecked = isCheck;
                            });
                            Toggle.width({ "id": 16777577, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                            Toggle.height({ "id": 16777577, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                            Toggle.margin({ right: { "id": 16777576, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
                            if (!isInitialRender) {
                                Toggle.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Toggle.pop();
                        Row.pop();
                        ListItem.pop();
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.updateFuncByElmtId.set(elmtId, itemCreation);
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Row.create();
                            Row.debugLine("view/CustomDialogWidget.ets(81:13)");
                            Row.height({ "id": 16777531, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                            Row.margin({
                                top: { "id": 16777533, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                                bottom: { "id": 16777530, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
                            });
                            if (!isInitialRender) {
                                Row.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(itemHobby.label);
                            Text.debugLine("view/CustomDialogWidget.ets(82:15)");
                            Text.fontSize({ "id": 16777500, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                            Text.fontColor({ "id": 16777228, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                            Text.layoutWeight(CommonConstants.WEIGHT_ONE);
                            Text.textAlign(TextAlign.Start);
                            Text.fontWeight(CommonConstants.BIGGER);
                            Text.margin({ left: { "id": 16777499, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Toggle.create({ type: ToggleType.Checkbox, isOn: false });
                            Toggle.debugLine("view/CustomDialogWidget.ets(89:15)");
                            Toggle.onChange((isCheck) => {
                                itemHobby.isChecked = isCheck;
                            });
                            Toggle.width({ "id": 16777577, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                            Toggle.height({ "id": 16777577, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                            Toggle.margin({ right: { "id": 16777576, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
                            if (!isInitialRender) {
                                Toggle.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Toggle.pop();
                        Row.pop();
                        ListItem.pop();
                    };
                    if (isLazyCreate) {
                        observedShallowRender();
                    }
                    else {
                        observedDeepRender();
                    }
                }
            };
            this.forEachUpdateFunction(elmtId, this.hobbyBeans, forEachItemGenFunction, itemHobby => itemHobby.label, false, false);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        List.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("view/CustomDialogWidget.ets(118:7)");
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel({ "id": 16777288, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Button.debugLine("view/CustomDialogWidget.ets(119:9)");
            __Button__dialogButtonStyle();
            Button.onClick(() => {
                this.controller.close();
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Blank.create();
            Blank.debugLine("view/CustomDialogWidget.ets(124:9)");
            Blank.backgroundColor({ "id": 16777226, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Blank.width({ "id": 16777445, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Blank.opacity({ "id": 16777444, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Blank.height({ "id": 16777443, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            if (!isInitialRender) {
                Blank.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Blank.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel({ "id": 16777294, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Button.debugLine("view/CustomDialogWidget.ets(129:9)");
            __Button__dialogButtonStyle();
            Button.onClick(() => {
                this.setHobbiesValue(ObservedObject.GetRawObject(this.hobbyBeans));
                this.controller.close();
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
function __Button__dialogButtonStyle() {
    Button.fontSize({ "id": 16777449, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
    Button.fontColor({ "id": 16777227, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
    Button.layoutWeight(CommonConstants.WEIGHT_ONE);
    Button.backgroundColor(Color.White);
    Button.width(CommonConstants.FULL_WIDTH);
    Button.height({ "id": 16777448, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
}
//# sourceMappingURL=CustomDialogWidget.js.map