import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Navbar from '../components/Navbar'
import axios from "axios";
import styled from "styled-components";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineShoppingCart,
} from "react-icons/ai";

function ProductDetails() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProducts(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  return (
    <>
    <Section>
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          <div className="image">
            <img src={products.image} alt="" />
          </div>
          <div className="details">
            <div className="title">
              <h2>{products.title}</h2>
            </div>
            <div className="stars">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <div className="desc">
              <p>{products.description}</p>
            </div>
            <div className="price">${products.price}</div>
            <div className="cart">
              <button>   Add To Cart <AiOutlineShoppingCart />
              </button>
            </div>
          </div>
        </div>
        
      )}

      
    </Section>

    <Footer/>

    </>
  );
}

export default ProductDetails;

const Section = styled.section`
  padding-top: 20rem;
  .container {
    display: grid;
    height: 700px;
    grid-template-columns: repeat(3, 1fr);
    .image {
      img {
        width: 70%;
      }
    }
    .details {
      margin-top: 1.5rem;
      .title {
        font-size: 1.8rem;
      }
      .stars {
        margin-top: 1rem;
        display: flex;
        font-size: 1.7rem;
        svg {
          color: gold;
        }
      }
      .desc {
        margin-top: 1rem;
        font-size: 1.7rem;
      }
      .price {
        margin-top: 2rem;
        font-size: 2.7rem;
      }
      .cart {
        margin-top: 2rem;
        button {
          font-size: 2rem;
          width: 180px;
          cursor: pointer;
          height: 50px;
          border: none;
          background-color: #333;
          color: #fff;
          border-radius: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          &:hover {
            background-color: blue;
          }
        }
        svg {
          font-size: 2.3rem;
          margin-left: 1rem;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .container {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;