import Component from "../abstractComponent.js";
import ProductDetailCard from "../ProductCard/productDetailCard.js";
import CartQtyPrice from "./cartQtyPrice.js";
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
            const checkbox = document.createElement('button');
            checkbox.setAttribute('class', 'cart_check');
    
            const label = document.createElement('label');
            label.htmlFor = 'cart_check';

            td1.append(checkbox, label);
    
            const td2 = document.createElement('td');
    
            const cartItemDetail = new ProductDetailCard({item:this.state.product});
    
            td2.append(cartItemDetail.render());

            const cartQtyPrice = new CartQtyPrice({qty:this.props.item.quantity, stock:this.state.product.stock, price:this.state.product.price});

            cartItemContainer.append(td1, td2, cartQtyPrice.initialize());
        }

        return cartItemContainer;
    }
}