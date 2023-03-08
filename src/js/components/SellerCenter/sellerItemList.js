import Component from "../abstractComponent.js";
import SellerItem from "./sellerItem.js";
import { getSellerItems } from "../../api/api.js";

export default class SellerItemList extends Component {
    constructor(props) {
        super(props);
        this.getSellerItems = getSellerItems;
        this.getSellerItems();
        this.state = {
            sellerItems:[],
            isLoaded: false
        }
    }

    render() {
        const sellerItemList = document.createElement('table');
        sellerItemList.setAttribute('class', 'seller_item_list');

        const sellerItemListTit = document.createElement('thead');
        sellerItemListTit.setAttribute('class', 'seller_item_list_tit');

        const thContents = ['상품정보', '판매가격', '수정', '삭제'];
        
        const tr = document.createElement('tr');

        for (let i = 0; i < thContents.length; i++) {
            const th = document.createElement('th');
            th.innerText = `${thContents[i]}`;
            tr.append(th);
        }

        sellerItemListTit.appendChild(tr);

        const tbody = document.createElement('tbody');
        tbody.setAttribute('class', 'seller_item_tbody');

        const emptyMsg1 = document.createElement('strong')
        emptyMsg1.setAttribute('class', 'seller_empty_strong');
        emptyMsg1.innerText = '등록된 상품이 없습니다.';

        if(this.state.isLoaded) {
            if(this.state.sellerItems.length === 0) {
                tbody.appendChild(emptyMsg1);
            } else if(this.state.sellerItems.length > 0) {
                sellerItemList.appendChild(sellerItemListTit);
                this.state.sellerItems.forEach(item => {
                    const sellerItem = new SellerItem({item: item});
                    tbody.append(sellerItem.render());
                });
            }
        }

        sellerItemList.appendChild(tbody);

        return sellerItemList;
    }
}