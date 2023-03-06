import Component from "../abstractComponent.js";

export default class UploadBtn extends Component {

    render() {
        const itemUploadBtn = document.createElement('button');
        itemUploadBtn.setAttribute('class', 'item_upload_btn');

        const uploadIcon = document.createElement('div');
        const uploadTxt = document.createElement('span');
        uploadTxt.innerText = '상품 업로드';

        itemUploadBtn.append(uploadIcon, uploadTxt);

        return itemUploadBtn;
    }
}