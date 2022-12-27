import Component from "../abstractComponent.js";
import { getProductDetail } from "../../api/api.js";
import ProductDetailCard from "../ProductCard/productDetailCard.js";

export default class ProductDetailContents extends Component {
    constructor(props) {
        super(props);
        this.getProductDetail = getProductDetail;
        this.getProductDetail();
        this.state = {
            product:{
                price: {}
            },
            isLoded:false,
        }
    }

    render() {
        const detailContainer = document.createElement('section');
        detailContainer.setAttribute('class', 'product_detail_container')

        const heading = document.createElement('h1');
        heading.setAttribute('class', 'ir');
        heading.innerText = '상품 상세 정보 페이지';
        if(this.state.isLoded) {
            const productDetailCard = new ProductDetailCard({item:this.state.product});
            detailContainer.append(productDetailCard.initialize());
        }

        return detailContainer;
    }
}