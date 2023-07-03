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
                        Text.create({ "id": 16777284, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                        Text.fontSize({ "id": 16777457, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                        Text.fontColor({ "id": 16777392, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                        Text.fontWeight(StyleConstants.FONT_WEIGHT);
                        Text.height(StyleConstants.RECENT_TEXT_HEIGHT);
                        Text.layoutWeight(StyleConstants.LAYOUT_ClEAN_WEIGHT);
                        Text.margin({
                            left: { "id": 16777521, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                            top: { "id": 16777432, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                            bottom: { "id": 16777431, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
                        });
                        if (!isInitialRender) {
                            Text.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    Text.pop();
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Image.create({ "id": 16777630, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                        Image.height(StyleConstants.DELETE_IMAGE_HEIGHT);
                        Image.width(StyleConstants.DELETE_IMAGE_WIDTH);
                        Image.margin({ right: { "id": 16777429, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
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
                        Column.width(StyleConstants.FULL_PERCENT);
                        Column.justifyContent(FlexAlign.Center);
                        if (!isInitialRender) {
                            Column.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Image.create({ "id": 16777648, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                        Image.height(StyleConstants.NO_SEARCH_IMAGE_HEIGHT);
                        Image.width(StyleConstants.NO_SEARCH_IMAGE_WIDTH);
                        Image.margin({
                            top: { "id": 16777430, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                            bottom: { "id": 16777523, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
                        });
                        if (!isInitialRender) {
                            Image.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Text.create({ "id": 16777271, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                        Text.fontSize({ "id": 16777457, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                        Text.fontColor({ "id": 16777386, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
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