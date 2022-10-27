import Component from "../components/abstractComponent.js";
import Header from "../components/Header/header.js";
import LoginForm from "../components/Login/loginForm.js";

export default class Login extends Component{
    constructor(props) {
        super(props);
        this.target = document.querySelector('#root');
    }

    render() {
        const header = new Header();

        const loginContainer = document.createElement('section');
        loginContainer.setAttribute('class', 'login_container');
        const loginTit = document.createElement('h1');
        loginTit.setAttribute('class', 'login_tit');
        loginTit.innerText = '로그인';

        const loginForm = new LoginForm();
        
        loginContainer.append(loginTit, loginForm.render());

        this.target.append(header.render(), loginContainer);
    }
}