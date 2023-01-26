import Component from "../abstractComponent.js";

export default class CartTotal extends Component {
    constructor(props) {
        super(props);
        this.cartItems = this.props.item;
        this.shipping = 0;
        this.total = 0;
    }

    cartTotalPrice() {
        this.cartItems.forEach((item) => {
            this.shipping += item.shipping_fee;
            this.total += item.price * item.qty;
        });
    }

    render() {
        this.cartTotalPrice();

        const tr = document.createElement('tr');
        tr.setAttribute('class', 'cart_total_container');

        const td1 = document.createElement('td');

        const cartTotalTit1 =document.createElement('span');
        cartTotalTit1.innerText = '총 상품금액'; 

        const totalPrice1 = document.createElement('div');
        totalPrice1.setAttribute('class', 'cart_price_container');
        const cartTotalPrice1 = document.createElement('strong');
        cartTotalPrice1.setAttribute('class', 'cart_total_strong');
        cartTotalPrice1.id = 'total';
        cartTotalPrice1.innerText = this.total.toLocaleString('ko-KR');
        const span1 = document.createElement('span');
        span1.innerText = '원';

        totalPrice1.append(cartTotalPrice1, span1);

        td1.append(cartTotalTit1, totalPrice1);

        
        const sumIcon = document.createElement('div');
        sumIcon.setAttribute('class', 'cart_total_icon');
        sumIcon.classList.add('sum');

        const td2 = document.createElement('td');

        const cartTotalTit2 =document.createElement('span');
        cartTotalTit2.innerText = '배송비'; 

        const totalPrice2 = document.createElement('div');
        totalPrice2.setAttribute('class', 'cart_price_container');
        const cartTotalPrice2 = document.createElement('strong');
        cartTotalPrice2.setAttribute('class', 'cart_total_strong');
        cartTotalPrice2.id = 'shipping';
        cartTotalPrice2.innerText = this.shipping.toLocaleString('ko-KR');
        const span2 = document.createElement('span');
        span2.innerText = '원';

        totalPrice2.append(cartTotalPrice2, span2);

        td2.append(cartTotalTit2, totalPrice2);

        const equalIcon = document.createElement('div');
        equalIcon.setAttribute('class', 'cart_total_icon');
        equalIcon.classList.add('equal');


        const td3 = document.createElement('td');
        td3.setAttribute('class', 'cart_total_td');

        const cartTotalTit3 =document.createElement('span');
        cartTotalTit3.setAttribute('class', 'cart_total_tit');
        cartTotalTit3.innerText = '결제 예정 금액'; 

        const totalPrice3 = document.createElement('div');
        totalPrice3.setAttribute('class', 'cart_price_container');
        const cartTotalPrice3 = document.createElement('strong');
        cartTotalPrice3.setAttribute('class', 'cart_total_payment_strong');
        cartTotalPrice3.innerText = (this.total + this.shipping).toLocaleString('ko-KR');
        const span3 = document.createElement('span');
        span3.setAttribute('class', 'cart_total_span');
        span3.innerText = '원';

        totalPrice3.append(cartTotalPrice3, span3);

        td3.append(cartTotalTit3, totalPrice3);

        tr.append(td1, sumIcon, td2, equalIcon, td3);
        return tr;
    }
}