import Component from "../abstractComponent.js";
import ProductTotal from "../Product/productTotal.js";
import BuyBtn from "../Button/buyBtn.js";
import { ModifyCartItems } from "../../api/api.js";

export default class CartQtyPrice extends Component {
    constructor(props) {
        super(props);
        this.productId = this.props.item.product_id;
        this.qty = this.props.item.qty;
        this.cart_item_id = this.props.item.cart_item_id;
        this.isActive = this.props.item.is_active;
        this.ModifyCartItems = ModifyCartItems;
        this.stock = this.props.item.stock;
    }

    render() {
        const frag = document.createDocumentFragment();
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');

        const countBtn = document.createElement('div');
        countBtn.setAttribute('class', 'count_select');
        countBtn.classList.add('cart_count');

        const count = document.createElement('input');
        count.setAttribute('class', 'count_value');
        count.type = 'button';
        count.value = this.qty;

        const openIcon = document.createElement('button');
        openIcon.setAttribute('class', 'down_icon');
        openIcon.name = 'selct_open_btn';

        countBtn.append(count, openIcon);

        countBtn.addEventListener('click', this.props.openSelectBox);
        
        const countSelectBox = document.createElement('ul');
        countSelectBox.setAttribute('class', 'count_select_box');

        if(this.props.isOpen) {
            countSelectBox.classList.add('open');
        }

        const stock = this.stock;

        if(stock < 10) {
            for(let i = 0; i < stock; i++) {
                const countSelectLi = document.createElement('li');
                countSelectLi.setAttribute('class', 'count_select_li');
                countSelectLi.innerText = [i + 1];
                countSelectLi.addEventListener('click', () => {
                    this.qty = countSelectLi.innerText;
                    count.value = this.qty;
                    countSelectBox.classList.remove('open');
                    ModifyCartItems(this.productId, this.qty, this.cart_item_id, this.isActive);
                })
                countSelectBox.append(countSelectLi);
            }
        } else {
            for(let i = 0; i < 10; i++) {
                const countSelectLi = document.createElement('li');
                countSelectLi.setAttribute('class', 'count_select_li');
                countSelectLi.innerText = [i + 1];
                countSelectLi.addEventListener('click', () => {
                    this.qty = countSelectLi.innerText;
                    count.value = this.qty;
                    countSelectBox.classList.remove('open');
                    ModifyCartItems(this.productId, this.qty, this.cart_item_id, this.isActive);
                })
                countSelectBox.append(countSelectLi);
            }
        }

        td3.append(countBtn, countSelectBox);

        const cartTotalPrice = new ProductTotal({qty:count.value, price:this.props.item.price});
        const buyBtn = new BuyBtn({item:this.props.item});
        td4.append(cartTotalPrice.render(), buyBtn.render());

        frag.append(td3, td4);

        return frag;
    }
}