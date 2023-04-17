import Component from "../abstractComponent.js";
import { ProductCard } from "../ProductCard/index.js";

export default class ProductList extends Component{
    constructor(props) {
        super(props);
        this.product = window.location.pathname === '/' ? this.props.product : JSON.parse(sessionStorage.getItem('searchData'));
    }

    render() {
        const productContainer = document.createElement('section');
        productContainer.setAttribute('class', 'product_container');

        const heading = document.createElement('h1');
        heading.setAttribute('class', 'ir');
        heading.innerText = '메인 페이지';
    
        if(window.location.pathname === '/search' && this.product.length === 0) {
            const searchResultEmpty = document.createElement('span');
            searchResultEmpty.setAttribute('class', 'search_result_empty');
            searchResultEmpty.innerText = '검색된 상품이 없습니다.';
            productContainer.appendChild(searchResultEmpty);
        } else {
            const productList = document.createElement('ul');
            productList.setAttribute('class', 'product_list');
            this.product.forEach(async (item) => {
                const productItem = document.createElement('li');
                const productCard = new ProductCard({item:item});
                productItem.appendChild(productCard.render());
                productList.appendChild(productItem);
            });
        
            productContainer.append(productList);
        }

        return productContainer;
    }
}

