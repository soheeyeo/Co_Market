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

    render() {
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

        const shipping = ['택배배송', '무료배송'];

        for(let i = 0; i < shipping.length; i++) {
            const span = document.createElement('span');
            span.setAttribute('class', 'shipping');
            span.innerText = `${shipping[i]}`;
            shippingContainer.append(span);
        }

        const countBtn = new CountBtn;

        const productTotal = new ProductTotal({price:this.props.item.price});

        const btnContainer = document.createElement('div');
        btnContainer.setAttribute('class', 'btn_container');

        const buyBtn = new BuyBtn;

        const cartBtn = new CartBtn;

        btnContainer.append(buyBtn.render(), cartBtn.render());

        productDetailInfoContainer.append(productInfo, shippingContainer, countBtn.render(), productTotal.render(), btnContainer);

        productDetailContainer.append(productDetailImage.render(), productDetailInfoContainer);

        return productDetailContainer;
    }
}