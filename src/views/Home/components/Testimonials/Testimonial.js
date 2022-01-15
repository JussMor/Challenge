import React from 'react'
import styles from "./Testimonial.module.scss"

export default function Testimonial(props) {

    const testimonial  =  props.testimonialsData.map((testimonial,index) =>(
        <div className={styles.item} key={index}>
        <div className={styles.picture}>
            <img src={testimonial.img} alt="Coffe Maker" className={styles.img}/>
            <button type="button" className={styles.socialicon}>
                <img src={testimonial.socialicon} alt="Coffe Maker" />
            </button>
        </div>
        <h4>{testimonial.name}</h4>
        <p>{testimonial.description}</p>
    </div>
    ) )
    return (
        <div>
            {testimonial}
        </div>
    )
}

Testimonial.defaultProps = {
    testimonialsData: [
        {
            img: require("../../../../resources/images/testimonial1.png"),
            name: "Alex Nikandrovt",
            description: "Our company is grateful for the delicious and freshly roasted coffee in our office every day! Our staff of more than 300 people, appreciate quality and flavor of the coffee, because that would be important for our office staff were every morning refreshed and in a good mood! Recommended!",
            socialicon: require("../../../../resources/images/icon_fb.png"),
        },
        {
            img: require("../../../../resources/images/testimonial1.png"),
            name: "Alex Nikandrovt",
            description: "Our company is grateful for the delicious and freshly roasted coffee in our office every day! Our staff of more than 300 people, appreciate quality and flavor of the coffee, because that would be important for our office staff were every morning refreshed and in a good mood! Recommended!",
            socialicon: require("../../../../resources/images/icon_fb.png"),
        },
        {
            img: require("../../../../resources/images/testimonial1.png"),
            name: "Alex Nikandrovt",
            description: "Our company is grateful for the delicious and freshly roasted coffee in our office every day! Our staff of more than 300 people, appreciate quality and flavor of the coffee, because that would be important for our office staff were every morning refreshed and in a good mood! Recommended!",
            socialicon: require("../../../../resources/images/icon_fb.png"),
        },
        {
            img: require("../../../../resources/images/testimonial1.png"),
            name: "Alex Nikandrovt",
            description: "Our company is grateful for the delicious and freshly roasted coffee in our office every day! Our staff of more than 300 people, appreciate quality and flavor of the coffee, because that would be important for our office staff were every morning refreshed and in a good mood! Recommended!",
            socialicon: require("../../../../resources/images/icon_fb.png"),
        },
    ]

}
