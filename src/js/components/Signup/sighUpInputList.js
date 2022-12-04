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
        accountInputId.append(accountIdLabel, idInputBtnContainer);
        
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
        accountPwInput.required = 'required';

        accountInputPw.append(accountPwLabel, accountPwInput);

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

        accountPwCheck.append(accountPwCheckLabel, accountPwCheckInput);
        
        accountInputLi.append(accountInputId, accountInputPw, accountPwCheck);

        accountInput.appendChild(accountInputLi);

        return accountInput;
    }
}