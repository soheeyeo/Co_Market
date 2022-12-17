import Component from "../abstractComponent.js";
import { checkCrn } from "../../api/api.js";

export default class CheckCrnBtn extends Component {
    constructor(props) {
        super(props);
        this.checkCrn = checkCrn;
    }
    
    render() {
        const checkCrnBtn = document.createElement('button');
        checkCrnBtn.setAttribute('class', 'small_btn');
        checkCrnBtn.classList.add('check_crn_btn');
        checkCrnBtn.type = 'submit';
        checkCrnBtn.innerText = '인증';

        checkCrnBtn.addEventListener('click', async(e) => {
            e.preventDefault();
            e.stopPropagation();
            this.checkCrn();
        })

        return checkCrnBtn;
    }
}