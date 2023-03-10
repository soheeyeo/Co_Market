import Component from "../abstractComponent.js";

export default class ShippingMethod extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnSelected: false
        }
    }

    render() {
        const shippingMethodContainer = document.createElement('div');
        shippingMethodContainer.setAttribute('class', 'shipping_upload_container');

        const shippingBtn1 = document.createElement('button');
        shippingBtn1.setAttribute('class', 'parcel_btn');
        shippingBtn1.innerText = '택배,소포,등기';
        shippingBtn1.type = 'button';

        const shippingBtn2 = document.createElement('button');
        shippingBtn2.setAttribute('class', 'delivery_btn');
        shippingBtn2.innerText = '직접배송(화물배달)';
        shippingBtn2.type = 'button';

        shippingMethodContainer.append(shippingBtn1, shippingBtn2);

        return shippingMethodContainer;
    }
}