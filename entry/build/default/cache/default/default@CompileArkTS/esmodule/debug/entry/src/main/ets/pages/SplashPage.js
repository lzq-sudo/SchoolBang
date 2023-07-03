import router from '@ohos:router';
import commonConst from '@bundle:com.example.component/entry/ets/common/constants/CommonConstants';
// app preferences name
const SCHOOL_BANG = 'SchoolBang';
const IS_LOGIN = 'isLogin';
class SplashIndex extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.context = getContext(this);
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.context !== undefined) {
            this.context = params.context;
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
    // onConfirm() {
    //   let preferences = data_preferences.getPreferences(this.context, H_STORE);
    //   preferences.then((res) => {
    //     res.put(IS_PRIVACY, true).then(() => {
    //       res.flush();
    //       Logger.info('SplashPage','isPrivacy is put success');
    //     }).catch((err) => {
    //       Logger.info('SplashPage','isPrivacy put failed. Cause:' + err);
    //     });
    //   })
    //   this.jumpAdPage();
    // }
    exitApp() {
        this.context.terminateSelf();
    }
    jumpLoginPage() {
        setTimeout(() => {
            router.replaceUrl({ url: 'pages/LoginPage' });
        }, commonConst.LAUNCHER_DELAY_TIME);
    }
    jumpMainPage() {
        setTimeout(() => {
            router.replaceUrl({ url: 'pages/MainPage' });
        }, commonConst.LAUNCHER_DELAY_TIME);
    }
    aboutToAppear() {
        // let preferences = data_preferences.getPreferences(this.context, H_STORE);
        // preferences.then((res) => {
        //   res.get(IS_LOGIN, false).then((isPrivate) => {
        //     if (isPrivate === true) {
        this.jumpLoginPage();
        //     } else {
        //       this.dialogController.open();
        //     }
        //   });
        // });
    }
    aboutToDisappear() {
        clearTimeout();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.backgroundImagePosition({ x: 0, y: 0 });
            Column.backgroundColor({ "id": 16777398, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Column.backgroundImageSize({ width: '100%', height: '100%' });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777599, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.width('200vp');
            Image.height({ "id": 16777510, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.margin({ top: '200vp', bottom: { "id": 16777511, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777250, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.fontSize({ "id": 16777530, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.fontColor({ "id": 16777381, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.margin({ bottom: { "id": 16777505, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, top: { "id": 16777506, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
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
loadDocument(new SplashIndex(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=SplashPage.js.map