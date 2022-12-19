import Component from "../abstractComponent.js";
import SignUpType from "./signUpType.js";
import SignUpInputList from "./sighUpInputList.js";
import UserInputList from "./userInputList.js";
import SellerInputList from "./sellerInputList.js";
import Agreement from "./signUpAgreement.js";
import SignUpBtn from "../Button/signUpBtn.js";

export default class SignUpForm extends Component {
        //버튼 활성화 기능
        disabledBtn(){
            const statusMsg = document.querySelector('.status_msg');
            const checkBtn = document.querySelector('.double_check_icon');
            const nameInput = document.querySelector('#user_name');
            const phoneNum = document.querySelector('#user_num');
            const phoneNumStatus = document.querySelector('#user_num + .status_msg')
            const signUpBtn = document.querySelector('.sign_up_btn');
            const signUpBuyer = document.querySelector('.sign_up_buyer');
            const crnStatus = document.querySelector('.seller_input_btn_container + .status_msg');
            const storeNameInput = document.querySelector('#store_name');
            const agreement = document.querySelector('#check_agree');
            if(signUpBuyer.classList.contains('active')) {
                if(statusMsg.textContent == '사용 가능한 아이디입니다.' && checkBtn.classList.contains('pw_on') && nameInput.value != '' && phoneNum.value != '' && phoneNumStatus.textContent == '' && agreement.checked) {
                    signUpBtn.disabled = false;
                    signUpBtn.classList.add('on');
                } else {
                    signUpBtn.disabled = true;
                    signUpBtn.classList.remove('on');
                }   
            } else {
                if(statusMsg.textContent == '사용 가능한 아이디입니다.' && checkBtn.classList.contains('pw_on') && nameInput.value != '' && phoneNumStatus.textContent == '' && crnStatus.textContent == '사용 가능한 사업자 등록번호입니다.' && storeNameInput.value != '') {
                    signUpBtn.disabled = false;
                    signUpBtn.classList.add('on');
                } else {
                    signUpBtn.disabled = true;
                    signUpBtn.classList.remove('on');
                }  
            }
            }
    
    render() {
        const signUpForm = document.createElement('form');
        signUpForm.setAttribute('class', 'sign_up_form');

        const signUpType = new SignUpType();
        const signUpInputList = new SignUpInputList();
        const userInputList = new UserInputList();
        const sellerInputList = new SellerInputList();
        const agreement = new Agreement();
        const signUpBtn = new SignUpBtn();

        setInterval(this.disabledBtn, 1000);

        signUpForm.append(signUpType.render(), signUpInputList.initialize(), userInputList.render(), sellerInputList.render(), agreement.render(), signUpBtn.render());

        return signUpForm;
    }
}