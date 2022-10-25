import Component from "../abstractComponent.js";
import Search from "./search.js";
import HeaderIcons from "./headerIcons.js";

export default class Header extends Component {

    render() {
        const mainHeader = document.createElement('header');
        mainHeader.setAttribute('class', 'main_header');
        const headerContainer = document.createElement('div');
        headerContainer.setAttribute('class', 'header_container');

        mainHeader.appendChild(headerContainer);

        const logoWrapper = document.createElement('div');
        logoWrapper.setAttribute('class', 'logo_wrapper');
        const logo = document.createElement('a');
        logo.setAttribute('href', '/');
        logo.setAttribute('class', 'logo');
        const logoImg = document.createElement('div');
        logoImg.setAttribute('class', 'logo_img');

        logo.appendChild(logoImg);
        logoWrapper.appendChild(logo);

        const search = new Search();
        const headerIcons = new HeaderIcons();

        headerContainer.append(logoWrapper, search.render(), headerIcons.render());

        return mainHeader;
    }
}