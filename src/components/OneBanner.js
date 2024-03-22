import React from "react";
import styled from "styled-components";
function OneBanner() {
  return (
    <Section>
      <div className="banner">
        <img src="http://www.smartcareint.com/wp-content/uploads/2015/04/banner04.png" alt="" />
        <div className="content">
          <span>special offer</span>
          <h3>upto 50% off</h3>
          <button href="#" class="btn">
            Shop now
          </button>
        </div>
      </div>

      <div className="banner">
        <img src="https://media.istockphoto.com/photos/jewelry-pendant-witht-gem-amethyst-on-twig-black-background-picture-id654636648?k=20&m=654636648&s=612x612&w=0&h=oLxKtDUMHCs1szq5et8QowgAF8bzjdfvAs1Q2pDzG1E=" alt="" />
        <div className="content-left">
          <span style={{color:"white"}}>special offer</span>
          <h3 style={{color:"white"}}>upto 50% off</h3>
          <button href="#" className="btn">
            Shop now
          </button>
        </div>
      </div>
    </Section>
  );
}

export default OneBanner;

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding-top: 5rem;
  padding-bottom: 5rem;
  .banner {
    flex: 1 1 42rem;
    overflow: hidden;
    height: 30rem;
    position: relative;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      @media (max-width:768px){
        opacity:.7;
      }
    }
    &:hover img {
      transform: scale(1.2);
      transition: all 0.7s;
    }
    .content{
      position: absolute;
      top: 60%;
      right:4rem;
      transform: translateY(-50%);
      span {
        font-size: 2rem;
        opacity: 0.6;
      }
      h3 {
        font-size: 3.2rem;
        color: black;
        padding-top: 0.5rem;
      }
    }
    .btn {
      margin-top: 1rem;
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
  .content-left {
    position: absolute;
      top: 60%;
      left:4rem;
      transform: translateY(-50%);
      span {
        font-size: 2rem;
        opacity: 0.6;
      }
      h3 {
        font-size: 3.2rem;
        color: black;
        padding-top: 0.5rem;
      }
    }
    .btn {
      margin-top: 1rem;
      background: red;
      color: white;
      width: 13rem;
      border-radius: 1rem;
      height: 4rem;
      border: none;
      font-size: 1.8rem;
      cursor: pointer;
    }
`;