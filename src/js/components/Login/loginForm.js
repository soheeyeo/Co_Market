import Component from "../abstractComponent.js";
import LoginType from "./loginType.js";
import LoginInputList from "./loginInputList.js";
import LoginLink from "./loginLink.js";
import LoginBtn from "../Button/loginBtn.js";

export default class LoginForm extends Component {

    render() {
        const loginForm = document.createElement('form');
        loginForm.setAttribute('class', 'login_form');
        loginForm.method = 'get';

        const loginType = new LoginType();
        const loginInputList = new LoginInputList();
        const loginBtn = new LoginBtn();
        const loginLink = new LoginLink();

        loginForm.append(loginType.render(), loginInputList.render(), loginBtn.render(), loginLink.render());

        return loginForm;
    }
}