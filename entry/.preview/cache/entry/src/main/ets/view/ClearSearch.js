import { StyleConstants } from '@bundle:com.example.component/entry/ets/common/constants/StyleConstants';
export default class ClearSearch extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__searchArr = new SynchedPropertyObjectTwoWayPU(params.searchArr, this, "searchArr");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__searchArr.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__searchArr.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get searchArr() {
        return this.__searchArr.get();
    }
    set searchArr(newValue) {
        this.__searchArr.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Flex.create({ alignItems: ItemAlign.Center });
            Flex.debugLine("view/ClearSearch.ets(9:5)");
            if (!isInitialRender) {
                Flex.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (this.searchArr.length > 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Text.create({ "id": 16777377, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                        Text.debugLine("view/ClearSearch.ets(11:9)");
                        Text.fontSize({ "id": 16777558, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                        Text.fontColor({ "id": 16777264, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                        Text.fontWeight(StyleConstants.FONT_WEIGHT);
                        Text.height(StyleConstants.RECENT_TEXT_HEIGHT);
                        Text.layoutWeight(StyleConstants.LAYOUT_ClEAN_WEIGHT);
                        Text.margin({
                            left: { "id": 16777622, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                            top: { "id": 16777533, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                            bottom: { "id": 16777532, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
                        });
                        if (!isInitialRender) {
                            Text.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    Text.pop();
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Image.create({ "id": 16777488, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                        Image.debugLine("view/ClearSearch.ets(23:9)");
                        Image.height(StyleConstants.DELETE_IMAGE_HEIGHT);
                        Image.width(StyleConstants.DELETE_IMAGE_WIDTH);
                        Image.margin({ right: { "id": 16777530, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
                        Image.onClick(() => {
                            this.searchArr.splice(0, this.searchArr.length);
                            this.searchArr.length = 0;
                        });
                        if (!isInitialRender) {
                            Image.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Column.create();
                        Column.debugLine("view/ClearSearch.ets(32:9)");
                        Column.width(StyleConstants.FULL_PERCENT);
                        Column.justifyContent(FlexAlign.Center);
                        if (!isInitialRender) {
                            Column.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Image.create({ "id": 16777223, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                        Image.debugLine("view/ClearSearch.ets(33:11)");
                        Image.height(StyleConstants.NO_SEARCH_IMAGE_HEIGHT);
                        Image.width(StyleConstants.NO_SEARCH_IMAGE_WIDTH);
                        Image.margin({
                            top: { "id": 16777531, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                            bottom: { "id": 16777624, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
                        });
                        if (!isInitialRender) {
                            Image.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Text.create({ "id": 16777364, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                        Text.debugLine("view/ClearSearch.ets(41:11)");
                        Text.fontSize({ "id": 16777558, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                        Text.fontColor({ "id": 16777258, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                        Text.height(StyleConstants.NO_SEARCH_TEXT_HEIGHT);
                        Text.width(StyleConstants.NO_SEARCH_TEXT_WIDTH);
                        if (!isInitialRender) {
                            Text.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    Text.pop();
                    Column.pop();
                });
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
        Flex.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=ClearSearch.js.map