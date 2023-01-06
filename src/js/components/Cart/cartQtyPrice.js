import Component from "../abstractComponent.js";
import CountBtn from "../Button/countBtn.js";
import ProductTotal from "../Product/productTotal.js";
import BuyBtn from "../Button/buyBtn.js";

export default class CartQtyPrice extends Component {
    constructor(props) {
        super(props);
        this.qty = this.props.qty;
        this.stock = this.props.stock;
        this.state = {
            qty:this.qty
        }
    }

    decreaseQty() {
        const newQty = this.state.qty - 1;
        if(newQty < 1) return;
        this.setState({qty:newQty});
    }

    increaseQty() {
        const newQty = this.state.qty + 1;
        if(newQty > this.stock) return;
        this.setState({qty:newQty})
    }

    render() {
        const frag = document.createDocumentFragment();
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');

        const cartCountBtn = new CountBtn({qty:this.state.qty, decreaseQty:this.decreaseQty.bind(this), increaseQty:this.increaseQty.bind(this)});
        td3.appendChild(cartCountBtn.render());

        const cartTotalPrice = new ProductTotal({qty:this.state.qty, price:this.props.price});
        const buyBtn = new BuyBtn();
        td4.append(cartTotalPrice.render(), buyBtn.render());

        frag.append(td3, td4);

        return frag;
    }
}