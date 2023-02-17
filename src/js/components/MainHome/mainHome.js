import Component from "../abstractComponent.js";
import getProductData from "../../api/api.js";
import ProductList from "../ProductList/productList.js";

export default class MainHome extends Component {
    constructor(props) {
        super(props);
        this.getProductData = getProductData;
        this.state = {
            product:[],
            currentPage:1,
            isLoaded:false
        };
        this.firstPage = this.state.currentPage - (this.state.currentPage % 5) + 1;
        this.lastPage = this.state.currentPage - (this.state.currentPage % 5) + 5;
        this.getProductData(this.state.currentPage);
    }

    setPage(i) {
        this.setState({...this.state, currentPage:i+1});
        this.getProductData(this.state.currentPage);
    }

    prevPage() {
        this.setState({...this.state, currentPage:this.state.currentPage - 1});
        this.getProductData(this.state.currentPage);
    }

    nextPage() {
        this.setState({...this.state, currentPage:this.state.currentPage + 1});
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
            
            const prevBtn = document.createElement('button');
            prevBtn.setAttribute('class', 'pagination_prev_btn');
            if(this.state.currentPage === 1) {
                prevBtn.disabled = true;
                prevBtn.classList.add('left_disabled');
            }
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.prevPage();
            })
            paginationUl.append(prevBtn);
            
            for(let i = 0; i < this.state.pageNum; i++) {
                const paginationLi = document.createElement('li');
                const paginationBtn = document.createElement('button');
                paginationBtn.innerText = `${i+1}`;
                paginationBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.setPage(i);
                })
                if(this.state.currentPage === i+1) {
                    paginationBtn.classList.add('btn_on');
                };
                paginationLi.append(paginationBtn);
                paginationUl.append(paginationLi);
            }

            const nextBtn = document.createElement('button');
            nextBtn.setAttribute('class', 'pagination_next_btn');
            if(this.state.currentPage === this.lastPage) {
                nextBtn.disabled = true;
                nextBtn.classList.add('right_disabled');
            }
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.nextPage();
            })
            paginationUl.append(nextBtn);
            
            paginationContainer.append(paginationUl);

            mainElement.append(productList.initialize(), paginationContainer);
        }

        return mainElement;
    }
}