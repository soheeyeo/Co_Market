import Component from "../abstractComponent.js";

export default class ProductTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 0
        }
    }

    handleTab(index) {
        this.setState({currentTab:index});
    }

    render() {
        const productTabContainer = document.createElement('section');
        productTabContainer.setAttribute('class', 'product_tab_container');

        const detailBtnLi = document.createElement('ul');
        detailBtnLi.setAttribute('class', 'detail_tab_li');

        const tabBtn = ['상세정보', '리뷰', 'Q&A', '반품/교환정보'];

        for(let i = 0; i < tabBtn.length; i++) {
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.setAttribute('class', 'detail_tab_btn');
            button.innerText = tabBtn[i];
            li.append(button);
            if(this.state.currentTab === i) {
                button.classList.add('tab_on');
            }
            button.addEventListener('click', () => {
                this.handleTab(i);
            })
            detailBtnLi.appendChild(li);
        }

        productTabContainer.appendChild(detailBtnLi);

        return productTabContainer;
    }
}