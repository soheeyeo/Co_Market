import Component from "../abstractComponent.js";
import Modal from "../Modal/modal.js";

export default class BuyBtn extends Component {
    constructor(props) {
        super(props);
        this.item = this.props.item;
        this.item.qty = this.props.qty;
        this.modalContent = `로그인이 필요한 서비스입니다.
        로그인 하시겠습니까?`;
        this.modalCancelBtn = '아니오';
        this.modalOkBtn = '예';
    }
    
    detailSaveItem() {
        sessionStorage.setItem('cart', JSON.stringify(this.item));
        sessionStorage.setItem('prev', 'product_detail');
    }

    cartSaveItem() {
        sessionStorage.setItem('cart', JSON.stringify(this.item));
        sessionStorage.setItem('prev', 'cart_item');
    }

    render() {
        const buyBtn = document.createElement('button');
        if (window.location.pathname.includes('/product/')) {
            buyBtn.setAttribute('class', 'buy_btn');
            buyBtn.innerText = '구매하기';
            buyBtn.addEventListener('click', () => {
                if(localStorage.getItem('token')) {
                    this.detailSaveItem();
                    window.location.href = '/order';
                } else {
                    const root = document.getElementById('root')
                    const reqModal = new Modal({modalContent:this.modalContent, modalCancelBtn:this.modalCancelBtn, modalOkBtn:this.modalOkBtn, link:'/login'});
                    root.appendChild(reqModal.initialize());
                }
            })
        } else if(window.location.pathname === '/cart') {
            buyBtn.setAttribute('class', 'small_buy_btn');
            buyBtn.innerText = '주문하기';
            buyBtn.addEventListener('click', () => {
                this.cartSaveItem();
                window.location.href = '/order';
            })
        }

        return buyBtn;
    }
}

export class OrderBtn extends Component {

    render() {
        const buyBtn = document.createElement('button');
        buyBtn.type = 'submit';
        if(window.location.pathname === '/cart') {
            buyBtn.setAttribute('class', 'big_buy_btn');
            buyBtn.innerText = '주문하기';
            buyBtn.addEventListener('click', () => {
                sessionStorage.setItem('prev', 'cart_total');
                window.location.href = '/order';
            });
        } else if(window.location.pathname === '/order') {
            buyBtn.setAttribute('class', 'big_order_btn');
            buyBtn.innerText = '결제하기';
            buyBtn.disabled = true;
        }

        return buyBtn;
    }
}