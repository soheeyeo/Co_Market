import Router from '../routes/router.js';
import { Main, Login, ProductDetail } from './views/index.js';

export default class App {
    constructor(props) {
        this.props = props;
    }

    setup() {
        const {el} = this.props;
        const router = new Router({
            '/': Main,
            '/login': Login,
            '/detail': ProductDetail,
            '/detail/:id': ProductDetail,
        });

        router.init(el);
    }
}