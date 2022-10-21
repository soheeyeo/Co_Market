import Component from "../abstractComponent.js";
import { ProductImage, ProductName, ProductPrice } from '../Product/index.js';

export default class ProductCard extends Component{

    render() {
        const product = document.createElement('a');
        product.setAttribute('href', `/products/${this.props.item.product_id}`);
        product.setAttribute('class', 'product-item');

        const productImage = new ProductImage({src:this.props.item.thumbnailImg});
        const productName = new ProductName({name:this.props.item.productName});
        const productPrice = new ProductPrice({price:this.props.item.price});


        product.appendChild(productImage.render());
        product.appendChild(productName.render());
        product.appendChild(productPrice.render());

    return product;
    }
}