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
            pageNum:0,
            page:1,
            firstPage:0,
            lastPage:0,
            isLoaded:false
        };
        this.getAllProductData(this.state.page);
    }

    async getAllProductData(i) {
        const pages = [];
        for(let j = 1; j < 7; j++) {
            pages.push(this.getProductData(j));
        }
        const productData = await Promise.all(pages);
        this.setState({...this.state, productData:productData, product:productData[i-1].results, page:i, pageNum:Math.ceil(productData[i-1].count / 15), firstPage:1, lastPage:this.state.lastPage < this.state.pageNum ? this.state.pageNum: 5, isLoaded:true});
    }

    setPage(i) {
        this.setState({...this.state, product:this.state.productData[i-1].results, page:i});
    }

    prevPage() {
        if(this.state.page <= this.state.firstPage) {
            this.setState({...this.state, product:this.state.productData[this.state.page-2].results, page:this.state.page - 1, firstPage:this.state.firstPage - 5, lastPage:this.state.lastPage - (this.state.pageNum - 5)})
        } else {
            this.setState({...this.state, product:this.state.productData[this.state.page-2].results, page:this.state.page - 1})
        }
    }

    nextPage() {
        if(this.state.page < this.state.lastPage) {
            this.setState({...this.state, product:this.state.productData[this.state.page].results, page:this.state.page + 1})
        } else {
            this.setState({...this.state, product:this.state.productData[this.state.page].results, page:this.state.page + 1, firstPage:this.state.firstPage + 5, lastPage:this.state.lastPage < this.state.pageNum ? this.state.pageNum: this.state.lastPage+5})
        }
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
            if(this.state.page === 1) {
                prevBtn.disabled = true;
                prevBtn.classList.add('left_disabled');
            }
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.prevPage();
            })

            while(paginationUl.hasChildNodes()) {
                paginationUl.removeChild(paginationUl.lastChild);
            }

            for(let i = this.state.firstPage; i <= this.state.lastPage; i++) {
                const paginationLi = document.createElement('li');
                const paginationBtn = document.createElement('button');
                paginationBtn.innerText = i;
                paginationBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.setPage(i);
                })
                if(this.state.page === i) {
                    paginationBtn.classList.add('btn_on');
                };
                paginationLi.append(paginationBtn);
                paginationUl.append(paginationLi);
            }

            const nextBtn = document.createElement('button');
            nextBtn.setAttribute('class', 'pagination_next_btn');
            if(this.state.page === this.state.pageNum) {
                nextBtn.disabled = true;
                nextBtn.classList.add('right_disabled');
            }
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.nextPage();
            })
            paginationUl.prepend(prevBtn);
            paginationUl.append(nextBtn);
            paginationContainer.append(paginationUl);
            
            mainElement.append(productList.initialize(), paginationContainer);
        }

        return mainElement;
    }
}