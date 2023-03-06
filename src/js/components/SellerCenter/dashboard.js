import Component from "../abstractComponent.js";
import UploadBtn from "../Button/uploadBtn.js";
import { getSellerItems } from "../../api/api.js";
import SellerItemList from "./sellerItemList.js";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.getSellerItems = getSellerItems;
        this.getSellerItems();
        this.state = {
            sellerItems:[],
            isLoaded: false
        }
    }

    render() {
        const frag = document.createDocumentFragment();

        const centerTop = document.createElement('div');
        centerTop.setAttribute('class', 'seller_center_top_container');

        const centerStrong = document.createElement('strong');
        centerStrong.setAttribute('class', 'seller_center_strong');

        const uploadBtn = new UploadBtn();

        const sellerItemList = new SellerItemList({sellerItems: this.state.sellerItems});

        centerTop.append(centerStrong, uploadBtn.render());
        frag.append(centerTop, sellerItemList.render());

        return frag;
    }
}