import CommonUtils from '@bundle:com.example.component/entry/ets/common/utils/CommonUtils';
import CommonConstants from '@bundle:com.example.component/entry/ets/common/constants/CommonConstants';
import TextCommonWidget from '@bundle:com.example.component/entry/ets/view/TextCommonWidget';
import TextRegisterCommonWidget from '@bundle:com.example.component/entry/ets/view/TextRegisterCommonWidget';
import Logger from '@bundle:com.example.component/entry/ets/common/utils/Logger';
import router from '@ohos:router';
import prompt from '@ohos:promptAction';
function __TextInput__inputStyle() {
    TextInput.placeholderColor({ "id": 16777262, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
    TextInput.height({ "id": 16777605, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
    TextInput.fontSize({ "id": 16777517, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
    TextInput.backgroundColor({ "id": 16777224, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
    TextInput.width(CommonConstants.FULL_PARENT);
    TextInput.padding({ left: CommonConstants.INPUT_PADDING_LEFT });
    TextInput.margin({ top: { "id": 16777587, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
}
function __Line__lineStyle() {
    Line.width(CommonConstants.FULL_PARENT);
    Line.height({ "id": 16777598, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
    Line.backgroundColor({ "id": 16777248, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
}
class RegisterPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__userType = new ObservedPropertySimplePU('', this, "userType");
        this.__phone = new ObservedPropertySimplePU('', this, "phone");
        this.__school = new ObservedPropertySimplePU('', this, "school");
        this.__schoolNumber = new ObservedPropertySimplePU('', this, "schoolNumber");
        this.__EType = new ObservedPropertySimplePU('', this, "EType");
        this.__password = new ObservedPropertySimplePU('', this, "password");
        this.__name = new ObservedPropertySimplePU('', this, "name");
        this.__supplierName = new ObservedPropertySimplePU('', this, "supplierName");
        this.__userId = new ObservedPropertySimplePU('', this, "userId");
        this.__companyName = new ObservedPropertySimplePU('', this, "companyName");
        this.__city = new ObservedPropertySimplePU('', this, "city");
        this.__educationalBackground = new ObservedPropertySimplePU('', this, "educationalBackground");
        this.timeOutId = null;
        this.userTypeArray = { "id": 16777222, "type": 10009, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
        this.schoolArray = { "id": 16777221, "type": 10009, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
        this.educationalBackgroundArray = { "id": 16777220, "type": 10009, params: [], "bundleName": "com.example.component", "moduleName": "entry" };
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.userType !== undefined) {
            this.userType = params.userType;
        }
        if (params.phone !== undefined) {
            this.phone = params.phone;
        }
        if (params.school !== undefined) {
            this.school = params.school;
        }
        if (params.schoolNumber !== undefined) {
            this.schoolNumber = params.schoolNumber;
        }
        if (params.EType !== undefined) {
            this.EType = params.EType;
        }
        if (params.password !== undefined) {
            this.password = params.password;
        }
        if (params.name !== undefined) {
            this.name = params.name;
        }
        if (params.supplierName !== undefined) {
            this.supplierName = params.supplierName;
        }
        if (params.userId !== undefined) {
            this.userId = params.userId;
        }
        if (params.companyName !== undefined) {
            this.companyName = params.companyName;
        }
        if (params.city !== undefined) {
            this.city = params.city;
        }
        if (params.educationalBackground !== undefined) {
            this.educationalBackground = params.educationalBackground;
        }
        if (params.timeOutId !== undefined) {
            this.timeOutId = params.timeOutId;
        }
        if (params.userTypeArray !== undefined) {
            this.userTypeArray = params.userTypeArray;
        }
        if (params.schoolArray !== undefined) {
            this.schoolArray = params.schoolArray;
        }
        if (params.educationalBackgroundArray !== undefined) {
            this.educationalBackgroundArray = params.educationalBackgroundArray;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__userType.purgeDependencyOnElmtId(rmElmtId);
        this.__phone.purgeDependencyOnElmtId(rmElmtId);
        this.__school.purgeDependencyOnElmtId(rmElmtId);
        this.__schoolNumber.purgeDependencyOnElmtId(rmElmtId);
        this.__EType.purgeDependencyOnElmtId(rmElmtId);
        this.__password.purgeDependencyOnElmtId(rmElmtId);
        this.__name.purgeDependencyOnElmtId(rmElmtId);
        this.__supplierName.purgeDependencyOnElmtId(rmElmtId);
        this.__userId.purgeDependencyOnElmtId(rmElmtId);
        this.__companyName.purgeDependencyOnElmtId(rmElmtId);
        this.__city.purgeDependencyOnElmtId(rmElmtId);
        this.__educationalBackground.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__userType.aboutToBeDeleted();
        this.__phone.aboutToBeDeleted();
        this.__school.aboutToBeDeleted();
        this.__schoolNumber.aboutToBeDeleted();
        this.__EType.aboutToBeDeleted();
        this.__password.aboutToBeDeleted();
        this.__name.aboutToBeDeleted();
        this.__supplierName.aboutToBeDeleted();
        this.__userId.aboutToBeDeleted();
        this.__companyName.aboutToBeDeleted();
        this.__city.aboutToBeDeleted();
        this.__educationalBackground.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get userType() {
        return this.__userType.get();
    }
    set userType(newValue) {
        this.__userType.set(newValue);
    }
    get phone() {
        return this.__phone.get();
    }
    set phone(newValue) {
        this.__phone.set(newValue);
    }
    get school() {
        return this.__school.get();
    }
    set school(newValue) {
        this.__school.set(newValue);
    }
    get schoolNumber() {
        return this.__schoolNumber.get();
    }
    set schoolNumber(newValue) {
        this.__schoolNumber.set(newValue);
    }
    get EType() {
        return this.__EType.get();
    }
    set EType(newValue) {
        this.__EType.set(newValue);
    }
    get password() {
        return this.__password.get();
    }
    set password(newValue) {
        this.__password.set(newValue);
    }
    get name() {
        return this.__name.get();
    }
    set name(newValue) {
        this.__name.set(newValue);
    }
    get supplierName() {
        return this.__supplierName.get();
    }
    set supplierName(newValue) {
        this.__supplierName.set(newValue);
    }
    get userId() {
        return this.__userId.get();
    }
    set userId(newValue) {
        this.__userId.set(newValue);
    }
    get companyName() {
        return this.__companyName.get();
    }
    set companyName(newValue) {
        this.__companyName.set(newValue);
    }
    get city() {
        return this.__city.get();
    }
    set city(newValue) {
        this.__city.set(newValue);
    }
    get educationalBackground() {
        return this.__educationalBackground.get();
    }
    set educationalBackground(newValue) {
        this.__educationalBackground.set(newValue);
    }
    // customDialogController: CustomDialogController = new CustomDialogController({
    //   builder: CustomDialogWidget({
    //     hobbies: $hobbies,
    //   }),
    //   alignment: DialogAlignment.Bottom,
    //   customStyle: true,
    //   offset: {
    //     dx: 0,
    //     dy: CommonConstants.DY_OFFSET
    //   }
    // });
    student(parent = null) {
        this.base.bind(this)();
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new TextRegisterCommonWidget(this, {
                        title: { "id": 16777430, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                        content: this.__school,
                        onItemClick: () => {
                            CommonUtils.textPickerDialog(this.schoolArray, (typeValue) => {
                                this.school = typeValue;
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
            Line.create();
            Line.debugLine("pages/RegisterPage.ets(92:5)");
            __Line__lineStyle();
            if (!isInitialRender) {
                Line.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: { "id": 16777431, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            TextInput.debugLine("pages/RegisterPage.ets(93:5)");
            TextInput.maxLength(CommonConstants.INPUT_ACCOUNT_LENGTH);
            TextInput.type(InputType.Normal);
            __TextInput__inputStyle();
            TextInput.margin({ left: '12vp' });
            TextInput.backgroundColor({ "id": 16777276, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            TextInput.onChange((value) => {
                this.schoolNumber = value;
            });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Line.create();
            Line.debugLine("pages/RegisterPage.ets(101:5)");
            __Line__lineStyle();
            if (!isInitialRender) {
                Line.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new TextRegisterCommonWidget(this, {
                        title: { "id": 16777424, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                        content: this.__educationalBackground,
                        onItemClick: () => {
                            CommonUtils.textPickerDialog(this.educationalBackgroundArray, (typeValue) => {
                                this.educationalBackground = typeValue;
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
            Line.create();
            Line.debugLine("pages/RegisterPage.ets(111:5)");
            __Line__lineStyle();
            if (!isInitialRender) {
                Line.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
    }
    supplier(parent = null) {
        this.base.bind(this)();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: { "id": 16777433, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            TextInput.debugLine("pages/RegisterPage.ets(116:5)");
            TextInput.maxLength(CommonConstants.INPUT_ACCOUNT_LENGTH);
            TextInput.type(InputType.Normal);
            __TextInput__inputStyle();
            TextInput.margin({ left: '12vp' });
            TextInput.backgroundColor({ "id": 16777276, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            TextInput.onChange((value) => {
                this.userId = value;
            });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Line.create();
            Line.debugLine("pages/RegisterPage.ets(124:5)");
            __Line__lineStyle();
            if (!isInitialRender) {
                Line.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: { "id": 16777432, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            TextInput.debugLine("pages/RegisterPage.ets(125:5)");
            TextInput.maxLength(CommonConstants.INPUT_ACCOUNT_LENGTH);
            TextInput.type(InputType.Normal);
            __TextInput__inputStyle();
            TextInput.margin({ left: '12vp' });
            TextInput.backgroundColor({ "id": 16777276, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            TextInput.onChange((value) => {
                this.supplierName = value;
            });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Line.create();
            Line.debugLine("pages/RegisterPage.ets(133:5)");
            __Line__lineStyle();
            if (!isInitialRender) {
                Line.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: { "id": 16777421, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            TextInput.debugLine("pages/RegisterPage.ets(135:5)");
            TextInput.maxLength(CommonConstants.INPUT_ACCOUNT_LENGTH);
            TextInput.type(InputType.Normal);
            __TextInput__inputStyle();
            TextInput.margin({ left: '12vp' });
            TextInput.backgroundColor({ "id": 16777276, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            TextInput.onChange((value) => {
                this.city = value;
            });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Line.create();
            Line.debugLine("pages/RegisterPage.ets(143:5)");
            __Line__lineStyle();
            if (!isInitialRender) {
                Line.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: { "id": 16777430, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            TextInput.debugLine("pages/RegisterPage.ets(145:5)");
            TextInput.maxLength(CommonConstants.INPUT_ACCOUNT_LENGTH);
            TextInput.type(InputType.Normal);
            __TextInput__inputStyle();
            TextInput.margin({ left: '12vp' });
            TextInput.backgroundColor({ "id": 16777276, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            TextInput.onChange((value) => {
                this.school = value;
            });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Line.create();
            Line.debugLine("pages/RegisterPage.ets(153:5)");
            __Line__lineStyle();
            if (!isInitialRender) {
                Line.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
    }
    company(parent = null) {
        this.base.bind(this)();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: { "id": 16777433, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            TextInput.debugLine("pages/RegisterPage.ets(158:5)");
            TextInput.maxLength(CommonConstants.INPUT_ACCOUNT_LENGTH);
            TextInput.type(InputType.Normal);
            __TextInput__inputStyle();
            TextInput.margin({ left: '12vp' });
            TextInput.backgroundColor({ "id": 16777276, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            TextInput.onChange((value) => {
                this.userId = value;
            });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Line.create();
            Line.debugLine("pages/RegisterPage.ets(166:5)");
            __Line__lineStyle();
            if (!isInitialRender) {
                Line.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: { "id": 16777422, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            TextInput.debugLine("pages/RegisterPage.ets(168:5)");
            TextInput.maxLength(CommonConstants.INPUT_ACCOUNT_LENGTH);
            TextInput.type(InputType.Normal);
            __TextInput__inputStyle();
            TextInput.margin({ left: '12vp' });
            TextInput.backgroundColor({ "id": 16777276, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            TextInput.onChange((value) => {
                this.companyName = value;
            });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Line.create();
            Line.debugLine("pages/RegisterPage.ets(176:5)");
            __Line__lineStyle();
            if (!isInitialRender) {
                Line.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
    }
    base(parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: { "id": 16777429, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            TextInput.debugLine("pages/RegisterPage.ets(180:5)");
            TextInput.maxLength(CommonConstants.INPUT_ACCOUNT_LENGTH);
            TextInput.type(InputType.Normal);
            __TextInput__inputStyle();
            TextInput.margin({ left: '12vp' });
            TextInput.backgroundColor({ "id": 16777276, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            TextInput.onChange((value) => {
                this.phone = value;
            });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Line.create();
            Line.debugLine("pages/RegisterPage.ets(189:5)");
            __Line__lineStyle();
            if (!isInitialRender) {
                Line.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: { "id": 16777427, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            TextInput.debugLine("pages/RegisterPage.ets(191:5)");
            TextInput.maxLength(CommonConstants.INPUT_ACCOUNT_LENGTH);
            TextInput.type(InputType.Normal);
            __TextInput__inputStyle();
            TextInput.margin({ left: '12vp' });
            TextInput.backgroundColor({ "id": 16777276, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            TextInput.onChange((value) => {
                this.password = value;
            });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Line.create();
            Line.debugLine("pages/RegisterPage.ets(199:5)");
            __Line__lineStyle();
            if (!isInitialRender) {
                Line.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: { "id": 16777434, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            TextInput.debugLine("pages/RegisterPage.ets(201:5)");
            TextInput.maxLength(CommonConstants.INPUT_ACCOUNT_LENGTH);
            TextInput.type(InputType.Normal);
            __TextInput__inputStyle();
            TextInput.margin({ left: '12vp' });
            TextInput.backgroundColor({ "id": 16777276, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            TextInput.onChange((value) => {
                this.name = value;
            });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Line.create();
            Line.debugLine("pages/RegisterPage.ets(209:5)");
            __Line__lineStyle();
            if (!isInitialRender) {
                Line.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
    }
    register() {
        if (this.userType === '' || this.name === '') {
            prompt.showToast({
                message: { "id": 16777341, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
            });
        }
        else {
            if (this.timeOutId === null) {
                this.timeOutId = setTimeout(() => {
                    router.replaceUrl({ url: 'pages/MainPage' });
                }, CommonConstants.LOGIN_DELAY_TIME);
            }
        }
    }
    aboutToAppear() {
        let context = getContext(this);
        if ((CommonUtils.isEmpty(context)) || (CommonUtils.isEmpty(context.resourceManager))) {
            Logger.error(CommonConstants.TAG_HOME, 'context or resourceManager is null');
            return;
        }
        let manager = context.resourceManager;
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/RegisterPage.ets(236:5)");
            Column.backgroundColor({ "id": 16777270, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Column.height(CommonConstants.FULL_PARENT);
            Column.width(CommonConstants.FULL_PARENT);
            Column.padding({
                left: { "id": 16777639, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                right: { "id": 16777639, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                bottom: { "id": 16777608, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777304, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.debugLine("pages/RegisterPage.ets(237:7)");
            Image.width({ "id": 16777579, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.height({ "id": 16777579, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Image.alignSelf(ItemAlign.Start);
            Image.margin({
                left: CommonConstants.BACK_MARGIN_LEFT,
                top: CommonConstants.BACK_MARGIN_TOP
            });
            Image.onClick(() => {
                router.replaceUrl({ url: 'pages/LoginPage' });
            });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777410, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.debugLine("pages/RegisterPage.ets(248:7)");
            Text.fontColor(Color.Black);
            Text.fontSize({ "id": 16777641, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Text.margin({ top: CommonConstants.PERSONAL_MARGIN_TOP });
            Text.alignSelf(ItemAlign.Center);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new TextCommonWidget(this, {
                        title: { "id": 16777435, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                        content: this.__userType,
                        onItemClick: () => {
                            CommonUtils.textPickerDialog(this.userTypeArray, (typeValue) => {
                                this.userType = typeValue;
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
            Line.create();
            Line.debugLine("pages/RegisterPage.ets(262:7)");
            __Line__lineStyle();
            if (!isInitialRender) {
                Line.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/RegisterPage.ets(264:7)");
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (this.userType == 'student' || this.userType == '学生') {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.student.bind(this)();
                });
            }
            else if (this.userType == 'supplier' || this.userType == '商家') {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.supplier.bind(this)();
                });
            }
            else if (this.userType == 'company' || this.userType == '企业') {
                this.ifElseBranchUpdateFunction(2, () => {
                    this.company.bind(this)();
                });
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Blank.create();
            Blank.debugLine("pages/RegisterPage.ets(274:7)");
            if (!isInitialRender) {
                Blank.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Blank.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel({ "id": 16777383, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { type: ButtonType.Capsule });
            Button.debugLine("pages/RegisterPage.ets(276:7)");
            Button.width(CommonConstants.BUTTON_WIDTH);
            Button.height({ "id": 16777602, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Button.fontSize({ "id": 16777631, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Button.fontWeight(FontWeight.Medium);
            Button.fontColor({ "id": 16777225, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Button.backgroundColor({ "id": 16777254, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            Button.margin({ bottom: { "id": 16777657, "type": 10002, params: [], "bundleName": "com.example.component", "moduleName": "entry" } });
            Button.onClick(() => {
                this.register();
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new RegisterPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=RegisterPage.js.map