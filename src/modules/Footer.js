import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faB } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
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
            본 상품의 상품 이미지 저작권은 ㈜풋코리아에 있으며 내용의 무단복제를
            금합니다.
          </p>
          <p>Copyright FOOT KOREA Corp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
