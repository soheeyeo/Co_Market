import Component from "../abstractComponent.js";

export default class ProductName extends Component{

    render() {
        const productName = document.createElement('strong');
        if(window.location.pathname === '/') {
            productName.setAttribute('class', 'product_name');
        } else if (window.location.pathname.includes('/product/')) {
            productName.setAttribute('class', 'product_detail_name');
        }
        productName.innerText = this.props.name;
        return productName;
    }
}