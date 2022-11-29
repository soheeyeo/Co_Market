import Component from "../components/abstractComponent.js";
import Header from "../components/Header/header.js";
import LoginForm from "../components/Login/loginForm.js";

export default class Login extends Component{

    render() {
        const frag = document.createDocumentFragment();

        const header = new Header();

        const loginContainer = document.createElement('section');
        loginContainer.setAttribute('class', 'login_container');
        const loginTit = document.createElement('h1');
        loginTit.setAttribute('class', 'login_tit');
        loginTit.innerText = '로그인';

        const loginForm = new LoginForm();
        
        loginContainer.append(loginTit, loginForm.render());

        frag.append(header.render(), loginContainer);

        return frag;
    }
}