import React, { Component } from "react";
import PricingComponent from "./pricing-component";
import PricingComponentEnterprise from "./pricing-component-enterprise";
import { motion } from "framer-motion";
import "./pricing.css";

class PricingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMontlyActive: false,
    };
  }
  togglePricing = () => {
    this.setState({
      isMontlyActive: !this.state.isMontlyActive,
    });
  };

  render() {
    const basicFeatures = [
      "Step-by-Step Instructions",
      "Bid Statements",
      "Basic Financial Forecast",
    ];

    const premiumFeatures = [
      "Step-by-Step Instructions",
      "Bid Statements",
      "Basic Financial Forecast",
      "Advanced Financial Forecast",
      "Customized Financial Forecast",
    ];
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="pricing-container">
          <div className="pricing-body">
            <h1>Growing your business starts with a plan</h1>
            <div className="toggle-row">
              <p>Annual</p>
              <div className="toggle-container">
                <input
                  className="toggle-switch"
                  type="checkbox"
                  id="switch"
                  name="switch"
                  onClick={this.togglePricing}
                />
              </div>
              <p>Monthly</p>
            </div>
            <label className="pricing-card-container" htmlFor="switch">
              <PricingComponent
                pricingHeader="Basic"
                priceAnnually="199.99"
                priceMonthly="20"
                features={basicFeatures}
                isMonthlyActive={this.state.isMontlyActive}
              />
              <PricingComponent
                pricingHeader="Premium 🚀"
                priceAnnually="399.99"
                priceMonthly="40"
                features={premiumFeatures}
                isMonthlyActive={this.state.isMontlyActive}
              />
              <PricingComponentEnterprise />
            </label>
            <div className="pricing-footer">
            <p>💲All subscriptions come with a 30-day money-back guarantee.</p>
            </div>
          </div>

        
        
          
          
        </div>

      </motion.div>
    );
  }
}

export default PricingContainer;
