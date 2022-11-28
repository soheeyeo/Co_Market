import Component from "../components/abstractComponent.js";
import Header from "../components/Header/header.js";
import ProductDetailContents from "../components/ProductDetailContents/productDetailContents.js";
import ProductTab from "../components/ProductTab/productTab.js";

export default class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.target = document.querySelector('#root');
    }

    render() {
        const header = new Header;

        const main = document.createElement('main');

        const productDetailContents = new ProductDetailContents;

        const productTab = new ProductTab;

        main.append(productDetailContents.render(), productTab.render());

        this.target.append(header.render(), main);
    }
}