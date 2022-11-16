import Component from "../abstractComponent.js";

export default class CartBtn extends Component {

    render() {
        const cartBtn = document.createElement('button');
        cartBtn.setAttribute('class', 'cart_button');
        cartBtn.innerText = '장바구니';

        return cartBtn;
    }
}