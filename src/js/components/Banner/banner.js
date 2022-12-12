import Component from "../abstractComponent.js";

export default class EventBanner extends Component {

    render() {
        const bannerContainer = document.createElement('section');
        bannerContainer.setAttribute('class', 'banner_container');

        const bannerImg = document.createElement('div');
        bannerImg.setAttribute('class', 'banner_img');
        const slide1 = document.createElement('div');
        slide1.setAttribute('class', 'banner_img_1');
        const slide2 = document.createElement('div');
        slide2.setAttribute('class', 'banner_img_2');
        const slide3 = document.createElement('div');
        slide3.setAttribute('class', 'banner_img_3');

        bannerImg.append(slide1, slide2, slide3);

        const leftBtn = document.createElement('button');
        leftBtn.setAttribute('class', 'slide_left');

        function translateSlide(direction) {
            const selectedBtn = (direction === 1) ? leftBtn : rightBtn;
            console.log(direction * 100);
            bannerImg.style.transitionDuration = '800ms';
            bannerImg.style.transform = `translateX(${direction * 100}%)`;
            bannerImg.ontransitionend = () => 
            changeOrder(selectedBtn);
        }

        function changeOrder(selectedBtn) {
            bannerImg.removeAttribute('style');
            (selectedBtn === leftBtn) ? 
            bannerImg.insertBefore(bannerImg.lastElementChild, bannerImg.firstElementChild)
            : bannerImg.appendChild(bannerImg.firstChild);
        }

        leftBtn.addEventListener('click', (e) => {
            e.preventDefault;
            translateSlide(1);
        })

        const rightBtn = document.createElement('button');
        rightBtn.setAttribute('class', 'slide_right');

        rightBtn.addEventListener('click', (e) => {
            e.preventDefault;
            translateSlide(-1);
        })

        bannerContainer.append(bannerImg, leftBtn, rightBtn);

        return bannerContainer;
    }
}