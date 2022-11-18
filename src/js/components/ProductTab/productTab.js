import Component from "../abstractComponent.js";

export default class ProductTab extends Component {

    render() {
        const productTabWrapper = document.createElement('section');
        productTabWrapper.setAttribute('class', 'product_tab_wrapper');

        const detailBtn = document.createElement('button');
        detailBtn.innerText = '상세정보';
        detailBtn.classList.add('tab_on');

        const reviewBtn = document.createElement('button');
        reviewBtn.innerText = '리뷰';

        const qaBtn = document.createElement('button');
        qaBtn.innerText = 'Q&A';

        const returnBtn = document.createElement('button');
        returnBtn.innerText = '반품/교환정보';

        const tabBtn = [detailBtn, reviewBtn, qaBtn, returnBtn];

        for(let i = 0; i < tabBtn.length; i++) {
            tabBtn.setAttribute('class', 'product_tab_btn');
            productTabWrapper.append(tabBtn);

            tabBtn[i].addEventListener('click', () => {
                for(let j = 0; j < tabBtn.length; j++) {
                    tabBtn[j].classList.remove('tab_on');
                }
                this.parentNode.classList.add('tab_on');
            })
        }

        return productTabWrapper;
    }
}