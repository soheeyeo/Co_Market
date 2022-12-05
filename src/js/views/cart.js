import Component from "../components/abstractComponent.js";
import Header from "../components/Header/header.js";
import CartList from "../components/Cart/cartList.js";

export default class Cart extends Component{

    render() {
        const frag = document.createDocumentFragment();

        const header = new Header();

        const cartList = new CartList();

        frag.append(header.render(), cartList.render());

        return frag;
    }
}