
import { StyleConstants } from '../common/constants/StyleConstants';
import SearchInput from '../view/SearchInput';
import ClearSearch from '../view/ClearSearch';
import FlexLayout from '../view/FlexLayout';
import SearchViewModel from '../viewmodel/SearchViewModel';


/**
 * search
 */
@Component
@Entry
export default struct Home {
  @State searchArr: Array<string> = SearchViewModel.getSearchArrData();
  controller: SearchController = new SearchController();

  build() {
    Column() {
      // Customized component of the search text box.
      SearchInput({ searchArr: $searchArr})
      // Clear Search Records Custom Component.
      ClearSearch({ searchArr: $searchArr })
      // Flexible Layout Customization Component.
      FlexLayout({ searchArr: $searchArr })
    }
    .height(StyleConstants.FULL_PERCENT)
    .width(StyleConstants.FULL_PERCENT)
    .alignItems(HorizontalAlign.Center)
    .backgroundColor($r('app.color.index_background'))
  }
}
