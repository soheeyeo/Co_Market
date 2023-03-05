import Component from "../abstractComponent.js";
import Modal from "../Modal/modal.js";
import { logout } from "../../api/api.js";

export default class HeaderIcons extends Component {
    constructor(props) {
        super(props);
        this.modalContent = `로그인이 필요한 서비스입니다.
        로그인 하시겠습니까?`;
        this.modalCancelBtn = '아니오';
        this.modalOkBtn = '예';
        this.user = JSON.parse(localStorage.getItem('user'));
    }

    render() {
        const iconsContainer = document.createElement('div');
        iconsContainer.setAttribute('class', 'icons_container');

        const cart = document.createElement('button');
        cart.setAttribute('class', 'cart_icon_btn');
        const cartIcon = document.createElement('div');
        const cartIconTxt = document.createElement('span');


        if(this.user && this.user.user_type === 'SELLER') {
            cartIcon.setAttribute('class', 'center_icon');
            cartIconTxt.setAttribute('class', 'center_icon_txt');
            cartIconTxt.innerText = '판매자 센터';
            cart.addEventListener('click', (e) => {
                e.preventDefault();
                window.routing('/center');
            })
        } else {
            cartIcon.setAttribute('class', 'cart_icon');
            cartIconTxt.setAttribute('class', 'cart_icon_txt');
            cartIconTxt.innerText = '장바구니';
            
            cart.addEventListener('click', (e) => {
                e.preventDefault();
                if(localStorage.getItem('token')) {
                    window.routing('/cart');
                } else {
                    const root = document.getElementById('root')
                    const reqModal = new Modal({modalContent:this.modalContent, modalCancelBtn:this.modalCancelBtn, modalOkBtn:this.modalOkBtn, link:'/login'});
                    root.appendChild(reqModal.initialize());
                }
            })
        }

        cart.append(cartIcon, cartIconTxt);


        const login = document.createElement('button');
        login.setAttribute('class', 'login_icon_btn');
        const login_icon = document.createElement('div');
        login_icon.setAttribute('class', 'login_icon');
        const loginIconTxt = document.createElement('span');
        loginIconTxt.setAttribute('class', 'login_icon_txt');

        if(!localStorage.getItem('token')) {
            loginIconTxt.innerText = '로그인';
            login.addEventListener('click', () => {
                window.routing('/login');
            })
        } else {
            login_icon.style.marginLeft = '6px';
            loginIconTxt.innerText = '로그아웃';
            login.addEventListener('click', () => {
                logout();
            });
        }

        login.append(login_icon, loginIconTxt);

        iconsContainer.append(cart, login);

        return iconsContainer;
    }
}