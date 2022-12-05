import Component from "../abstractComponent.js";
import CartItem from "./cartItem.js";

export default class CartList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product:[]
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

        const cartItem = new CartItem({item:this.state.product});

        tbody.append(cartItem.render());

        cartList.append(cartListTit, tbody);

        return cartList;
    }
}