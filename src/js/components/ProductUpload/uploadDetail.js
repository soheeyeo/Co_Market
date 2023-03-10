import Component from "../abstractComponent.js";

export default class UploadDetail extends Component {

    render() {
        const detailUploadContainer = document.createElement('div');
        detailUploadContainer.setAttribute('class', 'product_detail_upload_container');

        const detailUploadLabel = document.createElement('label');
        detailUploadLabel.htmlFor = 'detail_upload';
        detailUploadLabel.innerText = '상품 상세 정보';

        const detailUploadInput = document.createElement('textarea');
        detailUploadInput.rows = '20';
        detailUploadInput.id = 'detail_upload';
        detailUploadInput.spellcheck = false;

        detailUploadContainer.append(detailUploadLabel, detailUploadInput);

        return detailUploadContainer;
    }
}