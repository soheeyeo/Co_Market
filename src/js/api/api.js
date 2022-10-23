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
        this.product = await data.results;
        } catch(err) {
            console.log('err');
        }
}