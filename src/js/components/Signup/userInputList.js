import Component from "../abstractComponent.js";

export default class UserInputList extends Component {
    
    render() {
        const userInput = document.createElement('fieldset');
        userInput.setAttribute('class', 'user_input_fieldset');

        const userInputLi = document.createElement('ul');
        userInputLi.setAttribute('class', 'input_li');

        const userInputName = document.createElement('li');
        userInputName.setAttribute('class', 'user_input');
        const userNameLable = document.createElement('lable');
        userNameLable.setAttribute('class', 'user_lable');
        userNameLable.for = 'name';
        userNameLable.innerText = '이름';
        const userNameInput = document.createElement('input');
        userNameInput.setAttribute('class', 'sign_up_input');
        userNameInput.id = 'user_name';
        userNameInput.type = 'text';
        userNameInput.name = 'name';
        userNameInput.required = 'required';

        userInputName.append(userNameLable, userNameInput);
        
        const userInputNum = document.createElement('li');
        userInputNum.setAttribute('class', 'user_input');
        const userNumLable = document.createElement('lable');
        userNumLable.setAttribute('class', 'user_lable');
        userNumLable.for = 'num';
        userNumLable.innerText = '휴대폰번호';
        const userNumInput = document.createElement('input');
        userNumInput.setAttribute('class', 'sign_up_input');
        userNumInput.id = 'user_num';
        userNumInput.type = 'tel';
        userNumInput.name = 'num';
        userNumInput.required = 'required';

        userInputNum.append(userNumLable, userNumInput);

        userInputLi.append(userInputName, userInputNum);

        userInput.appendChild(userInputLi);

        return userInput;
    }
}