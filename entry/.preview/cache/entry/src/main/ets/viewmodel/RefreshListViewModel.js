var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
import prompt from '@ohos:promptAction';
import Constants, { RefreshConstant } from '@bundle:com.example.component/entry/ets/common/constants/Constants';
import NewsViewModel from '@bundle:com.example.component/entry/ets/viewmodel/NewsViewModel';
import RefreshLoadingClass from '@bundle:com.example.component/entry/ets/common/bean/RefreshLoadingClass';
let RefreshListViewModel = class RefreshListViewModel {
    constructor() {
        this.downY = 0;
        this.lastMoveY = 0;
        this.isRefreshing = false;
        this.isCanRefresh = false;
        this.isPullRefreshOperation = false;
        this.isLoading = false;
        this.isCanLoadMore = false;
        this.startIndex = 0;
        this.endIndex = 0;
        this.newsData = [];
        this.currentPage = 1;
        this.pageSize = 10;
        this.offsetY = 0;
        this.hasMore = true;
        this.refreshLayoutClass = new RefreshLoadingClass({ "id": 16777427, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777335, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, 0);
        this.loadingMoreClass = new RefreshLoadingClass({ "id": 16777576, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777336, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, 0);
        this.pageState = 0 /* Loading */;
    }
    listTouchEvent(event) {
        switch (event.type) {
            case TouchType.Down:
                this.downY = event.touches[0].y;
                this.lastMoveY = event.touches[0].y;
                break;
            case TouchType.Move:
                if (this.isRefreshing || this.isLoading) {
                    return;
                }
                let isDownPull = event.touches[0].y - this.lastMoveY > 0;
                if ((isDownPull || this.isPullRefreshOperation) && !this.isCanLoadMore) {
                    // Touch move pull refresh.
                    this.touchMovePullRefresh(event);
                }
                else {
                    // Touch move load more.
                    this.touchMoveLoadMore(event);
                }
                this.lastMoveY = event.touches[0].y;
                break;
            case TouchType.Cancel:
                break;
            case TouchType.Up:
                if (this.isRefreshing || this.isLoading) {
                    return;
                }
                if (this.isPullRefreshOperation) {
                    // Touch up pull refresh.
                    this.touchUpPullRefresh.call(this);
                }
                else {
                    // Touch up load more.
                    this.touchUpLoadMore.call(this);
                }
                break;
            default:
                break;
        }
    }
    touchMovePullRefresh(event) {
        if (this.startIndex === 0) {
            this.isPullRefreshOperation = true;
            let height = vp2px(Constants.CUSTOM_LAYOUT_HEIGHT);
            this.offsetY = event.touches[0].y - this.downY;
            // Check offsetY to Refresh.
            if (this.offsetY >= height) {
                this.pullRefreshState(1 /* Release */);
                this.offsetY = height + this.offsetY * Constants.Y_OFF_SET_COEFFICIENT;
            }
            else {
                this.pullRefreshState(0 /* DropDown */);
            }
            if (this.offsetY < 0) {
                this.offsetY = 0;
                this.isPullRefreshOperation = false;
            }
        }
    }
    touchUpPullRefresh() {
        if (this.isCanRefresh) {
            this.offsetY = vp2px(Constants.CUSTOM_LAYOUT_HEIGHT);
            this.pullRefreshState(2 /* Refreshing */);
            this.currentPage = 1;
            setTimeout(() => {
                NewsViewModel.getNewsList(this.currentPage, this.pageSize).then((data) => {
                    if (data.length === this.pageSize) {
                        this.currentPage++;
                        this.hasMore = true;
                    }
                    else {
                        this.hasMore = false;
                    }
                    this.newsData = data;
                    this.closeRefresh(true);
                }).catch((errMsg) => {
                    prompt.showToast({ message: errMsg });
                    this.closeRefresh(false);
                });
            }, Constants.DELAY_TIME);
        }
        else {
            this.closeRefresh(false);
        }
    }
    pullRefreshState(state) {
        switch (state) {
            case 0 /* DropDown */:
                this.isCanRefresh = false;
                this.isRefreshing = false;
                this.refreshLayoutClass = new RefreshLoadingClass({ "id": 16777427, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777335, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, Constants.CUSTOM_LAYOUT_HEIGHT);
                break;
            case 1 /* Release */:
                this.refreshLayoutClass.imageSrc = { "id": 16777261, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
                this.refreshLayoutClass.textValue = { "id": 16777346, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
                this.isCanRefresh = true;
                this.isRefreshing = false;
                break;
            case 2 /* Refreshing */:
                this.offsetY = vp2px(this.refreshLayoutClass.heightValue);
                this.refreshLayoutClass.imageSrc = { "id": 16777576, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
                this.refreshLayoutClass.textValue = { "id": 16777342, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
                this.isCanRefresh = true;
                this.isRefreshing = true;
                break;
            case 3 /* Success */:
                this.refreshLayoutClass.imageSrc = { "id": 16777385, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
                this.refreshLayoutClass.textValue = { "id": 16777341, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
                this.isCanRefresh = true;
                this.isRefreshing = true;
                break;
            case 4 /* Fail */:
                this.refreshLayoutClass.imageSrc = { "id": 16777392, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
                this.refreshLayoutClass.textValue = { "id": 16777340, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
                this.isCanRefresh = true;
                this.isRefreshing = true;
                break;
            default:
                break;
        }
    }
    closeRefresh(isRefreshSuccess) {
        setTimeout(() => {
            let delay = RefreshConstant.DELAY_PULL_DOWN_REFRESH;
            if (this.isCanRefresh) {
                this.pullRefreshState(isRefreshSuccess ? 3 /* Success */ : 4 /* Fail */);
                delay = RefreshConstant.DELAY_SHRINK_ANIMATION_TIME;
            }
            Context.animateTo({
                duration: RefreshConstant.CLOSE_PULL_DOWN_REFRESH_TIME,
                delay: delay,
                onFinish: () => {
                    this.pullRefreshState(0 /* DropDown */);
                    this.refreshLayoutClass.heightValue = 0;
                    this.isPullRefreshOperation = false;
                }
            }, () => {
                this.offsetY = 0;
            });
        }, this.isCanRefresh ? Constants.DELAY_ANIMATION_DURATION : 0);
    }
    touchMoveLoadMore(event) {
        if (this.endIndex >= this.newsData.length - 1) {
            this.offsetY = event.touches[0].y - this.downY;
            if (Math.abs(this.offsetY) > vp2px(Constants.CUSTOM_LAYOUT_HEIGHT) / 2) {
                this.isCanLoadMore = true;
                this.loadingMoreClass.heightValue = Constants.CUSTOM_LAYOUT_HEIGHT;
                this.offsetY = -vp2px(Constants.CUSTOM_LAYOUT_HEIGHT) + this.offsetY * Constants.Y_OFF_SET_COEFFICIENT;
            }
        }
    }
    touchUpLoadMore() {
        if (this.isCanLoadMore && this.hasMore) {
            this.isLoading = true;
            setTimeout(() => {
                NewsViewModel.getNewsList(this.currentPage, this.pageSize).then((data) => {
                    if (data.length === this.pageSize) {
                        this.currentPage++;
                        this.hasMore = true;
                    }
                    else {
                        this.hasMore = false;
                    }
                    this.newsData = [...this.newsData, ...data];
                }).catch((errMsg) => {
                    prompt.showToast({ message: errMsg });
                });
                this.closeLoadMore.call(this);
            }, Constants.DELAY_TIME);
        }
        else {
            this.closeLoadMore.call(this);
        }
    }
    closeLoadMore() {
        this.isCanLoadMore = false;
        this.isLoading = false;
        this.loadingMoreClass.heightValue = 0;
    }
};
RefreshListViewModel = __decorate([
    Observed
], RefreshListViewModel);
export default RefreshListViewModel;
//# sourceMappingURL=RefreshListViewModel.js.map