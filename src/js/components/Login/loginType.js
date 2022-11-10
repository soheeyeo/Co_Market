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

        loginBuyer.classList.add('active');

        const loginSeller = document.createElement('li');
        loginSeller.setAttribute('class', 'login_seller');
        const loginSellerTit = document.createElement('span');
        loginSellerTit.setAttribute('class', 'login_seller_tit');
        loginSellerTit.innerText = '판매회원';

        loginSeller.appendChild(loginSellerTit);

        loginType.append(loginBuyer, loginSeller);
        
        function loginToggle() {
            if(this.className === 'login_buyer') {
                loginBuyer.classList.add('active');
                loginSeller.classList.remove('active');
            } else {
                loginBuyer.classList.remove('active');
                loginSeller.classList.add('active');
            }
        }

        loginBuyer.addEventListener('click', loginToggle);
        loginSeller.addEventListener('click', loginToggle);

        return loginType;
    }
}