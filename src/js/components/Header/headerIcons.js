import Component from "../abstractComponent.js";
import Modal from "../Modal/modal.js";

export default class HeaderIcons extends Component {
    constructor(props) {
        super(props);
        this.modalContent = `로그인이 필요한 서비스입니다.
        로그인 하시겠습니까?`;
        this.modalCancelBtn = '아니오';
        this.modalOkBtn = '예';
    }

    render() {
        const iconsContainer = document.createElement('div');
        iconsContainer.setAttribute('class', 'icons_container');

        const cart = document.createElement('button');
        cart.setAttribute('class', 'cart_icon_btn');
        const cartIcon = document.createElement('div');
        cartIcon.setAttribute('class', 'cart_icon');
        const cartIconTxt = document.createElement('span');
        cartIconTxt.setAttribute('class', 'cart_icon_txt');
        cartIconTxt.innerText = '장바구니';

        cart.append(cartIcon, cartIconTxt);

        cart.addEventListener('click', (e) => {
            e.preventDefault();
            if(localStorage.getItem('token')) {
                window.location.href = '/cart';
            } else {
                const root = document.getElementById('root')
                const reqModal = new Modal({modalContent:this.modalContent, modalCancelBtn:this.modalCancelBtn, modalOkBtn:this.modalOkBtn, link:'/login'});
                root.appendChild(reqModal.render());
            }
        })

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