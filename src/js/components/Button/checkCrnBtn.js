import Component from "../abstractComponent.js";

export default class CheckCrnBtn extends Component {
    
    render() {
        const checkCrnBtn = document.createElement('button');
        checkCrnBtn.setAttribute('class', 'small_btn');
        checkCrnBtn.classList.add('check_crn_btn');
        checkCrnBtn.type = 'submit';
        checkCrnBtn.innerText = '인증';

        return checkCrnBtn;
    }
}