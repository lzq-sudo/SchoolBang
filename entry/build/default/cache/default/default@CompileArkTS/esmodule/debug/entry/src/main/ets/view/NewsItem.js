import { NewsSource, NewsContent, NewsTitle, NewsGrid } from '@bundle:com.example.component/entry/ets/common/constant/CommonConstant';
export default class NewsItem extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.newsData = undefined;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.newsData !== undefined) {
            this.newsData = params.newsData;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.alignItems(HorizontalAlign.Start);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777566, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.width(NewsTitle.IMAGE_WIDTH);
            Image.height(NewsTitle.IMAGE_HEIGHT);
            Image.margin({
                top: NewsTitle.IMAGE_MARGIN_TOP,
                left: NewsTitle.IMAGE_MARGIN_LEFT
            });
            Image.objectFit(ImageFit.Fill);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.newsData.title);
            Text.fontSize(NewsTitle.TEXT_FONT_SIZE);
            Text.fontColor({ "id": 16777335, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.height(NewsTitle.TEXT_HEIGHT);
            Text.width(NewsTitle.TEXT_WIDTH);
            Text.maxLines(NewsTitle.TEXT_MAX_LINES);
            Text.margin({ left: NewsTitle.TEXT_MARGIN_LEFT, top: NewsTitle.TEXT_MARGIN_TOP });
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
            Text.fontWeight(NewsTitle.TEXT_FONT_WEIGHT);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.newsData.content);
            Text.fontSize(NewsContent.FONT_SIZE);
            Text.fontColor({ "id": 16777335, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.height(NewsContent.HEIGHT);
            Text.width(NewsContent.WIDTH);
            Text.maxLines(NewsContent.MAX_LINES);
            Text.margin({ left: NewsContent.MARGIN_LEFT, top: NewsContent.MARGIN_TOP });
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Grid.create();
            Grid.columnsTemplate('1fr '.repeat(this.newsData.imagesUrl.length));
            Grid.columnsGap(NewsGrid.COLUMNS_GAP);
            Grid.rowsTemplate(NewsGrid.ROWS_TEMPLATE);
            Grid.width(NewsGrid.WIDTH);
            Grid.height(NewsGrid.HEIGHT);
            Grid.margin({ left: NewsGrid.MARGIN_LEFT, top: NewsGrid.MARGIN_TOP,
                right: NewsGrid.MARGIN_RIGHT });
            if (!isInitialRender) {
                Grid.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const itemImg = _item;
                {
                    const isLazyCreate = true && (Grid.willUseProxy() === true);
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        GridItem.create(deepRenderFunction, isLazyCreate);
                        if (!isInitialRender) {
                            GridItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const observedShallowRender = () => {
                        this.observeComponentCreation(itemCreation);
                        GridItem.pop();
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation(itemCreation);
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Image.create(itemImg.url);
                            Image.objectFit(ImageFit.Cover);
                            Image.borderRadius(NewsGrid.IMAGE_BORDER_RADIUS);
                            if (!isInitialRender) {
                                Image.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        GridItem.pop();
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.updateFuncByElmtId.set(elmtId, itemCreation);
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Image.create(itemImg.url);
                            Image.objectFit(ImageFit.Cover);
                            Image.borderRadius(NewsGrid.IMAGE_BORDER_RADIUS);
                            if (!isInitialRender) {
                                Image.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        GridItem.pop();
                    };
                    if (isLazyCreate) {
                        observedShallowRender();
                    }
                    else {
                        observedDeepRender();
                    }
                }
            };
            this.forEachUpdateFunction(elmtId, this.newsData.imagesUrl, forEachItemGenFunction, (itemImg, index) => JSON.stringify(itemImg) + index.toString(), false, true);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        Grid.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.newsData.source);
            Text.fontSize(NewsSource.FONT_SIZE);
            Text.fontColor({ "id": 16777337, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.height(NewsSource.HEIGHT);
            Text.width(NewsSource.WIDTH);
            Text.maxLines(NewsSource.MAX_LINES);
            Text.margin({ left: NewsSource.MARGIN_LEFT, top: NewsSource.MARGIN_TOP });
            Text.textOverflow({ overflow: TextOverflow.None });
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
//# sourceMappingURL=NewsItem.js.map