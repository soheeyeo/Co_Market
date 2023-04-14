import Component from "../abstractComponent.js";

export default class ProductImage extends Component{

    render() {
        const productImgWrapper = document.createElement('div');

        if(window.location.pathname === '/' || window.location.pathname === '/search') {
            productImgWrapper.setAttribute('class', 'product_img');
        } else if(window.location.pathname.includes('/product/')) {
            productImgWrapper.setAttribute('class', 'product_detail_img');
        } else if(window.location.pathname === '/cart') {
            productImgWrapper.setAttribute('class', 'cart_item_img');
        } else if(window.location.pathname === '/order') {
            productImgWrapper.setAttribute('class', 'order_item_img');
        } else if(window.location.pathname === '/center') {
            productImgWrapper.setAttribute('class', 'seller_item_img');
        }

        const productImg = document.createElement('img');
        productImg.setAttribute('src', `${this.props.src}`);
        productImg.setAttribute('alt', `상품이미지`);
        productImgWrapper.appendChild(productImg);

        return productImgWrapper;
    }
}