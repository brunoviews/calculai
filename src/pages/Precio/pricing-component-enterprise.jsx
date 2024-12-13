import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./pricing.css";

const PricingComponentEnterprise = () => {
  return (
    <div className="pricing-card-enterprise">
      <div className="price-container-enterprise">
        <p className="toggle-manually-enterprise">Enterprise</p>
      </div>
      <ul>
        <li>
          Get in touch with us for a custom plan that fits your needs.
        </li>
      </ul>
      <Link to="/contact">
      <button>Contact us</button>
      </Link>
    </div>
  );
};

export default PricingComponentEnterprise;
