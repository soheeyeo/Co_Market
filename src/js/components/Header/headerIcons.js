import Component from "../abstractComponent.js";

export default class HeaderIcons extends Component {

    render() {
        const iconsWrapper = document.createElement('div');
        iconsWrapper.setAttribute('class', 'icons_wrapper');

        const iconBox = document.createElement('div');
        iconBox.setAttribute('class', 'icon_box');

        const cart = document.createElement('a');
        cart.setAttribute('href', '/cart/');

        const cartIcon = document.createElement('div');
        cartIcon.setAttribute('class', 'cart_icon');

        cart.appendChild(cartIcon);

        const login = document.createElement('a');
        login.setAttribute('href', '/login/');

        const login_icon = document.createElement('div');
        login_icon.setAttribute('class', 'login_icon');

        login.appendChild(login_icon);

        iconBox.append(cart, login);

        iconsWrapper.appendChild(iconBox);

        return iconBox;
    }
}