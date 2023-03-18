import Component from "../abstractComponent.js";
import UploadBtn from "../Button/uploadBtn.js";
import SellerItemList from "./sellerItemList.js";

export default class Dashboard extends Component {

    render() {
        const frag = document.createDocumentFragment();
        sessionStorage.removeItem('item');

        const centerTop = document.createElement('div');
        centerTop.setAttribute('class', 'seller_center_top_container');

        const centerStrong = document.createElement('strong');
        centerStrong.setAttribute('class', 'seller_center_strong');

        const uploadBtn = new UploadBtn();

        centerTop.append(centerStrong, uploadBtn.render());

        const sellerItemList = new SellerItemList();

        frag.append(centerTop, sellerItemList.initialize());

        return frag;
    }
}