import CommonConstants from '@bundle:com.example.component/entry/ets/common/constants/CommonConstants';
export default class TextCommonWidget extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__content = new SynchedPropertySimpleTwoWayPU(params.content, this, "content");
        this.textImage = undefined;
        this.title = undefined;
        this.onItemClick = undefined;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.textImage !== undefined) {
            this.textImage = params.textImage;
        }
        if (params.title !== undefined) {
            this.title = params.title;
        }
        if (params.onItemClick !== undefined) {
            this.onItemClick = params.onItemClick;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__content.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__content.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get content() {
        return this.__content.get();
    }
    set content(newValue) {
        this.__content.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.margin({ top: '8' });
            Row.borderRadius({ "id": 16777473, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Row.backgroundColor(Color.White);
            Row.width(CommonConstants.COMMON_DIALOG_WIDTH);
            Row.height('40');
            Row.onClick(this.onItemClick);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.title);
            Text.fontSize({ "id": 16777500, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.margin({ left: { "id": 16777413, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            Text.height(CommonConstants.FULL_HEIGHT);
            Text.fontColor({ "id": 16777354, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.content);
            Text.fontSize({ "id": 16777500, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.textAlign(TextAlign.End);
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
            Text.maxLines(CommonConstants.ONE_LINES);
            Text.margin({
                left: { "id": 16777381, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                right: { "id": 16777382, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
            });
            Text.layoutWeight(CommonConstants.WEIGHT_ONE);
            Text.width(CommonConstants.FULL_WIDTH);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777531, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.width({ "id": 16777366, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.height({ "id": 16777365, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.margin({ right: { "id": 16777367, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=TextRegisterCommonWidget.js.map