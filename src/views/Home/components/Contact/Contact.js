import React from "react";
import HeaderSections from "../../../../components/common/HeaderSection/HeaderSection";
import styles from "./Contact.module.scss";

export default function Contact(props) {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.content}>
        <img src={props.img} alt="Coffe Make" className={styles.coffe} />
        <div className={styles.block}>
          <HeaderSections
            classes={styles.header}
            title="have questions?"
            subtitle="Leave a request and we will contact you shortly"
          />

          <form>
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                className={styles.input}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="Contact Number"
                className={styles.input}
              />
            </div>
            <div className="form-group">
              <button className={styles.button}>Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

Contact.defaultProps = {
  img: require("../../../../resources/images/coffe_4.webp"),
};
