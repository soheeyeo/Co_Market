import Component from "../abstractComponent.js";
import { putCartItems } from "../../api/api.js";
import { getCartItems } from "../../api/api.js";
import Modal from "../Modal/modal.js";

export default class CartBtn extends Component {
    constructor(props) {
        super(props);
        this.putCartItems = putCartItems;
        this.productId = this.props.productId;
        this.qty = this.props.qty;
        this.modalContent1 = `장바구니에 추가되었습니다.
        장바구니로 이동하시겠습니까?`;
        this.modalContent2 = `이미 장바구니에 있는 상품입니다.
        장바구니로 이동하시겠습니까?`;
        this.modalContent3 = `로그인이 필요한 서비스입니다.
        로그인 하시겠습니까?`;
        this.modalCancelBtn = '아니오';
        this.modalOkBtn = '예';
        this.state = {
            check: this.props.user === 'SELLER' ? '' : this.cartState()
        }
    }

    async cartState() {
        const data = await getCartItems();
        const checkCart = data.results.filter((data) => data.product_id === this.productId)[0];
        if(checkCart) {
            this.setState({check:false})
        } else {
            this.setState({check:true})
        }
    }

    addCartItem() {
        const root = document.getElementById('root');
        this.putCartItems(this.productId, this.qty, this.state.check);
        if(this.state.check === true) {
            const modal = new Modal({modalContent:this.modalContent1, modalCancelBtn:this.modalCancelBtn, modalOkBtn:this.modalOkBtn, link:'/cart'});
            root.appendChild(modal.render());
        } else {
            const modal = new Modal({modalContent:this.modalContent2, modalCancelBtn:this.modalCancelBtn, modalOkBtn:this.modalOkBtn, link:'/cart'});
            root.appendChild(modal.render());
        }
    }

    render() {
        const cartBtn = document.createElement('button');
        cartBtn.setAttribute('class', 'cart_btn');
        cartBtn.innerText = '장바구니';

        if(this.props.user === 'SELLER') {
            cartBtn.classList.add('disabled');
        } else  {
            cartBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                if(localStorage.getItem('token')) {
                    this.addCartItem();
                } else {
                    const root = document.getElementById('root')
                    const reqModal = new Modal({modalContent:this.modalContent3, modalCancelBtn:this.modalCancelBtn, modalOkBtn:this.modalOkBtn, link:'/login'});
                    root.appendChild(reqModal.initialize());
                }
            })
        }

        return cartBtn;
    }
}