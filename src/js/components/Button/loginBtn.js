import Component from "../abstractComponent.js";
import { login } from "../../api/api.js";

export default class LoginBtn extends Component {
    constructor(props) {
        super(props);
        this.login = login;
    }

    render() {
        const loginBtn = document.createElement('button');
        loginBtn.setAttribute('class', 'big_btn');
        loginBtn.classList.add('login_btn');
        loginBtn.type = 'submit';
        loginBtn.innerText = '로그인';
        loginBtn.disabled = true;

        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.login();
        })

        return loginBtn;
    }
}