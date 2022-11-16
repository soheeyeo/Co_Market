import Component from "../abstractComponent.js";

export default class CountBtn extends Component {

    render() {
        const countBtn = document.createElement('div');
        countBtn.setAttribute('class', 'count_btn');

        const mBtn = documet.createElement('input');
        mBtn.setAttribute('class', 'm_btn');
        mBtn.type = 'button';
        mBtn.value = '-';

        const count = document.createElement('span');
        count.setAttribute('class', 'count');
        count.innerText = '1';

        const pBtn = document.createElement('input');
        pBtn.setAttribute('class', 'p_btn');
        pBtn.type = 'button';
        pBtn.value = '+';

        countBtn.append(mBtn, count, pBtn);

        countNum = count.innerText;
        mBtn.addEventListner('click', () => {
            countNum = parseInt(countNum) + 1;
        })
    }
}