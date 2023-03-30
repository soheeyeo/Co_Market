# 💻 Co(함께) Co딩하자! Co Market

<img src = "https://user-images.githubusercontent.com/95061372/221876460-710eae05-a969-4874-930a-cc5e154200da.png" width="100%">

- [🔗코마켓 바로가기](https://comarket.netlify.app/)<br>

- 구매회원 계정<br>
  - `ID` buyerco <br> 
  - `PW` 17171771f
<br>

- 판매회원 계정<br>
  - `ID` sellerco <br> 
  - `PW` 17171771f
<br>

```
👫 코딩과 관련된 상품들을 판매/구매할 수 있는 오픈 마켓 서비스입니다.

🛒 구매 회원은 마음에 드는 상품을 장바구니에 넣어 구매할 수 있습니다.

🎁 판매 회원은 판매할 상품을 등록, 수정, 삭제할 수 있습니다.

🐾 로그인/로그아웃, 상품 목록, 상품 정보, 장바구니, 주문/결제 기능을 제공합니다.
```

## 💬 프로젝트 설명
학습을 목적으로 한 개인 프로젝트입니다.<br>
<br>
라이브러리 없이 Vanilla Javascript만을 이용한 SPA 프로젝트입니다.<br>
<br>
JavaScript를 심도 있게 학습하고 Routing 동작 원리를 이해하고자 Vanilla Javascript를 사용했습니다.
<br>
<br>

## ⚙️ 개발 환경
#### [개발기간]
2022.10 - 2023.03

#### [기술]
- `JavaScript` `CSS` `HTML`<br>
- `제공된 서버 API`<br>
- `Git` `Figma` `Netlify`
<br>
<br>

## 🚀 실행 방법
```
npm install

npm run dev
```
<br>
<br>

## 💻 기능 및 페이지 시연
### 1. 홈
- 배너 슬라이드는 좌우 버튼 클릭으로 이동할 수 있습니다.
- 판매 중인 상품의 이미지와 정보를 확인할 수 있습니다.
- 페이지 당 최대 15개씩 상품을 불러오도록 Pagination을 구현했습니다. 첫 번째와 마지막 페이지에서는 이동 버튼이 비활성화됩니다.
- 상품을 클릭하면 상품 상세 페이지로 이동합니다.

<img src = "https://user-images.githubusercontent.com/95061372/221102031-2bc3a956-7f71-4203-ba8f-95f60127647d.gif" width="100%">
<br>

### 2. 회원가입
- 회원가입은 `구매회원 회원가입`과 `판매회원 회원가입`으로 구분됩니다.
- 아이디 중복확인 버튼으로 아이디 유효성 검사를 진행합니다.
- 비밀번호 및 비밀번호 확인은 실시간 유효성 검사가 진행됩니다.
- 판매회원의 경우 사업자 등록번호 인증 버튼으로 사업자 번호 유효성 검사를 진행합니다.
- 모든 필드를 입력한 후 약관 동의 버튼을 체크하면 회원가입 버튼이 활성화됩니다.
- 회원가입 후 로그인 페이지로 이동합니다.

> <b> 구매회원 </b>
<img src = "https://user-images.githubusercontent.com/95061372/221387395-25fdfd74-1f8d-4829-866f-a1e18e5c29dc.gif" width="100%">

> <b> 판매회원 </b>
<img src = "https://user-images.githubusercontent.com/95061372/226083343-44f7135c-3eda-4ffa-91a3-4b75e2b86108.gif" width="100%">

<br>

### 3. 로그인
- 로그인은 `구매회원 로그인`과 `판매회원 로그인`으로 구분됩니다.
- 아이디와 비밀번호를 입력하면 로그인 버튼이 활성화됩니다.
- 아이디 혹은 비밀번호가 틀렸을 경우 경고 메세지가 뜹니다.
- 로그인 후 메인 페이지 혹은 이전 페이지로 이동합니다.

> <b> 구매회원 </b>
<img src = "https://user-images.githubusercontent.com/95061372/221479658-27a6d4d3-bf08-4c7b-b082-0956279333f0.gif" width="100%">

> <b> 판매회원 </b>
<img src = "https://user-images.githubusercontent.com/95061372/226083463-331df61a-d7ff-4d79-839a-418c546cedfb.gif" width="100%">

<br>

### 4. 상품 상세
- `-` 버튼과 `+` 버튼으로 상품 수량과 금액을 변경할 수 있습니다.
- 구매하기 버튼 클릭 시 주문 페이지로 이동합니다.
- 장바구니 버튼으로 상품을 장바구니에 담을 수 있습니다.
- `판매회원`으로 로그인한 경우, 구매하기 버튼과 장바구니 버튼이 비활성화됩니다.

> <b> 구매회원 </b>
<img src = "https://user-images.githubusercontent.com/95061372/221486867-8adbc468-716a-4ace-9785-6d1036770e65.gif" width="100%">

> <b> 판매회원 </b>
<img src = "https://user-images.githubusercontent.com/95061372/226083519-4dc1d2e3-d507-4430-a6ff-7a91cf9624bd.gif" width="100%">

<br>

### 5. 장바구니 (구매회원)
- 선택된 상품들의 총 상품 금액, 배송비, 결제 예정 금액을 확인할 수 있습니다.
- 장바구니에 담긴 상품들의 수량을 변경할 수 있습니다.
- 개별 주문하기, 선택 상품 주문하기가 가능합니다.
- `x` 버튼으로 상품을 삭제할 수 있습니다.

<img src = "https://user-images.githubusercontent.com/95061372/221488418-83f8537b-e3d3-4e0f-8057-febbdc3dfa22.gif" width="100%">
<br>

### 6. 주문/결제하기 (구매회원)
- 주문할 상품을 확인할 수 있습니다.
- 주문자 정보와 배송지 정보를 입력합니다.
- 우편번호 필드 혹은 우편번호 조회 버튼 클릭시 우편번호 찾기 팝업창이 뜹니다.(다음 카카오 우편번호 조회 API 사용)
- 배송 메세지는 직접 입력하거나 선택할 수 있습니다.
- 모든 필드를 입력한 후 동의 버튼을 체크하면 결제하기 버튼이 활성화됩니다.
- 주문이 성공적으로 완료되면 알림창이 뜹니다.

<img src = "https://user-images.githubusercontent.com/95061372/226159211-a1183c20-5c71-4fab-8ee3-e8c66453047f.gif" width="100%">
<br>

### 7. 상품 등록 (판매회원)
- 판매자 센터 페이지의 상품 업로드 버튼을 클릭하면 상품 등록 페이지로 이동합니다.
- 상품 이미지는 올바른 이미지 형식으로 등록해야 합니다.
- 모든 필드를 입력한 후 저장하기 버튼을 클릭하면 상품 등록이 완료됩니다.
- 상품 등록 후, 해당 상품 디테일 페이지로 이동합니다.

<img src = "https://user-images.githubusercontent.com/95061372/226083769-97773afb-812d-4587-a267-1442ed1a0fff.gif" width="100%">
<br>

### 8. 상품 수정/삭제 (판매회원)
- 판매자 센터 페이지에서 등록한 상품을 수정/삭제할 수 있습니다.
- 수정 버튼을 클릭하면 상품 수정 페이지로 이동합니다.
- 상품 수정이 완료되면 판매자 센터 페이지로 이동합니다.
- 삭제 버튼을 클릭하면 상품을 삭제할 수 있습니다.

<img src = "https://user-images.githubusercontent.com/95061372/226083869-20291b77-5ecf-48ba-93d4-3805d864a3de.gif" width="100%">
<br>

### 9. 로그아웃
- 로그아웃 버튼을 누르면 `localStorage`에 저장되어 있던 토큰이 삭제되고 로그아웃됩니다.
- 로그아웃 시 장바구니, 구매하기 버튼을 누르면 로그인 안내창이 뜹니다.

<img src = "https://user-images.githubusercontent.com/95061372/221743262-fe84a165-60fb-4269-8f4d-956d538aba11.gif" width="100%">
<br>

<br>
<br>

## 📁 폴더트리

-   assets/ : 이미지, 아이콘 디렉토리
-   components/ : 기능별 컴포넌트 분리 디렉토리
-   routes/ : routes 관리
-   view/ : 페이지별 컴포넌트 분리 디렉토리
-   style/ : 폰트, 스타일 디렉토리

```
📦src
┣ 📂assets
┣ 📂js
┃ ┣ 📂api
┃ ┃ ┗ 📜api.js
┃ ┣ 📂components
┃ ┃ ┣ 📂Banner
┃ ┃ ┣ 📂Button
┃ ┃ ┣ 📂Cart
┃ ┃ ┣ 📂Footer
┃ ┃ ┣ 📂Header
┃ ┃ ┣ 📂Login
┃ ┃ ┣ 📂MainHome
┃ ┃ ┣ 📂Modal
┃ ┃ ┣ 📂Order
┃ ┃ ┣ 📂Product
┃ ┃ ┣ 📂ProductCard
┃ ┃ ┣ 📂ProductDetailContents
┃ ┃ ┣ 📂ProductList
┃ ┃ ┣ 📂ProductTab
┃ ┃ ┣ 📂ProductUpload
┃ ┃ ┣ 📂SellerCenter
┃ ┃ ┣ 📂SignUp
┃ ┃ ┗ 📜abstractComponent.js
┃ ┣ 📂routes
┃ ┃ ┗ 📜router.js
┃ ┣ 📂views
┃ ┃ ┣ 📜cart.js
┃ ┃ ┣ 📜index.js
┃ ┃ ┣ 📜login.js
┃ ┃ ┣ 📜main.js
┃ ┃ ┣ 📜productDetail.js
┃ ┃ ┣ 📜productUpload.js
┃ ┃ ┣ 📜sellerCenter.js
┃ ┃ ┗ 📜signUp.js
┣ 📂style
┣ 📜app.js
┗ 📜index.js
```
<br>
<br>

## 💡 핵심 코드
### 1) DocumentFragment
View Component들은 `div`등의 element 대신 `DocumentFragement`로 감싸 렌더링해주었습니다.<br>
DOM과 동일하게 동작하지만, DOM 트리에는 영향을 주지 않아 감싸고 있던 요소들을 root 하위에 바로 추가할 수 있었습니다.

https://github.com/soheeyeo/Co_Market/blob/953bc9ae33d0d30f190f77bd769c22c48b44e290/src/js/views/main.js#L7-L24
<br>

### 2) Promise.all
장바구니 상품 정보의 결과값을 모아서 출력하기 위해 `Promise.all`을 사용했습니다.<br>
`getCartItem` 함수를 사용해 비동기로 장바구니 목록을 불러온 후, `getProductDetail` 함수를 사용하여 장바구니 상품들의 정보를 불러왔습니다. 그 후 `Promise.all`을 사용해 결과값을 새로운 배열으로 저장하고 `product`라는 상태값에 저장하여 사용했습니다.

https://github.com/soheeyeo/Co_Market/blob/953bc9ae33d0d30f190f77bd769c22c48b44e290/src/js/components/Cart/cartList.js#L18-L28
<br>

### 3) window.history.pushState
`window.history.pushState`를 사용하여 SPA 페이지 전환을 구현했습니다.<br>
URL이 변환되면 `routing` 함수가 호출되어 해당 view의 컴포넌트가 렌더링 되도록 구현하였습니다.

https://github.com/soheeyeo/Co_Market/blob/953bc9ae33d0d30f190f77bd769c22c48b44e290/src/js/routes/router.js#L45-L68
<br>
<br>

## 💥 트러블 슈팅
### 1) 페이지 이동 시 새로고침 되는 현상
`window.href`를 사용하여 페이지 이동 시 화면이 로드된 후 렌더링 되는 현상이 있었습니다. 이 현상은 로드 없이 페이지 간 부드럽게 이동한다는 SPA의 장점과 맞지 않다고 생각하였습니다. <br>
이를 해결하기 위해 `router.js` 파일에 `window.routing` 메서드를 추가하였습니다. `window.routing` 사용 시 `window.history.pushState`를 사용하는 `navigateTo`함수를 호출하여 새로고침 없이 페이지가 이동할 수 있도록 구현하였습니다.

https://github.com/soheeyeo/Co_Market/blob/953bc9ae33d0d30f190f77bd769c22c48b44e290/src/js/routes/router.js#L38-L48
<br>

### 2) state로 처리한 checkbox가 클릭이 안 되는 현상
장바구니 페이지에서 state 값으로 설정한 체크박스가 클릭이 되지 않는 현상이 있었습니다. console로 확인해보니, state 값은 잘 변경됐지만, 화면에 렌더링이 되지 않았습니다. <br>
확인해보니 `cartItem` 컴포넌트 안에서 반복문을 사용하여 장바구니 리스트 아이템들을 만들었는데, state는 공통으로 하나만 사용했기 때문에 문제가 발생한 것이었습니다. <br>
해결을 위해 상위에 `cartListItem` 컴포넌트를 생성하여 이 컴포넌트 내에서 반복문을 사용하고, `cartItem` 컴포넌트 안에서 state를 적용해주었습니다. 

- Cart/cartListItem.js
https://github.com/soheeyeo/Co_Market/blob/953bc9ae33d0d30f190f77bd769c22c48b44e290/src/js/components/Cart/cartListItem.js#L24-L34

- Cart/cartItem.js
https://github.com/soheeyeo/Co_Market/blob/953bc9ae33d0d30f190f77bd769c22c48b44e290/src/js/components/Cart/cartItem.js#L12-L15