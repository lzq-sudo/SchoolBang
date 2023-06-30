import { TabBars } from '@bundle:com.example.component/entry/ets/common/constant/CommonConstant';
import { getData } from '@bundle:com.example.component/entry/ets/common/utils/DataUtilsTest';
export default class LaunchSubPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__tabBarArray = new ObservedPropertyObjectPU(TabBars.DEFAULT_SERVICE_TYPES, this, "tabBarArray");
        this.__currentIndex = new ObservedPropertySimplePU(0, this, "currentIndex");
        this.__currentPage = new ObservedPropertySimplePU(1, this, "currentPage");
        this.__abc = new ObservedPropertyObjectPU('', this, "abc");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.tabBarArray !== undefined) {
            this.tabBarArray = params.tabBarArray;
        }
        if (params.currentIndex !== undefined) {
            this.currentIndex = params.currentIndex;
        }
        if (params.currentPage !== undefined) {
            this.currentPage = params.currentPage;
        }
        if (params.abc !== undefined) {
            this.abc = params.abc;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__tabBarArray.purgeDependencyOnElmtId(rmElmtId);
        this.__currentIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__currentPage.purgeDependencyOnElmtId(rmElmtId);
        this.__abc.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__tabBarArray.aboutToBeDeleted();
        this.__currentIndex.aboutToBeDeleted();
        this.__currentPage.aboutToBeDeleted();
        this.__abc.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get tabBarArray() {
        return this.__tabBarArray.get();
    }
    set tabBarArray(newValue) {
        this.__tabBarArray.set(newValue);
    }
    get currentIndex() {
        return this.__currentIndex.get();
    }
    set currentIndex(newValue) {
        this.__currentIndex.set(newValue);
    }
    get currentPage() {
        return this.__currentPage.get();
    }
    set currentPage(newValue) {
        this.__currentPage.set(newValue);
    }
    get abc() {
        return this.__abc.get();
    }
    set abc(newValue) {
        this.__abc.set(newValue);
    }
    // @Builder TabBuilder(index: number) {
    //   Column() {
    //     Text(this.tabBarArray[index].name)
    //       .height(FULL_HEIGHT)
    //       .padding({ left: TabBars.HORIZONTAL_PADDING, right: TabBars.HORIZONTAL_PADDING })
    //       .fontSize(this.currentIndex === index ? TabBars.SELECT_TEXT_FONT_SIZE : TabBars.UN_SELECT_TEXT_FONT_SIZE)
    //       .fontWeight(this.currentIndex === index ? TabBars.SELECT_TEXT_FONT_WEIGHT : TabBars.UN_SELECT_TEXT_FONT_WEIGHT)
    //       .fontColor($r('app.color.fontColor_text3'))
    //   }
    // }
    // aboutToAppear() {
    //   // 请求新闻类别
    //   loadNewsTypes({
    //     onSuccess: (value) => this.tabBarArray = value,
    //     onFail: () => this.tabBarArray = TabBars.DEFAULT_SERVICE_TYPES
    //   });
    // }
    aboutToAppear() {
        // Request news data.
        // @ts-ignore
        this.abc = getData();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("view/LaunchSubPage.ets(57:5)");
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777340, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.debugLine("view/LaunchSubPage.ets(58:7)");
            Text.fontColor(Color.Black);
            Text.fontSize({ "id": 16777477, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.alignSelf(ItemAlign.Center);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // @ts-ignore
            Text.create(this.abc);
            Text.debugLine("view/LaunchSubPage.ets(63:7)");
            // @ts-ignore
            Text.fontColor(Color.Black);
            // @ts-ignore
            Text.fontSize({ "id": 16777477, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            // @ts-ignore
            Text.alignSelf(ItemAlign.Center);
            if (!isInitialRender) {
                // @ts-ignore
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        // @ts-ignore
        Text.pop();
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
    storePreviewComponents(1, "LaunchSubPage", new LaunchSubPage(undefined, {}));
    ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
    loadDocument(new LaunchSubPage(undefined, {}));
    ViewStackProcessor.StopGetAccessRecording();
}
//# sourceMappingURL=LaunchSubPage.js.map