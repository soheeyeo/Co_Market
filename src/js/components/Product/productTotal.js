import Component from "../abstractComponent.js";

export default class ProductTotal extends Component {

    render() {
        const totalContainer = document.createElement('div');
        totalContainer.setAttribute('class', 'total_container');

        const totalTxt = document.createElement('span');
        totalTxt.setAttribute('class', 'total_txt');
        totalTxt.innerText = '총 상품 금액';

        const totalCount = document.createElement('span');
        totalCount.setAttribute('class', 'total_count');
        totalCount.innerHTML = `총 수량 <strong>1</strong>개`;

        const totalPriceContainer = document.createElement('div');
        totalPriceContainer.setAttribute('class', 'total_price_container');

        const totalPrice = document.createElement('strong');
        totalPrice.setAttribute('class', 'total_price');
        totalPrice.innerHTML = this.props.price;

        const priceType = document.createElement('span');
        priceType.innerText = '원';

        totalPriceContainer.append(totalPrice, priceType);

        totalContainer.append(totalTxt, totalCount, totalPriceContainer);

        return totalContainer;
    }
}