import Component from "../abstractComponent.js";

export default class ProductStore extends Component {

    render() {
        const productStore = document.createElement('strong');
        productStore.setAttribute('class', 'product_store');
        productStore.innerText = this.props.store;

        return productStore;
    }
} 