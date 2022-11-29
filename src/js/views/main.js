import Component from "../components/abstractComponent.js";
import ProductList from '../components/ProductList/productList.js';
import Header from "../components/Header/header.js";
import EventBanner from "../components/Banner/banner.js";
import Footer from "../components/Footer/footer.js";

export default class Main extends Component{

        render() {
            const frag = document.createDocumentFragment();

            const mainHeader = new Header();

            const eventBanner = new EventBanner();

            const mainElement = document.createElement('main');
            const productList = new ProductList();
            mainElement.appendChild(productList.render());

            const footer = new Footer();

            frag.append(mainHeader.render(), eventBanner.render(), mainElement, footer.render());

            return frag;
        }
}