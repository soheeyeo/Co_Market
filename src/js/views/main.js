export default class Main {
    render() {
        const container = document.createElement('div');
        const element = document.createElement('h1');
        element.innerText = '메인 페이지입니다.';
    
        const anchor = document.createElement('a');
        anchor.href = '/login';
        anchor.innerText = '로그인 페이지 이동';
    
        container.appendChild(anchor);

        const anchor1 = document.createElement('a');
        anchor1.href = '/detail/1';
        anchor1.innerText = '1 상품 상세 페이지 이동';

        container.appendChild(anchor1);

        const anchor2 = document.createElement('a');
        anchor2.href = '/detail/2';
        anchor2.innerText = '2 상품 상세 페이지 이동';
    
        container.appendChild(anchor2);

        const anchor3 = document.createElement('a');
        anchor3.href = '/detail/3';
        anchor3.innerText = '3 상품 상세 페이지 이동';

        container.appendChild(anchor3);

        container.appendChild(element);

        return container;
    }
}