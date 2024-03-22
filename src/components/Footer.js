import React from "react";
import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
function Footer() {
  return (
    <Section>
      <footer className="footer-distributed">
        <div className="footer-left">
          <p className="footer-links">
            <span>Home</span>

            <span>Products</span>

            <span>Featured</span>

            <span>Contact</span>
          </p>
          <div className="subs">
            <input type="text" placeholder="Email Adress" />{" "}
            <button>Subscribe Now</button>
          </div>

          <p>
            All Right Deserved By <i>Tolga ÖZDİLEK </i>{" "}
            {new Date().getFullYear()}
          </p>
          <a href="https://github.com/Tolga-Ozd">
            <BsGithub />
          </a>
        </div>
      </footer>
    </Section>
  );
}

export default Footer;

const Section = styled.section`
  background-color: #292c2f;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  padding: 5rem;
  .footer-distributed {
    background-color: #292c2f;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    width: 100%;
    text-align: center;
    font: normal 16px sans-serif;
    .footer-left {
      p {
        color: #8f9296;
        font-size: 14px;
        margin: 0;
      }
      .footer-links {
        font-size: 18px;
        font-weight: bold;
        color: #ffffff;
        margin: 0 0 10px;
        padding: 0;
        transition: ease 0.25s;
      }
      span {
        display: inline-block;
        line-height: 1.8;
        text-decoration: none;
        color: inherit;
        transition: ease 0.25s;
        padding: 1rem;
        cursor: pointer;
        &:hover {
          color: red;
        }
      }
      .subs {
        margin-bottom: 2rem;
        input {
          max-width: 20rem;
          height: 4rem;
          &:focus {
            outline: none;
          }
          &::placeholder {
            text-align: center;
          }
        }
        button {
          margin-left: 1.2rem;
          border: none;
          background-color: red;
          color: White;
          width: 12rem;
          height: 4rem;
          border-radius: 4px;
          cursor: pointer;
          @media (max-width: 500px) {
            margin-top: 1.5rem;
          }
        }
      }
      p {
        margin-top: 3rem;
        font-size: 2rem;
        i {
          color: Red;
        }
      }
      svg {
        color: white;
        margin: 2rem;
        font-size: 3rem;
      }
    }
  }
`;