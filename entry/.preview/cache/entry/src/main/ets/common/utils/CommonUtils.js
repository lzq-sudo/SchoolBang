import Logger from '@bundle:com.example.component/entry/ets/common/utils/Logger';
import CommonConstants from '@bundle:com.example.component/entry/ets/common/constants/CommonConstants';
/**
 * This is a pop-up window tool class, which is used to encapsulate dialog code.
 * Developers can directly invoke the methods in.
 */
export class CommonUtils {
    /**
     * Alert dialog dialog
     */
    alertDialog(context) {
        AlertDialog.show({
            message: { "id": 16777323, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
            alignment: DialogAlignment.Bottom,
            offset: {
                dx: 0,
                dy: CommonConstants.DY_OFFSET
            },
            primaryButton: {
                value: { "id": 16777325, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                action: () => {
                    Logger.info(CommonConstants.TAG_COMMON_UTILS, 'Callback cancel button is clicked');
                }
            },
            secondaryButton: {
                value: { "id": 16777331, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
                action: () => {
                    // Exiting the app.
                    context.terminateSelf();
                    Logger.info(CommonConstants.TAG_COMMON_UTILS, 'Callback definite button is clicked');
                }
            }
        });
    }
    /**
     * Date dialog dialog
     */
    datePickerDialog(dateCallback) {
        DatePickerDialog.show({
            start: new Date(CommonConstants.START_TIME),
            end: new Date(),
            selected: new Date(CommonConstants.SELECT_TIME),
            lunar: false,
            onAccept: (value) => {
                let year = value.year;
                let month = value.month + CommonConstants.PLUS_ONE;
                let day = value.day;
                let birthdate = this.getBirthDateValue(year, month, day);
                dateCallback(birthdate);
            }
        });
    }
    /**
     * Text dialog dialog
     */
    textPickerDialog(sexArray, sexCallback) {
        if (this.isEmptyArr(sexArray)) {
            Logger.error(CommonConstants.TAG_COMMON_UTILS, 'sex is null');
            return;
        }
        TextPickerDialog.show({
            range: sexArray,
            selected: 0,
            onAccept: (result) => {
                sexCallback(result.value);
            },
            onCancel: () => {
                Logger.info(CommonConstants.TAG_COMMON_UTILS, 'TextPickerDialog onCancel');
            }
        });
    }
    /**
     * Get default birth date
     *
     * @param {number} year year
     * @param {number} month month
     * @param {number} day day
     * @returns {string} return birth date
     */
    getBirthDateValue(year, month, day) {
        let birthdate = `${year}${CommonConstants.DATE_YEAR}${month}` +
            `${CommonConstants.DATE_MONTH}${day}${CommonConstants.DATE_DAY}`;
        return birthdate;
    }
    /**
     * Check obj is empty
     *
     * @param {object} obj
     * @return {boolean} true(empty)
     */
    isEmpty(obj) {
        return obj === undefined || obj === null || obj === '';
    }
    /**
     * Check array is empty
     *
     * @param {Array}array
     * @return {boolean} true(empty)
     */
    isEmptyArr(array) {
        return this.isEmpty(array) || array.length === 0;
    }
}
export default new CommonUtils();
//# sourceMappingURL=CommonUtils.js.map