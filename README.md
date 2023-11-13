# FOOT-MARKET
<br/>
<h2>1. 프로젝트 정보</h2>


- 개발 기간 : 23.4.11 ~ 23.4.20 (10일)
- 배포 주소 : https://foot-market.netlify.app/
#### 소개
    깔끔하고 편리한 UI/UX에 초점을 두고 제작한 프리미엄 신발 사이트입니다.
    좌측의 이동 탭과 우측 하단 TOP버튼으로 이동이 쉽게 구현하였으며
    메인화면의 영역들은 컴포넌트 재사용으로 심플하고 통일감있게 구성하였습니다.

<br/>

<h2>2. 시작 가이드</h2>
<b>- npm 8.15.0</b>

#### installation
    $ git clone https://github.com/phs-developer/FOOT-market.git
#### Frontend
    $ npm install
    $ npm start

<br/>

<h2>3. 주요 기능</h2>

#### 검색기능
      검색 키워드가 포함된 상품들이 나열되도록 검색 기능과 페이지를 구현.
      페이지 전환을 위해 react-router 사용. 
    
#### 장바구니 구현
      recoil을 사용하여 장바구니 상품 전역 상태로 관리.
      ‘담기’ 클릭 시 리스트에 상품id가 추가되며, 리스트를 통해 장바구니 화면을 구현.
      장바구니 내의 ‘삭제’ 버튼 혹은 ‘담기’ 버튼 재클릭 시 리스트에서 제거.
      recoil의 selector 기능을 통해 장바구니 수량을 추출하여 숫자로 표기.
      
#### 로컬 스토리지
      새로고침 시 장바구니가 초기화되는 현상을 방지하기 위해 localStorage를 사용.


<br/>

<h2>4. 화면</h2>

| 메인화면 | 장바구니 |
|:-:|:-:|
|![](https://github.com/phs-developer/FOOT-market/assets/82524095/b6b8ba63-56b2-4f86-a51f-71e4337a0227) |![](https://github.com/phs-developer/FOOT-market/assets/82524095/55decea2-618a-4aa7-93b0-babc4a5000e2) |![]

<br/>

<h2>스킬</h2>

| React | CSS Module | Recoil |
|:-:|:-:|:-:|
|<img alt="react" src="https://github.com/phs-developer/portfolio2/assets/82524095/e6bcce56-c827-4216-8417-4ef015e59cfc" width="auto" height="80" />|<img alt="react" src="https://github.com/phs-developer/portfolio2/assets/82524095/5a6ec4ba-4ec3-4827-8c30-286cea86308d" width="80" height="80" />|<img alt="react" src="https://github.com/phs-developer/FOOT-market/assets/82524095/0bf6fda2-3232-4dfd-9e71-6dc6d5749c8f" width="auto" height="80" />|

