import Component from "../abstractComponent.js";
import ShippingMethod from "./shippingMethod.js";

export default class UploadInfo extends Component {

    render() {
        const infoContainer = document.createElement('div');
        infoContainer.setAttribute('class', 'upload_info_container');

        const nameUploadLabel = document.createElement('label');
        nameUploadLabel.htmlFor = 'name_upload';
        nameUploadLabel.innerText = '상품명';

        const nameUploadInput = document.createElement('input');
        nameUploadInput.type = 'text';
        nameUploadInput.id = 'name_upload';
        nameUploadInput.maxLength = '20';
        nameUploadInput.spellcheck = false;

        const priceUploadLabel = document.createElement('label');
        priceUploadLabel.htmlFor = 'price_upload';
        priceUploadLabel.innerText = '판매가';

        const priceTxtContainer = document.createElement('div');
        priceTxtContainer.setAttribute('class', 'price_upload_txt_container');

        const priceUploadInput = document.createElement('input');
        priceUploadInput.type = 'num';
        priceUploadInput.id = 'price_upload';
        priceUploadInput.spellcheck = false;

        const priceType = document.createElement('span');
        priceType.setAttribute('class', 'upload_txt');
        priceType.innerText = '원';

        priceTxtContainer.append(priceUploadInput, priceType);

        const shippingUploadLabel = document.createElement('label');
        shippingUploadLabel.htmlFor = 'shipping_upload';
        shippingUploadLabel.innerText = '배송방법';

        const shippingMethod = new ShippingMethod();

        const shippingFeeUploadLabel = document.createElement('label');
        shippingFeeUploadLabel.htmlFor = 'shipping_fee_upload';
        shippingFeeUploadLabel.innerText = '기본 배송지';

        const shippingFeeTxtContainer = document.createElement('div');
        shippingFeeTxtContainer.setAttribute('class', 'shipping_fee_upload_txt_container');

        const shippingFeeUploadInput = document.createElement('input');
        shippingFeeUploadInput.type = 'num';
        shippingFeeUploadInput.id = 'shipping_fee_upload';
        shippingFeeUploadInput.spellcheck = false;

        const shippingFeeType = document.createElement('span');
        shippingFeeType.setAttribute('class', 'upload_txt');
        shippingFeeType.innerText = '원';

        shippingFeeTxtContainer.append(shippingFeeUploadInput, shippingFeeType);

        const stockUploadLabel = document.createElement('label');
        stockUploadLabel.htmlFor = 'stock_upload';
        stockUploadLabel.innerText = '재고';

        const stockTxtContainer = document.createElement('div');
        stockTxtContainer.setAttribute('class', 'stock_upload_txt_container');

        const stockUploadInput = document.createElement('input');
        stockUploadInput.type = 'num';
        stockUploadInput.id = 'stock_upload';
        stockUploadInput.spellcheck = false;

        const stockType = document.createElement('span');
        stockType.setAttribute('class', 'upload_txt');
        stockType.innerText = '개';

        stockTxtContainer.append(stockUploadInput, stockType);

        infoContainer.append(nameUploadLabel, nameUploadInput, priceUploadLabel, priceTxtContainer, shippingUploadLabel, shippingMethod.initialize(), shippingFeeUploadLabel, shippingFeeTxtContainer, stockUploadLabel, stockTxtContainer);

        return infoContainer;
    }
}