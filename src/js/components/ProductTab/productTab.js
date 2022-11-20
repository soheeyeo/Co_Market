import Component from "../abstractComponent.js";

export default class ProductTab extends Component {

    render() {
        const productTabWrapper = document.createElement('section');
        productTabWrapper.setAttribute('class', 'product_tab_wrapper');

        const detailBtnLi = document.createElement('ul');
        detailBtnLi.setAttribute('class', 'detail_tab_li');

        const tabBtn = ['상세정보', '리뷰', 'Q&A', '반품/교환정보'];

        for(let i = 0; i < tabBtn.length; i++) {
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.setAttribute('class', 'detail_tab_btn');
            button.innerText = tabBtn[i];
            li.append(button);
            if(button.innerText === '상세정보') {
                button.classList.add('tab_on');
            }
            detailBtnLi.appendChild(li);
        }

        window.onload = function() {
            const tabOn = document.querySelectorAll('.detail_tab_btn');
    
            for(let j = 0; j < tabOn.length; j++) {
                tabOn[j].addEventListener('click', () => {
                    for(let k = 0; k < tabOn.length; k++) {
                        tabOn[k].classList.remove('tab_on');
                    }
                    tabOn[j].classList.add('tab_on');
                });
            }
        }

        productTabWrapper.appendChild(detailBtnLi);

        return productTabWrapper;
    }
}