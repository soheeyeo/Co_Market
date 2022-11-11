import Component from "../abstractComponent.js";
import SignUpType from "./signUpType.js";
import SignUpInputList from "./sighUpInputList.js";
import UserInputList from "./userInputList.js";
import Agreement from "./signUpAgreement.js";
import SignUpBtn from "../Button/signUpBtn.js";

export default class SignUpForm extends Component {

    render() {
        const sighUpForm = document.createElement('form');
        sighUpForm.setAttribute('class', 'sign_up_form');
        sighUpForm.method = 'get';

        const signUpType = new SignUpType();
        const signUpInputList = new SignUpInputList();
        const userInputList = new UserInputList();
        const agreement = new Agreement();
        const signUpBtn = new SignUpBtn();

        sighUpForm.append(signUpType.render(), signUpInputList.render(),userInputList.render(), agreement.render(), signUpBtn.render());

        return sighUpForm;
    }
}