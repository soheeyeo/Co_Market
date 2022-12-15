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

export async function checkId() {
    try {
        const usernameData = document.getElementById('account_id').value;
        const response = await fetch(API_URL+'accounts/signup/valid/username/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: usernameData,
            }),
        });
        const IdValidation = await response.json();
        // 아이디 유효성 검사
        const regExp = /^[A-za-z0-9]{1,20}$/g;
        const statusMsg = document.querySelector('.status_msg');

        if(usernameData === '' ) {
            statusMsg.textContent = '아이디를 입력해주세요.'
        } else if(!regExp.test(usernameData)) {
            statusMsg.textContent = '20자 이내의 영어 소문자, 대문자, 숫자만 가능합니다.'
        } else if(IdValidation.FAIL_Message === '이미 사용 중인 아이디입니다.') {
            statusMsg.textContent = '이미 사용중입니다.'
        } else if(IdValidation.Success)  {
            statusMsg.textContent = '사용 가능한 아이디입니다.'
            statusMsg.style.color = '#98B9CD';
        }
    } catch(err) {
        console.log('err');
    }
}

export async function checkCrn() {
    try {
        const crnData = document.getElementById('crn').value;
        const response = await fetch(API_URL+'accounts/signup/valid/company_registration_number/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                company_registration_number: crnData,
            }),
        });
        const CrnValidation = await response.json();
        // 사업자 등록번호 유효성 검사
        const regExp = /([0-9]{3})([0-9]{2})([0-9]{5})/;
        const statusMsg = document.querySelector('.seller_input_btn_container + .status_msg');

        if(crnData === '' ) {
            statusMsg.textContent = '사업자 등록번호를 입력해주세요.'
            statusMsg.style.color = '#EB5757';
        } else if(!regExp.test(crnData)) {
            statusMsg.textContent = '잘못된 사업자 등록번호 형식입니다.'
            statusMsg.style.color = '#EB5757';
        } else if(CrnValidation.FAIL_Message === '이미 사용 중인 아이디입니다.') {
            statusMsg.textContent = '이미 등록된 사업자 등록번호입니다.'
            statusMsg.style.color = '#EB5757';
        } else if(CrnValidation.Success)  {
            statusMsg.textContent = '사용 가능한 사업자 등록번호입니다.'
            statusMsg.style.color = '#98B9CD';
        }
    } catch(err) {
        console.log('err');
    }
}