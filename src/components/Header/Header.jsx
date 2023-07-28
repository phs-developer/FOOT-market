import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faMagnifyingGlass,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useRecoilValue } from "recoil";
import { totalInCart } from "../../modules/store/recoil";
import styles from "./Header.module.css";
import cx from "clsx";

//Header
export default function Header() {
  const [active, setActive] = useState(false);

  return (
    <header>
      <div id="header" className={styles.header}>
        <h1>
          <Link to="/">
            <img src="logo.png" alt="로고이미지" className={styles.logoImg} />
          </Link>
        </h1>
        <Form />
        <UserInfo openNav={() => setActive(true)} />
      </div>
      <NavBar active={active} closeNav={() => setActive(false)} />
    </header>
  );
}

//검색 폼
function Form() {
  const navigate = useNavigate();

  const searchPage = (e) => {
    navigate("/search");
    e.preventDefault();
  };

  return (
    <form className={styles.searchBar} name="search" method="get" role="search">
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
  );
}

// 우측 아이콘 (장바구니, 정보, 네비게이션바)
function UserInfo({ openNav }) {
  const total = useRecoilValue(totalInCart);

  return (
    <div className={styles.userInfo}>
      <Link to="cart">
        <FontAwesomeIcon icon={faCartShopping} role="cart" />
        <p>{total}</p>
      </Link>
      <FontAwesomeIcon icon={faUser} role="user" />
      <FontAwesomeIcon
        className={styles.barIcon}
        icon={faBars}
        onClick={openNav}
      />
    </div>
  );
}

// 네비게이션바
function NavBar({ active, closeNav }) {
  return (
    <nav className={cx(styles.nav, { [styles.active]: active })}>
      <FontAwesomeIcon icon={faXmark} role="button" onClick={closeNav} />
      <ul className={styles.navContainer}>
        {["all", "man", "woman"].map((e) => {
          return (
            <li className={styles.navItem} key={e}>
              <Link to={`/${e}`} onClick={closeNav}>
                {e.toUpperCase()}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
