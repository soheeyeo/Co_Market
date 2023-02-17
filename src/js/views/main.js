import Component from "../components/abstractComponent.js";
import Header from "../components/Header/header.js";
import EventBanner from "../components/Banner/banner.js";
import MainHome from "../components/MainHome/mainHome.js";
import Footer from "../components/Footer/footer.js";

export default class Main extends Component{

    render() {
        const frag = document.createDocumentFragment();

        const mainHeader = new Header();

        const eventBanner = new EventBanner();

        const mainElement = new MainHome();

        const footer = new Footer();

        frag.append(mainHeader.render(), eventBanner.render(), mainElement.initialize(), footer.render());

        return frag;
    }
}