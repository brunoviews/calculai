import React, { Component } from "react";
import "./pricing.css";

const PricingComponentEnterprise = () => {
  return (
    <div className="pricing-card">
      <p className="pricing-header"></p>
      <div className="price-container">
        <p className="toggle-manually">Enterprise</p>
      </div>
      <ul>
        <span>
          Get in touch with us for a custom plan that fits your needs.
        </span>
      </ul>
      <button>Contact us</button>
    </div>
  );
};

export default PricingComponentEnterprise;
