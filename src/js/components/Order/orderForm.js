import Component from "../abstractComponent.js";

export default class OrderForm extends Component {

    render() {
        const orderFromContainer = document.createElement('div');

        const orderFormTit = document.createElement('p');
        orderFormTit.setAttribute('class', 'order_form_tit');
        orderFormTit.classList.add('border');
        orderFormTit.innerHTML = '배송정보';

        const fieldset1 = document.createElement('fieldset');
        fieldset1.setAttribute('class', 'user_info_form')
        const legend1 = document.createElement('legend');
        legend1.setAttribute('class', 'user_info_tit');
        legend1.innerText = '주문자 정보';

        const inputContainer1 = document.createElement('div');
        inputContainer1.setAttribute('class', 'order_input_container');
        const userLabel1 = document.createElement('label');
        userLabel1.setAttribute('class', 'name_label');
        userLabel1.htmlFor = 'user_name';
        userLabel1.innerText = '이름';
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.id = 'user_name';
        nameInput.name = 'name';
        inputContainer1.append(userLabel1, nameInput);

        const inputContainer2 = document.createElement('div');
        inputContainer2.setAttribute('class', 'order_input_container');
        const userLabel2 = document.createElement('label');
        userLabel2.setAttribute('class', 'order_info_label');
        userLabel2.innerText = '휴대폰';
        userLabel2.htmlFor = 'user_tel';
        const phoneInput = document.createElement('input');
        phoneInput.type = 'tel';
        phoneInput.id = 'user_tel';
        phoneInput.name = 'tel';
        phoneInput.maxLength = '11';
        inputContainer2.append(userLabel2, phoneInput);

        const inputContainer3 = document.createElement('div');
        inputContainer3.setAttribute('class', 'order_input_container');
        const userLabel3 = document.createElement('label');
        userLabel3.setAttribute('class', 'order_info_label');
        userLabel3.innerText = '이메일';
        userLabel3.htmlFor = 'user_email';
        const emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.id = 'user_email';
        emailInput.name = 'email';
        inputContainer3.append(userLabel3, emailInput);

        fieldset1.append(legend1, inputContainer1, inputContainer2, inputContainer3);

        const fieldset2 = document.createElement('fieldset');
        fieldset2.setAttribute('class', 'shipping_info_form');
        const legend2 = document.createElement('legend');
        legend2.setAttribute('class', 'shipping_info_tit');
        legend2.innerText = '배송지 정보';

        const inputContainer4 = document.createElement('div');
        inputContainer4.setAttribute('class', 'order_input_container');
        const shippingLabel1 = document.createElement('label');
        shippingLabel1.setAttribute('class', 'shipping_info_label');
        shippingLabel1.htmlFor = 'recipient_name';
        shippingLabel1.innerText = '수령인';
        const recipientInput = document.createElement('input');
        recipientInput.type = 'text';
        recipientInput.id = 'recipient_name';
        recipientInput.name = 'recipient_name';
        inputContainer4.append(shippingLabel1, recipientInput);

        const inputContainer5 = document.createElement('div');
        inputContainer5.setAttribute('class', 'order_input_container');
        const shippingLabel2 = document.createElement('label');
        shippingLabel2.setAttribute('class', 'shipping_info_label');
        shippingLabel2.innerText = '휴대폰';
        shippingLabel2.htmlFor = 'recipient_tel';
        const recipientPhoneInput = document.createElement('input');
        recipientPhoneInput.type = 'tel';
        recipientPhoneInput.id = 'recipient_tel';
        recipientPhoneInput.name = 'recipient_tel';
        recipientPhoneInput.maxLength = '11';
        inputContainer5.append(shippingLabel2, recipientPhoneInput);

        const inputContainer6 = document.createElement('div');
        inputContainer6.setAttribute('class', 'order_input_container');
        const shippingLabel3 = document.createElement('label');
        shippingLabel3.setAttribute('class', 'address_label');
        shippingLabel3.innerText = '배송 주소';
        shippingLabel3.htmlFor = 'recipient_address';
        const addressInput = document.createElement('input');
        addressInput.type = 'text';
        addressInput.id = 'recipient_address';
        addressInput.name = 'address';
        inputContainer6.append(shippingLabel3, addressInput);

        const inputContainer7 = document.createElement('div');
        inputContainer7.setAttribute('class', 'order_input_container');
        const shippingLabel4 = document.createElement('label');
        shippingLabel4.setAttribute('class', 'message_label');
        shippingLabel4.innerText = '배송 메세지';
        shippingLabel4.htmlFor = 'message';
        const messageInput = document.createElement('input');
        messageInput.type = 'text';
        messageInput.id = 'message';
        messageInput.name = 'message';
        inputContainer7.append(shippingLabel4, messageInput);

        fieldset2.append(legend2, inputContainer4, inputContainer5, inputContainer6, inputContainer7);

        orderFromContainer.append(orderFormTit, fieldset1, fieldset2);

        return orderFromContainer;
    }
}