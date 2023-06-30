import { RefreshLayout, FULL_WIDTH } from '@bundle:com.example.component/entry/ets/common/constant/CommonConstant';
export default class CustomLayout extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__customRefreshLoadClass = new SynchedPropertyNesedObjectPU(params.customRefreshLoadClass, this, "customRefreshLoadClass");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        this.__customRefreshLoadClass.set(params.customRefreshLoadClass);
    }
    updateStateVars(params) {
        this.__customRefreshLoadClass.set(params.customRefreshLoadClass);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__customRefreshLoadClass.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__customRefreshLoadClass.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get customRefreshLoadClass() {
        return this.__customRefreshLoadClass.get();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.width(FULL_WIDTH);
            Row.justifyContent(FlexAlign.Center);
            Row.height(this.customRefreshLoadClass.heightValue);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(this.customRefreshLoadClass.imageSrc);
            Image.width(RefreshLayout.IMAGE_WIDTH);
            Image.height(RefreshLayout.IMAGE_HEIGHT);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.customRefreshLoadClass.textValue);
            Text.margin({ left: RefreshLayout.TEXT_MARGIN_LEFT,
                bottom: RefreshLayout.TEXT_MARGIN_BOTTOM });
            Text.fontSize(RefreshLayout.TEXT_FONT_SIZE);
            Text.textAlign(TextAlign.Center);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=CustomRefreshLoadLayout.js.map