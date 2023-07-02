import router from '@ohos:router';
import Constants from '@bundle:com.example.component/entry/ets/common/constants/Constants';
import { fileSelect, fileUpload } from '@bundle:com.example.component/entry/ets/common/utils/FileUtil';
import { NewsFile, NewsData } from '@bundle:com.example.component/entry/ets/common/bean/NewsData';
import NewsViewModel from '@bundle:com.example.component/entry/ets/viewmodel/NewsViewModel';
import { showToast } from '@bundle:com.example.component/entry/ets/common/utils/ToastUtil';
import UploadingLayout from '@bundle:com.example.component/entry/ets/view/UploadingLayout';
import TextLaunchCommonWidget from '@bundle:com.example.component/entry/ets/view/TextLaunchCommonWidget';
import CommonUtils from '@bundle:com.example.component/entry/ets/common/utils/CommonUtils';
export default class LaunchEditPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.title = '';
        this.content = '';
        this.__launchType = new ObservedPropertySimplePU('', this, "launchType");
        this.launchTypeArray = { "id": 16777282, "type": 10009, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
        this.__imageUri = new ObservedPropertySimplePU('', this, "imageUri");
        this.__isUploading = new ObservedPropertySimplePU(false, this, "isUploading");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.title !== undefined) {
            this.title = params.title;
        }
        if (params.content !== undefined) {
            this.content = params.content;
        }
        if (params.launchType !== undefined) {
            this.launchType = params.launchType;
        }
        if (params.launchTypeArray !== undefined) {
            this.launchTypeArray = params.launchTypeArray;
        }
        if (params.imageUri !== undefined) {
            this.imageUri = params.imageUri;
        }
        if (params.isUploading !== undefined) {
            this.isUploading = params.isUploading;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__launchType.purgeDependencyOnElmtId(rmElmtId);
        this.__imageUri.purgeDependencyOnElmtId(rmElmtId);
        this.__isUploading.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__launchType.aboutToBeDeleted();
        this.__imageUri.aboutToBeDeleted();
        this.__isUploading.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get launchType() {
        return this.__launchType.get();
    }
    set launchType(newValue) {
        this.__launchType.set(newValue);
    }
    get imageUri() {
        return this.__imageUri.get();
    }
    set imageUri(newValue) {
        this.__imageUri.set(newValue);
    }
    get isUploading() {
        return this.__isUploading.get();
    }
    set isUploading(newValue) {
        this.__isUploading.set(newValue);
    }
    selectImage() {
        fileSelect().then((uri) => {
            this.imageUri = uri || '';
        });
    }
    uploadNewsData() {
        if (!this.title) {
            showToast({ "id": 16777371, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            return;
        }
        if (!this.content) {
            showToast({ "id": 16777369, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            return;
        }
        if (!this.imageUri) {
            showToast({ "id": 16777370, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            return;
        }
        this.isUploading = true;
        let serverData = fileUpload(getContext(this), this.imageUri);
        serverData.then((data) => {
            let imageUrl = data.data;
            let newsFile = new NewsFile(0, imageUrl, 0, 0);
            let newsData = new NewsData(this.title, this.content, [newsFile], '');
            NewsViewModel.uploadNews(newsData).then(() => {
                this.isUploading = false;
                globalThis.isBackRouter = true;
                router.back();
            }).catch(() => {
                this.isUploading = false;
                showToast({ "id": 16777436, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            });
        }).catch(() => {
            this.isUploading = false;
            showToast({ "id": 16777436, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
        });
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Stack.create();
            Stack.debugLine("view/LaunchEditPage.ets(68:5)");
            if (!isInitialRender) {
                Stack.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Navigation.create();
            Navigation.debugLine("view/LaunchEditPage.ets(69:7)");
            Navigation.height(Constants.FULL_PERCENT);
            Navigation.title(Constants.RELEASE_TITLE);
            Navigation.titleMode(NavigationTitleMode.Full);
            Navigation.backgroundColor({ "id": 16777249, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            if (!isInitialRender) {
                Navigation.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("view/LaunchEditPage.ets(70:9)");
            Column.padding({
                left: { "id": 16777539, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                right: { "id": 16777539, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                bottom: { "id": 16777539, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
            });
            Column.height(Constants.FULL_PERCENT);
            Column.justifyContent(FlexAlign.SpaceBetween);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("view/LaunchEditPage.ets(71:11)");
            Column.borderRadius({ "id": 16777553, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Column.backgroundColor(Color.White);
            Column.width(Constants.FULL_PERCENT);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new TextLaunchCommonWidget(this, {
                        title: { "id": 16777426, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                        content: this.__launchType,
                        onItemClick: () => {
                            CommonUtils.textPickerDialog(this.launchTypeArray, (typeValue) => {
                                this.launchType = typeValue;
                            });
                        }
                    }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Divider.create();
            Divider.debugLine("view/LaunchEditPage.ets(81:13)");
            Divider.opacity({ "id": 16777552, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Divider.color({ "id": 16777273, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Divider.width(Constants.DIVIDER_WIDTH);
            if (!isInitialRender) {
                Divider.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: { "id": 16777423, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            TextInput.debugLine("view/LaunchEditPage.ets(86:13)");
            TextInput.fontSize({ "id": 16777678, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            TextInput.placeholderFont({ size: { "id": 16777678, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            TextInput.margin({ top: { "id": 16777539, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            TextInput.fontColor({ "id": 16777273, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            TextInput.backgroundColor(Color.White);
            TextInput.onChange((value) => {
                this.title = value;
            });
            TextInput.width(Constants.FULL_PERCENT);
            TextInput.height({ "id": 16777583, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Divider.create();
            Divider.debugLine("view/LaunchEditPage.ets(97:13)");
            Divider.opacity({ "id": 16777552, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Divider.color({ "id": 16777273, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Divider.width(Constants.DIVIDER_WIDTH);
            if (!isInitialRender) {
                Divider.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextArea.create({ placeholder: { "id": 16777328, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            TextArea.debugLine("view/LaunchEditPage.ets(101:13)");
            TextArea.placeholderFont({ size: { "id": 16777678, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            TextArea.fontColor({ "id": 16777273, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            TextArea.height({ "id": 16777508, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            TextArea.fontSize({ "id": 16777678, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            TextArea.margin({ top: { "id": 16777630, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            TextArea.backgroundColor(Color.White);
            TextArea.onChange((value) => {
                this.content = value;
            });
            if (!isInitialRender) {
                TextArea.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Scroll.create();
            Scroll.debugLine("view/LaunchEditPage.ets(111:13)");
            Scroll.width(Constants.FULL_PERCENT);
            Scroll.scrollable(ScrollDirection.Horizontal);
            Scroll.align(Alignment.Start);
            if (!isInitialRender) {
                Scroll.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("view/LaunchEditPage.ets(112:15)");
            Row.padding({ "id": 16777539, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(this.imageUri ? this.imageUri : { "id": 16777305, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.debugLine("view/LaunchEditPage.ets(113:17)");
            Image.width({ "id": 16777582, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.height({ "id": 16777582, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.objectFit(ImageFit.Cover);
            Image.onClick(this.selectImage.bind(this));
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Row.pop();
        Scroll.pop();
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel({ "id": 16777384, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Button.debugLine("view/LaunchEditPage.ets(129:11)");
            Button.fontSize({ "id": 16777678, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Button.backgroundColor({ "id": 16777254, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Button.fontColor({ "id": 16777225, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Button.height({ "id": 16777644, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Button.width({ "id": 16777645, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Button.margin({ bottom: { "id": 16777539, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            Button.onClick(this.uploadNewsData.bind(this));
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        Column.pop();
        Navigation.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (this.isUploading) {
                this.ifElseBranchUpdateFunction(0, () => {
                    {
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            if (isInitialRender) {
                                ViewPU.create(new UploadingLayout(this, {}, undefined, elmtId));
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                    }
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
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
if (getPreviewComponentFlag()) {
    previewComponent();
}
else {
    storePreviewComponents(1, "LaunchEditPage", new LaunchEditPage(undefined, {}));
    ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
    loadDocument(new LaunchEditPage(undefined, {}));
    ViewStackProcessor.StopGetAccessRecording();
}
//# sourceMappingURL=LaunchEditPage.js.map