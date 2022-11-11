import Component from "../abstractComponent.js";

export default class SignUpBtn extends Component {

    render() {
        const signUpBtn = document.createElement('button');
        signUpBtn.setAttribute('class', 'big_btn');
        signUpBtn.classList.add('sign_up_btn');
        signUpBtn.type = 'submit';
        signUpBtn.innerText = '가입하기';

        return signUpBtn;
    }
}