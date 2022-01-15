import React from 'react';
import styles from "./HeaderSection.module.scss";

const HeaderSections  = (props) => {
    return(
        <header className={`${styles.header} ${props.classes}`}>
            <div className={styles.title}>
                <span>{props.icon}</span> 
                <h2>{props.title}</h2>
                <span>{props.icon}</span>
            </div>
            <p className={styles.subtitle}>{props.subtitle}</p>
        </header>
    )
}

export default HeaderSections;