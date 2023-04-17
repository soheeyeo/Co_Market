import Component from "../abstractComponent.js";
import { ProductImage, ProductStore, ProductName, ProductPrice } from '../Product/index.js';

export default class ProductCard extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const product = document.createElement('a');
        product.setAttribute('href', `/product/${this.props.item.product_id}`);
        product.setAttribute('class', 'product_item');

        if(this.props.item.stock === 0) {
            product.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
            })
        } 

        const productImage = new ProductImage({src:this.props.item.image});
        const productStore = new ProductStore({store:this.props.item.store_name, stock: this.props.item.stock});
        const productName = new ProductName({name:this.props.item.product_name, stock: this.props.item.stock});
        const productPrice = new ProductPrice({price:this.props.item.price, stock: this.props.item.stock});
        
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