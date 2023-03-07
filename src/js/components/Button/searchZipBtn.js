import Component from "../abstractComponent.js";

export default class SearchZipBtn extends Component {
    constructor(props) {
        super(props);
    }
    
    // sample6_execDaumPostcode() {
    //     new daum.Postcode({
    //         oncomplete: function(data) {
    //             var addr = '';

    //             if (data.userSelectedType === 'R') {
    //                 addr = data.roadAddress;
    //             } else {
    //                 addr = data.jibunAddress;
    //             }

    //             document.getElementById('recipient_address_zip_code').value = data.zonecode;
    //             document.getElementById("recipient_address").value = addr;
    //             document.getElementById("recipient_address_detail").focus();
    //         }
    //     }).open();
    // }
    
    render() {
        const searchZipBtn = document.createElement('button');
        searchZipBtn.setAttribute('class', 'search_zip_btn');
        searchZipBtn.type = 'submit';
        searchZipBtn.innerText = '우편번호 조회';

        searchZipBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.props.searchZipCode();
        })  

        return searchZipBtn;
    }
}