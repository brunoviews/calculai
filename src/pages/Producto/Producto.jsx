import React from "react";
import "./Producto.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Producto = () => {
  const StarRating = ({ count }) => {
    return (
      <div className="star-color">
        {Array.from({ length: count }).map((_, index) => (
          <FontAwesomeIcon key={index} icon={faStar} />
        ))}
      </div>
    );
  };
  return (
    <>
      <div className="product-hero-container">
        <div className="product-hero">
          <p className="hero-text-custom">Business Plan Builder</p>
          <h1 className="product-title">
            A guided business plan builder that's simple & fun
          </h1>
          <p>
            Tackle your business plan in no time with AI assistance and
            step-by-step instructions from our business plan writing software.
          </p>
          <div className="product-btn-container">
            <button className="btn-product-1">Get Started</button>
            <button className="btn-product-2">Learn More</button>
          </div>
        </div>
        <div className="section-image">
          <div className="section-img-container">
            {" "}
            <img className="product-image" src="./hero-plan-builder.png"></img>
          </div>
        </div>
      </div>
      <div className="title">
        <h2>
          {" "}
          With the right tools and a little guidance,,
          <br></br>
          you can achieve almost any business goal
        </h2>
      </div>
      <section className="product-content-section">
        <div className="product-content-image">
          <img src="/pitch.avif" alt="Feature Illustration" />
        </div>
        <div className="product-content-text">
          <h2>Build your business plan faster and easier with AI</h2>
          <p>
            Say goodbye to writer’s block. Ensure your business plan is the best
            it can be with the AI-Powered Digitaly Assistant.
          </p>
          <a className="btn-product-1">See How It Works</a>
        </div>
      </section>

      <section className="product-content-section">
        <div className="product-content-text">
          <h2>Get inspired by 550+ sample business plans</h2>
          <p>
            Browse hundreds of sample business plans that cover every industry
            imaginable. This helps you visualize what your completed plan should
            look like.
          </p>
          <a className="btn-product-2">View Sample Plan Categories</a>
        </div>
        <div className="product-content-image">
          <img src="/sample-plan-collage.avif" alt="AI Planning Illustration" />
        </div>
      </section>
    </>
  );
};

export default Producto;
