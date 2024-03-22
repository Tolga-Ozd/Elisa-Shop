import React, { useState, useEffect } from "react";
import axios from 'axios'
import styled from "styled-components";
import {AiOutlineStar, AiFillStar} from 'react-icons/ai'
import Loading from './Loading'
import {Link} from 'react-router-dom';

function Products() {

  const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products?limit=30");
    setProducts(response.data);

  };

  useEffect(() => {
    fetchData();

  }, []);


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  },[])



  return (
    
    <Section>
       

      <h1 class="heading">
      All Products
      </h1>
    
      {loading ? ( 
       
       <Loading/>

       ) : (
         
      <div className="box-container">
        {products.map((pro) => {
          return (
           
            <div className="box" key={pro.id}>
               <Link to={`/products/${pro.id}`} style={{textDecoration:"none"}}>
              <div className="image">
                <img src={pro.image} alt="" />
              </div>
              <div className="content">
                <h3>{pro.title}</h3>
                <div className="price">${pro.price}</div>
                <div className="stars">{pro.rating.rate} <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></div>
                <div className="category">{pro.category}</div>
                
              </div>
              </Link>
              
            </div>
            
            
             
          );
        })}
      </div>
     
      )}
    </Section>
  );
}

export default Products;

const Section = styled.section`
.heading{
    font-size: 4rem;
    text-align: center;
    margin-bottom: 2.5rem;
}
  .box-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
    gap: 2.5rem;
    justify-content: center;
    cursor: pointer;
    .box {
      width: 30rem;
      border-radius: 0.5rem;
      overflow: hidden;
      position: relative;
      box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
      border: .1rem solid rgba(0,0,0,.3);
      .image{
                height: 35rem;
                padding:3rem;
                width: 100%;
                overflow: hidden;
                img{
                    height: 100%;
                    width: 100%;
                }
            }
            &:hover .image img{
                transform: scale(1.1);
            }
            .content{
                padding:1rem 1.5rem;
                h3{
                    font-size: 2rem;
                    color:black;
                    font-weight: normal;
                }
                .price{
                  
                    padding:.5rem 0;
                    display: flex;
                    gap:.5rem;
                    font-size: 2.2rem;
                    align-items: center;
                }
                .stars{
                    font-size: 2rem;
                    display:flex;
                    svg{
                        font-size: 2rem;
                        color:gold;
                    }
                }
            }
    }
    .category{
        font-size: 2rem;
        text-transform: capitalize;
        background-color:grey;
        text-align: center;
        border-radius: 2rem;
        color:White;
        width:140px;
    }
  }
 
`;