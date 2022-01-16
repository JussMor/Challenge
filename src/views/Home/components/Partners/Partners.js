import React from "react";
import styles from "./Partners.module.scss";
import HeaderSections from "../../../../components/common/HeaderSection/HeaderSection";
import OwlCarousel from "react-owl-carousel";
export default function Partners(props) {
  const icon = (
    <img src={props.icon} alt="Coffe Make" className={styles.icon} />
  );
  const partnersLogos = props.partnersLogos.map((item, index) => (
    <div className={styles.item} key={index}>
      <div className={styles.picture}>
        <img src={item.img} alt="Coffe Maker" className={styles.img} />
      </div>
    </div>
  ));
  return (
    <>
      <section id="partners" className={styles.partners}>
        <div className={styles.content}>
          <HeaderSections
            classes={styles.header}
            icon={icon}
            title="our partners"
            subtitle=""
          />
          <OwlCarousel
            className={`partners-slides owl-theme ${styles.partnerSlides}`}
            loop={true}
            autoplay={false}
            nav={true}
            mouseDrag={true}
            autoplayHoverPause={true}
            responsiveClass={true}
            dots={false}
            items={6}
            navText={[
              "<i class='icon icon-left'></i>",
              "<i class='icon icon-right'></i>",
            ]}
            responsive={{
              0: {
                items: 1,
              },
              400: {
                items: 3,
              },
              768: {
                items: 4,
              },
              992: {
                items: 6,
              },
            }}
          >
            {partnersLogos}
          </OwlCarousel>
        </div>
      </section>
    </>
  );
}

Partners.defaultProps = {
  icon: require("../../../../resources/images/icon_title_black.webp"),
  partnersLogos: [
    {
      img: require("../../../../resources/images/partner_1.webp"),
    },
    {
      img: require("../../../../resources/images/partner_2.webp"),
    },
    {
      img: require("../../../../resources/images/partner_3.webp"),
    },
    {
      img: require("../../../../resources/images/partner_4.webp"),
    },
    {
      img: require("../../../../resources/images/partner_5.webp"),
    },
    {
      img: require("../../../../resources/images/partner_6.webp"),
    },
    {
      img: require("../../../../resources/images/partner_1.webp"),
    },
    {
      img: require("../../../../resources/images/partner_2.webp"),
    },
    {
      img: require("../../../../resources/images/partner_3.webp"),
    },
    {
      img: require("../../../../resources/images/partner_4.webp"),
    },
    {
      img: require("../../../../resources/images/partner_5.webp"),
    },
    {
      img: require("../../../../resources/images/partner_6.webp"),
    },
  ],
};
