var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
/**
 * News list item info.
 */
export class NewsData {
    constructor(title, content, imagesUrl, source) {
        this.title = title;
        this.content = content;
        this.imagesUrl = imagesUrl;
        this.source = source;
    }
}
/**
 * News image list item info.
 */
export class NewsFile {
    constructor(id, url, type, newsId) {
        this.id = id;
        this.type = type;
        this.url = url;
        this.newsId = newsId;
    }
}
/**
 * Custom refresh load layout data.
 */
let CustomRefreshLoadLayoutClass = class CustomRefreshLoadLayoutClass {
    constructor(isVisible, imageSrc, textValue, heightValue) {
        this.isVisible = isVisible;
        this.imageSrc = imageSrc;
        this.textValue = textValue;
        this.heightValue = heightValue;
    }
};
CustomRefreshLoadLayoutClass = __decorate([
    Observed
], CustomRefreshLoadLayoutClass);
export { CustomRefreshLoadLayoutClass };
//# sourceMappingURL=NewsData.js.map