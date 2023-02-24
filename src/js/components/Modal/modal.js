import Component from "../abstractComponent.js";
import { cartItemDelete } from "../../api/api.js";

export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.modal = document.createElement('div');
        this.cartItemDelete = cartItemDelete;
        this.cartItemId = this.props.cartItemId;
    }

    deleteModal() {
        this.modal.style.display = 'none';
    }

    modalNavigateTo() {
        window.routing(this.props.link);
        this.modal.style.display = 'none';
    }

    deleteCartItem() {
        this.cartItemDelete(this.cartItemId);
    }

    render() {
        this.modal.setAttribute('class', 'modal');

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

        btn1.addEventListener('click', (e) => {
            e.preventDefault();
            this.deleteModal();
        })

        const btn2 = document.createElement('button');
        btn2.setAttribute('class', 'modalOkBtn');
        btn2.innerText = this.props.modalOkBtn;

        if(window.location.pathname === '/cart') {
            btn1.classList.add('small');
            btn2.classList.add('small');
            btn2.addEventListener('click', (e) => {
                e.preventDefault();
                if(!this.props.modalCancelBtn) {
                    this.deleteModal();
                } else {
                    this.deleteCartItem();
                    this.deleteModal();
                }
            });
        } else if(window.location.pathname === '/order') {
            btn2.addEventListener('click', (e) => {
                e.preventDefault();
                this.deleteModal();
            })
        } else {
            btn2.addEventListener('click', (e) => {
                e.preventDefault();
                this.modalNavigateTo();
            })
        }

        if(!this.props.modalCancelBtn) {
            btnContainer.append(btn2);
        } else {
            btnContainer.append(btn1, btn2);
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('class', 'modalDeleteBtn');

        deleteBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.deleteModal();
        })

        modalContainer.append(modalTxt, btnContainer, deleteBtn);

        this.modal.appendChild(modalContainer);

        return this.modal;
    }
}