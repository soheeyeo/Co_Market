import Component from "../abstractComponent.js";
import ProductDetailCard from "../ProductCard/productDetailCard.js";
import CountBtn from "../Button/countBtn.js";
import ProductTotal from "../Product/productTotal.js";
import BuyBtn from "../Button/buyBtn.js";
import { getProductDetail } from "../../api/api.js";

export default class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product:{
                price: {}
            }
        }
    }

    render() {
        const cartItemContainer = document.createElement('tr');
        cartItemContainer.setAttribute('class', 'cart_item_container');
        
        const td1 = document.createElement('td');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'cart_check';

        const label = document.createElement('label');
        label.htmlFor = 'cart_check';
        label.innerText = '구매할 상품 선택하기';
        label.setAttribute('class', 'ir');

        td1.append(checkbox, label);

        const td2 = document.createElement('td');

        const cartItemDetail = new ProductDetailCard({item:this.state.product});

        td2.append(cartItemDetail.render());

        const td3 = document.createElement('td');
        const cartCountBtn = new CountBtn({stock:this.props.item.stock, price:this.props.item.price});
        td3.appendChild(cartCountBtn.render());

        const td4 = document.createElement('td');
        const cartTotalPriice = new ProductTotal({price:this.props.item.price});

        const buyBtn = new BuyBtn();

        td4.append(cartTotalPriice, buyBtn.render());

        cartItemContainer.append(td1, td2, td3, td4);

        return cartItemContainer;
    }
}