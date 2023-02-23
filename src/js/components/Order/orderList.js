import Component from "../abstractComponent.js";
import OrderListItem from "./orderListItem.js";

export default class OrderList extends Component {
    constructor(props) {
        super(props);
        this.item = JSON.parse(sessionStorage.getItem('cart'));
        this.oneItem = JSON.parse(sessionStorage.getItem('cart_one'));
        this.orderKind = sessionStorage.getItem('order_kind');
        this.total = 0;
    }

    orderTotal() {
        if(this.orderKind === 'cart_order') {
            if(this.item.length > 1) {
                this.item.forEach((item) => {
                    this.total += item.price * item.qty;
                });
            } else {
            this.total += this.item[0].price * this.item[0].qty;
            }
        } else {
            this.total += this.oneItem.price * this.oneItem.qty;
        }
    }

    render() {
        this.orderTotal();
        const orderList = document.createElement('table');
        orderList.setAttribute('class', 'order_list');

        const orderListTit = document.createElement('thead');
        orderListTit.setAttribute('class', 'order_list_tit');

        const tr = document.createElement('tr');

        const thContents = ['상품정보', '배송비', '주문금액'];
        
        for (let i = 0; i < thContents.length; i++) {
            const th = document.createElement('th');
            th.innerText = `${thContents[i]}`;
            tr.append(th);
        }

        orderListTit.appendChild(tr);
        const tbody = document.createElement('tbody');

        if(this.orderKind === 'cart_order') {
            this.item.map((item) => {
                const orderListItem = new OrderListItem({item:item});
                tbody.append(orderListItem.render());
            });
        } else {
            const orderListItem = new OrderListItem({item:this.oneItem});
            tbody.append(orderListItem.render());
        }

        const tfoot = document.createElement('tfoot');
        tfoot.setAttribute('class', 'order_item_total_price');
        const orderTotalPriceTxt = document.createElement('span');
        orderTotalPriceTxt.setAttribute('class', 'order_total_price_txt');
        orderTotalPriceTxt.innerText = '총 주문금액';

        const orderTotalPrice = document.createElement('strong');
        orderTotalPrice.setAttribute('class', 'order_total_price');
        orderTotalPrice.innerText = `${(this.total).toLocaleString('ko-KR')+' 원'}`;

        tfoot.append(orderTotalPriceTxt, orderTotalPrice);

        orderList.append(orderListTit, tbody, tfoot);

        return orderList;
    }
}