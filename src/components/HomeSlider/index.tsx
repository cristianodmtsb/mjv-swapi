import React from "react";
import Slider from "react-slick";
import * as S from "./styles";

import luke from "../../assets/luke_1.jpg";

function HomeSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <S.Container>
      <Slider {...settings}>
        <S.SlideItem>
          <img src={luke} alt="" />
          <S.SlideMeta>
            <h2>De que planeta veio Luke Skywalker?</h2>
            <p>Saiba mais sobre os personagens da saga</p>
            <a href="#" className="link">
              Saiba Mais
            </a>
          </S.SlideMeta>
        </S.SlideItem>
        <S.SlideItem>
          <img src={luke} alt="" />
          <S.SlideMeta>
            <h2>De que planeta veio Luke Skywalker?</h2>
            <p>Saiba mais sobre os personagens da saga</p>
            <a href="#" className="link">
              Saiba Mais
            </a>
          </S.SlideMeta>
        </S.SlideItem>
        <S.SlideItem>
          <img src={luke} alt="" />
          <S.SlideMeta>
            <h2>De que planeta veio Luke Skywalker?</h2>
            <p>Saiba mais sobre os personagens da saga</p>
            <a href="#" className="link">
              Saiba Mais
            </a>
          </S.SlideMeta>
        </S.SlideItem>
      </Slider>
    </S.Container>
  );
}

export default HomeSlider;
