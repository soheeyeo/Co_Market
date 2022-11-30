const API_URL = 'https://openmarket.weniv.co.kr/';

export default async function getProductData() {
    try {
        const response = await fetch(API_URL+'products/', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        this.setState({product:data.results});
    } catch(err) {
            console.log('err');
    }
}

export async function getProductDetail() {
    try {
        const productId = window.location.pathname.split('/')[2];

        const response = await fetch(API_URL+`products/${productId}/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        this.setState({product:data});
    } catch(err) {
            console.log('err');
    }
}
