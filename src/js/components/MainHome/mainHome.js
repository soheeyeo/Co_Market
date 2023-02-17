import Component from "../abstractComponent.js";
import getProductData from "../../api/api.js";
import ProductList from "../ProductList/productList.js";

export default class MainHome extends Component {
    constructor(props) {
        super(props);
        this.getProductData = getProductData;
        this.getProductData(1);
        this.state = {
            product:[],
            isLoaded:false
        };
    }

    setPage(i) {
        this.setState({...this.state, currentPage:i+1});
        this.getProductData(this.state.currentPage);
    }

    render() {
        const mainElement = document.createElement('main');
        if(this.state.isLoaded) {
            const productList = new ProductList({product:this.state.product});
            const paginationContainer = document.createElement('nav');
            paginationContainer.setAttribute('class', 'pagination_nav');
    
            const paginationUl = document.createElement('ul');
            paginationUl.setAttribute('class', 'pagination_ul');
    
            for(let i = 0; i < this.state.pageNum; i++) {
                const paginationLi = document.createElement('li');
                const paginationBtn = document.createElement('button');
                paginationBtn.innerText = `${i+1}`;
                paginationBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.setPage(i);
                })
                if(this.state.currentPage == i+1) {
                    paginationBtn.classList.add('btn_on');
                };
                paginationLi.append(paginationBtn);
                paginationUl.append(paginationLi);
            }
    
            paginationContainer.append(paginationUl);

            mainElement.append(productList.initialize(), paginationContainer);
        }

        return mainElement;
    }
}