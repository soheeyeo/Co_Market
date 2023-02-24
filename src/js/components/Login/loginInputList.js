import Component from "../abstractComponent.js";

export default class LoginInputList extends Component {
    //버튼 활성화 기능
    disabledBtn() {
        const idInput = document.querySelector('#id');
        const pwInput = document.querySelector('#pw');
        const loginBtn = document.querySelector('.login_btn');
        if(idInput.value != '' && pwInput.value != '') {
            loginBtn.disabled = false;
            loginBtn.classList.add('on');
        } else {
            loginBtn.disabled = true;
            loginBtn.classList.remove('on');
        }
    }
    
    render() {
        const inputLi = document.createElement('ul');
        inputLi.setAttribute('class', 'input_li');
        inputLi.classList.add('login');

        const inputId = document.createElement('li');
        inputId.setAttribute('class', 'input');
        const idLabel = document.createElement('label');
        idLabel.setAttribute('class', 'ir');
        idLabel.htmlFor = 'id';
        idLabel.innerText = '아이디를 입력하세요.';
        const idInput = document.createElement('input');
        idInput.setAttribute('class', 'login_input');
        idInput.id = 'id';
        idInput.type = 'text';
        idInput.placeholder = '아이디';
        idInput.name = 'id';
        idInput.required = 'required';
        idInput.spellcheck = false;

        idInput.addEventListener('input', () => {
            this.disabledBtn();
        })

        inputId.append(idLabel, idInput);
        
        const inputPw = document.createElement('li');
        inputPw.setAttribute('class', 'input');
        const pwLabel = document.createElement('label');
        pwLabel.setAttribute('class', 'ir');
        pwLabel.htmlFor = 'pw';
        pwLabel.innerText = '비밀번호를 입력하세요.';
        const pwInput = document.createElement('input');
        pwInput.setAttribute('class', 'login_input');
        pwInput.id = 'pw';
        pwInput.type = 'password';
        pwInput.placeholder = '비밀번호';
        pwInput.name = 'password';
        pwInput.required = 'required';
        pwInput.autocomplete = 'off';
        pwInput.spellcheck = false;

        const loginStatusMsg = document.createElement('strong');
        loginStatusMsg.setAttribute('class', 'status_msg');
        loginStatusMsg.classList.add('err');

        pwInput.addEventListener('input', () => {
            this.disabledBtn();
        })

        inputPw.append(pwLabel, pwInput, loginStatusMsg);
        
        inputLi.append(inputId, inputPw);

        return inputLi;
    }
}