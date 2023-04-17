import Component from "../components/abstractComponent.js";
import Header from "../components/Header/header.js";
import SearchResults from "../components/Search/searchResults.js";
import ProductList from "../components/ProductList/productList.js";

export default class searchProduct extends Component {

    render() {
        const frag = document.createDocumentFragment();

        const header = new Header();

        const main = document.createElement('main');

        const searchResults = new SearchResults();

        const searchProductList = new ProductList();

        main.append(searchResults.render(), searchProductList.initialize());

        frag.append(header.render(), main);

        return frag;
    }
}