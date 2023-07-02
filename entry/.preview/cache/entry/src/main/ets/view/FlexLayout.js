import { StyleConstants } from '@bundle:com.example.component/entry/ets/common/constants/StyleConstants';
export default class FlexLayout extends ViewPU {
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
            Scroll.create();
            Scroll.debugLine("view/FlexLayout.ets(9:5)");
            if (!isInitialRender) {
                Scroll.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Flex.create({ justifyContent: FlexAlign.Start, wrap: FlexWrap.Wrap });
            Flex.debugLine("view/FlexLayout.ets(10:7)");
            Flex.margin({
                left: { "id": 16777622, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                right: { "id": 16777622, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
            });
            Flex.padding({ bottom: { "id": 16777622, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
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
                        ForEach.create();
                        const forEachItemGenFunction = _item => {
                            const item = _item;
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                Text.create(`${item}`);
                                Text.debugLine("view/FlexLayout.ets(13:13)");
                                Text.fontSize({ "id": 16777555, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                                Text.borderStyle(BorderStyle.Solid);
                                Text.borderWidth({ "id": 16777523, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                                Text.borderColor({ "id": 16777238, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                                Text.borderRadius({ "id": 16777522, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                                Text.backgroundColor({ "id": 16777238, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                                Text.padding({
                                    top: StyleConstants.FLEX_PADDING_TOP,
                                    bottom: StyleConstants.FLEX_PADDING_BOTTOM,
                                    left: StyleConstants.FLEX_PADDING_LEFT,
                                    right: StyleConstants.FLEX_PADDING_RIGHT
                                });
                                Text.margin({
                                    top: { "id": 16777556, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                                    right: { "id": 16777556, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
                                });
                                Text.textOverflow({ overflow: TextOverflow.Ellipsis });
                                Text.maxLines(StyleConstants.TEXT_MAX_LINE);
                                if (!isInitialRender) {
                                    Text.pop();
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                            Text.pop();
                        };
                        this.forEachUpdateFunction(elmtId, this.searchArr, forEachItemGenFunction, item => JSON.stringify(item), false, false);
                        if (!isInitialRender) {
                            ForEach.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    ForEach.pop();
                });
            }
            else {
                If.branchId(1);
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
        Flex.pop();
        Scroll.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=FlexLayout.js.map