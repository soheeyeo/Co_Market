import Component from "../abstractComponent.js";
import { uploadProduct } from "../../api/api.js";
import Modal from "../Modal/modal.js";
import { ModifyProduct } from "../../api/api.js";

export default class SaveUploadBtn extends Component {
    constructor(props) {
        super(props);
        this.modalContent = '모든 필드를 작성해주세요.';
        this.modalOkBtn = '확인';
        this.modalContent2 = '수정이 완료되었습니다.';
        this.modalOkBtn2 = '확인';
    }

    async UploadSellerProduct() {
        const shippingType = document.querySelector('.parcel_btn');
        const product_name = document.getElementById('name_upload').value;
        const image = this.props.image;
        const price = document.getElementById('price_upload').value.split(',').join('');
        const shipping_method = shippingType.classList.contains('selected') ? 'PARCEL' : 'DELIVERY';
        const shipping_fee = document.getElementById('shipping_fee_upload').value.split(',').join('');
        const stock = document.getElementById('stock_upload').value;
        const product_info = document.getElementById('detail_upload').value;

        let formData = new FormData();

        formData.append('product_name', product_name);
        formData.append('image', image);
        formData.append('price', price);
        formData.append('shipping_method', shipping_method);
        formData.append('shipping_fee', shipping_fee);
        formData.append('stock', stock);
        formData.append('product_info', product_info);
        
        for (let key of formData.keys()) {
            console.log(key, ":", formData.get(key));
        }

        if(this.props.item) {
            const data = await ModifyProduct(this.props.item.product_id, formData);
            if(data.product_id) {
                sessionStorage.removeItem('item');
                const root = document.getElementById('root');
                const reqModal = new Modal({modalContent2:this.modalContent, modalOkBtn2:this.modalOkBtn, link:'/center'});
                root.appendChild(reqModal.initialize());
            } else {
                const root = document.getElementById('root');
                const reqModal = new Modal({modalContent:this.modalContent, modalOkBtn:this.modalOkBtn});
                root.appendChild(reqModal.initialize());
            }
        } else {
            const data = await uploadProduct(formData);
            if(data.product_id) {
                sessionStorage.setItem('prev', 'upload');
                window.routing(`/product/${data.product_id}`);
            } else {
                const root = document.getElementById('root');
                const reqModal = new Modal({modalContent:this.modalContent, modalOkBtn:this.modalOkBtn});
                root.appendChild(reqModal.initialize());
            }
        }
    }
    
    render() {
        const saveBtn = document.createElement('button');
        saveBtn.setAttribute('class', 'upload_save_btn');
        saveBtn.innerText = '저장하기';
        saveBtn.type = 'submit';

        saveBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.UploadSellerProduct();
        })

        return saveBtn;
    }
}