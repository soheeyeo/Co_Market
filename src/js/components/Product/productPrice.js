import Component from "../abstractComponent.js";

export default class ProductPrice extends Component{

    render() {
        const productPriceContainer = document.createElement('div');

        if(window.location.pathname === '/') {
            productPriceContainer.setAttribute('class', 'price_container');
        } else if(window.location.pathname.includes('/product/')) {
            productPriceContainer.setAttribute('class', 'price_detail_container');
        }

        const productPrice = document.createElement('strong');

        if(window.location.pathname === '/') {
            productPrice.setAttribute('class', 'product_price');
        } else if(window.location.pathname.includes('/product/')) {
            productPrice.setAttribute('class', 'product_detail_price');
        }

        productPrice.innerText = this.props.price.toLocaleString('ko-KR');

        const priceType = document.createElement('span');
        priceType.innerText = '원';

        productPriceContainer.append(productPrice, priceType);
        
        return productPriceContainer;
    }
}