import Component from "../abstractComponent.js";

export default class SellerItemList extends Component {
    constructor(props) {
        super(props);
        this.items = this.props.sellerItems;
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

        if(this.items.length === 0) {
            tbody.appendChild(emptyMsg1);
            sellerItemList.appendChild(tbody);
        } else {

        }

        return sellerItemList;
    }
}