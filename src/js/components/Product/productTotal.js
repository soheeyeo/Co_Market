import Component from "../abstractComponent.js";

export default class ProductTotal extends Component {

    render() {
        const totalWrapper = document.createElement('div');
        totalWrapper.setAttribute('class', 'total_wrapper');

        const totalTxt = document.createElement('span');
        totalTxt.setAttribute('class', 'total_txt');
        totalTxt.innerText = '총 상품 금액';

        const totalCount = document.createElement('span');
        totalCount.setAttribute('class', 'total_count');
        totalCount.innerHTML = `총 수랑 <strong>1</strong>개`;

        const totalPrice = document.createElement('span');
        totalPrice.setAttribute('class', 'total_price');
        totalPrice.innerHTML = this.props.price;

        totalWrapper.append(totalTxt, totalCount, totalPrice);

        return totalWrapper;
    }
}