import Component from "../abstractComponent.js";
import { signUpBuyer } from "../../api/api.js";
import { signUpSeller } from "../../api/api.js";

export default class SignUpBtn extends Component {
    constructor(props) {
        super(props);
        this.signUpBuyer = signUpBuyer;
        this.signUpSeller = signUpSeller;
    }
    
    render() {
        const signUpBtn = document.createElement('button');
        signUpBtn.setAttribute('class', 'big_btn');
        signUpBtn.classList.add('sign_up_btn');
        signUpBtn.type = 'submit';
        signUpBtn.innerText = '가입하기';
        signUpBtn.disabled = true;

        signUpBtn.addEventListener('click', async(e) => {
            e.preventDefault();
            const signUpBuyer = document.querySelector('.sign_up_buyer');
            if(signUpBuyer.classList.contains('active')) {
                this.signUpBuyer();
            } else {
                this.signUpSeller();
            }
        })

        return signUpBtn;
    }
}