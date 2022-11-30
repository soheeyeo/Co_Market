import Component from "../abstractComponent.js";
import getProductData from "../../api/api.js";
import { ProductCard } from "../ProductCard/index.js";

export default class ProductList extends Component{
    constructor(props) {
        super(props);
        this.getProductData = getProductData;
        this.getProductData();
        this.state = {
            product:[]
        }
    }

    render() {
        const productContainer = document.createElement('section');
        productContainer.setAttribute('class', 'product_container');

        const heading = document.createElement('h1');
        heading.setAttribute('class', 'ir');
        heading.innerText = '메인 페이지';
    
        const productList = document.createElement('ul');
        productList.setAttribute('class', 'product_list');
    
        this.state.product.forEach(async (item) => {
            const productItem = document.createElement('li');
            const productCard = new ProductCard({item:item});
            productItem.appendChild(productCard.render());
            productList.appendChild(productItem);
        });
    
        productContainer.append(productList);

        return productContainer;
    }
}

