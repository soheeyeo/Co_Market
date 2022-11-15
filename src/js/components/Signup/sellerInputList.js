import Component from "../abstractComponent.js";
import CheckCrnBtn from "../Button/checkCrnBtn.js";

export default class SellerInputList extends Component {
    
    render() {
        const sellerInput = document.createElement('fieldset');
        sellerInput.setAttribute('class', 'seller_input_fieldset');

        const sellerInputLi = document.createElement('ul');
        sellerInputLi.setAttribute('class', 'input_li');

        const sellerInputNum = document.createElement('li');
        sellerInputNum.setAttribute('class', 'seller_input');
        const sellerNumLable = document.createElement('lable');
        sellerNumLable.setAttribute('class', 'seller_lable');
        sellerNumLable.htmlFor = 'crn';
        sellerNumLable.innerText = '사업자 등록번호';
        const sellerInputBtnWrapper = document.createElement('div');
        sellerInputBtnWrapper.setAttribute('class', 'seller_input_btn_wrapper');
        const sellerNumInput = document.createElement('input');
        sellerNumInput.setAttribute('class', 'sign_up_input');
        sellerNumInput.id = 'crn';
        sellerNumInput.type = 'text';
        sellerNumInput.name = 'crn';
        sellerNumInput.required = 'required';

        const checkCrnBtn = new CheckCrnBtn();

        sellerInputBtnWrapper.append(sellerNumInput, checkCrnBtn.render());
        sellerInputNum.append(sellerNumLable, sellerInputBtnWrapper);
        
        const sellerInputName = document.createElement('li');
        sellerInputName.setAttribute('class', 'seller_input');
        const sellerNameLable = document.createElement('lable');
        sellerNameLable.setAttribute('class', 'seller_lable');
        sellerNameLable.htmlFor = 'store_name';
        sellerNameLable.innerText = '스토어 이름';
        const sellerNameInput = document.createElement('input');
        sellerNameInput.setAttribute('class', 'sign_up_input');
        sellerNameInput.id = 'store_name';
        sellerNameInput.type = 'text';
        sellerNameInput.name = 'store_name';
        sellerNameInput.required = 'required';

        sellerInputName.append(sellerNameLable, sellerNameInput);

        sellerInputLi.append(sellerInputNum, sellerInputName);

        sellerInput.appendChild(sellerInputLi);

        function sellerInputToggle() {
            if(this.className === '.sign_up_seller', '.active') {
                sellerInput.classList.toggle('seller_active');
            } else {
                sellerInput.classList.toggle('seller_active', false);
            }
        }

        window.onload = function() {
            const signUpSeller = document.querySelector('.sign_up_seller', '.active');
            const signUpBuyer = document.querySelector('.sign_up_buyer', '.active');

            signUpSeller.addEventListener('click', sellerInputToggle);
            signUpBuyer.addEventListener('click', sellerInputToggle);
        };

        return sellerInput;
    }
}