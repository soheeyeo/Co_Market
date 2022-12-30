import Component from "../abstractComponent.js";
import ProductImage from "../Product/productImage.js";
import ProductStore from "../Product/productStore.js";
import ProductName from "../Product/productName.js";
import ProductPrice from "../Product/productPrice.js";
import CountBtn from "../Button/countBtn.js";
import ProductTotal from "../Product/productTotal.js";
import BuyBtn from "../Button/buyBtn.js";
import CartBtn from "../Button/cartBtn.js";


export default class ProductDetailCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qty:1
        };
    }

    decreaseQty() {
        const newQty = this.state.qty - 1;
        if(newQty < 1) return;
        this.setState({qty:newQty});
    }

    increaseQty() {
        const newQty = this.state.qty + 1;
        if(newQty > this.props.stock) return;
        this.setState({qty:newQty});
    }

    render() {
        if(window.location.pathname.includes('/product/')) {
            const productDetailContainer = document.createElement('div');
            productDetailContainer.setAttribute('class', 'product_detail_card');
    
            const productDetailImage = new ProductImage({src:this.props.item.image});
    
            const productDetailInfoContainer = document.createElement('div');
            productDetailInfoContainer.setAttribute('class', 'product_detail_info_container');
    
            const productInfo = document.createElement('div');
    
            const productDetailStore = new ProductStore({store:this.props.item.store_name});
    
            const prodcutDetailName = new ProductName({name:this.props.item.product_name});
    
            const productDetailPrice = new ProductPrice({price:this.props.item.price});
    
            productInfo.append(productDetailStore.render(), prodcutDetailName.render(), productDetailPrice.render());
    
            const shippingContainer = document.createElement('div');
            shippingContainer.setAttribute('class', 'shipping_container');
    
            const shipping = document.createElement('span');
            shipping.setAttribute('class', 'shipping');
            shipping.innerText = `택배 배송 / ${this.props.item.shipping_fee > 0 ? this.props.item.shipping_fee+'원' : '무료배송'}`;

            shippingContainer.append(shipping);
    
            const countBtn = new CountBtn({qty:this.state.qty, decreaseQty:this.decreaseQty.bind(this), increaseQty:this.increaseQty.bind(this), stock:this.props.item.stock, price:this.props.item.price});
    
            const productTotal = new ProductTotal({qty:this.state.qty, price:this.props.item.price});
    
            const btnContainer = document.createElement('div');
            btnContainer.setAttribute('class', 'btn_container');
    
            const buyBtn = new BuyBtn;
    
            const cartBtn = new CartBtn({productId:this.props.item.product_id, qty:this.state.qty});
            console.log(this.props.item.product_id);
    
            btnContainer.append(buyBtn.render(), cartBtn.initialize());
    
            productDetailInfoContainer.append(productInfo, shippingContainer, countBtn.initialize(), productTotal.render(), btnContainer);
    
            productDetailContainer.append(productDetailImage.render(), productDetailInfoContainer);
    
            return productDetailContainer;

        } else if(window.location.pathname === '/cart') {
            const frag = document.createDocumentFragment();

            const cartItemImg = new ProductImage({src:this.props.item.image});

            const cartItemInfoContainer = document.createElement('div');
            cartItemInfoContainer.setAttribute('class', 'cart_item_info_container');
            const cartItemStore = new ProductStore({store:this.props.item.store_name});
            const cartItemName = new ProductName({name:this.props.item.product_name});
            const cartItemPrice = new ProductPrice({price:this.props.item.price});
            const shippingContainer = document.createElement('div');
            shippingContainer.setAttribute('class', 'shipping_container');


            const shipping = document.createElement('span');
            shipping.setAttribute('class', 'shipping');
            shipping.innerText = `택배 배송 / ${this.props.item.shippingFee>0?this.props.item.shippingFee+'원':'무료배송'}`;

            shippingContainer.append(shipping);

            cartItemInfoContainer.append(cartItemStore.render(), cartItemName.render(), cartItemPrice.render(), shippingContainer);

            frag.append(cartItemImg.render(), cartItemInfoContainer);
            
            return frag;
        }

    }
}