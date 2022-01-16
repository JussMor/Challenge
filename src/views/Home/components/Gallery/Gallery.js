import React from "react";
import styles from "./Gallery.module.scss";
import HeaderSections from "../../../../components/common/HeaderSection/HeaderSection";
// import Slider from "react-slick";
import OwlCarousel from "react-owl-carousel";

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
          <OwlCarousel
            className={`gallery-slides owl-theme ${styles.galleryCarousel}`}
            autoplay={false}
            nav={true}
            mouseDrag={true}
            touchDrag={true}
            responsiveClass={true}
            dots={false}
            items={3}
            navText={[
              "<i class='icon icon-left'></i>",
              "<i class='icon icon-right'></i>",
            ]}
            responsive={{
              0: {
                items: 1,
              },
              768: {
                items: 2,
              },
              992: {
                items: 3,
              },
              1240: {
                items: 3,
              },
            }}
          >
            {galleryImages}
          </OwlCarousel>

          <div className={styles.number}>
            5 <span>of</span> 10
          </div>
        </div>
      </section>
    </>
  );
}

Gallery.defaultProps = {
  icon: require("../../../../resources/images/icon_title.webp"),
  coffe1: require("../../../../resources/images/coffe_1.webp"),
  coffe2: require("../../../../resources/images/coffe_3.webp"),
  galleryImages: [
    {
      image: require("../../../../resources/images/gallery2.webp"),
      class: "first",
    },
    {
      image: require("../../../../resources/images/gallery1.webp"),
      class: "second",
    },
    {
      image: require("../../../../resources/images/gallery3.webp"),
      class: "third",
    },
    {
      image: require("../../../../resources/images/gallery2.webp"),
      class: "first",
    },
    {
      image: require("../../../../resources/images/gallery1.webp"),
      class: "second",
    },
    {
      image: require("../../../../resources/images/gallery3.webp"),
      class: "third",
    },
    {
      image: require("../../../../resources/images/gallery2.webp"),
      class: "first",
    },
    {
      image: require("../../../../resources/images/gallery1.webp"),
      class: "second",
    },
    {
      image: require("../../../../resources/images/gallery3.webp"),
      class: "third",
    },
  ],
};
