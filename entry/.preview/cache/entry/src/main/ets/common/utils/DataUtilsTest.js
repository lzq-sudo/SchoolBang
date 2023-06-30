/**
 * Initiate request for tab data.
 *
 * @param currentPage The current page number.
 * @param pageSize The number of current pages.
 * @param currentIndex The current index.
 * @param callback The function callback.
 */
import http from '@ohos:net.http';
export async function getData() {
    let httpRequest = http.createHttp();
    let url = "www.baidu.com";
    let promise = httpRequest.request(
    // 请求url地址
    url, {
        // 请求方式
        method: http.RequestMethod.GET,
        // 可选，默认为60s
        connectTimeout: 60000,
        // 可选，默认为60s
        readTimeout: 60000,
        // 开发者根据自身业务需要添加header字段
        header: {
            'Content-Type': 'application/json'
        }
    });
    promise.then((data) => {
        if (data.responseCode === http.ResponseCode.OK) {
            console.info('1111111111111111111111111Result:' + data.result);
            console.info('11111111111111111111111111code:' + data.responseCode);
            return data.result;
        }
    }).catch((err) => {
        console.info('111111111111111111111111111error:' + JSON.stringify(err));
        return JSON.stringify(err);
    });
}
//# sourceMappingURL=DataUtilsTest.js.map