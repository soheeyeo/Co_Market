import Component from "../abstractComponent.js";
import Modal from "../Modal/modal.js";

export default class UploadImg extends Component {

    render() {
        const imgUploadContainer = document.createElement('div');
        imgUploadContainer.setAttribute('class', 'img_upload_container');

        const imgUploadLabel = document.createElement('label');
        imgUploadLabel.htmlFor = 'img_upload';
        imgUploadLabel.innerText = '상품 이미지';

        const imgUploadBox = document.createElement('div');
        imgUploadBox.setAttribute('class', 'img_upload_box');
        if(this.props.img) {
            imgUploadBox.style.backgroundImage = `url(${this.props.img})`;
        } else if(this.props.bgImg) {
            imgUploadBox.style.backgroundImage = `url(${this.props.bgImg})`;
        }
        imgUploadBox.addEventListener('change', () => {
            this.props.handleChangeImg();
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