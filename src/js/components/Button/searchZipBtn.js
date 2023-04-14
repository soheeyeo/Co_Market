import Component from "../abstractComponent.js";

export default class SearchZipBtn extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const searchZipBtn = document.createElement('button');
        searchZipBtn.setAttribute('class', 'search_zip_btn');
        searchZipBtn.type = 'submit';
        searchZipBtn.innerText = '우편번호 조회';

        searchZipBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.props.searchZipCode();
        })  

        return searchZipBtn;
    }
}