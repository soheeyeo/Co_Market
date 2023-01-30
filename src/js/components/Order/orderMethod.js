import Component from "../abstractComponent.js";

export default class OrderMethod extends Component {

    render() {
        const paymentContainer = document.createElement('div');
        paymentContainer.setAttribute('class', 'payment_container');

        const paymentTit = document.createElement('p');
        paymentTit.setAttribute('class', 'order_form_tit');
        paymentTit.innerHTML = '결제수단';
        
        const fieldset = document.createElement('fieldset');
        fieldset.setAttribute('class', 'payment_fieldset');

        const radio1 = document.createElement('input');
        radio1.type = 'radio';
        radio1.id = 'credit';
        radio1.name = 'credit';
        const label1 = document.createElement('label');
        label1.htmlFor = 'credit';
        label1.innerText = '신용/체크카드';

        const radio2 = document.createElement('input');
        radio2.type = 'radio';
        radio2.id = 'deposit';
        radio2.name = 'deposit';
        const label2 = document.createElement('label');
        label2.htmlFor = 'deposit';
        label2.innerText = '무통장 입금';

        const radio3 = document.createElement('input');
        radio3.type = 'radio';
        radio3.id = 'pay_phone';
        radio3.name = 'pay_phone';
        const label3 = document.createElement('label');
        label3.htmlFor = 'pay_phone';
        label3.innerText = '휴대폰 결제';

        const radio4 = document.createElement('input');
        radio4.type = 'radio';
        radio4.id = 'naver_pay';
        radio4.name = 'naver_pay';
        const label4 = document.createElement('label');
        label4.htmlFor = 'naver_pay';
        label4.innerText = '네이버페이';

        const radio5 = document.createElement('input');
        radio5.type = 'radio';
        radio5.id = 'kakao_pay';
        radio5.name = 'kakao_pay';
        const label5 = document.createElement('label');
        label5.htmlFor = 'kakao_pay';
        label5.innerText = '카카오페이';

        fieldset.append(radio1, label1, radio2, label2, radio3, label3, radio4, label4, radio5, label5);

        paymentContainer.append(paymentTit, fieldset);

        return paymentContainer;
    }
}