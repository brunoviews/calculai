import React, { Component } from "react";
import PricingComponent from "./pricing-component";
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
      "Instrucciones Paso a Paso",
      "Declaraciones de Licitación",
      "Pronóstico Financiero Completo",
    ];

    const premiumFeatures = [
      "Instrucciones Paso a Paso",
      "Declaraciones de Licitación",
      "Pronóstico Financiero Completo",
      "Soporte Prioritario",
      "Acceso a Nuevas Funcionalidades",
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
          <h1>Nuestros Precios</h1>
          <div className="toggle-row">
            <p>Anual</p>
            <div className="toggle-container">
              <input
                className="toggle-switch"
                type="checkbox"
                id="switch"
                name="switch"
                onClick={this.togglePricing}
              />
            </div>
            <p>Mensual</p>
          </div>
          <label className="pricing-card-container" for="switch">
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
          </label>
        </div>
        
      </div>
      <div className="pricing-footer">
            <p>💲Garantía de devolución de 30 días</p>
      </div>
      
        </motion.div>
    );
  }
}

export default PricingContainer;
