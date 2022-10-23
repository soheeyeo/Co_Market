import Component from "../components/abstractComponent.js";
import ProductList from '../components/ProductList/productList.js';

export default class Main extends Component{
    constructor(props) {
        super(props);
        this.target = document.querySelector('#root');
    }

        render() {
            const mainHeader = document.createElement('header');
            mainHeader.setAttribute('class', 'main_header');
            const txt = document.createElement('h1');
            txt.innerText = '메인 페이지';
            mainHeader.appendChild(txt);

            const mainElement = document.createElement('main');
            const productList = new ProductList();
            mainElement.appendChild(productList.render());

            this.target.append(mainHeader, mainElement);
        }
}