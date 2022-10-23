import Component from "../abstractComponent.js";
import getProductData from "../../api/api.js";
import { ProductCard } from "../ProductCard/index.js";

export default class ProductList extends Component{
    constructor(props) {
        super(props);
        this.getProductData = getProductData;
        this.sectionElement = document.createElement('section');
        this.product = {};
    }

    async setProductList() {
        await this.getProductData();
        console.log(this.product);
        
        this.sectionElement.classList.add('product_container');
        
        const productList = document.createElement('ul');
        productList.setAttribute('class', 'product_list');
    
        this.product.forEach(async (item) => {
            const productItem = document.createElement('li');
            const productCard = new ProductCard({item:item});
            productItem.appendChild(productCard.render());
            productList.appendChild(productItem);
        });
    
        this.sectionElement.append(productList);
    
        console.log(this.sectionElement);
        }

        render() {
            this.setProductList();

            return this.sectionElement;
        }
}

