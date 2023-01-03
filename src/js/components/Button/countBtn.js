import Component from "../abstractComponent.js";

export default class CountBtn extends Component {
    constructor(props) {
        super(props);
        this.qty = this.props.qty;
        this.stock = this.props.stock;
        this.state = {
            qty:this.qty
        }
    }

    decreaseQty() {
        const newQty = this.state.qty - 1;
        if(newQty < 1) return;
        this.setState({qty:newQty});
    }

    increaseQty() {
        const newQty = this.state.qty + 1;
        if(newQty > this.stock) return;
        this.setState({qty:newQty});
    }

    render() {
        const countBtn = document.createElement('div');
        countBtn.setAttribute('class', 'count_btn');
        if(window.location.pathname.includes('/product')) {
            const mBtn = document.createElement('input');
            mBtn.setAttribute('class', 'm_btn');
            mBtn.type = 'button';
            mBtn.value = '-';
            mBtn.addEventListener('click', this.props.decreaseQty);

            const count = document.createElement('span');
            count.setAttribute('class', 'count');
            count.innerText = this.props.qty;
    
            const pBtn = document.createElement('input');
            pBtn.setAttribute('class', 'p_btn');
            pBtn.type = 'button';
            pBtn.value = '+';
            pBtn.addEventListener('click', this.props.increaseQty);

            countBtn.append(mBtn, count, pBtn);
        } 
        
        else if(window.location.pathname === '/cart') {
            countBtn.classList.add('cart_count');
            const mBtn = document.createElement('input');
            mBtn.setAttribute('class', 'm_btn');
            mBtn.type = 'button';
            mBtn.value = '-';
            mBtn.addEventListener('click', this.decreaseQty.bind(this));

            const count = document.createElement('input');
            count.setAttribute('class', 'count_value');
            count.type = 'number';
            count.value = this.state.qty;
            count.disabled = true;
    
            const pBtn = document.createElement('input');
            pBtn.setAttribute('class', 'p_btn');
            pBtn.type = 'button';
            pBtn.value = '+';
            pBtn.addEventListener('click', this.increaseQty.bind(this));

            countBtn.append(mBtn, count, pBtn);
        }

        return countBtn;
    }
}