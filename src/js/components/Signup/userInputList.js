import Component from "../abstractComponent.js";

export default class UserInputList extends Component {
    
    render() {
        const userInput = document.createElement('fieldset');
        userInput.setAttribute('class', 'user_input_fieldset');

        const userInputLi = document.createElement('ul');
        userInputLi.setAttribute('class', 'input_li');

        const userInputName = document.createElement('li');
        userInputName.setAttribute('class', 'user_input');
        const userNameLabel = document.createElement('label');
        userNameLabel.setAttribute('class', 'user_label');
        userNameLabel.htmlFor = 'name';
        userNameLabel.innerText = '이름';
        const userNameInput = document.createElement('input');
        userNameInput.setAttribute('class', 'sign_up_input');
        userNameInput.id = 'user_name';
        userNameInput.type = 'text';
        userNameInput.name = 'name';
        userNameInput.required = 'required';

        userInputName.append(userNameLabel, userNameInput);
        
        const userInputNum = document.createElement('li');
        userInputNum.setAttribute('class', 'user_input');
        const userNumLabel = document.createElement('label');
        userNumLabel.setAttribute('class', 'user_label');
        userNumLabel.htmlFor = 'num';
        userNumLabel.innerText = '휴대폰번호';
        const userNumInput = document.createElement('input');
        userNumInput.setAttribute('class', 'sign_up_input');
        userNumInput.id = 'user_num';
        userNumInput.type = 'tel';
        userNumInput.name = 'num';
        userNumInput.required = 'required';

        userInputNum.append(userNumLabel, userNumInput);

        userInputLi.append(userInputName, userInputNum);

        userInput.appendChild(userInputLi);

        return userInput;
    }
}