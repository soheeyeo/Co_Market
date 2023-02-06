import Component from "../abstractComponent.js";

export default class OrderList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
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
        console.log(this.props)

        orderList.append(orderListTit, tbody);

    return orderList;
    }
}