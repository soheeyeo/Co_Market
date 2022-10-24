import Component from "../abstractComponent.js";

export default class Search extends Component {

    render() {
        const searchBox = document.createElement('class', 'search_box');
        const search = document.createElement('input');
        search.setAttribute('type', 'text');
        search.setAttribute('method', 'get');
        search.setAttribute('class', 'search');

        const searchIcon = document.createElement('div');
        searchIcon.setAttribute('class', 'search_icon');

        searchBox.append(search, searchIcon);

        return searchBox;
    }
}