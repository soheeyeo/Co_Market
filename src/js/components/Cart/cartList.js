import Component from "../abstractComponent.js";
import CartItem from "./cartItem.js";
import { getCartItems } from "../../api/api.js";

export default class CartList extends Component {
    constructor(props) {
        super(props);
        this.getCartItems = getCartItems;
        this.getCartItems();
        this.state = {
            cart:{},
            results:[],
            isLoaded: false
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
            checkAll.name = 'select_all'
            checkTh.appendChild(checkAll);
    
            const checkLabel = document.createElement('label');
            checkLabel.htmlFor = 'check_all';
            checkLabel.innerText = '상품 전체 선택하기';
            checkLabel.setAttribute('class', 'ir');
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

            if(this.state.cart.count === 0) {
                tbody.append(cartEmptyTxt1, cartEmptyTxt2, shoppingLink)
            } else {
                this.state.results.forEach(async(item) => {
                    const cartItem = new CartItem({item:item});
                    tbody.append(cartItem.initialize());
                })
            }    
            cartList.append(cartListTit, tbody);

        return cartList;
    }
}