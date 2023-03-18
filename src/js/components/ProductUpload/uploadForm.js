import Component from "../abstractComponent.js";
import UploadImg from "./uploadImg.js";
import UploadInfo from "./uploadInfo.js";
import UploadDetail from "./uploadDetail.js";
import SaveUploadBtn from "../Button/saveUploadBtn.js";
import { uploadProduct } from "../../api/api.js";

export default class UploadForm extends Component {
    constructor(props) {
        super(props);
        this.uploadProduct = uploadProduct;
        this.modalContent1 = '올바른 형식의 이미지 파일을 선택해주세요.';
        this.modalContent2 = '이미지는 1개만 선택이 가능합니다.';
        this.modalOkBtn = '확인';
        this.item = JSON.parse(sessionStorage.getItem('item'));
        this.state = {
            img: '',
            url: ''
        }
    }

    handleChangeImg(e) {
        const file = e.target.files[0];

        if(!file.type.match('image/.*')) {
            const root = document.getElementById('root');
            const reqModal = new Modal({modalContent:this.modalContent1, modalOkBtn:this.modalOkBtn});
            root.appendChild(reqModal.initialize());   
        } else if(file.length > 1) {
            const root = document.getElementById('root');
            const reqModal = new Modal({modalContent:this.modalContent2, modalOkBtn:this.modalOkBtn});
            root.appendChild(reqModal.initialize());
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            this.setState({url:file, img:reader.result});
        }
    }

    render() {
        const uploadForm = document.createElement('form');
        uploadForm.method = 'post';
        uploadForm.setAttribute('class', 'upload_form');

        const productInfoContainer = document.createElement('div');
        productInfoContainer.setAttribute('class', 'product_info_upload_container');

        const uploadImg = new UploadImg({img:this.state.img, handleChangeImg:this.handleChangeImg.bind(this), bgImg:this.item ? this.item.image : ''});

        const uploadInfo = new UploadInfo({item:this.item ? this.item : ''});

        productInfoContainer.append(uploadImg.initialize(), uploadInfo.render());

        const uploadDetail = new UploadDetail({detail:this.item ? this.item.product_info : ''});

        const btnContainer = document.createElement('div');
        btnContainer.setAttribute('class', 'upload_btn_container');

        const cancelBtn = document.createElement('button');
        cancelBtn.setAttribute('class', 'upload_cancel_btn');
        cancelBtn.innerText = '취소';
        cancelBtn.type = 'button';

        const saveBtn = new SaveUploadBtn({image: this.state.url, item:this.item});

        btnContainer.append(cancelBtn, saveBtn.render());

        uploadForm.append(productInfoContainer, uploadDetail.render(), btnContainer);

        return uploadForm;
    }
}