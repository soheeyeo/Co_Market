import Component from "../abstractComponent.js";

export default class ProductPrice extends Component{

    render() {
        const productPriceContainer = document.createElement('div');

        if(window.location.pathname === '/') {
            productPriceContainer.setAttribute('class', 'price_container');
        } else if(window.location.pathname.includes('/product/')) {
            productPriceContainer.setAttribute('class', 'price_detail_container');
        } else if(window.location.pathname === '/cart') {
            productPriceContainer.setAttribute('class', 'cart_item_price_container');
        } else if(window.location.pathname === '/center') {
            productPriceContainer.setAttribute('class', 'seller_item_price_container');
        }

        const productPrice = document.createElement('strong');

        if(window.location.pathname === '/') {
            productPrice.setAttribute('class', 'product_price');
        } else if(window.location.pathname.includes('/product/')) {
            productPrice.setAttribute('class', 'product_detail_price');
        } else if(window.location.pathname === '/cart') {
            productPrice.setAttribute('class', 'cart_item_price');
        } else if(window.location.pathname === '/center') {
            productPrice.setAttribute('class', 'seller_item_price');
        }

        const priceType = document.createElement('span');

        if(this.props.stock === 0) {
            productPrice.innerText = 'Sold Out';
            productPrice.classList.add('sold_out');
            priceType.innerText = ' ';
        } else {
            productPrice.innerText = this.props.price.toLocaleString('ko-KR');
            priceType.innerText = '원';
        }

        productPriceContainer.append(productPrice, priceType);
        
        return productPriceContainer;
    }
}