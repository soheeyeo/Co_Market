import Component from "../abstractComponent.js";
import { ProductImage, ProductStore, ProductName, ProductPrice } from '../Product/index.js';

export default class ProductCard extends Component{

    render() {
        const product = document.createElement('a');
        product.setAttribute('href', `/product/${this.props.item.product_id}`);
        product.setAttribute('class', 'product_item');

        // product.addEventListener('click', () => {
        //     window.location.href = `/product/${this.props.item.product_id}`;
        // })

        const productImage = new ProductImage({src:this.props.item.image});
        const productStore = new ProductStore({store:this.props.item.store_name});
        const productName = new ProductName({name:this.props.item.product_name});
        const productPrice = new ProductPrice({price:this.props.item.price});

        const productInfo = document.createElement('div');
        productInfo.setAttribute('class', 'product_info');
        const productTitleContainer = document.createElement('div');
        productTitleContainer.setAttribute('class', 'product_title_container');
        productTitleContainer.append(productStore.render(), productName.render());
        productInfo.append(productTitleContainer, productPrice.render());

        product.append(productImage.render(), productInfo);

    return product;
    }
}