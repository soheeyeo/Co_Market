import Router from '../routes/router.js';
import { Main, Login } from './views/index.js';

export default class App {
    constructor(props) {
        this.props = props;
    }

    setup() {
        const {el} = this.props;
        const router = new Router({
            '/': Main,
            '/login': Login,
        });

        router.init(el);
    }
}