import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <header>
      <div id="header">
        <h1 className="logo">
          <img src="logo.png" alt="로고이미지" />
        </h1>
        <form className="search-bar">
          <input type="text" placeholder="키워드를 입력하세요!" />
          <button type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
        <div className="user-info">
          <FontAwesomeIcon className="cart" icon={faCartShopping} role="cart" />
          <FontAwesomeIcon className="user" icon={faUser} role="user" />
        </div>
      </div>
      <div className="nav">
        <ul className="nav-container">
          <li className="nav-item">
            <a href="#!">BRAND</a>
          </li>
          <li className="nav-item">
            <a href="#!">MAN</a>
          </li>
          <li className="nav-item">
            <a href="#!">WOMEN</a>
          </li>
          <li className="nav-item">
            <a href="#!">KIDS</a>
          </li>
        </ul>
      </div>
    </header>
  );
};
