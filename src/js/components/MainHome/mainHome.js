import Component from "../abstractComponent.js";
import getProductData from "../../api/api.js";
import ProductList from "../ProductList/productList.js";

export default class MainHome extends Component {
    constructor(props) {
        super(props);
        this.getProductData = getProductData;
        this.state = {
            productData:[],
            product:[],
            currentPage:0,
            pageNum:0,
            isLoaded:false
        };
        this.firstPage = this.state.currentPage - (this.state.currentPage % 5) + 1;
        this.lastPage = this.state.currentPage - (this.state.currentPage % 5) + 5;
        this.getAllProductData(this.state.currentPage);
    }

    async getAllProductData(i) {
        const pages = [];
        for(let j = 0; j < this.lastPage; j++) {
            pages.push(this.getProductData(j+1));
        }
        const productData = await Promise.all(pages);
        this.setState({productData:productData, product:productData[i].results, currentPage:i,pageNum:Math.ceil(productData[i].count / 15),isLoaded:true});
    }

    setPage(i) {
        this.setState({...this.state, product:this.state.productData[i].results, currentPage:i});
    }

    prevPage() {
        this.setState({...this.state, product:this.state.productData[this.state.currentPage-1].results, currentPage:this.state.currentPage - 1});
    }

    nextPage() {
        this.setState({...this.state, product:this.state.productData[this.state.currentPage+1].results, currentPage:this.state.currentPage + 1});
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
            if(this.state.currentPage === this.firstPage - 1) {
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
                if(this.state.currentPage === i) {
                    paginationBtn.classList.add('btn_on');
                };
                paginationLi.append(paginationBtn);
                paginationUl.append(paginationLi);
            }

            const nextBtn = document.createElement('button');
            nextBtn.setAttribute('class', 'pagination_next_btn');
            if(this.state.currentPage === this.lastPage - 1) {
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