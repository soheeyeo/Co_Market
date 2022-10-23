import Component from "../abstractComponent.js";

export default class ProductPrice extends Component{

    render() {
        const productPriceContainer = document.createElement('div');
        productPriceContainer.setAttribute('class', 'price_container');

        const productPrice = document.createElement('strong');
        productPrice.setAttribute('class', 'product_price');
        productPrice.innerText = this.props.price;

        const priceType = document.createElement('span');
        priceType.innerText = '원';

        productPriceContainer.append(productPrice, priceType);
        
        return productPriceContainer;
    }
}