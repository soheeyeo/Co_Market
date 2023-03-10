import Component from "../abstractComponent.js";

export default class UploadImg extends Component {

    render() {
        const imgUploadContainer = document.createElement('div');
        imgUploadContainer.setAttribute('class', 'img_upload_container');

        const imgUploadLabel = document.createElement('label');
        imgUploadLabel.htmlFor = 'img_upload';
        imgUploadLabel.innerText = '상품 이미지';

        const imgUploadBox = document.createElement('div');
        imgUploadBox.setAttribute('class', 'img_upload_box');

        const imgUpload = document.createElement('input');
        imgUpload.type = 'file';
        imgUpload.id = 'img_upload';
        imgUpload.name = 'img_upload';
        imgUpload.accept = 'image/*';

        const imgUploadBtn = document.createElement('button');
        imgUploadBtn.setAttribute('class', 'img_upload_btn');
        imgUploadBtn.type = 'button';

        imgUploadBox.append(imgUpload, imgUploadBtn);

        imgUploadContainer.append(imgUploadLabel, imgUploadBox);

        return imgUploadContainer;
    }
}