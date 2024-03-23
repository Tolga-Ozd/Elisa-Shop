import React from 'react'
import styled from "styled-components";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import "swiper/css/autoplay";

function Header() {

  return (
    <Section>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <img src="http://www.smartcareint.com/wp-content/uploads/2015/04/banner04.png" alt="" />
          <div className="content">
            <span>upto 30% off</span>
            <h3>Electronics</h3>
            <button href="#" className="btn">
              Shop Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://pukassurf.com/wp-content/uploads/sites/3/sites/3/2018/10/Pukas-surf-clothing-banner.jpg"  alt="" />
          <div className="content">
            <span>upto 20% off</span>
            <h3>Mens Clothing</h3>
            <button href="#" className="btn">
              Shop Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://elbisegidiyor.com/img/1703754574.png"  alt="" style={{ objectPosition: "50% 15%" }} />
          <div className="content">
            <span>upto 20% off</span>
            <h3>Women Clothing</h3>
            <button href="#" className="btn">
              Shop Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://be.tiffany.com/content/dam/tiffany-n-co/migration/browse-grid/Most_Popular_Jewelry_BG_Hero_Desktop.jpg"  alt="" />
          <div className="content">
            <span >upto 40% off</span>
            <h3 >Jewelery</h3>
            <button href="#" className="btn">
              Shop Now
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </Section>
  );
}

export default Header;

const Section = styled.section`  
   margin-top: 5.8rem;
  img {
    object-fit:cover;
    height: 65vh;
    width: 100%;
  }
  .content {
    position: absolute;
    top: 30%;
    left: 60px;
    z-index: 1;
    span {
      opacity: 0.5;
      font-size: 2.5rem;
    }
    h3 {
      font-size: 4rem;
      color: black;
      padding-top: 0.5rem;
    }
    button {
      background: red;
      color: white;
      width: 13rem;
      border-radius: 1rem;
      height: 4rem;
      border: none;
      font-size: 1.8rem;
      cursor: pointer;
    }
   
  }
`;