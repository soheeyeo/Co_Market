import Component from "../abstractComponent.js";

export default class Search extends Component {

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
        search.placeholder = '상품을 검색해보세요!'

        const searchIcon = document.createElement('button');
        searchIcon.setAttribute('class', 'search_icon');
        searchIcon.type = 'submit';
        searchIcon.name = 'search_btn';

        searchForm.append(search, searchIcon);

        return searchBox;
    }
}