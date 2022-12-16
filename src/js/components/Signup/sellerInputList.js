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
        const sellerNumLabel = document.createElement('label');
        sellerNumLabel.setAttribute('class', 'seller_label');
        sellerNumLabel.htmlFor = 'crn';
        sellerNumLabel.innerText = '사업자 등록번호';
        const sellerInputBtnContainer = document.createElement('div');
        sellerInputBtnContainer.setAttribute('class', 'seller_input_btn_container');
        const sellerNumInput = document.createElement('input');
        sellerNumInput.setAttribute('class', 'sign_up_input');
        sellerNumInput.id = 'crn';
        sellerNumInput.type = 'text';
        sellerNumInput.name = 'crn';
        sellerNumInput.required = 'required';
        sellerNumInput.maxLength = '10';

        const crnStatusMsg = document.createElement('storong');
        crnStatusMsg.setAttribute('class', 'status_msg');

        const checkCrnBtn = new CheckCrnBtn();

        sellerInputBtnContainer.append(sellerNumInput, checkCrnBtn.render());
        sellerInputNum.append(sellerNumLabel, sellerInputBtnContainer, crnStatusMsg);
        
        const sellerInputName = document.createElement('li');
        sellerInputName.setAttribute('class', 'seller_input');
        const sellerNameLabel = document.createElement('label');
        sellerNameLabel.setAttribute('class', 'seller_label');
        sellerNameLabel.htmlFor = 'store_name';
        sellerNameLabel.innerText = '스토어 이름';
        const sellerNameInput = document.createElement('input');
        sellerNameInput.setAttribute('class', 'sign_up_input');
        sellerNameInput.id = 'store_name';
        sellerNameInput.type = 'text';
        sellerNameInput.name = 'store_name';
        sellerNameInput.required = 'required';

        sellerInputName.append(sellerNameLabel, sellerNameInput);

        sellerInputLi.append(sellerInputNum, sellerInputName);

        sellerInput.appendChild(sellerInputLi);

        return sellerInput;
    }
}