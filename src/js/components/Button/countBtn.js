import Component from "../abstractComponent.js";

export default class CountBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qty:1
        };
        this.totalQty = document.querySelector('.total_count strong');
    }

    decreaseQty() {
        const newQty = this.state.qty - 1;
        if(newQty < 1) return;
        this.setState({qty:newQty});
    }

    increaseQty() {
        const newQty = this.state.qty + 1;
        if(newQty > this.props.stock) return;
        this.setState({qty:newQty});
    }

    render() {
        const countBtn = document.createElement('div');
        countBtn.setAttribute('class', 'count_btn');

        const mBtn = document.createElement('input');
        mBtn.setAttribute('class', 'm_btn');
        mBtn.type = 'button';
        mBtn.value = '-';

        mBtn.addEventListener('click', this.decreaseQty.bind(this));

        const count = document.createElement('span');
        count.setAttribute('class', 'count');
        count.innerText = this.state.qty;

        const pBtn = document.createElement('input');
        pBtn.setAttribute('class', 'p_btn');
        pBtn.type = 'button';
        pBtn.value = '+';

        pBtn.addEventListener('click', this.increaseQty.bind(this));

        countBtn.append(mBtn, count, pBtn);

        return countBtn;
    }
}