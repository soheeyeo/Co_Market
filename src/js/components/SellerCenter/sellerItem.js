import Component from "../abstractComponent.js";
import ProductImage from "../Product/productImage.js";
import ProductName from "../Product/productName.js";
import DashboardBtn from "../Button/dashboardBtn.js";

export default class SellerItem extends Component {
    constructor(props) {
        super(props);
        this.item = this.props.item;
        this.btnTxt1 = '수정';
        this.btnTxt2 = '삭제';
    }

    render() {
        const sellerItemContainer = document.createElement('tr');
        sellerItemContainer.setAttribute('class', 'seller_item_container');

        const td1 = document.createElement('td');
        td1.setAttribute('class', 'seller_item_info_container');

        const sellerItemImg = new ProductImage({src: this.item.image});

        const sellerItemInfo = document.createElement('div');
        sellerItemInfo.setAttribute('class', 'seller_item_info');

        const sellerItemName = new ProductName({name: this.item.product_name});

        const sellerItemStock = document.createElement('span');
        sellerItemStock.setAttribute('class', 'seller_item_stock');
        sellerItemStock.innerText = `재고 : ${this.item.stock}개`;

        sellerItemInfo.append(sellerItemName.render(), sellerItemStock);

        td1.append(sellerItemImg.render(), sellerItemInfo);

        const td2 = document.createElement('td');
        td2.setAttribute('class', 'seller_item_price');

        const sellerItemPrice = document.createElement('strong');
        sellerItemPrice.setAttribute('class', 'seller_item_price');
        sellerItemPrice.innerText = `${this.item.price}원`

        td2.appendChild(sellerItemPrice);

        const td3 = document.createElement('td');
        td3.setAttribute('class', 'modify_btn_container');

        const modifyBtn = new DashboardBtn({dashboardTxt: this.btnTxt1});
        td3.appendChild(modifyBtn.render());

        const td4 = document.createElement('td');
        td4.setAttribute('class', 'delete_btn_container');

        const deleteBtn = new DashboardBtn({dashboardTxt: this.btnTxt2});
        td4.appendChild(deleteBtn.render());

        sellerItemContainer.append(td1, td2, td3, td4);

        return sellerItemContainer;
    }
}