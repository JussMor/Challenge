import React, { useEffect } from "react";
import styles from "./Gallery.module.scss";
import HeaderSections from "../../../../components/common/HeaderSection/HeaderSection";
// import Slider from "react-slick";
import OwlCarousel from "react-owl-carousel";
import '../../../../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css'

export default function Gallery(props) {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  // };
  const galleryImages = props.galleryImages.map((item, index) => (
    <div className={`${item.class} ${styles.picture}`} key={index}>
      <img src={item.image} alt="client" />
    </div>
  ));
  console.log(galleryImages);
  const icon = (
    <img src={props.icon} alt="Coffe Make" className={styles.icon} />
  );

  return (
    <>
               <section id="gallery" className={styles.gallery}>
                    <img src={props.coffe1} alt="Coffe Make" className={styles.coffe1}/>
                    <img src={props.coffe2} alt="Coffe Make" className={styles.coffe2}/>
                    <div className={styles.galleryContainer}>
                        <HeaderSections classes={styles.header} icon={icon} title="Gallery" subtitle="You yourself are testing the taste benefits of each method and select the type of cooking yourself" />
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
                                "<i class='icon icon-right'></i>"
                            ]}
                            responsive={{
                                0:{
                                    items:1
                                },
                                768:{
                                    items:2
                                },
                                992:{
                                    items:3
                                },
                                1240:{
                                    items:3
                                }
                            }}
                        >
                            {galleryImages}
                        </OwlCarousel>
                        
                        <div className={styles.number}>5 <span>of</span> 10</div>
                    </div>
                </section>

      {/*     //tienes que agrear flex y ver como posicionas y customizas  para que no haga overflow */}
      {/*       
      <Slider {...settings} >
            {galleryImages}
      </Slider> */}
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
