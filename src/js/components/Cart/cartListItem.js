import Component from "../abstractComponent.js";
import CartItem from "./cartItem.js";

export default class CartListItem extends Component {
    constructor(props) {
        super(props);
        this.modalContent = '상품을 삭제하시겠습니까?';
        this.modalCancelBtn = '취소';
        this.modalOkBtn = '확인';
        this.state = {
            check:this.props.item,
        }
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
    
    render() {
        const frag = document.createDocumentFragment();
        this.props.item.map(async(item) => {
            const cartItem = new CartItem({item:item, check:this.props.item, checkSelectAll:this.checkSelectAll.bind(this)})
            frag.append(cartItem.initialize());
        })

        return frag;
    }
}