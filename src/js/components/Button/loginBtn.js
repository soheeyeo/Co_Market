import Component from "../abstractComponent.js";

export default class LoginBtn extends Component {

    render() {
        const loginBtn = document.createElement('button');
        loginBtn.setAttribute('class', 'big_btn');
        loginBtn.classList.add('login_btn');
        loginBtn.type = 'submit';
        loginBtn.innerText = '로그인';

        return loginBtn;
    }
}