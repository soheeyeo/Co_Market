import Router from './js/routes/router.js';
import { Main, Login, SignUp, ProductDetail, Cart } from './js/views/index.js';

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
        });

        router.init(el);
    }
}