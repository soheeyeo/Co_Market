import Component from "../abstractComponent.js";

export default class SignUpType extends Component {

    render() {
        const signUpType = document.createElement('ul');
        signUpType.setAttribute('class', 'sign_up_type');

        const signUpBuyer = document.createElement('li');
        signUpBuyer.setAttribute('class', 'sign_up_buyer');
        const signUpBuyerTit = document.createElement('span');
        signUpBuyerTit.setAttribute('class', 'sign_up_buyer_tit');
        signUpBuyerTit.innerText = '구매회원';

        signUpBuyer.appendChild(signUpBuyerTit);

        const signUpSeller = document.createElement('li');
        signUpSeller.setAttribute('class', 'sign_up_seller');
        const signUpSellerTit = document.createElement('span');
        signUpSellerTit.setAttribute('class', 'sign_up_seller_tit');
        signUpSellerTit.innerText = '판매회원';

        signUpSeller.appendChild(signUpSellerTit);

        signUpType.append(signUpBuyer, signUpSeller);

        return signUpType;
    }
}