import React from "react";
import styled from "styled-components";
function TwoBanner() {
  return (
    <Section>
      <div className="image">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="content">
        <span>New Season Trending!</span>
        <h3>Best Summer Collection</h3>
        <p>Sale get up to 50% off</p>
        <button className="btn">Shop Now</button>
      </div>
    </Section>
  );
}

export default TwoBanner;

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  background: linear-gradient(#fff 20%, #f9f9f9 20.1%);
  .image {
    flex: 1 1 42rem;
    img {
      width: 55rem;
    }
  }
  .content {
    flex: 1 1 42rem;
    margin-top: 3rem;
    @media (max-width: 669px) {
      text-align: center;
    }
    span {
      color: red;
      font-size: 2.4rem;
    }
    h3 {
      color: black;
      font-size: 3.6rem;
      padding: 0.5rem 0;
    }
    p {
      opacity: 0.7;
      font-size: 2.1rem;
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
  @media (max-width: 687px) {
    width: 100%;
    .image {
      img {
        width: 32rem;
        display: flex;
        justify-content: center;
      }
    }
  }
`;