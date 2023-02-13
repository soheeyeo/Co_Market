import Component from "../abstractComponent.js";

export default class Agreement extends Component {
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
            if(statusMsg.textContent == '사용 가능한 아이디입니다.' && checkBtn.classList.contains('pw_on') && nameInput.value != '' && phoneNum.value != '' &&phoneNumStatus.textContent == '' && crnStatus.textContent == '사용 가능한 사업자 등록번호입니다.' && storeNameInput.value != '' && agreement.checked) {
                signUpBtn.disabled = false;
                signUpBtn.classList.add('on');
            } else {
                signUpBtn.disabled = true;
                signUpBtn.classList.remove('on');
            }  
        }
    }
    
    render() {
        const formCheckContainer = document.createElement('div');
        formCheckContainer.setAttribute('class', 'form_check_container');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'check_agree';
        checkbox.required = 'required';
        const checkAgree = document.createElement('label');
        checkAgree.setAttribute('class', 'agreement');
        checkAgree.htmlFor = 'check_agree';

        checkAgree.innerHTML = `
            <strong class="agreement_txt">이용약관</strong> 및 <strong class="agreement_txt">개인정보처리방침</strong>에 대한 내용을 확인하였고 동의합니다.
        `

        checkbox.addEventListener('change', () => {
            this.disabledBtn();
        })

        formCheckContainer.append(checkbox, checkAgree);
        
        return formCheckContainer;
    }
}