import Component from "../abstractComponent.js";

export default class ProductStore extends Component {

    render() {
        const productStore = document.createElement('strong');

        if(window.location.pathname === '/') {
            productStore.setAttribute('class', 'product_store');
        } else if(window.location.pathname.includes('/product/')) {
            productStore.setAttribute('class', 'product_detail_store');
        } else if(window.location.pathname === '/cart') {
            productStore.setAttribute('class', 'cart_item_store');
        } else if(window.location.pathname === '/order') {
            productStore.setAttribute('class', 'order_item_store');
        }

        if(this.props.stock === 0) {
            productStore.classList.add('sold_out_name');
        }

        productStore.innerText = this.props.store;

        return productStore;
    }
} 