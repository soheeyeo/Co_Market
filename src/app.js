import Router from './js/routes/router.js';
import { Main, Login, SignUp, ProductDetail, Cart, Order, SellerCenter } from './js/views/index.js';

export default class App {
    constructor(props) {
        this.props = props;
    }

    setup() {
        const {el} = this.props;
        const router = new Router({
            '/': Main,
            '/login': Login,
            '/signup': SignUp,
            '/product/:id': ProductDetail,
            '/cart': Cart,
            '/order':Order,
            '/center':SellerCenter
        });

        router.init(el);
    }
}