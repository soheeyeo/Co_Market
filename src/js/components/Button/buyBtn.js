import Component from "../abstractComponent.js";

export default class BuyBtn extends Component {
    constructor(props) {
        super(props);
        this.item = this.props.item;
    }
    
    detailSaveItem() {
        sessionStorage.setItem('cart', JSON.stringify(this.item));
        sessionStorage.setItem('prev', 'product_detail');
    }

    cartSaveItem() {
        sessionStorage.setItem('cart', JSON.stringify(this.item));
        sessionStorage.setItem('prev', 'cart_item');
    }

    render() {
        const buyBtn = document.createElement('button');
        if (window.location.pathname.includes('/product/')) {
            buyBtn.setAttribute('class', 'buy_btn');
            buyBtn.innerText = '구매하기';
            buyBtn.addEventListener('click', () => {
                this.detailSaveItem();
                // location.href = '/order';
            })
        } else if(window.location.pathname === '/cart') {
            buyBtn.setAttribute('class', 'small_buy_btn');
            buyBtn.innerText = '주문하기';
            buyBtn.addEventListener('click', () => {
                this.cartSaveItem();
                // location.href = '/order';
            })
        }

        return buyBtn;
    }
}

export class OrderBtn extends Component {

    render() {
        const buyBtn = document.createElement('button');
        buyBtn.setAttribute('class', 'big_buy_btn');
        buyBtn.innerText = '주문하기';

        buyBtn.addEventListener('click', () => {
            sessionStorage.setItem('prev', 'cart_total');
            // location.href = '/order';
        })

        return buyBtn;
    }
}