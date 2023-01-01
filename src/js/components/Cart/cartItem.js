import Component from "../abstractComponent.js";
import ProductDetailCard from "../ProductCard/productDetailCard.js";
import CountBtn from "../Button/countBtn.js";
import ProductTotal from "../Product/productTotal.js";
import BuyBtn from "../Button/buyBtn.js";
import { getProductDetail } from "../../api/api.js";

export default class CartItem extends Component {
    constructor(props) {
        super(props);
        this.productId = this.props.item.product_id;
        this.getProductDetail = getProductDetail;
        this.getProductDetail(this.productId);
        this.state = {
            product:{},
            isLoaded: false,
        }
    }
    
    render() {
        const cartItemContainer = document.createElement('tr');
        cartItemContainer.setAttribute('class', 'cart_item_container');
        if(this.state.isLoaded) {
            const td1 = document.createElement('td');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = 'cart_check';
    
            const label = document.createElement('label');
            label.htmlFor = 'cart_check';

            td1.append(checkbox, label);
    
            const td2 = document.createElement('td');
            const td3 = document.createElement('td');
            const td4 = document.createElement('td');
    
            const cartItemDetail = new ProductDetailCard({item:this.state.product});
    
            td2.append(cartItemDetail.render());
    
            const cartCountBtn = new CountBtn({qty:this.props.item.quantity});
            td3.appendChild(cartCountBtn.render());
    
            const cartTotalPriice = new ProductTotal({price:this.state.product.price, qty:this.props.item.quantity});
    
            const buyBtn = new BuyBtn();
            td4.append(cartTotalPriice.render(), buyBtn.render());
            cartItemContainer.append(td1, td2, td3, td4);
        }

        return cartItemContainer;
    }
}