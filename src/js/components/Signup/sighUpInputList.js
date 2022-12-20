import Component from "../abstractComponent.js";
import CheckIdBtn from "../Button/checkIdBtn.js";

export default class SignUpInputList extends Component {
    //비밀번호 유효성 검사
    validatePw() {
        const regExp = /(?=.*\d)(?=.*[a-z]){8,16}/;
        const pw = document.querySelector('#account_pw').value;
        const pwStatusMsg = document.querySelector('#account_pw + .status_msg');
        const checkPwIcon = document.querySelector('.check_icon');
            if(pw != '') {
                if(!regExp.test(pw)) {
                    pwStatusMsg.innerText = '8-16자의 영문 소문자, 숫자를 조합하여 사용하세요.';
                    pwStatusMsg.style.display = 'block';
                    checkPwIcon.classList.remove('pw_on');
                    checkPwIcon.classList.add('pw_off');
                } else {
                    pwStatusMsg.style.display = 'none';
                    checkPwIcon.classList.remove('pw_off');
                    checkPwIcon.classList.add('pw_on');
                    this.confirmPw();
                }
            } else {
                pwStatusMsg.style.display = 'none';
                checkPwIcon.classList.remove('pw_on');
                checkPwIcon.classList.add('pw_off');
                this.confirmPw();
            }
    }

    //비밀번호 재확인
    confirmPw() {
        const pw = document.querySelector('#account_pw').value;
        const pwCheck =  document.querySelector('#account_pw_check').value;
        const pwStatusMsg = document.querySelector('#account_pw_check + .status_msg');
        const checkPwIcon = document.querySelector('.double_check_icon');
        if(pwCheck == '') {
            pwStatusMsg.style.display = 'none';
            checkPwIcon.classList.remove('pw_on');
            checkPwIcon.classList.add('pw_off');
        } else {
            if(pw === pwCheck) {
                pwStatusMsg.style.display = 'none';
                checkPwIcon.classList.remove('pw_off');
                checkPwIcon.classList.add('pw_on');
            } else if(pw !== pwCheck) {
                pwStatusMsg.innerText = '비밀번호가 일치하지 않습니다.';
                pwStatusMsg.style.display = 'block';
                checkPwIcon.classList.remove('pw_on');
                checkPwIcon.classList.add('pw_off');
            } 
        }
    }
    
    render() {
        const accountInput = document.createElement('fieldset');
        accountInput.setAttribute('class', 'account_input_fieldset');

        const statusMsg = document.createElement('strong');
        statusMsg.setAttribute('class', 'status_msg');

        const accountInputLi = document.createElement('ul');
        accountInputLi.setAttribute('class', 'input_li');

        const accountInputId = document.createElement('li');
        accountInputId.setAttribute('class', 'account_input');
        const accountIdLabel = document.createElement('label');
        accountIdLabel.setAttribute('class', 'account_label');
        accountIdLabel.htmlFor = 'id';
        accountIdLabel.innerText = '아이디';
        const idInputBtnContainer = document.createElement('div');
        idInputBtnContainer.setAttribute('class', 'id_input_btn_container');

        const accountIdInput = document.createElement('input');
        accountIdInput.setAttribute('class', 'sign_up_input');
        accountIdInput.id = 'account_id';
        accountIdInput.type = 'text';
        accountIdInput.name = 'id';
        accountIdInput.required = 'required';

        const checkIdBtn = new CheckIdBtn();

        idInputBtnContainer.append(accountIdInput, checkIdBtn.render());
        accountInputId.append(accountIdLabel, idInputBtnContainer, statusMsg);
        
        const accountInputPw = document.createElement('li');
        accountInputPw.setAttribute('class', 'account_input');
        const accountPwLabel = document.createElement('label');
        accountPwLabel.setAttribute('class', 'account_label');
        accountPwLabel.htmlFor = 'pw';
        accountPwLabel.innerText = '비밀번호';
        const accountPwInput = document.createElement('input');
        accountPwInput.setAttribute('class', 'sign_up_input');
        accountPwInput.id = 'account_pw';
        accountPwInput.type = 'password';
        accountPwInput.name = 'password';
        accountPwInput.maxLength = '16';
        accountPwInput.required = 'required';

        const pwStatusMsg = document.createElement('strong');
        pwStatusMsg.setAttribute('class', 'status_msg');

        accountPwInput.addEventListener('input', (e) => {
            e.preventDefault();
            this.validatePw();
        })

        const checkPwIcon = document.createElement('div');
        checkPwIcon.setAttribute('class', 'check_icon');
        checkPwIcon.classList.add('pw_off');

        accountInputPw.append(accountPwLabel, accountPwInput, pwStatusMsg, checkPwIcon);

        const accountPwCheck = document.createElement('li');
        accountPwCheck.setAttribute('class', 'account_input');
        const accountPwCheckLabel = document.createElement('label');
        accountPwCheckLabel.setAttribute('class', 'account_label');
        accountPwCheckLabel.htmlFor = 'pw_check';
        accountPwCheckLabel.innerText = '비밀번호 확인';
        const accountPwCheckInput = document.createElement('input');
        accountPwCheckInput.setAttribute('class', 'sign_up_input');
        accountPwCheckInput.id = 'account_pw_check';
        accountPwCheckInput.type = 'password';
        accountPwCheckInput.name = 'password_check';
        accountPwCheckInput.required = 'required';

        const pwCheckMsg = document.createElement('strong');
        pwCheckMsg.setAttribute('class', 'status_msg');

        const doubleCheckPwIcon = document.createElement('div');
        doubleCheckPwIcon.setAttribute('class', 'double_check_icon');
        doubleCheckPwIcon.classList.add('pw_off');

        accountPwCheckInput.addEventListener('input', (e) => {
            e.preventDefault();
            this.validatePw();
        })

        accountPwCheck.append(accountPwCheckLabel, accountPwCheckInput, pwCheckMsg, doubleCheckPwIcon);
        
        accountInputLi.append(accountInputId, accountInputPw, accountPwCheck);

        accountInput.appendChild(accountInputLi);

        return accountInput;
    }
}