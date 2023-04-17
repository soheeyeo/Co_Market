import Component from "../abstractComponent.js";

export default class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.keyword = sessionStorage.getItem('keyword');
        this.count = JSON.parse(sessionStorage.getItem('searchData')).length;
    }

    render() {
        const searchResultsContainer = document.createElement('div');
        searchResultsContainer.setAttribute('class', 'search_results_container');

        const searchResultsKeyword = document.createElement('strong');
        searchResultsKeyword.setAttribute('class', 'search_results_keyword');
        searchResultsKeyword.innerText = `'${this.keyword}'`;

        const searchResults = document.createElement('span');
        searchResults.setAttribute('class', 'search_results');
        searchResults.innerText = '검색결과';

        const searchResultsCount = document.createElement('span');
        searchResultsCount.setAttribute('class', 'search_results_count');
        searchResultsCount.innerText = `${this.count}개`;

        searchResultsContainer.append(searchResultsKeyword, searchResults, searchResultsCount);

        return searchResultsContainer;
    }
}