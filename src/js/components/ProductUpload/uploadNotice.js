import Component from "../abstractComponent.js";

export default class UploadNotice extends Component {

    render() {
        const noticeContainer = document.createElement('div');
        noticeContainer.setAttribute('class', 'upload_notice_container');

        const noticeTit = document.createElement('span');
        noticeTit.setAttribute('class', 'upload_notice_tit');
        noticeTit.innerText = '상품 등록 주의사항';

        const noticeContents = document.createElement('ul');
        noticeContents.setAttribute('class', 'upload_notice_contents');

        const noticeLi1 = document.createElement('li');
        noticeLi1.innerText = '- 올바른 이미지 파일을 등록해주세요.';

        const noticeLi2 = document.createElement('li');
        noticeLi2.innerText = '- 상품명은 20자 이내로 등록해주세요.';
        
        const noticeLi3 = document.createElement('li');
        noticeLi3.innerText = '- 모든 필드를 작성해주세요.';

        noticeContents.append(noticeLi1, noticeLi2, noticeLi3);

        noticeContainer.append(noticeTit, noticeContents);

        return noticeContainer;
    }
}