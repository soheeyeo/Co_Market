import Component from "../components/abstractComponent.js";
import Header from "../components/Header/header.js";
import OrderList from "../components/Order/orderList.js";
import OrderForm from "../components/Order/orderForm.js";
import OrderMethod from "../components/Order/orderMethod.js";
import OrderTotal from "../components/Order/orderTotal.js";

export default class Order extends Component{

    render() {
        const frag = document.createDocumentFragment();

        const header = new Header();

        const orderContainer = document.createElement('section');
        orderContainer.setAttribute('class', 'order_container');
        const orderTit = document.createElement('h1');
        orderTit.setAttribute('class', 'order_tit');
        orderTit.innerText = '주문/결제하기';

        const orderList = new OrderList();
        const orderForm = new OrderForm();

        const paymentContainer = document.createElement('div');
        paymentContainer.setAttribute('class', 'total_payment_container');
        const orderMethod = new OrderMethod();
        const orderTotal = new OrderTotal();
        paymentContainer.append(orderMethod.render(), orderTotal.render());

        orderContainer.append(orderTit, orderList.render(), orderForm.render(), paymentContainer);

        frag.append(header.render(), orderContainer);

        return frag;
    }
}