import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import Carousel from 'react-elastic-carousel';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import data from "./data";
import "./Feedbacks.css";

export default function Feedbacks() {

    return (
        <section className="feedbacks__slider" name="feedbacks" id="feedbacks">
            <h2 className="feedbacks__title">Отзывы</h2>
            <div className="feedbacks__items">
            <Carousel itemsToShow={2} showArrows={false}>
                    {data.map((item, index) => 
                      <div className="feedbacks__item" key={index}>
                          <img className="feedbacks__item__avatar" src={item.avatar} alt="avatar" />
                          <div className="feedbacks__item__content">
                              <div className="feedbacks__item__name">{item.name}</div> 
                              <div className="feedbacks__item__text"><span className="feedbacks__item__quote-start">&#8220;</span> 
                               {item.text} <span className="feedbacks__item__quote-end">&#8222;</span></div>   
                          </div>
                     </div> 
                    )}
            </Carousel>
            </div>
        </section>
    );
}
