import Component from "../abstractComponent.js";

export default class LoginLink extends Component {
    
    render() {
        const linkContainer = document.createElement('div');
        linkContainer.setAttribute('class', 'link_container');

        const signUpLink = document.createElement('a')
        signUpLink.setAttribute('href', '/signup');
        signUpLink.setAttribute('class', 'sign_up_link');
        signUpLink.innerText = '회원가입';

        const findPwLink = document.createElement('a')
        findPwLink.setAttribute('class', 'find_pw_link');
        findPwLink.innerText = '비밀번호 찾기';

        linkContainer.append(signUpLink, findPwLink);

        return linkContainer;
    }
}