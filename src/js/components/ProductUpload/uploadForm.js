import Component from "../abstractComponent.js";
import UploadImg from "./uploadImg.js";
import UploadInfo from "./uploadInfo.js";
import UploadDetail from "./uploadDetail.js";

export default class UploadForm extends Component {

    render() {
        const uploadForm = document.createElement('form');
        uploadForm.method = 'post';

        const productInfoContainer = document.createElement('div');
        productInfoContainer.setAttribute('class', 'product_info_upload_container');

        const uploadImg = new UploadImg();

        const uploadInfo = new UploadInfo();

        productInfoContainer.append(uploadImg.initialize(), uploadInfo.render());

        const uploadDetail = new UploadDetail();

        const btnContainer = document.createElement('div');
        btnContainer.setAttribute('class', 'upload_btn_container');

        const cancelBtn = document.createElement('button');
        cancelBtn.setAttribute('class', 'upload_cancel_btn');
        cancelBtn.innerText = '취소';
        cancelBtn.type = 'button';

        const saveBtn = document.createElement('button');
        saveBtn.setAttribute('class', 'upload_save_btn');
        saveBtn.innerText = '저장하기';
        saveBtn.type = 'submit';

        btnContainer.append(cancelBtn, saveBtn);

        uploadForm.append(productInfoContainer, uploadDetail.render(), btnContainer);

        return uploadForm;
    }
}