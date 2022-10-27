import Component from "../abstractComponent.js";

export default class LoginBtn extends Component {

    render() {
        const loginBtn = document.createElement('button');
        loginBtn.setAttribute('class', 'login_btn');
        loginBtn.type = 'submit';
        loginBtn.innerText = '로그인';

        return loginBtn;
    }
}