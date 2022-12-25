import Component from "../abstractComponent.js";

export default class Modal extends Component {

    render() {
        const modal = document.createElement('div');
        modal.setAttribute('class', 'modal');

        const modalContainer = document.createElement('div');
        modalContainer.setAttribute('class', 'madal_container');
        
        const modalTxt = document.createElement('span');
        modalTxt.setAttribute('class', 'modal_txt');
        modalTxt.innerText = this.props.modalContent;

        const btnContainer = document.createElement('div');
        btnContainer.setAttribute('class', 'modal_btn_container');

        const btn1 = document.createElement('button');
        btn1.setAttribute('class', 'modalCancelBtn');
        btn1.innerText = this.props.modalCancelBtn;

        const btn2 = document.createElement('button');
        btn2.setAttribute('class', 'modalOkBtn');
        btn2.innerText = this.props.modalOkBtn;

        btnContainer.append(btn1, btn2);

        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('class', 'modalDeleteBtn');

        modalContainer.append(modalTxt, btnContainer, deleteBtn);

        modal.appendChild(modalContainer);

        return modal;
    }
}