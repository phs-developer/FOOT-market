import "./App.css";
import { Main } from "./modules/main/Main.js";
import { All } from "./modules/category/All.js";
import { Unisex } from "./modules/category/Unisex.js";
import { Kids } from "./modules/category/Kids.js";
import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faMagnifyingGlass,
  faAt,
  faB,
  faPlane,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  //json 데이터 받기
  const [data, setData] = useState("");
  useEffect(() => {
    async function getFetch() {
      const response = await fetch("product.json");
      const result = await response.json();
      setData(result);
    }
    getFetch();
  }, []);

  //Header
  const Header = () => {
    const [active, setActive] = useState("nav");
    function barViewer() {
      if (active === "nav") {
        setActive("nav nav-active");
        console.log(active);
      } else {
        setActive("nav");
        console.log(active);
      }
    }

    return (
      <header>
        <div id="header">
          <h1 className="logo">
            <Link to="/">
              <img src="logo.png" alt="로고이미지" />
            </Link>
          </h1>
          <form className="search-bar">
            <input type="text" placeholder="키워드를 입력하세요!" />
            <button type="submit">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
          <div className="user-info">
            <FontAwesomeIcon
              className="cart"
              icon={faCartShopping}
              role="cart"
            />
            <FontAwesomeIcon className="user" icon={faUser} role="user" />
            <FontAwesomeIcon
              className="bar"
              icon={faBars}
              onClick={barViewer}
            />
          </div>
        </div>
        <div className={active}>
          <FontAwesomeIcon
            icon={faXmark}
            role="bar delete"
            onClick={barViewer}
          />
          <ul className="nav-container">
            <li className="nav-item">
              <Link to="/ALL">ALL</Link>
            </li>
            <li className="nav-item">
              <Link to="/MAN">MAN</Link>
            </li>
            <li className="nav-item">
              <Link to="/WOMAN">WOMAN</Link>
            </li>
            <li className="nav-item">
              <Link to="/KIDS">KIDS</Link>
            </li>
          </ul>
        </div>
      </header>
    );
  };

  //Footer
  const Footer = () => {
    return (
      <footer>
        <div id="footer">
          <div className="footer-top">
            <div className="cs-container">
              <span className="cs-item">고객센터</span>
              <span className="cs-item">1588-1588</span>
              <span className="cs-item">
                월-금 09:00 ~ 18:00 (주말, 공휴일 휴무)
              </span>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="logo">
              <img src="logo2.png" alt="로고이미지" />
            </div>
            <address className="company-info">
              <h3>COMPANY INFO</h3>
              <p>
                <span>(주) FOOT 코리아</span>
                <span>대표이사 : 박희순</span>
              </p>
              <p> 주소 : 서울시 중구 을지로 110, A동 10층</p>
              <p>
                <span>사업자등록번호 : 201-81-56811</span>
                <span>개인정보보호 책임자 : 박희순</span>
              </p>
              <p>
                <span>이메일 : footkr@gmail.com</span>
                <span>Tel : 1588-1588</span>
              </p>
            </address>
            <div className="cs-link">
              <div className="help-link">
                <h3>HELP</h3>
                <ul>
                  <li>
                    <a href="#!">고객센터</a>
                  </li>
                  <li>
                    <a href="#!">매장찾기</a>
                  </li>
                  <li>
                    <a href="#!">단체구매</a>
                  </li>
                  <li>
                    <a href="#!">제휴할인</a>
                  </li>
                </ul>
              </div>
              <div className="social-link">
                <h3>SOCAIL</h3>
                <div className="social-icon">
                  <FontAwesomeIcon icon={faAt} role="email" />
                  <FontAwesomeIcon icon={faB} role="blog" />
                  <FontAwesomeIcon icon={faFacebookSquare} role="facebook" />
                  <FontAwesomeIcon icon={faInstagram} role="instar" />
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>
              본 상품의 상품 이미지 저작권은 ㈜풋코리아에 있으며 내용의
              무단복제를 금합니다.
            </p>
            <p>Copyright FOOT KOREA Corp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };

  //ScrollToTop
  const ScrollToTop = () => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
      });
    };

    return (
      <div className="top-btn" onClick={scrollToTop}>
        <p>TOP</p>
        <FontAwesomeIcon className="top-moved" icon={faPlane} />
      </div>
    );
  };
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main data={data} />} />
        <Route path="/ALL" element={<All data={data} />} />
        <Route path="/MAN" element={<Unisex data={data} title="man" />} />
        <Route path="/WOMAN" element={<Unisex data={data} title="woman" />} />
        <Route path="/KIDS" element={<Kids />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
