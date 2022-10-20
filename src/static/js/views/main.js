export default class Main {
    render() {
        const container = document.createElement('div');
        const element = document.createElement('h1');
        element.innerText = '메인 페이지입니다.';
    
        const anchor = document.createElement('a');
        anchor.href = './login';
        anchor.innerText = '로그인 페이지 이동';
    
        container.appendChild(anchor);
        container.appendChild(element);
    
        return container;
    }
}