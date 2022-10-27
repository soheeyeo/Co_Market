import Component from "../abstractComponent.js";

export default class LoginType extends Component {

    render() {
        const loginType = document.createElement('ul');
        loginType.setAttribute('class', 'login_type');

        const loginBuyer = document.createElement('li');
        loginBuyer.setAttribute('class', 'login_buyer');
        const loginBuyerTit = document.createElement('span');
        loginBuyerTit.setAttribute('class', 'login_buyer_tit');
        loginBuyerTit.innerText = '구매회원';

        loginBuyer.appendChild(loginBuyerTit);

        const loginSeller = document.createElement('li');
        loginSeller.setAttribute('class', 'login_seller');
        const loginSellerTit = document.createElement('span');
        loginSellerTit.setAttribute('class', 'login_seller_tit');
        loginSellerTit.innerText = '판매회원';

        loginSeller.appendChild(loginSellerTit);

        loginType.append(loginBuyer, loginSeller);

        return loginType;
    }
}