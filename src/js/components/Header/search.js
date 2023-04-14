import Component from "../abstractComponent.js";
import { searchProduct } from "../../api/api.js";

export default class Search extends Component {
    constructor(props) {
        super(props);
    }

    async searchProduct(keyword) {
        const data = await searchProduct(keyword);
        sessionStorage.setItem('searchData', JSON.stringify(data.results));
        sessionStorage.setItem('keyword', keyword);
        window.routing('/search');
    }

    render() {
        const searchBox = document.createElement('div');
        searchBox.setAttribute('class', 'search_box');
        const searchForm = document.createElement('form');
        searchForm.setAttribute('class', 'search_form');
        searchForm.method = 'get';
        searchForm.name = 'search_form';

        searchBox.appendChild(searchForm);

        const search = document.createElement('input');
        search.setAttribute('class', 'search');
        search.name = 'search';
        search.type = 'text';
        search.placeholder = '상품을 검색해보세요!';

        search.addEventListener('keydown', (e) => {
            if(search.value !== ''&& e.key === 'Enter') {
                this.searchProduct(search.value);
            }
        })

        const searchIcon = document.createElement('button');
        searchIcon.setAttribute('class', 'search_icon');
        searchIcon.type = 'submit';
        searchIcon.name = 'search_btn';

        searchIcon.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if(search.value !== '') {
                this.searchProduct(search.value);
            }
        })

        searchForm.append(search, searchIcon);

        return searchBox;
    }
}