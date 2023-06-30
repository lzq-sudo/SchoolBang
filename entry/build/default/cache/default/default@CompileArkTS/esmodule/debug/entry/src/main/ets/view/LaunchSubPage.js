import { TabBars } from '@bundle:com.example.component/entry/ets/common/constant/CommonConstant';
export default class LaunchSubPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__tabBarArray = new ObservedPropertyObjectPU(TabBars.DEFAULT_SERVICE_TYPES, this, "tabBarArray");
        this.__currentIndex = new ObservedPropertySimplePU(0, this, "currentIndex");
        this.__currentPage = new ObservedPropertySimplePU(1, this, "currentPage");
        this.__abc = new ObservedPropertyObjectPU('', this, "abc");
        this.controller = new WebController();
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
        if (params.controller !== undefined) {
            this.controller = params.controller;
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
    // aboutToAppear() {
    //   // Request news data.
    //   // @ts-ignore
    //   this.abc = getData()
    // }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777287, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.fontColor(Color.Black);
            Text.fontSize({ "id": 16777417, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.alignSelf(ItemAlign.Center);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new LaunchSubPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=LaunchSubPage.js.map