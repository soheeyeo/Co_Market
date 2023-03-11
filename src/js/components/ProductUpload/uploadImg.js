import Component from "../abstractComponent.js";
import Modal from "../Modal/modal.js";

export default class UploadImg extends Component {
    constructor(props) {
        super(props);
        this.modalContent1 = '올바른 형식의 이미지 파일을 선택해주세요.';
        this.modalContent2 = '이미지는 1개만 선택이 가능합니다.';
        this.modalOkBtn = '확인';
        this.state = {
            img: ''
        }
    }

    handleChangeImg() {
        const input = document.querySelector('#img_upload');
        const file = input.files[0];
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
            this.setState({img:reader.result});
        }
    }

    render() {
        const imgUploadContainer = document.createElement('div');
        imgUploadContainer.setAttribute('class', 'img_upload_container');

        const imgUploadLabel = document.createElement('label');
        imgUploadLabel.htmlFor = 'img_upload';
        imgUploadLabel.innerText = '상품 이미지';

        const imgUploadBox = document.createElement('div');
        imgUploadBox.setAttribute('class', 'img_upload_box');
        if(this.state.img) {
            imgUploadBox.style.backgroundImage = `url(${this.state.img})`;
        }
        imgUploadBox.addEventListener('change', () => {
            this.handleChangeImg();
        })

        const imgUpload = document.createElement('input');
        imgUpload.type = 'file';
        imgUpload.id = 'img_upload';
        imgUpload.name = 'img_upload';
        imgUpload.accept = 'image/*';

        const imgUploadBtn = document.createElement('button');
        imgUploadBtn.setAttribute('class', 'img_upload_btn');
        imgUploadBtn.type = 'button';

        imgUploadBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            imgUpload.click();
        })

        imgUploadBox.append(imgUpload, imgUploadBtn);

        imgUploadContainer.append(imgUploadLabel, imgUploadBox);

        return imgUploadContainer;
    }
}