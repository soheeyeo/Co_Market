import Component from "../abstractComponent.js";

export default class LoginLink extends Component {
    
    render() {
        const linkWrapper = document.createElement('div');
        linkWrapper.setAttribute('class', 'link_wrapper');

        const signUpLink = document.createElement('a')
        signUpLink.setAttribute('class', 'sign_up_link');
        signUpLink.setAttribute('href', '/accounts/signup/');
        signUpLink.innerText = '회원가입';

        const findPwLink = document.createElement('a')
        findPwLink.setAttribute('class', 'find_pw_link');
        findPwLink.innerText = '비밀번호 찾기';

        linkWrapper.append(signUpLink, findPwLink);

        return linkWrapper;
    }
}