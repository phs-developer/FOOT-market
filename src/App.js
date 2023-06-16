import "./App.css";
import { Main } from "./modules/main/Main.js";
import { CategoryPage } from "./modules/category/category.js";
import { Search } from "./modules/Search.js";
import React, { useState, useEffect } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
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
  const [data, setData] = useState("");
  useEffect(() => {
    async function getFetch() {
      const response = await fetch("product.json");
      const result = await response.json();
      setData(result);
    }
    getFetch();
  }, []);

  const navigate = useNavigate();

  //Header
  const Header = () => {
    const [active, setActive] = useState("nav");
    function handleNavOpen() {
      active === "nav" ? setActive("nav nav-active") : setActive("nav");
    }

    const searchPage = (e) => {
      navigate("/search");
      e.preventDefault();
    };

    return (
      <header>
        <div id="header">
          <h1 className="logo">
            <Link to="/">
              <img src="logo.png" alt="로고이미지" />
            </Link>
          </h1>
          <form className="search-bar" name="search" method="get" role="search">
            <fieldset>
              <legend>검색</legend>
              <input
                id="query"
                type="search"
                title="검색어 입력"
                maxLength="50"
                placeholder="키워드를 입력하세요."
              />
              <button type="submit" title="검색" onClick={searchPage}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </fieldset>
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
              onClick={handleNavOpen}
            />
          </div>
        </div>
        <div className={active}>
          <FontAwesomeIcon
            icon={faXmark}
            role="bar delete"
            onClick={handleNavOpen}
          />
          <ul className="nav-container">
            {["ALL", "MAN", "WOMAN", "KIDS"].map((e) => {
              return (
                <li className="nav-item" key={e}>
                  <Link to={`/${e}`} onClick={handleNavOpen}>
                    {e}
                  </Link>
                </li>
              );
            })}
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
                  {["고객센터", "매장찾기", "단체구매", "제휴할인"].map((e) => {
                    return (
                      <li key={e}>
                        <a href="#!">{e}</a>
                      </li>
                    );
                  })}
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
        <Route
          path="/ALL"
          element={<CategoryPage data={data} category="all" />}
        />
        <Route
          path="/MAN"
          element={<CategoryPage data={data} category="man" />}
        />
        <Route
          path="/WOMAN"
          element={<CategoryPage data={data} category="woman" />}
        />
        <Route
          path="/KIDS"
          element={<CategoryPage data={data} category="kids" />}
        />
        <Route path="/search" element={<Search data={data} />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
