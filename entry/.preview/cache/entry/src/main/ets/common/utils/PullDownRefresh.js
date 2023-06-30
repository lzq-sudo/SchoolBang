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
import promptAction from '@ohos:promptAction';
import { getTabData } from '@bundle:com.example.component/entry/ets/common/utils/DataUtils';
import { touchMoveLoadMore, touchUpLoadMore } from '@bundle:com.example.component/entry/ets/common/utils/PullUpLoadMore';
import { DELAY_TIME, DELAY_ANIMATION_DURATION, Y_OFF_SET_COEFFICIENT, RefreshConstant } from '@bundle:com.example.component/entry/ets/common/constant/CommonConstant';
export function listTouchEvent(event) {
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
                // Finger movement, processing pull-down refresh.
                touchMovePullRefresh.call(this, event);
            }
            else {
                // Finger movement, processing load more.
                touchMoveLoadMore.call(this, event);
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
                // Lift your finger and pull down to refresh.
                touchUpPullRefresh.call(this);
            }
            else {
                // Fingers up, handle loading more.
                touchUpLoadMore.call(this);
            }
            break;
        default:
            break;
    }
}
export function touchMovePullRefresh(event) {
    if (this.startIndex === 0) {
        this.isPullRefreshOperation = true;
        let height = vp2px(this.pullDownRefreshHeight);
        this.offsetY = event.touches[0].y - this.downY;
        // The sliding offset is greater than the pull-down refresh layout height, and the refresh condition is met.
        if (this.offsetY >= height) {
            pullRefreshState.call(this, 1 /* Release */);
            this.offsetY = height + this.offsetY * Y_OFF_SET_COEFFICIENT;
        }
        else {
            pullRefreshState.call(this, 0 /* DropDown */);
        }
        if (this.offsetY < 0) {
            this.offsetY = 0;
            this.isPullRefreshOperation = false;
        }
    }
}
export function touchUpPullRefresh() {
    if (this.isCanRefresh) {
        this.offsetY = vp2px(this.pullDownRefreshHeight);
        pullRefreshState.call(this, 2 /* Refreshing */);
        setTimeout(() => {
            let self = this;
            getTabData(self.currentPage, self.pageSize, self.currentIndex, {
                onSuccess: (value) => {
                    self.currentPage = parseInt(value.currentPage.toString());
                    self.newsData = value.newsPageData;
                    closeRefresh.call(self, true);
                },
                onFail: (msg) => {
                    promptAction.showToast({ message: msg });
                    closeRefresh.call(self, false);
                }
            });
        }, DELAY_TIME);
    }
    else {
        closeRefresh.call(this, false);
    }
}
export function pullRefreshState(state) {
    switch (state) {
        case 0 /* DropDown */:
            this.pullDownRefreshText = { "id": 16777335, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
            this.pullDownRefreshImage = { "id": 16777431, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
            this.isCanRefresh = false;
            this.isRefreshing = false;
            this.isVisiblePullDown = true;
            break;
        case 1 /* Release */:
            this.pullDownRefreshText = { "id": 16777346, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
            this.pullDownRefreshImage = { "id": 16777261, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
            this.isCanRefresh = true;
            this.isRefreshing = false;
            break;
        case 2 /* Refreshing */:
            this.offsetY = vp2px(this.pullDownRefreshHeight);
            this.pullDownRefreshText = { "id": 16777342, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
            this.pullDownRefreshImage = { "id": 16777580, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
            this.isCanRefresh = true;
            this.isRefreshing = true;
            break;
        case 3 /* Success */:
            this.pullDownRefreshText = { "id": 16777341, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
            this.pullDownRefreshImage = { "id": 16777389, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
            this.isCanRefresh = true;
            this.isRefreshing = true;
            break;
        case 4 /* Fail */:
            this.pullDownRefreshText = { "id": 16777340, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
            this.pullDownRefreshImage = { "id": 16777396, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
            this.isCanRefresh = true;
            this.isRefreshing = true;
            break;
        default:
            break;
    }
}
export function closeRefresh(isRefreshSuccess) {
    let self = this;
    setTimeout(() => {
        let delay = RefreshConstant.DELAY_PULL_DOWN_REFRESH;
        if (self.isCanRefresh) {
            pullRefreshState.call(this, isRefreshSuccess ? 3 /* Success */ : 4 /* Fail */);
            delay = RefreshConstant.DELAY_SHRINK_ANIMATION_TIME;
        }
        Context.animateTo({
            duration: RefreshConstant.CLOSE_PULL_DOWN_REFRESH_TIME,
            delay: delay,
            onFinish: () => {
                pullRefreshState.call(this, 0 /* DropDown */);
                self.isVisiblePullDown = false;
                self.isPullRefreshOperation = false;
            }
        }, () => {
            self.offsetY = 0;
        });
    }, self.isCanRefresh ? DELAY_ANIMATION_DURATION : 0);
}
//# sourceMappingURL=PullDownRefresh.js.map