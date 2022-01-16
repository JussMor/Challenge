import React from "react";
import styles from "./Footer.module.scss";
import HeaderSections from "../../common/HeaderSection/HeaderSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt,faPhoneAlt,faEnvelope} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  
  const location = <FontAwesomeIcon icon={faMapMarkerAlt} />;
  const phone = <FontAwesomeIcon icon={faPhoneAlt} />;
  const mail = <FontAwesomeIcon icon={faEnvelope} />;

  return (
    <section id="footer" className={styles.footer}>
      <div className={styles.content}>
        <HeaderSections className={styles.header} title="Professional school barista" subtitle=""/>
        <div className={styles.block}>
          <div className={styles.blockLeft}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem.
            </p>
          </div>
          <div className={styles.blockRight}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem.
            </p>
          </div>
        </div>
      </div>

      <article>
        <ul>
          <li>
            <a href="http://jussmor.com/" className={styles.navLink}>
              Program
            </a>
          </li>
          <li>
            <a href="http://jussmor.com/" className={styles.navLink}>
              Gallery
            </a>
          </li>
          <li>
            <a href="http://jussmor.com/" className={styles.navLink}>Testimonials</a>
          </li>
          <li>
            <a href="http://jussmor.com/" className={styles.navLink}>
              Contact
            </a>
          </li>
        </ul>
        <div className={styles.bottom}>
          <ul>
            <li>
              <div>{phone}</div>
              <div>
                <a href="tel:+38 000 000 000">+38 000 000 000</a>
              </div>
            </li>
            <li>
              <div>{location}</div>
              <div>
                <span>Ukraine, 61002</span>
              </div>
            </li>
            <li>
              <div>{mail}</div>
              <div>
                <a href="mailto:hello@.com">hello@.com</a>
              </div>
            </li>
          </ul>
        </div>
      </article>
      <ul className={styles.credits}>
        <li>© Copyright 2022. All Rights Reserved.</li>
        <li>
          site template by{" "}
          <a href="https://jussmor.com/"
            rel="noopener"
          >
            Jussmor
          </a>
        </li>
      </ul>
    </section>
  );
}
