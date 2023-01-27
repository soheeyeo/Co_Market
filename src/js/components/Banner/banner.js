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
        let current = 0;

        leftBtn.addEventListener('click', (e) => {
            e.preventDefault;
            if(current === 0) {
                current = 2;
            } else {
                current--;
            }
            bannerImg.style.transition = "transform 0.8s ease-in-out";
            bannerImg.style.transform = `translateX(-${current * 100}%)`;
        })

        const rightBtn = document.createElement('button');
        rightBtn.setAttribute('class', 'slide_right');

        rightBtn.addEventListener('click', (e) => {
            e.preventDefault;
            if(current === 2) {
                current = 0;
            } else {
                current++;
            }
            bannerImg.style.transition = "transform 0.8s ease-in-out";
            bannerImg.style.transform = `translateX(-${current * 100}%)`;
        })

        bannerContainer.append(bannerImg, leftBtn, rightBtn);

        return bannerContainer;
    }
}