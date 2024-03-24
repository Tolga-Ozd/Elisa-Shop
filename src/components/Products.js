import React, { useState, useEffect } from "react";
import axios from 'axios'
import styled from "styled-components";
// import {AiOutlineStar, AiFillStar} from 'react-icons/ai'
import Loading from './Loading'
import {Link} from 'react-router-dom';


function Products() {

  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
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

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = selectedCategory === 'All' 
  ? products 
  : products.filter(product => product.category === selectedCategory);


  return (
    
    <Section>
       

       <div className="header-container">
        <h1 className="heading" id="all-products">All Products</h1>
        <select onChange={handleCategoryChange} value={selectedCategory} className="category-select">
          <option value="All">Choose Category</option>
          {Array.from(new Set(products.map(product => product.category))).map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
    
      {loading ? ( 
       
       <Loading/>

       ) : (
         
      <div className="box-container">
        {filteredProducts.map((pro) => {
          return (
           
            <div className="box" key={pro.id}>
               <Link to={`/products/${pro.id}`} style={{textDecoration:"none"}}>
              <div className="image">
                <img src={pro.image} alt="" />
              </div>
              <div className="content">
                <h3>{pro.title}</h3>
                <div className="price">${pro.price}</div>
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
.header-container {
    display: flex;
    justify-content: space-between; 
    align-items: center; 
    padding: 0 2rem; 
    h1.heading {
      font-size: 4rem;
      margin: 0; 
    }
.category-select {
      padding: 0.5rem 1rem;
      font-size: 1.5rem;
      cursor: pointer;
      border-radius: 5px;
     border: 1px solid #ccc; 
    }
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
                img {
                    height: 100%;
                    width: 100%;
                    transition: transform 0.7s ease;
                }
            }
            &:hover .image img{
                transform: scale(1.05);
                opacity: 0.9;
                transition: all 0.7s;
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
        width:150px;
    }
  }
 
`;