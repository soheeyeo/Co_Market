import Component from "../abstractComponent.js";

export default class BuyBtn extends Component {

    render() {
        const buyBtn = document.createElement('button');
        buyBtn.setAttribute('class', 'buy_btn');
        buyBtn.innerText = '구매하기';

        return buyBtn;
    }
}