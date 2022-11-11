import Component from "../abstractComponent.js";
import CheckIdBtn from "../Button/checkIdBtn.js";

export default class SignUpInputList extends Component {
    
    render() {
        const accountInput = document.createElement('fieldset');
        accountInput.setAttribute('class', 'account_input_fieldset');

        const accountInputLi = document.createElement('ul');
        accountInputLi.setAttribute('class', 'input_li');

        const accountInputId = document.createElement('li');
        accountInputId.setAttribute('class', 'account_input');
        const accountIdLable = document.createElement('lable');
        accountIdLable.setAttribute('class', 'account_lable');
        accountIdLable.for = 'id';
        accountIdLable.innerText = '아이디';
        const idInputBtnWrapper = document.createElement('div');
        idInputBtnWrapper.setAttribute('class', 'id_input_btn_wrapper');
        const accountIdInput = document.createElement('input');
        accountIdInput.setAttribute('class', 'sign_up_input');
        accountIdInput.id = 'account_id';
        accountIdInput.type = 'text';
        accountIdInput.name = 'id';
        accountIdInput.required = 'required';

        const checkIdBtn = new CheckIdBtn();

        idInputBtnWrapper.append(accountIdInput, checkIdBtn.render());
        accountInputId.append(accountIdLable, idInputBtnWrapper);
        
        const accountInputPw = document.createElement('li');
        accountInputPw.setAttribute('class', 'account_input');
        const accountPwLable = document.createElement('lable');
        accountPwLable.setAttribute('class', 'account_lable');
        accountPwLable.for = 'pw';
        accountPwLable.innerText = '비밀번호';
        const accountPwInput = document.createElement('input');
        accountPwInput.setAttribute('class', 'sign_up_input');
        accountPwInput.id = 'account_pw';
        accountPwInput.type = 'password';
        accountPwInput.name = 'password';
        accountPwInput.required = 'required';

        accountInputPw.append(accountPwLable, accountPwInput);

        const accountPwCheck = document.createElement('li');
        accountPwCheck.setAttribute('class', 'account_input');
        const accountPwCheckLable = document.createElement('lable');
        accountPwCheckLable.setAttribute('class', 'account_lable');
        accountPwCheckLable.for = 'pw_check';
        accountPwCheckLable.innerText = '비밀번호 확인';
        const accountPwCheckInput = document.createElement('input');
        accountPwCheckInput.setAttribute('class', 'sign_up_input');
        accountPwCheckInput.id = 'account_pw_check';
        accountPwCheckInput.type = 'password';
        accountPwCheckInput.name = 'password_check';
        accountPwCheckInput.required = 'required';

        accountPwCheck.append(accountPwCheckLable, accountPwCheckInput);
        
        accountInputLi.append(accountInputId, accountInputPw, accountPwCheck);

        accountInput.appendChild(accountInputLi);

        return accountInput;
    }
}