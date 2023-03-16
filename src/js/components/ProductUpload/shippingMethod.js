import Component from "../abstractComponent.js";

export default class ShippingMethod extends Component {

    handleToggle(e) {
        const parcelBtn = document.querySelector('.parcel_btn');
        const deliveryBtn = document.querySelector('.delivery_btn');

        if(e.target.className === 'parcel_btn') {
            parcelBtn.classList.add('selected');
            deliveryBtn.classList.remove('selected');
        } else {
            deliveryBtn.classList.add('selected');
            parcelBtn.classList.remove('selected');
        }
    }

    render() {
        const shippingMethodContainer = document.createElement('div');
        shippingMethodContainer.setAttribute('class', 'shipping_upload_container');

        const shippingBtn1 = document.createElement('button');
        shippingBtn1.setAttribute('class', 'parcel_btn');
        shippingBtn1.innerText = '택배,소포,등기';
        shippingBtn1.type = 'button';

        shippingBtn1.addEventListener('click', (e) => {
            this.handleToggle(e)
        });

        const shippingBtn2 = document.createElement('button');
        shippingBtn2.setAttribute('class', 'delivery_btn');
        shippingBtn2.innerText = '직접배송(화물배달)';
        shippingBtn2.type = 'button';

        shippingBtn2.addEventListener('click', (e) => {
            this.handleToggle(e)
        });

        if(this.props.item.shipping_method === 'DELIVERY') {
            shippingBtn2.classList.add('selected');
            shippingBtn1.classList.remove('selected');
        } else {
            shippingBtn1.classList.add('selected');
            shippingBtn2.classList.remove('selected');
        }

        shippingMethodContainer.append(shippingBtn1, shippingBtn2);

        return shippingMethodContainer;
    }
}