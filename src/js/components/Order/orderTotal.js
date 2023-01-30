import Component from "../abstractComponent.js";

export default class OrderTotal extends Component {

    render() {
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
        const totalPrice = document.createElement('strong');
        totalPrice.innerText = '원';

        totalPriceContainer.append(totalPriceTit, totalPrice);

        const shippingPriceContainer = document.createElement('div');
        shippingPriceContainer.setAttribute('class', 'order_price_container');
        shippingPriceContainer.classList.add('payment_price');
        const shippingPriceTit = document.createElement('span');
        shippingPriceTit.innerText = '- 배송비';
        const shippingPrice = document.createElement('strong');
        shippingPrice.innerText = '원';
        
        shippingPriceContainer.append(shippingPriceTit, shippingPrice);

        const paymentPriceContainer = document.createElement('div');
        paymentPriceContainer.setAttribute('class', 'order_price_container');
        const PriceTit = document.createElement('span');
        PriceTit.innerText = '- 결제금액';
        const paymentPrice = document.createElement('strong');
        paymentPrice.setAttribute('class', 'payment_total_price');
        paymentPrice.innerText = '원';

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

        checkContainer.append(paymentAgreeCheck, checkLabel);

        paymentContainer.append(checkContainer);

        orderTotalCard.append(priceContainer, paymentContainer);

        orderTotalContainer.append(orderTotalTit, orderTotalCard);

        return orderTotalContainer;
    }
}