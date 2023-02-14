import Component from "../abstractComponent.js";
import SearchZipBtn from "../Button/searchZipBtn.js";

export default class OrderForm extends Component {

    handleSelect() {
        const selectLi = document.querySelector('.address_message_select');
        selectLi.classList.toggle('select_open');
    }

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
        userLabel1.htmlFor = 'order_user_name';
        userLabel1.innerText = '이름';
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.id = 'order_user_name';
        nameInput.name = 'name';
        inputContainer1.append(userLabel1, nameInput);

        const inputContainer2 = document.createElement('div');
        inputContainer2.setAttribute('class', 'order_input_container');
        const userLabel2 = document.createElement('label');
        userLabel2.setAttribute('class', 'order_info_label');
        userLabel2.innerText = '휴대폰';
        userLabel2.htmlFor = 'order_user_tel';
        const phoneInput = document.createElement('input');
        phoneInput.type = 'tel';
        phoneInput.id = 'order_user_tel';
        phoneInput.name = 'tel';
        phoneInput.maxLength = '11';
        inputContainer2.append(userLabel2, phoneInput);
        phoneInput.addEventListener('input', () => {
            phoneInput.value = phoneInput.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
        })

        const inputContainer3 = document.createElement('div');
        inputContainer3.setAttribute('class', 'order_input_container');
        const userLabel3 = document.createElement('label');
        userLabel3.setAttribute('class', 'order_info_label');
        userLabel3.innerText = '이메일';
        userLabel3.htmlFor = 'order_user_email';
        const emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.id = 'order_user_email';
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
        recipientPhoneInput.addEventListener('input', () => {
            recipientPhoneInput.value = recipientPhoneInput.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
        })
        inputContainer5.append(shippingLabel2, recipientPhoneInput);

        const inputContainer6 = document.createElement('div');
        inputContainer6.setAttribute('class', 'order_input_container');
        inputContainer6.classList.add('address');
        const shippingLabel3 = document.createElement('label');
        shippingLabel3.setAttribute('class', 'address_label');
        shippingLabel3.innerText = '배송 주소';
        shippingLabel3.htmlFor = 'recipient_address';

        const addressContainer = document.createElement('div');
        addressContainer.setAttribute('class', 'address_container');

        const zipCodeInput = document.createElement('input');
        zipCodeInput.setAttribute('class', 'address_input_zip_code');
        zipCodeInput.type = 'number';
        zipCodeInput.id = 'recipient_address_zip_code';
        zipCodeInput.name = 'zip_code';
        zipCodeInput.addEventListener('input', () => {
            if(zipCodeInput.value > 5) {
                zipCodeInput.value = zipCodeInput.value.slice(0, 5);
            }
        })

        const searchZipCodeBtn = new SearchZipBtn();
        const addressInput1 = document.createElement('input');
        addressInput1.setAttribute('class', 'address_input');
        addressInput1.type = 'text';
        addressInput1.id = 'recipient_address';
        addressInput1.name = 'address';
        const addressInput2 = document.createElement('input');
        addressInput2.setAttribute('class', 'address_input');
        addressInput2.type = 'text';
        addressInput2.id = 'recipient_address_detail';
        addressInput2.name = 'address_detail';
        addressContainer.append(zipCodeInput, searchZipCodeBtn.render(), addressInput1, addressInput2);
        inputContainer6.append(shippingLabel3, addressContainer);

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
        messageInput.placeholder = '직접 입력하기';
        messageInput.spellcheck = false;
        messageInput.addEventListener('click', () => {
            this.handleSelect();
        })
        messageInput.addEventListener('input', () => {
            selectBox.classList.remove('select_open');
        })

        const selectBox = document.createElement('div');
        selectBox.setAttribute('class', 'address_message_select');
        const selectLi = document.createElement('ul');
        const selectItem1 = document.createElement('li');
        selectItem1.innerText = '부재 시 경비실에 맡겨주세요.';
        const selectItem2 = document.createElement('li');
        selectItem2.innerText = '부재 시 문 앞에 놓아주세요.';
        const selectItem3 = document.createElement('li');
        selectItem3.innerText = '배송 전에 연락해주세요.';

        const selectLiItems = [selectItem1, selectItem2, selectItem3];
        for(let i = 0; i < selectLiItems.length; i++) {
            selectLiItems[i].addEventListener('click', () => {
                messageInput.value = selectLiItems[i].textContent;
                selectBox.classList.remove('select_open');
            })
        }

        selectLi.append(selectItem1, selectItem2, selectItem3);
        selectBox.appendChild(selectLi);
        inputContainer7.append(shippingLabel4, messageInput, selectBox);

        fieldset2.append(legend2, inputContainer4, inputContainer5, inputContainer6, inputContainer7);

        orderFromContainer.append(orderFormTit, fieldset1, fieldset2);

        return orderFromContainer;
    }
}