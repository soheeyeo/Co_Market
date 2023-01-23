import Component from "../abstractComponent.js";
import ProductDetailCard from "../ProductCard/productDetailCard.js";
import CartQtyPrice from "./cartQtyPrice.js";
import Modal from "../Modal/modal.js";
import CartTotal from "./cartTotal.js";

export default class CartItem extends Component {
    constructor(props) {
        super(props);
        this.cartItem = this.props.item;
        this.productId = this.props.item.product_id;
        this.modalContent = '상품을 삭제하시겠습니까?';
        this.modalCancelBtn = '취소';
        this.modalOkBtn = '확인';
    }

    checkSelectAll() {
        const checkboxes = document.querySelectorAll('.cart_check');
        const checked = document.querySelectorAll('.checked');
        const selectAll = document.getElementById('check_all');
        if(checkboxes.length === checked.length) {
            selectAll.checked = true;
        } else {
            selectAll.checked = false;
        }
    }

    
    render() {
        const frag = document.createDocumentFragment();

        this.props.item.forEach(async(item) => {
            const cartItemContainer = document.createElement('tr');
            cartItemContainer.setAttribute('class', 'cart_item_container');

            const td1 = document.createElement('td');
            const checkbox = document.createElement('button');
            checkbox.setAttribute('class', 'cart_check');
            checkbox.classList.add('checked');

            checkbox.addEventListener('click', () => {
                checkbox.classList.toggle('checked');
            });

            checkbox.addEventListener('click', () => this.checkSelectAll());
    
            const label = document.createElement('label');
            label.htmlFor = 'cart_check';

            td1.append(checkbox, label);
    
            const td2 = document.createElement('td');
    
            const cartItemDetail = new ProductDetailCard({item:item});
    
            td2.append(cartItemDetail.initialize());

            const cartQtyPrice = new CartQtyPrice({item:item});

            const deleteBtn = document.createElement('button');
            deleteBtn.setAttribute('class', 'cart_delete_btn');

            deleteBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const root = document.getElementById('root')
                const deleteModal = new Modal({modalContent:this.modalContent, modalCancelBtn:this.modalCancelBtn, modalOkBtn:this.modalOkBtn, link:'/cart', cartItemId: item.cart_item_id});
                root.appendChild(deleteModal.render());
                })
    
            cartItemContainer.append(td1, td2, cartQtyPrice.initialize(), deleteBtn);
            frag.append(cartItemContainer);
        })

        const tfoot = document.createElement('tfoot');
        const cartTotal = new CartTotal({item:this.cartItem});
        tfoot.append(cartTotal.render());

        frag.appendChild(tfoot);

        return frag;
    }
}