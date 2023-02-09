import Component from "../abstractComponent.js";

export default class SearchZipBtn extends Component {
    
    render() {
        const searchZipBtn = document.createElement('button');
        searchZipBtn.setAttribute('class', 'search_zip_btn');
        searchZipBtn.type = 'submit';
        searchZipBtn.innerText = '우편번호 조회';

        return searchZipBtn;
    }
}