import Component from "../components/abstractComponent.js";
import Header from "../components/Header/header.js";
import ProductDetailContents from "../components/ProductDetailContents/productDetailContents.js";
import ProductTab from "../components/ProductTab/productTab.js";

export default class ProductDetail extends Component {

    render() {
        const frag = document.createDocumentFragment();

        const header = new Header;

        const main = document.createElement('main');

        const productDetailContents = new ProductDetailContents;

        const productTab = new ProductTab;

        main.append(productDetailContents.initialize(), productTab.initialize());

        frag.append(header.render(), main);

        return frag;
    }
}