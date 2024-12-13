import React, { Component } from "react";
import "./pricing.css";

class PricingComponent extends Component {
  constructor(props) {
    super(props);
    this.monthlyActiveClass = "active";
  }

  

  render() {
    this.monthlyActiveClass = this.props.isMonthlyActive ? "active" : "";

    return (
      <div className="pricing-card">
        <p className="pricing-header">{this.props.pricingHeader}</p>
        <div className="price-container">
          <p className={"toggle-annually " + this.monthlyActiveClass}>
            {" "}
            <span>$</span>
            {this.props.priceAnnually}
          </p>
          <p className={"toggle-monthly " + this.monthlyActiveClass}>
            {" "}
            <span>$</span>
            {this.props.priceMonthly}
          </p>
        </div>
        <ul>
          <li>
          {this.props.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
          </li>
        </ul>
        <button>Buy</button>
      </div>
    );
  }
}

export default PricingComponent;
