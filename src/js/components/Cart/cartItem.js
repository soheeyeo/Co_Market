import Component from "../abstractComponent.js";
import ProductDetailCard from "../ProductCard/productDetailCard.js";
import Modal from "../Modal/modal.js";
import CartQtyPrice from "./cartQtyPrice.js";

export default class CartItem extends Component {
    constructor(props) {
        super(props);
        this.modalContent = '상품을 삭제하시겠습니까?';
        this.modalCancelBtn = '취소';
        this.modalOkBtn = '확인';
        this.state = {
            isCheck: this.props.isSelectAll,
            isOpen: false,
        }
    }

    openSelectBox() {
        const selectShow = !this.state.isOpen
        this.setState({...this.state, isOpen: selectShow});
    }
    
    handleTotal(item) {
        const totalPrice = document.getElementById('total').innerText;
        let total = parseInt(totalPrice.replace(/,/gi, ""));
        const price = item.price * item.qty;
        if(!this.state.isCheck) {
            total -= price;
        } else {
            total += price;
        }
        document.getElementById('total').innerText = total.toLocaleString('ko-KR');
    }

    handleShipping(item) {
        const shippingPrice = document.getElementById('shipping').innerText;
        let ship = parseInt(shippingPrice.replace(/,/gi, ""));
        const shipping = item.shipping_fee;
        if(!this.state.isCheck) {
            ship -= shipping;
        } else {
            ship += shipping;
        }
        document.getElementById('shipping').innerText = ship.toLocaleString('ko-KR');
    }

    handlePaymentPrice(item) {
        const paymentPrice = document.querySelector('.cart_total_payment_strong').innerText;
        let payment = parseInt(paymentPrice.replace(/,/gi, ""));
        const totalPrice = item.price * item.qty + item.shipping_fee;
        if(!this.state.isCheck) {
            payment -= totalPrice;
        } else {
            payment += totalPrice;
        }
        document.querySelector('.cart_total_payment_strong').innerText = payment.toLocaleString('ko-KR');
    }

    saveItem() {
        let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
        let isCart = false;
        cart.forEach((el) => {
            if(el.product_id === this.props.item.product_id) isCart = true;
        });
        if(isCart) return;
        cart.push(this.props.item);
        sessionStorage.setItem('cart', JSON.stringify(cart));
    }

    deleteItem() {
        let cart = JSON.parse(sessionStorage.getItem('cart'));
        let newCart = cart.filter((el) => el.product_id !== this.props.item.product_id);
        sessionStorage.setItem('cart', JSON.stringify(newCart));
        for(let i = 0; i < cart.length; i++) {
            if(cart[i].product_id === this.props.item.product_id) {
                cart.splice(i, 1);
                i--;
            }
        }
        if(cart.length === 0) {
            sessionStorage.removeItem('cart');
        }
    }

    render() {
        const cartItemContainer = document.createElement('tr');
        cartItemContainer.setAttribute('class', 'cart_item_container');

        const td1 = document.createElement('td');
        td1.setAttribute('class', 'check_container');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox'
        checkbox.id = 'cart_check';
        checkbox.checked = this.state.isCheck;
        checkbox.setAttribute('class', 'cart_check');

        const label = document.createElement('label');
        label.htmlFor = 'cart_check';

        label.addEventListener('click', () => {
            this.setState({...this.state, isCheck:!this.state.isCheck});
            this.props.checkSelectAll();
            this.handleTotal(this.props.item);
            this.handleShipping(this.props.item);
            this.handlePaymentPrice(this.props.item);
            if(checkbox.checked) {
                this.deleteItem();
            } else {
                this.saveItem();
            }
        });

        td1.append(checkbox, label);

        const td2 = document.createElement('td');

        const cartItemDetail = new ProductDetailCard({item:this.props.item});

        td2.append(cartItemDetail.initialize());

        const cartQtyPrice = new CartQtyPrice({item:this.props.item, isOpen:this.state.isOpen, openSelectBox:this.openSelectBox.bind(this)});

        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('class', 'cart_delete_btn');

        deleteBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const root = document.getElementById('root')
            const deleteModal = new Modal({modalContent:this.modalContent, modalCancelBtn:this.modalCancelBtn, modalOkBtn:this.modalOkBtn, cartItemId: this.props.item.cart_item_id});
            root.appendChild(deleteModal.render());
            })

        cartItemContainer.append(td1, td2, cartQtyPrice.initialize(), deleteBtn);

        return cartItemContainer;
    }
}