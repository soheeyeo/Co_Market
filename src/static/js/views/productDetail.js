export default class ProductDetail {
    constructor(id) {
        this.id = id;
    }
    render() {
        const container = document.createElement('div');
        const element = document.createElement('h1');
        element.innerText = `${this.id}상품 상세 페이지입니다.`;
    
        const anchor = document.createElement('a');
        anchor.href = '/';
        anchor.innerText = '메인 페이지 이동';
    
        container.appendChild(anchor);
        container.appendChild(element);
    
        return container;
    }
}