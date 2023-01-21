import Component from "../abstractComponent.js";
import CartItem from "./cartItem.js";
import { getCartItems } from "../../api/api.js";
import { getProductDetail } from "../../api/api.js";

export default class CartList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product:this.getCart(),
            isLoaded: false,
        }
    }

    async getCart() {
        const cartData = await getCartItems()
        const cart = cartData.results.map(async(cart) => {
            const data = await getProductDetail(cart.product_id);
            data.qty = cart.quantity;
            data.cart_item_id = cart.cart_item_id;
            data.is_active = cart.is_active;
            return data;
        });
        this.setState({product:await Promise.all(cart), isLoaded: true})
    }

    checkAll() {
        const checkboxes = document.querySelectorAll('.cart_check');
        const selectAll = document.getElementById('check_all');
        for(let i = 0; i < checkboxes.length; i++) {
            if(selectAll.checked) {
                checkboxes[i].classList.add('checked');
            } else {
                checkboxes[i].classList.remove('checked');
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
            checkAll.checked = 'true';
            checkTh.appendChild(checkAll);
            checkAll.addEventListener('click', () => this.checkAll());
    
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
                if(this.state.product.count === 0) {
                    tbody.append(cartEmptyTxt1, cartEmptyTxt2, shoppingLink)
                } else {
                        const cartItem = new CartItem({item:this.state.product});
                        tbody.append(cartItem.initialize());
                }
            }

            cartList.append(cartListTit, tbody);

        return cartList;
    }
}