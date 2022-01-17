import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./Hero.module.scss";

export default function Hero(props) {
  const star = <FontAwesomeIcon icon={faStar} />;
  const chevronDown = <FontAwesomeIcon icon={faChevronDown} />;
  return (
    <>
      <div id="home" className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.stars}>
            <span>{star}</span>
            <span>{star}</span>
            <span>{star}</span>
          </div>
          <div className={styles.subtitle}>
            <p data-testid="hero" >Intensive program barista training</p>
          </div>
          <h1 className={styles.title}>
            Barista Training in <span>amsterdam</span>
          </h1>
          <div className={styles.thirdTitle}>
            <p>On the basis of the company's largest coffee roasters</p>
          </div>
          <div className={styles.arrowBottom}>
            <span></span>
          </div>
          <a
            href="https://www.jobsity.com/"
            className={styles.button}
            aria-label="Arrow"
            target="_blank"
            rel="noopener noreferrer"
          >
            {chevronDown}
          </a>
        </div>
        <img src={props.coffe} alt="Coffe Make" className={styles.coffe} />
      </div>
    </>
  );
}

Hero.defaultProps = {
  coffe: require("../../../../resources/images/coffe.webp"),
};
