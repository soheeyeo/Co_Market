import Component from "../abstractComponent.js";

export default class Footer extends Component {

    render() {
        const mainFooter = document.createElement('footer');
        mainFooter.setAttribute('class', 'main_footer');

        const footerContainer = document.createElement('div');
        footerContainer.setAttribute('class', 'footer_container');

        const footerLinkContainer = document.createElement('div');
        footerLinkContainer.setAttribute('class', 'footer_link_container');

        const footerLinkLi = document.createElement('ul');
        footerLinkLi.setAttribute('class', 'footer_link_li');
        
        const innerTxt = ['코마켓 소개', '이용약관', '개인정보처리방침', '전자금융거래약관', '청소년보호정책', '제휴문의'];

        for (let i = 0; i < innerTxt.length; i++) {
            const li = document.createElement('li');
            li.setAttribute('class', 'footer_link');

            const a = document.createElement('a');
            a.innerText = innerTxt[i];
            a.setAttribute('href', '#');

            li.append(a);
            footerLinkLi.append(li);
        }

        const footerIconLi = document.createElement('ul');
        footerIconLi.setAttribute('class', 'footer_icon_li');

        const snsLink = ['instagram', 'facebook', 'youtube'];

        for (let j = 0; j < snsLink.length; j++) {
            const li1 = document.createElement('li');

            const a1 = document.createElement('a');
            a1.setAttribute('href', '#');
            a1.setAttribute('class', `${snsLink[j]}`);

            const span = document.createElement('span');
            span.innerText = `${snsLink[j]} 이동하기`;
            span.setAttribute('class', 'ir');

            a1.append(span);
            li1.append(a1);
            footerIconLi.append(li1);
        }

        footerLinkContainer.append(footerLinkLi, footerIconLi);

        const footerInfoWrapper = document.createElement('div');
        footerInfoWrapper.setAttribute('class', 'footer_info_wrapper');
        const dl = document.createElement('dl');
        dl.setAttribute('class', 'footer_corp_info');
        const dt = document.createElement('dt');
        dt.innerText = '(주)CO MARKET';
        const dd1 = document.createElement('dd');
        dd1.innerText = '서울특별시 강남구 삼성로';
        const dd2 = document.createElement('dd');
        dd2.innerText = '사업자 번호 : 000-0000-0000';
        const dd3 = document.createElement('dd');
        dd3.innerText = '통신판매업';
        const dd4 = document.createElement('dd');
        dd4.innerText = '대표: 여소희';

        dl.append(dt, dd1, dd2, dd3, dd4);

        footerInfoWrapper.appendChild(dl);

        footerContainer.append(footerLinkContainer, footerInfoWrapper);

        mainFooter.appendChild(footerContainer);

        return mainFooter;
    }
}