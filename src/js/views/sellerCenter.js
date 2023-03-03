import Component from "../components/abstractComponent.js";
import Header from "../components/Header/header.js";

export default class SellerCenter extends Component{

    render() {
        const frag = document.createDocumentFragment();

        const header = new Header();

        const centerContainer = document.createElement('section');
        centerContainer.setAttribute('class', 'seller_center_container');

        const centerTop = document.createElement('div');
        centerTop.setAttribute('class', 'seller_center_top_container');

        const centerTit = document.createElement('h1');
        centerTit.setAttribute('class', 'seller_center_tit');
        centerTit.innerText = '판매자 센터';

        const centerStrong = document.createElement('strong');
        centerStrong.setAttribute('class', 'seller_center_strong');
        centerStrong.innerText = '';

        centerTop.append(centerTit, centerStrong);

        centerContainer.append(centerTop);

        frag.append(header.render(), centerContainer);

        return frag;
    }
}