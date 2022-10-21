import Component from "../components/abstractComponent.js";
import { ProductCard } from "../components/ProductCard/index.js";
const API_URL = 'https://openmarket.weniv.co.kr/';

export default class Main extends Component{
    constructor(props) {
        super(props);
        this.mainElement = document.createElement('main');
        this.product = {};
    }

    async getProductData() {
        try {
            const response = await fetch(API_URL+'products/', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            this.product = await data.results;
            } catch(err) {
                console.log('err');
            }
    }

    async setProductList() {
        await this.getProductData();
        console.log(this.product);
        
        this.mainElement.classList.add('product');
        
        const mainpageHeader = document.createElement('h1');
        mainpageHeader.setAttribute('class', 'ir');
        mainpageHeader.innerText = '메인 페이지';
        this.mainElement.appendChild(mainpageHeader);

        const productList = document.createElement('ul');
        productList.setAttribute('class', 'product-list');

        this.product.forEach(async (item) => {
            const productItem = document.createElement('li');
            productItem.setAttribute('class', 'product-item');
            const productCard = new ProductCard({item:item});
            productItem.appendChild(productCard.render());
            productList.appendChild(productItem);
        });

        this.mainElement.append(productList);

        console.log(this.mainElement);
        }

        render() {
            this.setProductList();
        }
}