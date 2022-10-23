import Component from "../abstractComponent.js";

export default class ProductImage extends Component{

    render() {
        const productImgContainer = document.createElement('div');
        productImgContainer.setAttribute('class', 'product_img');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', `${this.props.src}`);
        productImg.setAttribute('alt', `상품이미지`);
        productImgContainer.appendChild(productImg);

        return productImgContainer;
    }
}