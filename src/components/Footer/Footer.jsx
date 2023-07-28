import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faB } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.css";

//Footer
export default function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.csContainer}>
            <span>고객센터</span>
            <span>1588-1588</span>
            <span>월-금 09:00 ~ 18:00 (주말, 공휴일 휴무)</span>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.logoImg}>
            <img src="logo2.png" alt="로고이미지" />
          </div>
          <address className={styles.companyInfo}>
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
          <div className={styles.csLink}>
            <div className={styles.helpLink}>
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
            <div className={styles.socialLink}>
              <h3>SOCAIL</h3>
              <div className={styles.socialIcon}>
                <FontAwesomeIcon icon={faAt} role="email" />
                <FontAwesomeIcon icon={faB} role="blog" />
                <FontAwesomeIcon icon={faFacebookSquare} role="facebook" />
                <FontAwesomeIcon icon={faInstagram} role="instar" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>
            본 상품의 상품 이미지 저작권은 ㈜풋코리아에 있으며 내용의 무단복제를
            금합니다.
          </p>
          <p>Copyright FOOT KOREA Corp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
