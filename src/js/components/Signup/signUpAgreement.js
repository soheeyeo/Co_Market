import Component from "../abstractComponent.js";

export default class Agreement extends Component {
    
    render() {
        const formCheckWrapper = document.createElement('div');
        formCheckWrapper.setAttribute('class', 'form_check_wrapper');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'check_agree';
        checkbox.required = 'required';
        const checkAgree = document.createElement('label');
        checkAgree.setAttribute('class', 'agreement');
        checkAgree.htmlFor = 'check_agree';
        checkAgree.innerHTML = `
            <a href="#" class="agreement txt">이용약관</a> 및 <a href="#" class="agreement txt">개인정보처리방침</a>에 대한 내용을 확인하였고 동의합니다.
        `

        formCheckWrapper.append(checkbox, checkAgree);
        
        return formCheckWrapper;
    }
}