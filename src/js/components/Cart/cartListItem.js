import Component from "../abstractComponent.js";
import CartItem from "./cartItem.js";

export default class CartListItem extends Component {
    constructor(props) {
        super(props);
    }

    checkSelectAll() {
        const checkboxes = document.querySelectorAll('.cart_check');
        const checked = document.querySelectorAll('.check_container input[type="checkbox"]:checked');
        const selectAll = document.getElementById('check_all');
        if(checkboxes.length === checked.length) {
            selectAll.checked = true;
        } else {
            selectAll.checked = false;
        }
    }

    saveItem() {
        sessionStorage.setItem('cart', JSON.stringify(this.props.item));
    }
    
    render() {
        const frag = document.createDocumentFragment();
        this.saveItem();
        this.props.item.map(async(item) => {
            const cartItem = new CartItem({item:item, isSelectAll:this.props.isSelectAll, checkSelectAll:this.checkSelectAll.bind(this)})
            frag.append(cartItem.initialize());
        })

        return frag;
    }
}