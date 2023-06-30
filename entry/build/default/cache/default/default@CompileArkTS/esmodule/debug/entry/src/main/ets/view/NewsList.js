/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
import NewsItem from '@bundle:com.example.component/entry/ets/view/NewsItem';
import LoadMoreLayout from '@bundle:com.example.component/entry/ets/view/LoadMoreLayout';
import RefreshLayout from '@bundle:com.example.component/entry/ets/view/RefreshLayout';
import CustomRefreshLoadLayout from '@bundle:com.example.component/entry/ets/view/CustomRefreshLoadLayout';
import { getTabData } from '@bundle:com.example.component/entry/ets/common/utils/DataUtils';
import { CustomRefreshLoadLayoutClass } from '@bundle:com.example.component/entry/ets/common/bean/NewsData';
import { listTouchEvent } from '@bundle:com.example.component/entry/ets/common/utils/PullDownRefresh';
import { CUSTOM_LAYOUT_HEIGHT, NewsListConstant, FULL_WIDTH, FULL_HEIGHT } from '@bundle:com.example.component/entry/ets/common/constant/CommonConstant';
export default class NewsList extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__currentIndex = new SynchedPropertySimpleTwoWayPU(params.currentIndex, this, "currentIndex");
        this.__newsData = new ObservedPropertyObjectPU([], this, "newsData");
        this.__currentPage = new ObservedPropertySimplePU(1, this, "currentPage");
        this.__pageSize = new ObservedPropertySimplePU(10, this, "pageSize");
        this.__pullDownRefreshText = new ObservedPropertyObjectPU({ "id": 16777271, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, this, "pullDownRefreshText");
        this.__pullDownRefreshImage = new ObservedPropertyObjectPU({ "id": 16777546, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, this, "pullDownRefreshImage");
        this.__pullDownRefreshHeight = new ObservedPropertySimplePU(CUSTOM_LAYOUT_HEIGHT, this, "pullDownRefreshHeight");
        this.__isVisiblePullDown = new ObservedPropertySimplePU(false, this, "isVisiblePullDown");
        this.__pullUpLoadText = new ObservedPropertyObjectPU({ "id": 16777272, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, this, "pullUpLoadText");
        this.__pullUpLoadImage = new ObservedPropertyObjectPU({ "id": 16777547, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, this, "pullUpLoadImage");
        this.__pullUpLoadHeight = new ObservedPropertySimplePU(CUSTOM_LAYOUT_HEIGHT, this, "pullUpLoadHeight");
        this.__isVisiblePullUpLoad = new ObservedPropertySimplePU(false, this, "isVisiblePullUpLoad");
        this.startIndex = 0;
        this.endIndex = 0;
        this.__offsetY = new ObservedPropertySimplePU(0, this, "offsetY");
        this.downY = 0;
        this.lastMoveY = 0;
        this.isRefreshing = false;
        this.isCanRefresh = false;
        this.isPullRefreshOperation = false;
        this.isLoading = false;
        this.isCanLoadMore = false;
        this.__pageState = new ObservedPropertySimplePU(0 /* Loading */, this, "pageState");
        this.setInitiallyProvidedValue(params);
        this.declareWatch("currentIndex", this.changeCategory);
    }
    setInitiallyProvidedValue(params) {
        if (params.newsData !== undefined) {
            this.newsData = params.newsData;
        }
        if (params.currentPage !== undefined) {
            this.currentPage = params.currentPage;
        }
        if (params.pageSize !== undefined) {
            this.pageSize = params.pageSize;
        }
        if (params.pullDownRefreshText !== undefined) {
            this.pullDownRefreshText = params.pullDownRefreshText;
        }
        if (params.pullDownRefreshImage !== undefined) {
            this.pullDownRefreshImage = params.pullDownRefreshImage;
        }
        if (params.pullDownRefreshHeight !== undefined) {
            this.pullDownRefreshHeight = params.pullDownRefreshHeight;
        }
        if (params.isVisiblePullDown !== undefined) {
            this.isVisiblePullDown = params.isVisiblePullDown;
        }
        if (params.pullUpLoadText !== undefined) {
            this.pullUpLoadText = params.pullUpLoadText;
        }
        if (params.pullUpLoadImage !== undefined) {
            this.pullUpLoadImage = params.pullUpLoadImage;
        }
        if (params.pullUpLoadHeight !== undefined) {
            this.pullUpLoadHeight = params.pullUpLoadHeight;
        }
        if (params.isVisiblePullUpLoad !== undefined) {
            this.isVisiblePullUpLoad = params.isVisiblePullUpLoad;
        }
        if (params.startIndex !== undefined) {
            this.startIndex = params.startIndex;
        }
        if (params.endIndex !== undefined) {
            this.endIndex = params.endIndex;
        }
        if (params.offsetY !== undefined) {
            this.offsetY = params.offsetY;
        }
        if (params.downY !== undefined) {
            this.downY = params.downY;
        }
        if (params.lastMoveY !== undefined) {
            this.lastMoveY = params.lastMoveY;
        }
        if (params.isRefreshing !== undefined) {
            this.isRefreshing = params.isRefreshing;
        }
        if (params.isCanRefresh !== undefined) {
            this.isCanRefresh = params.isCanRefresh;
        }
        if (params.isPullRefreshOperation !== undefined) {
            this.isPullRefreshOperation = params.isPullRefreshOperation;
        }
        if (params.isLoading !== undefined) {
            this.isLoading = params.isLoading;
        }
        if (params.isCanLoadMore !== undefined) {
            this.isCanLoadMore = params.isCanLoadMore;
        }
        if (params.pageState !== undefined) {
            this.pageState = params.pageState;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__newsData.purgeDependencyOnElmtId(rmElmtId);
        this.__currentPage.purgeDependencyOnElmtId(rmElmtId);
        this.__pageSize.purgeDependencyOnElmtId(rmElmtId);
        this.__pullDownRefreshText.purgeDependencyOnElmtId(rmElmtId);
        this.__pullDownRefreshImage.purgeDependencyOnElmtId(rmElmtId);
        this.__pullDownRefreshHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__isVisiblePullDown.purgeDependencyOnElmtId(rmElmtId);
        this.__pullUpLoadText.purgeDependencyOnElmtId(rmElmtId);
        this.__pullUpLoadImage.purgeDependencyOnElmtId(rmElmtId);
        this.__pullUpLoadHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__isVisiblePullUpLoad.purgeDependencyOnElmtId(rmElmtId);
        this.__offsetY.purgeDependencyOnElmtId(rmElmtId);
        this.__pageState.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentIndex.aboutToBeDeleted();
        this.__newsData.aboutToBeDeleted();
        this.__currentPage.aboutToBeDeleted();
        this.__pageSize.aboutToBeDeleted();
        this.__pullDownRefreshText.aboutToBeDeleted();
        this.__pullDownRefreshImage.aboutToBeDeleted();
        this.__pullDownRefreshHeight.aboutToBeDeleted();
        this.__isVisiblePullDown.aboutToBeDeleted();
        this.__pullUpLoadText.aboutToBeDeleted();
        this.__pullUpLoadImage.aboutToBeDeleted();
        this.__pullUpLoadHeight.aboutToBeDeleted();
        this.__isVisiblePullUpLoad.aboutToBeDeleted();
        this.__offsetY.aboutToBeDeleted();
        this.__pageState.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get currentIndex() {
        return this.__currentIndex.get();
    }
    set currentIndex(newValue) {
        this.__currentIndex.set(newValue);
    }
    get newsData() {
        return this.__newsData.get();
    }
    set newsData(newValue) {
        this.__newsData.set(newValue);
    }
    get currentPage() {
        return this.__currentPage.get();
    }
    set currentPage(newValue) {
        this.__currentPage.set(newValue);
    }
    get pageSize() {
        return this.__pageSize.get();
    }
    set pageSize(newValue) {
        this.__pageSize.set(newValue);
    }
    get pullDownRefreshText() {
        return this.__pullDownRefreshText.get();
    }
    set pullDownRefreshText(newValue) {
        this.__pullDownRefreshText.set(newValue);
    }
    get pullDownRefreshImage() {
        return this.__pullDownRefreshImage.get();
    }
    set pullDownRefreshImage(newValue) {
        this.__pullDownRefreshImage.set(newValue);
    }
    get pullDownRefreshHeight() {
        return this.__pullDownRefreshHeight.get();
    }
    set pullDownRefreshHeight(newValue) {
        this.__pullDownRefreshHeight.set(newValue);
    }
    get isVisiblePullDown() {
        return this.__isVisiblePullDown.get();
    }
    set isVisiblePullDown(newValue) {
        this.__isVisiblePullDown.set(newValue);
    }
    get pullUpLoadText() {
        return this.__pullUpLoadText.get();
    }
    set pullUpLoadText(newValue) {
        this.__pullUpLoadText.set(newValue);
    }
    get pullUpLoadImage() {
        return this.__pullUpLoadImage.get();
    }
    set pullUpLoadImage(newValue) {
        this.__pullUpLoadImage.set(newValue);
    }
    get pullUpLoadHeight() {
        return this.__pullUpLoadHeight.get();
    }
    set pullUpLoadHeight(newValue) {
        this.__pullUpLoadHeight.set(newValue);
    }
    get isVisiblePullUpLoad() {
        return this.__isVisiblePullUpLoad.get();
    }
    set isVisiblePullUpLoad(newValue) {
        this.__isVisiblePullUpLoad.set(newValue);
    }
    get offsetY() {
        return this.__offsetY.get();
    }
    set offsetY(newValue) {
        this.__offsetY.set(newValue);
    }
    get pageState() {
        return this.__pageState.get();
    }
    set pageState(newValue) {
        this.__pageState.set(newValue);
    }
    changeCategory() {
        getTabData(this.currentPage - 1, this.pageSize, this.currentIndex, {
            onSuccess: (value) => {
                this.pageState = 1 /* Success */;
                this.newsData = value.newsPageData;
            },
            onFail: () => this.pageState = 2 /* Fail */
        });
    }
    aboutToAppear() {
        // Request news data.
        this.changeCategory();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.width(FULL_WIDTH);
            Column.height(FULL_HEIGHT);
            Column.justifyContent(FlexAlign.Center);
            Column.onTouch((event) => {
                if (this.pageState === 1 /* Success */) {
                    listTouchEvent.call(this, event);
                }
            });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (this.pageState === 0 /* Loading */) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.LoadingLayout.bind(this)();
                });
            }
            else if (this.pageState === 1 /* Success */) {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.ListLayout.bind(this)();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(2, () => {
                    this.FailLayout.bind(this)();
                });
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
        Column.pop();
    }
    LoadingLayout(parent = null) {
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new CustomRefreshLoadLayout(this, { customRefreshLoadClass: new CustomRefreshLoadLayoutClass(true, { "id": 16777547, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777272, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, this.pullDownRefreshHeight) }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        customRefreshLoadClass: new CustomRefreshLoadLayoutClass(true, { "id": 16777547, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777272, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, this.pullDownRefreshHeight)
                    });
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
    }
    ListLayout(parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            List.create();
            List.width(NewsListConstant.LIST_WIDTH);
            List.height(FULL_HEIGHT);
            List.margin({ left: NewsListConstant.LIST_MARGIN_LEFT, right: NewsListConstant.LIST_MARGIN_RIGHT });
            List.backgroundColor({ "id": 16777341, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            List.divider({
                color: { "id": 16777333, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                strokeWidth: NewsListConstant.LIST_DIVIDER_STROKE_WIDTH,
                endMargin: NewsListConstant.LIST_MARGIN_RIGHT
            });
            List.edgeEffect(EdgeEffect.None);
            List.offset({ x: 0, y: `${this.offsetY}px` });
            List.onScrollIndex((start, end) => {
                // Listen to the first index of the current list.
                this.startIndex = start;
                this.endIndex = end;
            });
            if (!isInitialRender) {
                List.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            const isLazyCreate = true;
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, isLazyCreate);
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
                {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        if (isInitialRender) {
                            ViewPU.create(new RefreshLayout(this, {
                                refreshLayoutClass: new CustomRefreshLoadLayoutClass(this.isVisiblePullDown, this.pullDownRefreshImage, this.pullDownRefreshText, this.pullDownRefreshHeight)
                            }, undefined, elmtId));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                refreshLayoutClass: new CustomRefreshLoadLayoutClass(this.isVisiblePullDown, this.pullDownRefreshImage, this.pullDownRefreshText, this.pullDownRefreshHeight)
                            });
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                }
                ListItem.pop();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        if (isInitialRender) {
                            ViewPU.create(new RefreshLayout(this, {
                                refreshLayoutClass: new CustomRefreshLoadLayoutClass(this.isVisiblePullDown, this.pullDownRefreshImage, this.pullDownRefreshText, this.pullDownRefreshHeight)
                            }, undefined, elmtId));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                refreshLayoutClass: new CustomRefreshLoadLayoutClass(this.isVisiblePullDown, this.pullDownRefreshImage, this.pullDownRefreshText, this.pullDownRefreshHeight)
                            });
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                }
                ListItem.pop();
            };
            if (isLazyCreate) {
                observedShallowRender();
            }
            else {
                observedDeepRender();
            }
        }
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                {
                    const isLazyCreate = true;
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ListItem.create(deepRenderFunction, isLazyCreate);
                        ListItem.height(NewsListConstant.ITEM_HEIGHT);
                        ListItem.backgroundColor({ "id": 16777359, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                        ListItem.margin({ top: NewsListConstant.ITEM_MARGIN_TOP });
                        ListItem.borderRadius(NewsListConstant.ITEM_BORDER_RADIUS);
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
                        {
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                if (isInitialRender) {
                                    ViewPU.create(new NewsItem(this, { newsData: item }, undefined, elmtId));
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                        }
                        ListItem.pop();
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.updateFuncByElmtId.set(elmtId, itemCreation);
                        {
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                if (isInitialRender) {
                                    ViewPU.create(new NewsItem(this, { newsData: item }, undefined, elmtId));
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                        }
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
            this.forEachUpdateFunction(elmtId, this.newsData, forEachItemGenFunction, (item, index) => JSON.stringify(item) + index.toString(), false, true);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        {
            const isLazyCreate = true;
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, isLazyCreate);
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
                {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        if (isInitialRender) {
                            ViewPU.create(new LoadMoreLayout(this, {
                                loadMoreLayoutClass: new CustomRefreshLoadLayoutClass(this.isVisiblePullUpLoad, this.pullUpLoadImage, this.pullUpLoadText, this.pullUpLoadHeight)
                            }, undefined, elmtId));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                loadMoreLayoutClass: new CustomRefreshLoadLayoutClass(this.isVisiblePullUpLoad, this.pullUpLoadImage, this.pullUpLoadText, this.pullUpLoadHeight)
                            });
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                }
                ListItem.pop();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        if (isInitialRender) {
                            ViewPU.create(new LoadMoreLayout(this, {
                                loadMoreLayoutClass: new CustomRefreshLoadLayoutClass(this.isVisiblePullUpLoad, this.pullUpLoadImage, this.pullUpLoadText, this.pullUpLoadHeight)
                            }, undefined, elmtId));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                loadMoreLayoutClass: new CustomRefreshLoadLayoutClass(this.isVisiblePullUpLoad, this.pullUpLoadImage, this.pullUpLoadText, this.pullUpLoadHeight)
                            });
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                }
                ListItem.pop();
            };
            if (isLazyCreate) {
                observedShallowRender();
            }
            else {
                observedDeepRender();
            }
        }
        List.pop();
    }
    FailLayout(parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777567, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.height(NewsListConstant.NONE_IMAGE_SIZE);
            Image.width(NewsListConstant.NONE_IMAGE_SIZE);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777264, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.opacity(NewsListConstant.NONE_TEXT_opacity);
            Text.fontSize(NewsListConstant.NONE_TEXT_size);
            Text.fontColor({ "id": 16777338, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.margin({ top: NewsListConstant.NONE_TEXT_margin });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=newslist.js.map