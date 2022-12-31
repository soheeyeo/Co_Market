import Component from "../components/abstractComponent.js";
import Header from "../components/Header/header.js";
import CartList from "../components/Cart/cartList.js";

export default class Cart extends Component{

    render() {
        const frag = document.createDocumentFragment();

        const header = new Header();

        const cartContainer = document.createElement('section');
        cartContainer.setAttribute('class', 'cart_container');
        const cartTit = document.createElement('h1');
        cartTit.setAttribute('class', 'cart_tit');
        cartTit.innerText = '장바구니';

        const cartList = new CartList();

        cartContainer.append(cartTit, cartList.initialize());

        frag.append(header.render(), cartContainer);

        return frag;
    }
}