import Component from "../components/abstractComponent.js";
import Header from "../components/Header/header.js";
import Dashboard from "../components/SellerCenter/dashboard.js";

export default class SellerCenter extends Component{

    render() {
        const frag = document.createDocumentFragment();

        const header = new Header();

        const centerContainer = document.createElement('section');
        centerContainer.setAttribute('class', 'seller_center_container');

        const centerTit = document.createElement('h1');
        centerTit.setAttribute('class', 'seller_center_tit');
        centerTit.innerText = '판매자 센터';

        const main = document.createElement('main');

        const dashboard = new Dashboard();

        main.appendChild(dashboard.initialize());

        centerContainer.append(centerTit, main);

        frag.append(header.render(), centerContainer);

        return frag;
    }
}