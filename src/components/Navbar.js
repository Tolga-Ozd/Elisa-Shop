import React, { useState } from "react";
import styled from "styled-components";
import { RiShoppingCartFill, RiMenu2Fill, RiCloseFill } from "react-icons/ri";
import { BiHeart } from "react-icons/bi";
import {Link} from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Section>
      
      <div className="logo">
      <Link to="/" style={{textDecoration:"none"}}>
        Elisa Shop
        </Link>
       
      </div>

      <nav className={`navbar ${isOpen && "open"}`}>
      <Link to="/" style={{textDecoration:"none"}} >
        <span>Home</span>
        </Link>
        <a href="#all-products" style={{ textDecoration: "none" }}>
          <span>Products</span>
        </a>
        <a href="#ContactUs" style={{ textDecoration: "none" }}>
        <span>Contact Us</span>
        </a>
      </nav>

      <div className="icons">
        <RiShoppingCartFill />
        <BiHeart />
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <RiCloseFill /> : <RiMenu2Fill />}
        </button>
      </div>
    </Section>
  );
}

export default Navbar;

const Section = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  .logo {
    font-size: 3rem;
    font-weight: bolder;
    display:flex;
    justify-content: center;
    svg {
      color: blue;
    }
  }
  .navbar {
    span {
      font-size: 2.2rem;
      font-weight: 400;
      color: grey;
      margin: 0 2rem;
      cursor: pointer;
      &:hover {
        color: red;
      }
    }
  }
  .icons {
    svg {      
      margin: 0 0.3rem;
      font-size: 2.5rem;
      cursor: pointer;
      &:hover {
        color: Red;
      }
    }
    .hamburger {
      border: none;
      background: none;
      display: none;
      transition: all 0.7s;
    }
  }
  .open {
    position: absolute;
    top: 99%;
    left: 0;
    right: 0;
    text-align: center;
    background: #fff;
    border-bottom: 1px solid black;
    display: none;
    span {
      font-size: 2rem;
      margin: 2rem;
      display: block;
    }
  }
  @media (max-width: 805px) {
    .icons {
      display: flex;
      .hamburger {
        display: block;
      }
    }
    .navbar {
      display: none;
    }
    .open {
      display: block;
    }
  }
`;