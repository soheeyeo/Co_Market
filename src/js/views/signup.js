import Component from "../components/abstractComponent.js";
import Header from "../components/Header/header.js";
import SignUpForm from "../components/Signup/signUpForm.js";

export default class SignUp extends Component{
    constructor(props) {
        super(props);
        this.target = document.querySelector('#root');
    }

    render() {
        const header = new Header();

        const signUpContainer = document.createElement('section');
        signUpContainer.setAttribute('class', 'sign_up_container');
        const signUpTit = document.createElement('h1');
        signUpTit.setAttribute('class', 'sign_up_tit');
        signUpTit.innerText = '회원가입';

        const signUpForm = new SignUpForm();
        
        signUpContainer.append(signUpTit, signUpForm.render());

        this.target.append(header.render(), signUpContainer);
    }
}