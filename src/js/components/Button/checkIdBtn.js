import Component from "../abstractComponent.js";
import { checkId } from "../../api/api.js";


export default class CheckIdBtn extends Component {
    constructor(props) {
        super(props);
        this.checkId = checkId;
    }
    
    render() {
        const checkIdBtn = document.createElement('button');
        checkIdBtn.setAttribute('class', 'small_btn');
        checkIdBtn.classList.add('check_id_btn');
        checkIdBtn.type = 'submit';
        checkIdBtn.innerText = '중복확인';
                
        checkIdBtn.addEventListener('click', async(e) => {
            e.preventDefault();
            e.stopPropagation();
            this.checkId();
        })

        return checkIdBtn;
    }
}