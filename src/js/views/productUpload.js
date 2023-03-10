import Component from "../components/abstractComponent.js";
import Header from "../components/Header/header.js";
import Editor from "../components/ProductUpload/editor.js";

export default class ProductUpload extends Component{

    render() {
        const frag = document.createDocumentFragment();

        const header = new Header();

        const uploadContainer = document.createElement('section');
        uploadContainer.setAttribute('class', 'upload_container');

        const uploadTit = document.createElement('h1');
        uploadTit.setAttribute('class', 'upload_tit');
        uploadTit.innerText = '상품 등록';

        const editor = new Editor();

        uploadContainer.append(uploadTit, editor.render());

        frag.append(header.render(), uploadContainer);

        return frag;
    }
}