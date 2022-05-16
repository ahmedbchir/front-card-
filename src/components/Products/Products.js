import React from "react";
import heart from "./heart.svg";
import "./Products.css";
import { Link } from "react-router-dom";
import Navbar from '../Navbar'
import Footer from '../Footer'
import vid from '../../assets/180419_Boxing_A1_04.mp4';


export default function Products() {
  const inventory =[{  title: "Mug Coding Fuel",
  price: 14.99,
  img: "codingfuel",
  id: 1,
}]
  return (
    <main>
    <Navbar />
    <div className="about-page">
        <video autoPlay playsInline muted loop className="about-page-hero">
            <source src={vid} type="video/mp4"/>
        </video>
        <div className="container-products">
      {inventory.map((item) => (
        <Link
          to={{
            pathname: `/produits/${item.title.replace(/\s+/g, "").trim()}`,
          }}
          key={item.id}
        >
            <div className="bloc-card">
                <div className="product-card">
                    <div className="visual-aspect">
                        <img 
                        className="img-product"
                        src={process.env.PUBLIC_URL + `/images/${item.img}.png`} 
                        alt="produit" />
                        <div className="like-container">
                            <img src={heart} alt="icône j'aime" />
                        </div>
                    </div>
                    <div className="info">
                        <p>{item.title}</p>
                        <p>Prix : {item.price}€</p>
                    </div>
                </div>
                <div className="back-card"></div>
            </div>
        </Link>
      ))} 
    </div>
    </div>
    
    
   <Footer />
</main>
    
  );
}




