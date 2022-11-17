import Component from "../abstractComponent.js";

export default class ProductStore extends Component {

    render() {
        const productStore = document.createElement('strong');

        if(window.location.pathname === '/') {
            productStore.setAttribute('class', 'product_store');
        } else if(window.location.pathname === '/seller') {
            productStore.setAttribute('class', 'product_detail_store');
        }

        productStore.innerText = this.props.store;

        return productStore;
    }
} 