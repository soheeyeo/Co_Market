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
        sessionStorage.setItem('cart_one', JSON.stringify(this.item));
        sessionStorage.setItem('order_kind', 'direct_order');
    }

    cartSaveItem() {
        sessionStorage.setItem('cart_one', JSON.stringify(this.item));
        sessionStorage.setItem('order_kind', 'cart_one_order');
    }

    render() {
        const buyBtn = document.createElement('button');
        if (window.location.pathname.includes('/product/')) {
            buyBtn.setAttribute('class', 'buy_btn');
            buyBtn.innerText = '구매하기';
            if(this.props.user === 'SELLER') {
                buyBtn.classList.add('disabled');
            } else {
                buyBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if(localStorage.getItem('token')) {
                        this.detailSaveItem();
                        window.routing('/order');
                    } else {
                        const root = document.getElementById('root');
                        const reqModal = new Modal({modalContent:this.modalContent, modalCancelBtn:this.modalCancelBtn, modalOkBtn:this.modalOkBtn, link:'/login'});
                        root.appendChild(reqModal.initialize());
                    }
                })
            }
        } else if(window.location.pathname === '/cart') {
            buyBtn.setAttribute('class', 'small_buy_btn');
            buyBtn.innerText = '주문하기';
            buyBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.cartSaveItem();
                window.routing('/order');
            })
        }

        return buyBtn;
    }
}

export class OrderBtn extends Component {
    constructor(props) {
        super(props);
        this.item = JSON.parse(sessionStorage.getItem('cart'));
        this.oneItem = JSON.parse(sessionStorage.getItem('cart_one'));
        this.orderKind = sessionStorage.getItem('order_kind');
        this.allItems = JSON.parse(sessionStorage.getItem('cart_all'));
        this.total = 0;
        this.shipping = 0;
        this.modalContent = `주문이 완료되었습니다.
        메인 페이지로 이동합니다.`;
        this.modalContent1 = '정보를 모두 입력해주세요.';
        this.modalContent2 = '상품을 선택해주세요.';
        this.modalOkBtn = '확인';
    }

    async reqOrder() {
        if(sessionStorage.getItem('order_kind') === 'cart_order') {
            this.product_id = '';
            this.qty = '';
            this.item.forEach((item) => {
                this.total += item.price * item.qty;
                this.shipping += item.shipping_fee;
            });
            this.totalPrice = this.total + this.shipping;
        } else {
            this.product_id = this.oneItem.product_id;
            this.qty = this.oneItem.qty;
            this.totalPrice = this.oneItem.price * this.oneItem.qty + this.oneItem.shipping_fee;
        };
        
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
        if(res.ok) {
            const root = document.getElementById('root');
            const reqModal = new Modal({modalContent:this.modalContent, modalOkBtn:this.modalOkBtn, link:'/'});
            root.appendChild(reqModal.initialize());
            sessionStorage.clear();
        }
    }

    handleInput() {
        const nameInput = document.getElementById('order_user_name');
        const telInput = document.getElementById('order_user_tel');
        const emailInput = document.getElementById('order_user_email');
        const nameInput2 = document.getElementById('recipient_name');
        const telInput2 = document.getElementById('recipient_tel');
        const zipInput = document.getElementById('recipient_address_zip_code');
        const addressInput = document.getElementById('recipient_address');
        const addressDetailInput = document.getElementById('recipient_address_detail');
        const addressMsgInput = document.getElementById('message');
        const orderAgree = document.querySelector('#check_payment');

        if(nameInput.value !== '' && telInput.value !== '' && emailInput.value !== '' && nameInput2.value !== '' && telInput2.value !== '' && zipInput.value !== '' && addressInput.value !== '' && addressDetailInput.value !== '' && addressMsgInput.value !== '' && orderAgree.checked) {
            this.reqOrder();
        } else {
            const root = document.getElementById('root');
            const reqModal = new Modal({modalContent:this.modalContent1, modalOkBtn:this.modalOkBtn});
            root.appendChild(reqModal.initialize());
        }
    }

    render() {
        const buyBtn = document.createElement('button');
        buyBtn.type = 'submit';
        if(window.location.pathname === '/cart') {
            buyBtn.setAttribute('class', 'big_buy_btn');
            buyBtn.innerText = '주문하기';
            buyBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                sessionStorage.setItem('order_kind', 'cart_order');
                const cart = JSON.parse(sessionStorage.getItem('cart'));
                if(cart === null) {
                    const root = document.getElementById('root');
                    const reqModal = new Modal({modalContent:this.modalContent2, modalOkBtn:this.modalOkBtn});
                    root.appendChild(reqModal.initialize());
                } else {
                    window.routing('/order');
                }
            });
        } else if(window.location.pathname === '/order') {
            buyBtn.setAttribute('class', 'big_order_btn');
            buyBtn.innerText = '결제하기';
            buyBtn.disabled = true;
            buyBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.handleInput();
            })
        }

        return buyBtn;
    }
}