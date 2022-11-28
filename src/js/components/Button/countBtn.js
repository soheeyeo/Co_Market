import Component from "../abstractComponent.js";

export default class CountBtn extends Component {

    render() {
        const countBtn = document.createElement('div');
        countBtn.setAttribute('class', 'count_btn');

        const mBtn = document.createElement('input');
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

        let num = parseInt(count.innerText);

        mBtn.addEventListener('click', () => {
            if(num > 1) {
                num -= 1;
                count.innerText = `${num}`;
                document.querySelector('.total_count strong').innerText = `${num}`;
                document.querySelector('.total_price').innerText = (num * this.props.price).toLocaleString('ko-KR');
            } 
        })

        pBtn.addEventListener('click', () => {
            if(this.props.stock === num) {
                pBtn.disabled = true;
            } else {
                num += 1;
                count.innerText = `${num}`;
                document.querySelector('.total_count strong').innerText = `${num}`;
                document.querySelector('.total_price').innerText = (num * this.props.price).toLocaleString('ko-KR');
                console.log(this.props.price)
            } 
        })

        countBtn.append(mBtn, count, pBtn);

        return countBtn;
    }
}