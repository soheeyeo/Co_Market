import Component from "../components/abstractComponent.js";
import ProductList from '../components/ProductList/productList.js';
import Header from "../components/Header/header.js";
import EventBanner from "../components/Banner/banner.js";
import Footer from "../components/Footer/footer.js";

export default class Main extends Component{
    constructor(props) {
        super(props);
        this.target = document.querySelector('#root');
    }

        render() {
            const mainHeader = new Header();

            const eventBanner = new EventBanner();

            const mainElement = document.createElement('main');
            const productList = new ProductList();
            mainElement.appendChild(productList.render());

            const footer = new Footer();

            this.target.append(mainHeader.render(), eventBanner.render(), mainElement, footer.render());
        }
}