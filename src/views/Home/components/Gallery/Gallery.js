import React, { useEffect } from "react";
import styles from "./Gallery.module.scss";
import HeaderSections from "../../../../components/common/HeaderSection/HeaderSection";


export default function Gallery(props) {


  const galleryImages = props.galleryImages.map((item, index) => (
    <div className={`${item.class} ${styles.picture}`} key={index}>
      <img src={item.image} alt="client" />
    </div>
  ));
  const icon = (
    <img src={props.icon} alt="Coffe Make" className={styles.icon} />
  );

  return (
    <>
      <section id="gallery" className={styles.gallery}>
        <img src={props.coffe1} alt="Coffe Make" className={styles.coffe1} />
        <img src={props.coffe2} alt="Coffe Make" className={styles.coffe2} />
        <div className={styles.galleryContainer}>
          <HeaderSections
            classes={styles.header}
            icon={icon}
            title="Gallery"
            subtitle="You yourself are testing the taste benefits of each method and select the type of cooking yourself"
          />

            {/* {galleryImages} */}
            <div className={styles.number}>5 <span>of</span> 10</div>
        </div>
      </section>
    </>
  );
}

Gallery.defaultProps = {
  icon: require("../../../../resources/images/icon_title.png"),
  coffe1: require("../../../../resources/images/coffe_1.png"),
  coffe2: require("../../../../resources/images/coffe_3.png"),
  galleryImages: [
    {
      image: require("../../../../resources/images/gallery2.jpg"),
      class: "first",
    },
    {
      image: require("../../../../resources/images/gallery1.jpg"),
      class: "second",
    },
    {
      image: require("../../../../resources/images/gallery3.jpg"),
      class: "third",
    },
    {
      image: require("../../../../resources/images/gallery2.jpg"),
      class: "first",
    },
    {
      image: require("../../../../resources/images/gallery1.jpg"),
      class: "second",
    },
    {
      image: require("../../../../resources/images/gallery3.jpg"),
      class: "third",
    },
    {
      image: require("../../../../resources/images/gallery2.jpg"),
      class: "first",
    },
    {
      image: require("../../../../resources/images/gallery1.jpg"),
      class: "second",
    },
    {
      image: require("../../../../resources/images/gallery3.jpg"),
      class: "third",
    },
  ],
};
