import { StyleConstants } from '@bundle:com.example.component/entry/ets/common/constants/StyleConstants';
import SearchInput from '@bundle:com.example.component/entry/ets/view/SearchInput';
import ClearSearch from '@bundle:com.example.component/entry/ets/view/ClearSearch';
import FlexLayout from '@bundle:com.example.component/entry/ets/view/FlexLayout';
import SearchViewModel from '@bundle:com.example.component/entry/ets/viewmodel/SearchViewModel';
export default class Home extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__searchArr = new ObservedPropertyObjectPU(SearchViewModel.getSearchArrData(), this, "searchArr");
        this.controller = new SearchController();
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.searchArr !== undefined) {
            this.searchArr = params.searchArr;
        }
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__searchArr.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__searchArr.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get searchArr() {
        return this.__searchArr.get();
    }
    set searchArr(newValue) {
        this.__searchArr.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.height(StyleConstants.FULL_PERCENT);
            Column.width(StyleConstants.FULL_PERCENT);
            Column.alignItems(HorizontalAlign.Center);
            Column.backgroundColor({ "id": 16777374, "type": 10001, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new 
                    // Customized component of the search text box.
                    SearchInput(this, { searchArr: this.__searchArr }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new 
                    // Clear Search Records Custom Component.
                    ClearSearch(this, { searchArr: this.__searchArr }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new 
                    // Flexible Layout Customization Component.
                    FlexLayout(this, { searchArr: this.__searchArr }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new Home(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=Search.js.map