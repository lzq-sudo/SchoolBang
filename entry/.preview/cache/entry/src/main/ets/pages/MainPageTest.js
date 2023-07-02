/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License,Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import CommonConstants from '@bundle:com.example.component/entry/ets/common/constants/CommonConstants';
import Home from '@bundle:com.example.component/entry/ets/view/Home';
// import router from '@ohos.router';
import { BreakpointConstants } from '@bundle:com.example.component/entry/ets/common/constants/BreakpointConstants';
import { StyleConstants } from '@bundle:com.example.component/entry/ets/common/constants/StyleConstants';
class MainPageTest extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__currentBreakpoint = this.createStorageProp('currentBreakpoint', 'sm', "currentBreakpoint");
        this.__currentPageIndex = this.createStorageLink('IndexPage', 0, "currentPageIndex");
        this.__currentIndex = new ObservedPropertySimplePU(CommonConstants.HOME_TAB_INDEX, this, "currentIndex");
        this.tabsController = new TabsController();
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.currentIndex !== undefined) {
            this.currentIndex = params.currentIndex;
        }
        if (params.tabsController !== undefined) {
            this.tabsController = params.tabsController;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentIndex.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__currentPageIndex.aboutToBeDeleted();
        this.__currentIndex.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get currentBreakpoint() {
        return this.__currentBreakpoint.get();
    }
    set currentBreakpoint(newValue) {
        this.__currentBreakpoint.set(newValue);
    }
    get currentPageIndex() {
        return this.__currentPageIndex.get();
    }
    set currentPageIndex(newValue) {
        this.__currentPageIndex.set(newValue);
    }
    get currentIndex() {
        return this.__currentIndex.get();
    }
    set currentIndex(newValue) {
        this.__currentIndex.set(newValue);
    }
    // @StorageProp('currentBreakpoint') currentBreakpoint: string = 'sm';
    // @State shoppingCartCache: Product[] = [];
    // @State shoppingCartList: Product[] = [];
    // @State orderCount: { [key: string]: number } = {};
    // private breakpointSystem = new BreakpointSystem();
    // private localDataManager: LocalDataManager = LocalDataManager.instance();
    //
    // aboutToAppear() {
    //   this.breakpointSystem.register();
    //   this.shoppingCartList = this.shoppingCartCache?.length > 0 ? this.shoppingCartCache : [];
    //   this.queryOrderList();
    // }
    // aboutToDisappear() {
    //   this.breakpointSystem.unregister();
    // }
    //
    // queryShopCart() {
    //   const shoppingData = this.localDataManager.queryShopCart();
    //   this.shoppingCartList = shoppingData;
    //   this.shoppingCartCache = shoppingData;
    // }
    // routerDetailPage(data: Commodity) {
    //   router.pushUrl({
    //     url: PageConstants.COMMODITY_DETAIL_PAGE_URL,
    //     params: { id: data.id }
    //   }).catch(err => {
    //     Logger.error(JSON.stringify(err));
    //   });
    // }
    //
    // queryOrderList() {
    //   const orderList = this.localDataManager.queryOrderList();
    //   this.orderCount = {
    //     [OrderType.PAYMENT]: orderList.filter(item => item.status === OrderOperationStatus.UN_PAY).length,
    //     [OrderType.SHIP]: 0,
    //     [OrderType.RECEIPT]: orderList.filter(item => item.status === OrderOperationStatus.DELIVERED).length,
    //     [OrderType.EVALUATION]: orderList.filter(item => item.status === OrderOperationStatus.RECEIPT).length,
    //     [OrderType.SALE]: 0
    //   };
    // }
    //
    // onPageShow() {
    //   this.queryShopCart();
    //   this.queryOrderList();
    // }
    TabBuilder(title, index, selectedImg, normalImg, parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/MainPageTest.ets(99:5)");
            Column.justifyContent(FlexAlign.Center);
            Column.height({ "id": 16777574, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Column.width(CommonConstants.FULL_PARENT);
            Column.onClick(() => {
                this.currentIndex = index;
                this.tabsController.changeIndex(this.currentIndex);
            });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(this.currentIndex === index ? selectedImg : normalImg);
            Image.debugLine("pages/MainPageTest.ets(100:7)");
            Image.width({ "id": 16777576, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.height({ "id": 16777576, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(title);
            Text.debugLine("pages/MainPageTest.ets(103:7)");
            Text.margin({ top: { "id": 16777577, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            Text.fontSize({ "id": 16777581, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.fontColor(this.currentIndex === index ? { "id": 16777251, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" } : { "id": 16777250, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
    }
    LaunchBuilder(index, selectedImg, normalImg, parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/MainPageTest.ets(118:5)");
            Column.justifyContent(FlexAlign.Center);
            Column.height({ "id": 16777574, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Column.width(CommonConstants.FULL_PARENT);
            Column.onClick(() => {
                this.currentIndex = index;
                this.tabsController.changeIndex(this.currentIndex);
            });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(this.currentIndex === index ? selectedImg : normalImg);
            Image.debugLine("pages/MainPageTest.ets(119:7)");
            Image.width('45vp');
            Image.height('45vp');
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Column.pop();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/MainPageTest.ets(133:5)");
            Column.backgroundColor({ "id": 16777253, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Tabs.create({
                barPosition: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? BarPosition.Start : BarPosition.End,
                index: this.currentPageIndex
            });
            Tabs.debugLine("pages/MainPageTest.ets(134:7)");
            Tabs.barWidth(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 16777486, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } : StyleConstants.FULL_WIDTH);
            Tabs.barHeight(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ?
                StyleConstants.SIXTY_HEIGHT : { "id": 16777643, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Tabs.vertical(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG);
            Tabs.scrollable(false);
            if (!isInitialRender) {
                Tabs.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TabContent.create(() => {
                {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        if (isInitialRender) {
                            ViewPU.create(new Home(this, {}, undefined, elmtId));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                }
            });
            TabContent.backgroundColor({ "id": 16777249, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, CommonConstants.HOME_TITLE, CommonConstants.HOME_TAB_INDEX, { "id": 16777450, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777279, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                } });
            TabContent.debugLine("pages/MainPageTest.ets(138:9)");
            if (!isInitialRender) {
                TabContent.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        TabContent.pop();
        Tabs.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new MainPageTest(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=MainPageTest.js.map