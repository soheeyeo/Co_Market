import Router from './js/routes/router.js';
import { Main, Login, SignUp, ProductDetail, Cart, Order } from './js/views/index.js';

export default class App {
    constructor(props) {
        this.props = props;
    }

    setup() {
        const {el} = this.props;
        const router = new Router({
            '/main': Main,
            '/login': Login,
            '/signup': SignUp,
            '/product/:id': ProductDetail,
            '/cart': Cart,
            '/order':Order
        });

        router.init(el);
    }
}