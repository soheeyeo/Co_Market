import Component from "../abstractComponent.js";
import CartListItem from "./cartListItem.js";
import { getCartItems } from "../../api/api.js";
import { getProductDetail } from "../../api/api.js";
import CartTotal from "./cartTotal.js";
import { OrderBtn } from "../Button/buyBtn.js";

export default class CartList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product:this.getCart(),
            isSelectAll: true,
            isLoaded: false,
        }
    }

    async getCart() {
        const cartData = await getCartItems();
        const cart = cartData.results.map(async(cart) => {
            const data = await getProductDetail(cart.product_id);
            data.qty = cart.quantity;
            data.cart_item_id = cart.cart_item_id;
            data.is_active = cart.is_active;
            return data;
        });
        this.setState({...this.state, product:await Promise.all(cart), isLoaded: true})
    }

    handleTotalPrice() {
        let shipping = 0;
        let total = 0;
        this.state.product.forEach((item) => {
            total += item.price * item.qty;
            shipping += item.shipping_fee;
        });
        document.getElementById('total').innerText = total.toLocaleString('ko-KR');
        document.getElementById('shipping').innerText = shipping.toLocaleString('ko-KR');
        document.querySelector('.cart_total_payment_strong').innerText = (total + shipping).toLocaleString('ko-KR');
    }

    handleEmptyTotalPrice() {
        document.getElementById('total').innerText = 0;
        document.getElementById('shipping').innerText = 0;
        document.querySelector('.cart_total_payment_strong').innerText = 0;
    }

    saveCart() {
        sessionStorage.setItem('cart', JSON.stringify(this.state.product));
    }

    deleteCart() {
        sessionStorage.removeItem('cart');
    }

    checkAll() {
        const checkboxes = document.querySelectorAll('.cart_check');
        const selectAll = document.getElementById('check_all');
        for(let i = 0; i < checkboxes.length; i++) {
            if(selectAll.checked) {
                checkboxes[i].checked = true;
                this.saveCart();
                this.handleTotalPrice();
            } else {
                checkboxes[i].checked = false;
                this.deleteCart();
                this.handleEmptyTotalPrice();
            }
        }
    }
    
    render() {
            const cartList = document.createElement('table');
            cartList.setAttribute('class', 'cart_list');

            const cartListTit = document.createElement('thead');
            cartListTit.setAttribute('class', 'cart_list_tit');
    
            const tr = document.createElement('tr');
    
            const checkTh = document.createElement('th');
            const checkAll = document.createElement('input');
            checkAll.type = 'checkbox';
            checkAll.id = 'check_all';
            checkAll.name = 'select_all';
            checkTh.appendChild(checkAll);
            checkAll.checked = this.state.isSelectAll;
            checkAll.addEventListener('click', () => {
                this.setState({...this.state, isSelectAll:!this.state.isSelectAll});
                this.checkAll();
            });

            const checkLabel = document.createElement('label');
            checkLabel.htmlFor = 'check_all';
            checkTh.append(checkAll, checkLabel);
    
            tr.appendChild(checkTh);
    
            const thContents = ['상품정보', '수량', '상품금액'];
            
            for (let i = 0; i < thContents.length; i++) {
                const th = document.createElement('th');
                th.innerText = `${thContents[i]}`;
                tr.append(th);
            }

            cartListTit.appendChild(tr);
    
            const tbody = document.createElement('tbody');

            const tfoot = document.createElement('tfoot');
    
            const cartEmptyTxt1 = document.createElement('strong');
            cartEmptyTxt1.setAttribute('class', 'cart_empty_strong');
            cartEmptyTxt1.innerText = '장바구니에 담긴 상품이 없습니다.';
            const cartEmptyTxt2 = document.createElement('span');
            cartEmptyTxt2.setAttribute('class', 'cart_empty_span');
            cartEmptyTxt2.innerText = '원하는 상품을 장바구니에 담아보세요!';
            const shoppingLink = document.createElement('a');
            shoppingLink.setAttribute('href', '/');
            shoppingLink.setAttribute('class', 'shopping_link');
            shoppingLink.innerText = '쇼핑 계속하기';
            if(this.state.isLoaded) {
                if(this.state.product.length === 0) {
                    tbody.append(cartEmptyTxt1, cartEmptyTxt2, shoppingLink);
                    cartList.append(tbody, tfoot);
                } else {
                    const cartListItem = new CartListItem({item:this.state.product, isSelectAll:this.state.isSelectAll});
                    tbody.append(cartListItem.initialize());

                    const cartTotal = new CartTotal({item:this.state.product});
                    const buyBtn = new OrderBtn();
                    tfoot.append(cartTotal.render(), buyBtn.render());
                    cartList.append(cartListTit, tbody, tfoot);
                }
            }

        return cartList;
    }
}