import Component from "../abstractComponent.js";

export default class HeaderIcons extends Component {

    render() {
        const iconsContainer = document.createElement('div');
        iconsContainer.setAttribute('class', 'icons_container');

        const cart = document.createElement('a');
        cart.setAttribute('href', '/cart');
        const cartIcon = document.createElement('div');
        cartIcon.setAttribute('class', 'cart_icon');
        const cartIconTxt = document.createElement('span');
        cartIconTxt.setAttribute('class', 'cart_icon_txt');
        cartIconTxt.innerText = '장바구니';

        cart.append(cartIcon, cartIconTxt);

        const login = document.createElement('a');
        login.setAttribute('href', '/login');
        const login_icon = document.createElement('div');
        login_icon.setAttribute('class', 'login_icon');
        const loginIconTxt = document.createElement('span');
        loginIconTxt.setAttribute('class', 'login_icon_txt');
        loginIconTxt.innerText = '로그인';

        login.append(login_icon, loginIconTxt);

        iconsContainer.append(cart, login);

        return iconsContainer;
    }
}