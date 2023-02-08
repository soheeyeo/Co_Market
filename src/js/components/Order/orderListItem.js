import Component from "../abstractComponent.js";
import ProductImage from "../Product/productImage.js";
import ProductStore from "../Product/productStore.js";
import ProductName from "../Product/productName.js";

export default class OrderListItem extends Component {
    constructor(props) {
        super(props);
        this.item = this.props.item
    }

    render() {
        const orderItemContainer = document.createElement('tr');
        orderItemContainer.setAttribute('class', 'order_item_container');

        const td1 = document.createElement('td');

        const orderItemImg = new ProductImage({src:this.item.image});

        const infoContainer = document.createElement('div');
        infoContainer.setAttribute('class', 'order_info_container');

        const orderItemStore = new ProductStore({store:this.item.store_name});
        const orderItemName = new ProductName({name:this.item.product_name});
        const orderItemQty = document.createElement('span');
        orderItemQty.setAttribute('class', 'order_item_qty');
        orderItemQty.innerText = `수량: ${this.item.qty}`;

        infoContainer.append(orderItemStore.render(), orderItemName.render(), orderItemQty);

        td1.append(orderItemImg.render(), infoContainer);

        const td2 = document.createElement('td');
        
        const orderShipping = document.createElement('span');
        orderShipping.setAttribute('class', 'order_item_shipping');
        orderShipping.innerText = `${this.item.shipping_fee>0?(this.item.shipping_fee).toLocaleString('ko-KR')+'원':'무료배송'}`

        td2.appendChild(orderShipping);

        const td3 = document.createElement('td');

        const orderPrice = document.createElement('strong');
        orderPrice.setAttribute('class', 'order_item_price');
        orderPrice.innerText = `${(this.item.price * this.item.qty).toLocaleString('ko-KR')+'원'}`

        td3.appendChild(orderPrice);

        orderItemContainer.append(td1, td2, td3);

        return orderItemContainer;
    }
}