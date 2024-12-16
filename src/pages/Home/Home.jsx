import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { motion } from "framer-motion";
import ClientReview from "../../components/ClientReview/ClientReview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="home">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>
              Transform your business with DIGITALY <br></br>
            </h1>
            <p>
              Boost your business with the perfect tool for digital
              transformation. DIGITALY leverages artificial intelligence and
              data engineering to automatically create a personalized digital
              transformation plan for your company. Optimize resources, maximize
              benefits, and showcase the value of innovation with a clear focus
              on measurable and sustainable results.
            </p>
            <div className="hero-buttons">
              <button className="btn-hero-1">See How It Works</button>
              <button className="btn-hero-2">Sign up</button>
            </div>
            <div className="rating-content">
              <img src="/google-logo.svg" alt="Rating" />
              <div className="rb-content">
              <StarRating count={5} className="star-rating" />
                <p>4.8/5 Google Reviews</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="title">
        <h2>
          {" "}
          Everything you need to plan,
          <br></br>
          launch & grow
        </h2>
      </div>
      {/* Alternating Sections */}
      <section className="content-section">
        <div className="content-image">
          <img src="/section1.jpg" alt="Feature Illustration" />
        </div>
        <div className="content-text">
          <h2>The impact of DIGITALY on business decision-making</h2>
          <p>
            DIGITALY automates the creation of strategic plans, helping you
            optimize resources and maximize benefits through an approach based
            on artificial intelligence and precise data. With our solutions, you
            can structure and accurately assess the impact of digitalization on
            your business.
          </p>
          <a className="button-section">See How It Works</a>
        </div>
      </section>

      <section className="content-section">
        <div className="content-text">
          <h2>How DIGITALY facilitates digital transition</h2>
          <p>
            DIGITALY employs advanced artificial intelligence and data analysis
            to automatically drive your path to digitalization, eliminating
            subjectivity and enhancing analytical capabilities. This tool allows
            you to visualize the financial evolution of your digital investments
            and anticipate the moment when you will start generating net
            benefits, ensuring informed decisions aligned with your business
            objectives
          </p>
          <a className="button-section">See How It Works</a>
        </div>
        <div className="content-image">
          <img src="/section2.jpg" alt="AI Planning Illustration" />
        </div>
      </section>

      <section className="content-section">
        <div className="content-image">
          <img src="/section3.jpg" alt="Feature Illustration" />
        </div>
        <div className="content-text">
          <h2>Adapted to different sectors and strategies</h2>
          <p>
            DIGITALY adapts to the needs of various sectors, facilitating change
            management, adjusting deviations, and ensuring that digitalization
            projects align with the strategic objectives of your organization.
            Our solution maximizes return on investment and improves your
            business competitiveness.
          </p>
          <a className="button-section">See How It Works</a>
        </div>
      </section>

      <section className="content-section">
        <div className="content-text">
          <h2>Digitalization as a bridge between vision and reality</h2>
          <p>
            Talking about DIGITALY is talking about trust. DIGITALY uses
            artificial intelligence to generate clear and well-founded analyses
            that show how every euro invested in your transformation translates
            into benefits, optimizing resources, reducing time, and improving
            work quality. With DIGITALY, transforming your vision into tangible
            results is easier than ever.
          </p>
          <a className="button-section">See How It Works</a>
        </div>
        <div className="content-image">
          <img src="/section4.jpg" alt="AI Planning Illustration" />
        </div>
      </section>

      <section>
        <ClientReview />
      </section>

      <section className="final-section">
        <h2>Are you ready to transform your business?</h2>
        <p className="final-text">
          Risk-free. <br></br>DIGITALY offers a 30-day money-back guarantee.{" "}
          <br></br> Discover everything you can achieve!
        </p>
        <div className="hero-buttons">
          <Link to="/precio" className="button-section">
            Choose Your Plan Now
          </Link>
          <a className="button-section">See How It Works</a>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
