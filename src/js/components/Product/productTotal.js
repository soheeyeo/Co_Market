import Component from "../abstractComponent.js";

export default class ProductTotal extends Component {

    render() {
        if(window.location.pathname.includes('/product/')) {
            const totalContainer = document.createElement('div');
            totalContainer.setAttribute('class', 'total_container');
    
            const totalTxt = document.createElement('span');
            totalTxt.setAttribute('class', 'total_txt');
            totalTxt.innerText = '총 상품 금액';
    
            const totalQtyContainer = document.createElement('div');
    
            const totalCount = document.createElement('span');
            totalCount.setAttribute('class', 'total_count');

            const totalQty = document.createElement('strong');
            totalQty.innerText = this.props.qty;
            totalCount.append('총 수량',totalQty,'개');
    
            const totalPriceContainer = document.createElement('div');
            totalPriceContainer.setAttribute('class', 'total_price_container');
    
            const totalPrice = document.createElement('strong');
            totalPrice.setAttribute('class', 'total_price');
            totalPrice.innerHTML = (this.props.price *  this.props.qty).toLocaleString('ko-KR');
    
            const priceType = document.createElement('span');
            priceType.innerText = '원';
    
            totalPriceContainer.append(totalPrice, priceType);
    
            totalQtyContainer.append(totalCount, totalPriceContainer);
    
            totalContainer.append(totalTxt, totalQtyContainer);

        return totalContainer;

        } else if(window.location.pathname === '/cart') {
            const totalPriceContainer = document.createElement('div');
            totalPriceContainer.setAttribute('class', 'cart_total_price_container');
    
            const totalPrice = document.createElement('strong');
            totalPrice.setAttribute('class', 'cart_total_price');
            totalPrice.innerHTML = this.props.price.toLocaleString('ko-KR');
    
            const priceType = document.createElement('span');
            priceType.innerText = '원';
    
            totalPriceContainer.append(totalPrice, priceType);

        return totalPriceContainer;
        
        }
    }
}