import Component from "../abstractComponent.js";
import UploadNotice from "./uploadNotice.js";
import UploadForm from "./uploadForm.js";

export default class Editor extends Component {

    render() {
        const main = document.createElement('main');
        main.setAttribute('class', 'editor_main');
        
        const uploadNotice = new UploadNotice();

        const uploadForm = new UploadForm();

        main.append(uploadNotice.render(), uploadForm.render());

        return main;
    }
}