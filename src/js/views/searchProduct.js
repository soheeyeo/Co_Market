import Component from "../components/abstractComponent.js";
import Header from "../components/Header/header.js";
import ProductList from "../components/ProductList/productList.js";

export default class searchProduct extends Component {

    render() {
        const frag = document.createDocumentFragment();

        const header = new Header();

        const main = document.createElement('main');

        const searchProductList = new ProductList();

        main.appendChild(searchProductList.initialize());

        frag.append(header.render(), main);

        return frag;
    }
}