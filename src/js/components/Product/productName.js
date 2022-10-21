import Component from "../abstractComponent.js";

export default class ProductName extends Component{

    render() {
        const productName = document.createElement('strong');
        productName.setAttribute('class', 'product-name');
        productName.innerText = this.props.name;
        return productName;
    }
}