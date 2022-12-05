import Component from "../abstractComponent.js";

export default class BuyBtn extends Component {

    render() {
        const buyBtn = document.createElement('button');
        if (window.location.pathname.includes('/product/')) {
            buyBtn.setAttribute('class', 'buy_btn');
            buyBtn.innerText = '구매하기';
        } else if(window.location.pathname === '/cart') {
            buyBtn.setAttribute('class', 'small_buy_btn');
            buyBtn.innerText = '주문하기';
        }

        return buyBtn;
    }
}