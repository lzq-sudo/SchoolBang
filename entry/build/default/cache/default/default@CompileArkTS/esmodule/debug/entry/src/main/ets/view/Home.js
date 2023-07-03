import { StyleConstants } from '@bundle:com.example.component/entry/ets/common/constants/StyleConstants';
import { BreakpointConstants } from '@bundle:com.example.component/entry/ets/common/constants/BreakpointConstants';
import { searchSwiper, classifyTitle, swiperImage } from '@bundle:com.example.component/entry/ets/viewmodel/HomeData';
import { productData, aspectRatio } from '@bundle:com.example.component/entry/ets/viewmodel/NewProductData';
import { CommonDataSource } from '@bundle:com.example.component/entry/ets/common/utils/CommonDataSource';
import { BreakPointType } from '@bundle:com.example.component/entry/ets/common/utils/BreakpointSystem';
import router from '@ohos:router';
export default class Home extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__changeValue = new ObservedPropertySimplePU('', this, "changeValue");
        this.__submitValue = new ObservedPropertySimplePU('', this, "submitValue");
        this.__userSchoolType = new ObservedPropertyObjectPU('', this, "userSchoolType");
        this.__currentBreakpoint = this.createStorageProp('currentBreakpoint', 'sm', "currentBreakpoint");
        this.__titleIndex = new ObservedPropertySimplePU(0, this, "titleIndex");
        this.__activityTitleIndex = new ObservedPropertySimplePU(0, this, "activityTitleIndex");
        this.onClickItem = undefined;
        this.userSchoolTypeArray = { "id": 16777350, "type": 10009, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
        this.controller = new SearchController();
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.changeValue !== undefined) {
            this.changeValue = params.changeValue;
        }
        if (params.submitValue !== undefined) {
            this.submitValue = params.submitValue;
        }
        if (params.userSchoolType !== undefined) {
            this.userSchoolType = params.userSchoolType;
        }
        if (params.titleIndex !== undefined) {
            this.titleIndex = params.titleIndex;
        }
        if (params.activityTitleIndex !== undefined) {
            this.activityTitleIndex = params.activityTitleIndex;
        }
        if (params.onClickItem !== undefined) {
            this.onClickItem = params.onClickItem;
        }
        if (params.userSchoolTypeArray !== undefined) {
            this.userSchoolTypeArray = params.userSchoolTypeArray;
        }
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__changeValue.purgeDependencyOnElmtId(rmElmtId);
        this.__submitValue.purgeDependencyOnElmtId(rmElmtId);
        this.__userSchoolType.purgeDependencyOnElmtId(rmElmtId);
        this.__titleIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__activityTitleIndex.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__changeValue.aboutToBeDeleted();
        this.__submitValue.aboutToBeDeleted();
        this.__userSchoolType.aboutToBeDeleted();
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__titleIndex.aboutToBeDeleted();
        this.__activityTitleIndex.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get changeValue() {
        return this.__changeValue.get();
    }
    set changeValue(newValue) {
        this.__changeValue.set(newValue);
    }
    get submitValue() {
        return this.__submitValue.get();
    }
    set submitValue(newValue) {
        this.__submitValue.set(newValue);
    }
    get userSchoolType() {
        return this.__userSchoolType.get();
    }
    set userSchoolType(newValue) {
        this.__userSchoolType.set(newValue);
    }
    get currentBreakpoint() {
        return this.__currentBreakpoint.get();
    }
    set currentBreakpoint(newValue) {
        this.__currentBreakpoint.set(newValue);
    }
    get titleIndex() {
        return this.__titleIndex.get();
    }
    set titleIndex(newValue) {
        this.__titleIndex.set(newValue);
    }
    get activityTitleIndex() {
        return this.__activityTitleIndex.get();
    }
    set activityTitleIndex(newValue) {
        this.__activityTitleIndex.set(newValue);
    }
    SearchTitle(parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.width(StyleConstants.FULL_WIDTH);
            Column.padding({ top: { "id": 16777593, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, bottom: { "id": 16777593, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            Column.onClick(() => {
                router.replaceUrl({ url: 'pages/Search' });
            });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.height({ "id": 16777548, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Row.width(StyleConstants.FULL_WIDTH);
            Row.borderRadius({ "id": 16777594, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Row.backgroundColor(Color.White);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777687, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.width({ "id": 16777594, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.height({ "id": 16777594, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.margin({
                left: { "id": 16777593, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                right: { "id": 16777584, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Swiper.create();
            Swiper.autoPlay(true);
            Swiper.loop(true);
            Swiper.vertical(true);
            Swiper.indicator(false);
            if (!isInitialRender) {
                Swiper.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
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
                    Text.create(item);
                    Text.fontSize({ "id": 16777570, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                    Text.fontColor(Color.Black);
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                Column.pop();
            };
            this.forEachUpdateFunction(elmtId, searchSwiper, forEachItemGenFunction, item => JSON.stringify(item), false, false);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        Swiper.pop();
        Row.pop();
        Column.pop();
    }
    ClassifyTitle(parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Flex.create({ justifyContent: FlexAlign.SpaceBetween });
            Flex.margin({ top: { "id": 16777584, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            Flex.width(StyleConstants.FULL_WIDTH);
            if (!isInitialRender) {
                Flex.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = (_item, index) => {
                const item = _item;
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create(item);
                    Text.fontSize({ "id": 16777525, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                    Text.opacity(this.titleIndex === index ? StyleConstants.FULL_OPACITY : StyleConstants.EIGHTY_OPACITY);
                    Text.fontWeight(this.titleIndex === index ? StyleConstants.FONT_WEIGHT_SEVEN : StyleConstants.FONT_WEIGHT_FOUR);
                    Text.fontColor(Color.Black);
                    Text.onClick(() => {
                        this.titleIndex = index;
                    });
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
            };
            this.forEachUpdateFunction(elmtId, classifyTitle, forEachItemGenFunction, item => JSON.stringify(item), true, false);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.onClick(() => {
                this.titleIndex = undefined;
            });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777658, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.width({ "id": 16777589, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.height({ "id": 16777588, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777677, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.width({ "id": 16777591, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.height({ "id": 16777591, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.margin({
                left: { "id": 16777596, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                right: { "id": 16777596, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('其他');
            Text.fontSize({ "id": 16777525, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.fontColor(Color.Black);
            Text.opacity(this.titleIndex === undefined ? StyleConstants.FULL_OPACITY : StyleConstants.EIGHTY_OPACITY);
            Text.fontWeight(this.titleIndex === undefined ?
                StyleConstants.FONT_WEIGHT_SEVEN : StyleConstants.FONT_WEIGHT_FOUR);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        Flex.pop();
    }
    CustomSwiper(parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Swiper.create();
            Swiper.indicatorStyle({ selectedColor: { "id": 16777375, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            Swiper.autoPlay(true);
            Swiper.itemSpace(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? 0 : StyleConstants.ITEM_SPACE);
            Swiper.width(StyleConstants.FULL_WIDTH);
            Swiper.indicator(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM);
            Swiper.displayCount(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? StyleConstants.DISPLAY_THREE :
                (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_MD ? StyleConstants.DISPLAY_TWO :
                    StyleConstants.DISPLAY_ONE));
            Swiper.margin({ top: { "id": 16777593, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, bottom: { "id": 16777593, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            if (!isInitialRender) {
                Swiper.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create(item);
                    Image.width(StyleConstants.FULL_WIDTH);
                    Image.aspectRatio(StyleConstants.IMAGE_ASPECT_RATIO);
                    Image.borderRadius({ "id": 16777591, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                    Image.backgroundColor(Color.White);
                    if (!isInitialRender) {
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
            };
            this.forEachUpdateFunction(elmtId, swiperImage, forEachItemGenFunction, item => JSON.stringify(item), false, false);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        Swiper.pop();
    }
    ProductList(parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            List.create({ space: StyleConstants.TWELVE_SPACE });
            List.lanes(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ?
                StyleConstants.DISPLAY_TWO : StyleConstants.DISPLAY_THREE);
            if (!isInitialRender) {
                List.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            const __lazyForEachItemGenFunction = _item => {
                const item = _item;
                {
                    const isLazyCreate = (globalThis.__lazyForEachItemGenFunction !== undefined) && true;
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ListItem.create(deepRenderFunction, isLazyCreate);
                        ListItem.margin({
                            left: { "id": 16777590, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                            right: { "id": 16777590, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
                        });
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
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Column.create();
                            Column.borderRadius({ "id": 16777584, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                            if (!isInitialRender) {
                                Column.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Image.create({ "id": 16777600, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                            Image.width(StyleConstants.FULL_WIDTH);
                            Image.aspectRatio(new BreakPointType({
                                sm: aspectRatio.sm,
                                md: aspectRatio.md,
                                lg: aspectRatio.lg
                            }).getValue(this.currentBreakpoint));
                            Image.objectFit(ImageFit.Fill);
                            if (!isInitialRender) {
                                Image.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Column.create();
                            Column.width(StyleConstants.FULL_WIDTH);
                            Column.backgroundColor(Color.White);
                            Column.alignItems(HorizontalAlign.Start);
                            Column.justifyContent(FlexAlign.Start);
                            Column.borderRadius({ bottomLeft: { "id": 16777584, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, bottomRight: { "id": 16777584, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
                            if (!isInitialRender) {
                                Column.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            If.create();
                            if (item.comment) {
                                this.ifElseBranchUpdateFunction(0, () => {
                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        Text.create(item.comment);
                                        Text.fontSize({ "id": 16777572, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                                        Text.border({
                                            width: { "id": 16777589, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                                            color: { "id": 16777400, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                                            radius: { "id": 16777588, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
                                        });
                                        Text.height({ "id": 16777433, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                                        Text.padding({
                                            left: { "id": 16777584, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                                            right: { "id": 16777584, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
                                        });
                                        Text.margin({
                                            left: { "id": 16777584, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                                            top: { "id": 16777584, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
                                        });
                                        if (!isInitialRender) {
                                            Text.pop();
                                        }
                                        ViewStackProcessor.StopGetAccessRecording();
                                    });
                                    Text.pop();
                                });
                            }
                            else {
                                If.branchId(1);
                            }
                            if (!isInitialRender) {
                                If.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        If.pop();
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(item.des);
                            Text.fontSize({ "id": 16777570, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                            Text.margin({
                                top: { "id": 16777584, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                                bottom: { "id": 16777584, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                                left: { "id": 16777584, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
                            });
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Row.create();
                            Row.margin({
                                left: { "id": 16777592, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                                bottom: { "id": 16777592, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
                            });
                            if (!isInitialRender) {
                                Row.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Image.create({ "id": 16777650, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                            Image.width({ "id": 16777594, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                            Image.height({ "id": 16777594, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                            if (!isInitialRender) {
                                Image.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(item.user);
                            Text.fontSize({ "id": 16777570, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                            Text.margin({ left: { "id": 16777584, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        Row.pop();
                        Column.pop();
                        Column.pop();
                        ListItem.pop();
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.updateFuncByElmtId.set(elmtId, itemCreation);
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Column.create();
                            Column.borderRadius({ "id": 16777584, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                            if (!isInitialRender) {
                                Column.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Image.create({ "id": 16777600, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                            Image.width(StyleConstants.FULL_WIDTH);
                            Image.aspectRatio(new BreakPointType({
                                sm: aspectRatio.sm,
                                md: aspectRatio.md,
                                lg: aspectRatio.lg
                            }).getValue(this.currentBreakpoint));
                            Image.objectFit(ImageFit.Fill);
                            if (!isInitialRender) {
                                Image.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Column.create();
                            Column.width(StyleConstants.FULL_WIDTH);
                            Column.backgroundColor(Color.White);
                            Column.alignItems(HorizontalAlign.Start);
                            Column.justifyContent(FlexAlign.Start);
                            Column.borderRadius({ bottomLeft: { "id": 16777584, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, bottomRight: { "id": 16777584, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
                            if (!isInitialRender) {
                                Column.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            If.create();
                            if (item.comment) {
                                this.ifElseBranchUpdateFunction(0, () => {
                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        Text.create(item.comment);
                                        Text.fontSize({ "id": 16777572, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                                        Text.border({
                                            width: { "id": 16777589, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                                            color: { "id": 16777400, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                                            radius: { "id": 16777588, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
                                        });
                                        Text.height({ "id": 16777433, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                                        Text.padding({
                                            left: { "id": 16777584, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                                            right: { "id": 16777584, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
                                        });
                                        Text.margin({
                                            left: { "id": 16777584, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                                            top: { "id": 16777584, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
                                        });
                                        if (!isInitialRender) {
                                            Text.pop();
                                        }
                                        ViewStackProcessor.StopGetAccessRecording();
                                    });
                                    Text.pop();
                                });
                            }
                            else {
                                If.branchId(1);
                            }
                            if (!isInitialRender) {
                                If.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        If.pop();
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(item.des);
                            Text.fontSize({ "id": 16777570, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                            Text.margin({
                                top: { "id": 16777584, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                                bottom: { "id": 16777584, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                                left: { "id": 16777584, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
                            });
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Row.create();
                            Row.margin({
                                left: { "id": 16777592, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                                bottom: { "id": 16777592, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
                            });
                            if (!isInitialRender) {
                                Row.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Image.create({ "id": 16777650, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                            Image.width({ "id": 16777594, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                            Image.height({ "id": 16777594, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                            if (!isInitialRender) {
                                Image.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(item.user);
                            Text.fontSize({ "id": 16777570, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                            Text.margin({ left: { "id": 16777584, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        Row.pop();
                        Column.pop();
                        Column.pop();
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
            const __lazyForEachItemIdFunc = item => JSON.stringify(item);
            LazyForEach.create("1", this, new CommonDataSource(productData), __lazyForEachItemGenFunction, __lazyForEachItemIdFunc);
            LazyForEach.pop();
        }
        List.pop();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Stack.create({ alignContent: Alignment.Top });
            if (!isInitialRender) {
                Stack.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777696, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.width(StyleConstants.FULL_WIDTH);
            Image.height({ "id": 16777479, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.objectFit(ImageFit.Auto);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Flex.create({ direction: FlexDirection.Column });
            Flex.padding({ left: { "id": 16777593, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, right: { "id": 16777593, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            if (!isInitialRender) {
                Flex.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.SearchTitle.bind(this)();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Scroll.create();
            Scroll.scrollBar(BarState.Off);
            if (!isInitialRender) {
                Scroll.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.ClassifyTitle.bind(this)();
        this.CustomSwiper.bind(this)();
        this.ProductList.bind(this)();
        Column.pop();
        Scroll.pop();
        Flex.pop();
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=Home.js.map