export default class Router {
    constructor(routes) {
        if(!routes) {
            console.error('Can not initailize routes!')
        }
        this.routes = routes;

        // routes를 순회하며 특정 id값을 파싱하여 전달
        for(const key in routes) {
            const route = routes[key];
            if(key.indexOf(':') > -1) {
                const [_, routeName, ...param] = key.split('/');
                this.routes['/' + routeName] = route;
                delete this.routes[key];
            }
        }
        console.log(this.routes);
    }
    
    init(rootElementId) {
        if(!rootElementId) {
            console.error('Not defined rootElementId.');
            return null;
        }
        this.rootElementId = rootElementId;
    
        this.routing(window.location.pathname);
    
        // a 태그 클릭시 url 이동
        window.addEventListener('click', (e) => {
            if(e.target.tagName.toLowerCase() === 'a') {
                e.preventDefault();
                this.navigateTo(e.target.href);
            }
        });
        
        // 뒤로가기를 할 때 다시 라우팅이 되도록
        window.onpopstate = () => this.routing(window.location.pathname);
    }
    
    //해당 url으로 전환
    navigateTo(pathname) {
        window.history.pushState({}, null, pathname);
        this.routing(window.location.pathname);
    }
    
    routing(pathname) {
        const [_, routeName, param] = pathname.split('/');
        let view = '';
    
        // routes[pathname] Class를 컴포넌트로 받아서 페이지를 전달
        if(this.routes[pathname]) {
            const component = new this.routes[pathname];
            view = component.render();
        } else if(param) {
            const component = new this.routes['/' + routeName](param);
            view = component.render();
        }
    
        if(view) {
            this.render(view)
        }
    }
    
    render(view) {
        const rootElement = document.querySelector(this.rootElementId);
        rootElement.innerHTML = '';
        rootElement.appendChild(view);
    }
}