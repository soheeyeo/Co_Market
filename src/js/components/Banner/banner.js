import Component from "../abstractComponent.js";

export default class EventBanner extends Component {

    render() {
        const bannerContainer = document.createElement('section');
        bannerContainer.setAttribute('class', 'banner_container');

        return bannerContainer;
    }
}