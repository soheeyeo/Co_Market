import Component from "../abstractComponent.js";

export default class ProductImage extends Component{

    render() {
        const productImgWrapper = document.createElement('div');

        if(window.location.pathname === '/') {
            productImgWrapper.setAttribute('class', 'product_img');
        } else if(window.location.pathname === '/seller') {
            productImgWrapper.setAttribute('class', 'product_detail_img');
        }

        const productImg = document.createElement('img');
        productImg.setAttribute('src', `${this.props.src}`);
        productImg.setAttribute('alt', `상품이미지`);
        productImgWrapper.appendChild(productImg);

        return productImgWrapper;
    }
}