import Component from "../abstractComponent.js";
import { getProductDetail } from "../../api/api.js";
import ProductDetailCard from "../ProductCard/productDetailCard.js";

export default class ProductDetailContents extends Component {
    constructor(props) {
        super(props);
        this.getProductDetail = getProductDetail;
        this.sectionElement = document.createElement('section');
        this.product = {};
    }
    
    async setProductDetail() {
        await this.getProductDetail();

        this.sectionElement.classList.add('product_detail_container');

        const productDetailCard = new ProductDetailCard({item:this.product});
        this.sectionElement.append(productDetailCard.render());
    }

    render() {
        this.setProductDetail();
        console.log(window.location.pathname);

        return this.sectionElement;
    }
}