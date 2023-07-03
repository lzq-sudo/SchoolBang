import { StyleConstants } from '@bundle:com.example.component/entry/ets/common/constants/StyleConstants';
import CommonConstants from '@bundle:com.example.component/entry/ets/common/constants/CommonConstants';
import router from '@ohos:router';
export default class SearchInput extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__searchInput = new ObservedPropertySimplePU('', this, "searchInput");
        this.__searchArr = new SynchedPropertyObjectTwoWayPU(params.searchArr, this, "searchArr");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.searchInput !== undefined) {
            this.searchInput = params.searchInput;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__searchInput.purgeDependencyOnElmtId(rmElmtId);
        this.__searchArr.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__searchInput.aboutToBeDeleted();
        this.__searchArr.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get searchInput() {
        return this.__searchInput.get();
    }
    set searchInput(newValue) {
        this.__searchInput.set(newValue);
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
            Flex.width(StyleConstants.FULL_PERCENT);
            if (!isInitialRender) {
                Flex.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777664, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.width({ "id": 16777478, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.height({ "id": 16777478, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.alignSelf(ItemAlign.Start);
            Image.margin({
                left: '3.2%',
                top: CommonConstants.BACK_MARGIN_TOP
            });
            Image.onClick(() => {
                router.replaceUrl({ url: 'pages/MainPage' });
            });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // Search component.
            Search.create({
                value: this.searchInput,
                placeholder: StyleConstants.SEARCH_PLACEHOLDER,
                icon: StyleConstants.SEARCH_ICON
            });
            // Search component.
            Search.placeholderColor({ "id": 16777390, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            // Search component.
            Search.placeholderFont({ size: { "id": 16777457, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            // Search component.
            Search.textFont({ size: { "id": 16777457, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            // Search component.
            Search.height(StyleConstants.SEARCH_HEIGHT);
            // Search component.
            Search.width(StyleConstants.SEARCH_WIDTH);
            // Search component.
            Search.backgroundColor(Color.White);
            // Search component.
            Search.margin({
                left: { "id": 16777521, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                right: { "id": 16777522, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                top: { "id": 16777523, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                bottom: { "id": 16777523, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
            });
            // Search component.
            Search.border({
                width: { "id": 16777422, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                color: { "id": 16777354, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                radius: { "id": 16777421, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                style: BorderStyle.Solid
            });
            // Search component.
            Search.onChange((value) => {
                this.searchInput = value;
            });
            if (!isInitialRender) {
                // Search component.
                Search.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        // Search component.
        Search.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // Search Text.
            Text.create({ "id": 16777293, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            // Search Text.
            Text.fontSize({ "id": 16777457, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            // Search Text.
            Text.fontColor({ "id": 16777353, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            // Search Text.
            Text.onClick(() => {
                if (this.searchInput !== '' && this.searchInput.trim().length > 0) {
                    // Use unshift to add data to the array header.
                    this.searchArr.unshift(this.searchInput.trim());
                }
                this.searchInput = '';
            });
            if (!isInitialRender) {
                // Search Text.
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        // Search Text.
        Text.pop();
        Flex.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=SearchInput.js.map