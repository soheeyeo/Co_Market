import Component from "../abstractComponent.js";
import { OrderBtn } from "../Button/buyBtn.js";

export default class OrderTotal extends Component {
    constructor(props) {
        super(props);
        this.item = JSON.parse(sessionStorage.getItem('cart'));
        this.orderKind = sessionStorage.getItem('order_kind');
        this.total = 0;
        this.shipping = 0;
    }

    orderTotalPrice() {
        if(this.orderKind === 'cart_order') {
            if(this.item.length > 1) {
                this.item.forEach((item) => {
                    this.total += item.price * item.qty;
                    this.shipping += item.shipping_fee;
                });
            } else {
                this.total += this.item[0].price * this.item[0].qty;
                this.shipping += this.item[0].shipping_fee;
            }
        } else {
            this.total += this.item.price * this.item.qty;
            this.shipping += this.item.shipping_fee;
        }
    }

    handleBtn() {
        const orderBtn = document.querySelector('.big_order_btn');
        const checkAgree = document.querySelector('#check_payment');
        const input = document.querySelectorAll('.user_info_form input, .shipping_info_form input');

        for(let i = 0; i < input.length; i++) {
            if(input[i].value != '' && checkAgree.checked) {
                orderBtn.disabled = false;
                orderBtn.style.backgroundColor = '#98B9CD';
                orderBtn.classList.add('on');
            } else {
                orderBtn.disabled = true;
                orderBtn.style.backgroundColor = '#C4C4C4';
                orderBtn.classList.remove('on');
            }
        }
    }

    render() {
        this.orderTotalPrice();
        const orderTotalContainer = document.createElement('div');
        orderTotalContainer.setAttribute('class', 'order_total_container');

        const orderTotalTit = document.createElement('span');
        orderTotalTit.setAttribute('class', 'order_total_tit');
        orderTotalTit.innerHTML = '최종 결제 정보';

        const orderTotalCard = document.createElement('div');
        orderTotalCard.setAttribute('class', 'order_total_info_container');

        const priceContainer = document.createElement('div');
        priceContainer.setAttribute('class', 'payment_price_container');

        const totalPriceContainer = document.createElement('div');
        totalPriceContainer.setAttribute('class', 'order_price_container');
        const totalPriceTit = document.createElement('span');
        totalPriceTit.innerText = '- 상품금액';
        const priceTxtContainer1 = document.createElement('div');
        const totalPrice = document.createElement('strong');
        totalPrice.setAttribute('class', 'order_total_price_strong');
        totalPrice.innerText = `${this.total.toLocaleString('ko-KR')}`;
        const totalPriceTxt = document.createElement('span');
        totalPriceTxt.setAttribute('class', 'order_total_price_span');
        totalPriceTxt.innerText = '원';

        priceTxtContainer1.append(totalPrice, totalPriceTxt);
        totalPriceContainer.append(totalPriceTit, priceTxtContainer1);

        const shippingPriceContainer = document.createElement('div');
        shippingPriceContainer.setAttribute('class', 'order_price_container');
        shippingPriceContainer.classList.add('payment_price');
        const shippingPriceTit = document.createElement('span');
        shippingPriceTit.innerText = '- 배송비';
        const priceTxtContainer2 = document.createElement('div');
        const shippingPrice = document.createElement('strong');
        shippingPrice.setAttribute('class', 'order_total_price_strong');
        shippingPrice.innerText = `${this.shipping.toLocaleString('ko-KR')}`;
        const totalShippingTxt = document.createElement('span');
        totalShippingTxt.setAttribute('class', 'order_total_price_span');
        totalShippingTxt.innerText = '원';
        
        priceTxtContainer2.append(shippingPrice, totalShippingTxt);
        shippingPriceContainer.append(shippingPriceTit, priceTxtContainer2);

        const paymentPriceContainer = document.createElement('div');
        paymentPriceContainer.setAttribute('class', 'order_price_container');
        const PriceTit = document.createElement('span');
        PriceTit.innerText = '- 결제금액';
        const paymentPrice = document.createElement('strong');
        paymentPrice.setAttribute('class', 'payment_total_price');
        paymentPrice.innerText = `${(this.total + this.shipping).toLocaleString('ko-KR')+' 원'}`;

        paymentPriceContainer.append(PriceTit, paymentPrice);

        priceContainer.append(totalPriceContainer, shippingPriceContainer, paymentPriceContainer);

        const paymentContainer = document.createElement('div');
        paymentContainer.setAttribute('class', 'pay_agree_container');

        const checkContainer = document.createElement('div');
        checkContainer.setAttribute('class', 'pay_agree_input_container');
        const paymentAgreeCheck = document.createElement('input');
        paymentAgreeCheck.type = 'checkbox';
        paymentAgreeCheck.id = 'check_payment';
        const checkLabel = document.createElement('label');
        checkLabel.setAttribute('class', 'check_payment_label');
        checkLabel.htmlFor = 'check_payment';
        checkLabel.innerText = '주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.'
        paymentAgreeCheck.addEventListener('change', () => {
            this.handleBtn();
        })

        checkContainer.append(paymentAgreeCheck, checkLabel);

        const orderBtn = new OrderBtn();

        paymentContainer.append(checkContainer, orderBtn.render());

        orderTotalCard.append(priceContainer, paymentContainer);

        orderTotalContainer.append(orderTotalTit, orderTotalCard);

        return orderTotalContainer;
    }
}