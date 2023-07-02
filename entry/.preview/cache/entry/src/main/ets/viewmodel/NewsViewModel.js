import Constants from '@bundle:com.example.component/entry/ets/common/constants/Constants';
import { httpRequestGet, httpRequestPost } from '@bundle:com.example.component/entry/ets/common/utils/HttpUtils';
import Logger from '@bundle:com.example.component/entry/ets/common/utils/Logger';
class NewsViewModel {
    /**
     * Get news type list from server.
     *
     * @return NewsData[] newsDataList
     */
    getNewsList(currentPage, pageSize) {
        return new Promise(async (resolve, reject) => {
            let url = `${Constants.SERVER}/${Constants.GET_NEWS_LIST}`;
            url += '?currentPage=' + currentPage + '&pageSize=' + pageSize;
            httpRequestGet(url).then((data) => {
                if (data.code === Constants.SERVER_CODE_SUCCESS) {
                    resolve(data.data);
                }
                else {
                    Logger.error('getNewsList failed', JSON.stringify(data));
                    reject({ "id": 16777366, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                }
            }).catch((err) => {
                Logger.error('getNewsList failed', JSON.stringify(err));
                reject({ "id": 16777340, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            });
        });
    }
    /**
     * Upload news data.
     *
     * @param newsData
     * @returns NewsData[] newsDataList
     */
    uploadNews(newsData) {
        return new Promise((resolve, reject) => {
            let url = `${Constants.SERVER}/${Constants.UPLOAD_NEWS}`;
            httpRequestPost(url, newsData).then((result) => {
                if (result && result.code === Constants.SERVER_CODE_SUCCESS) {
                    resolve(result.data);
                }
                else {
                    reject({ "id": 16777436, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
                }
            }).catch((err) => {
                Logger.error('uploadNews failed', JSON.stringify(err));
                reject({ "id": 16777436, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" });
            });
        });
    }
}
let newsViewModel = new NewsViewModel();
export default newsViewModel;
//# sourceMappingURL=NewsViewModel.js.map