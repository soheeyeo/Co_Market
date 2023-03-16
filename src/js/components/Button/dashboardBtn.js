import Component from "../abstractComponent.js";
import Modal from "../Modal/modal.js";

export default class DashboardBtn extends Component {
    constructor(props) {
        super(props);
        this.productId = this.props.productId;
        this.product = this.props.product;
        this.modalContent = '상품을 삭제하시겠습니까?';
        this.modalCancelBtn = '취소';
        this.modalOkBtn = '확인';
    }

    render() {
        const dashboardBtn = document.createElement('button');
        dashboardBtn.setAttribute('class', 'dashboard_btn');
        dashboardBtn.type = 'submit';
        dashboardBtn.innerText = this.props.dashboardTxt;

        if(this.props.dashboardTxt === '수정') {
            dashboardBtn.classList.add('modify');
            dashboardBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                sessionStorage.setItem('item', JSON.stringify(this.product));
                window.routing('/upload');
            })
        } else {
            dashboardBtn.classList.add('delete');
            dashboardBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const root = document.getElementById('root')
                const deleteModal = new Modal({modalContent:this.modalContent, modalCancelBtn:this.modalCancelBtn, modalOkBtn:this.modalOkBtn, productId: this.productId});
                root.appendChild(deleteModal.render());
            })
        }

        return dashboardBtn;
    }
}