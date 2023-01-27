import Component from "../components/abstractComponent.js";
import Header from "../components/Header/header.js";

export default class Order extends Component{

    render() {
        const frag = document.createDocumentFragment();

        const header = new Header();

        const orderContainer = document.createElement('section');
        orderContainer.setAttribute('class', 'order_container');
        const orderTit = document.createElement('h1');
        orderTit.setAttribute('class', 'order_tit');
        orderTit.innerText = '주문/결제하기';

        orderContainer.append(orderTit);

        frag.append(header.render(), orderContainer);

        return frag;
    }
}