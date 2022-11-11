import Component from "../abstractComponent.js";

export default class CheckIdBtn extends Component {
    
    render() {
        const checkIdBtn = document.createElement('button');
        checkIdBtn.setAttribute('class', 'small_btn');
        checkIdBtn.classList.add('check_id_btn');
        checkIdBtn.type = 'submit';
        checkIdBtn.innerText = '중복확인';

        return checkIdBtn;
    }
}