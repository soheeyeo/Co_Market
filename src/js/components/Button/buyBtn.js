import Component from "../abstractComponent.js";
import Modal from "../Modal/modal.js";
import { order } from "../../api/api.js";

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
        sessionStorage.setItem('order_kind', 'direct_order');
    }

    cartSaveItem() {
        sessionStorage.setItem('cart', JSON.stringify(this.item));
        sessionStorage.setItem('order_kind', 'cart_one_order');
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
                    const root = document.getElementById('root');
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
    constructor(props) {
        super(props);
        this.item = JSON.parse(sessionStorage.getItem('cart'));
        this.orderKind = sessionStorage.getItem('order_kind');
        this.total = 0;
        this.shipping = 0;
        if(sessionStorage.getItem('order_kind') === 'cart_order') {
            this.product_id = '';
            this.qty = '';
            this.item.forEach((item) => {
                this.total += item.price * item.qty;
                this.shipping += item.shipping_fee;
            });
            this.totalPrice = this.total + this.shipping;
        } else {
            this.product_id = this.item.product_id;
            this.qty = this.item.qty;
            this.totalPrice = this.item.price * this.item.qty + this.item.shipping_fee;
        };
        this.modalContent = '상품을 선택해주세요.';
        this.modalOkBtn = '확인';
    }

    async reqOrder() {
        const reqData = {
            product_id: this.product_id,
            quantity: this.qty,
            order_kind: this.orderKind,
            receiver: document.querySelector('#recipient_name').value,
            receiver_phone_number: document.querySelector('#recipient_tel').value,
            address: document.querySelector('#recipient_address').value + document.querySelector('#recipient_address_detail').value,
            address_message: document.querySelector('#message').value,
            payment_method: document.querySelector('.payment_fieldset input[name=order_method]:checked').value,
            total_price: this.totalPrice,
        };
        const res = await order(reqData);
        console.log(res);
    }

    render() {
        const buyBtn = document.createElement('button');
        buyBtn.type = 'submit';
        if(window.location.pathname === '/cart') {
            buyBtn.setAttribute('class', 'big_buy_btn');
            buyBtn.innerText = '주문하기';
            buyBtn.addEventListener('click', () => {
                const cart = JSON.parse(sessionStorage.getItem('cart'));
                console.log(cart)
                if(cart === null) {
                    const root = document.getElementById('root');
                    const reqModal = new Modal({modalContent:this.modalContent, modalOkBtn:this.modalOkBtn});
                    root.appendChild(reqModal.initialize());
                } else {
                    window.location.href = '/order';
                }
            });
        } else if(window.location.pathname === '/order') {
            buyBtn.setAttribute('class', 'big_order_btn');
            buyBtn.innerText = '결제하기';
            buyBtn.disabled = true;
            buyBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.reqOrder();
            })
        }

        return buyBtn;
    }
}