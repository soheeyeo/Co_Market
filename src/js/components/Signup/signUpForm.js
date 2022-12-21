import Component from "../abstractComponent.js";
import SignUpType from "./signUpType.js";
import SignUpInputList from "./sighUpInputList.js";
import UserInputList from "./userInputList.js";
import SellerInputList from "./sellerInputList.js";
import Agreement from "./signUpAgreement.js";
import SignUpBtn from "../Button/signUpBtn.js";

export default class SignUpForm extends Component {
    
    render() {
        const signUpForm = document.createElement('form');
        signUpForm.setAttribute('class', 'sign_up_form');

        const signUpType = new SignUpType();
        const signUpInputList = new SignUpInputList();
        const userInputList = new UserInputList();
        const sellerInputList = new SellerInputList();
        const agreement = new Agreement();
        const signUpBtn = new SignUpBtn();

        signUpForm.append(signUpType.render(), signUpInputList.initialize(), userInputList.render(), sellerInputList.render(), agreement.render(), signUpBtn.render());

        return signUpForm;
    }
}