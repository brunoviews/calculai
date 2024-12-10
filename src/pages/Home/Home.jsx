import React from "react";
import {Link} from "react-router-dom";
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
              Transforma tu empresa <br></br> con la potencia de la Inteligencia
              Artificial
            </h1>
            <p>
              Optimiza recursos, maximiza beneficios y demuestra el valor de la
              innovación con un análisis claro del Retorno de la Inversión (RoI)
            </p>
            <div className="hero-buttons">
              <button className="btn-hero-1">Descubre Más</button>
              <button className="btn-hero-2">Solicita una Demo</button>
            </div>
            <div className="rating-content">
              <img src="/google-logo.svg" alt="Rating" />
              <div className="rb-content">
                <StarRating count={5} />
                <p>4.8/5 Google Reviews</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="title">
        <h2>
          {" "}
          Con las herramientas adecuadas y un poco de orientación,
          <br></br>
          puedes lograr casi cualquier objetivo comercial
        </h2>
      </div>
      {/* Alternating Sections */}
      <section className="content-section">
        <div className="content-image">
          <img src="/section1.jpg" alt="Feature Illustration" />
        </div>
        <div className="content-text">
          <h2>El RoI y la toma de decisiones empresariales</h2>
          <p>
            El retorno de la inversión (RoI) permite determinar la efectividad
            financiera de los proyectos, optimizar recursos y maximizar
            beneficios. CALCUL AI automatiza decisiones basadas en métricas,
            proporcionando un enfoque estructurado y preciso para evaluar el
            impacto de la IA en tu empresa.
          </p>
          <a className="button-section">Ver más</a>
        </div>
      </section>

      <section className="content-section">
        <div className="content-text">
          <h2>Cómo CALCUL AI facilita el análisis del RoI</h2>
          <p>
            CALCUL AI usa análisis cuantitativo para calcular el RoI, eliminando
            subjetividades y mejorando la capacidad de análisis financiero. Esta
            herramienta permite visualizar la evolución financiera de la
            inversión y anticipar el momento en que comenzarán a generarse
            beneficios netos.
          </p>
          <a className="button-section">Ver más</a>
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
          <h2>Sectorial y estratégico</h2>
          <p>
            Nuestra solución se adapta a diferentes sectores, gestiona el
            cambio, ajusta desviaciones y asegura que los proyectos de IA estén
            alineados con los objetivos estratégicos de la empresa. Maximiza el
            retorno de inversión y mejora la competitividad.
          </p>
          <a className="button-section">Ver más</a>
        </div>
      </section>

      <section className="content-section">
        <div className="content-text">
          <h2>El RoI como puente entre visión y realidad</h2>
          <p>
            Hablar de RoI es hablar de confianza. Un análisis claro y bien
            fundamentado muestra cómo cada euro invertido se traduce en
            beneficios, optimizando recursos, reduciendo tiempos y mejorando la
            calidad del trabajo.
          </p>
          <a className="button-section">Ver más</a>
        </div>
        <div className="content-image">
          <img src="/section4.jpg" alt="AI Planning Illustration" />
        </div>
      </section>

      <section>
        <ClientReview />
      </section>

      <section className="final-section">
        <h2>¿Estás listo para transformar tu empresa?</h2>
        <p className="final-text">
          Sin riesgo.<br></br>Garantía de devolución de 30 días
        </p>
        <div className="hero-buttons">
         <Link
            to="/precio"
            className="button-section">
            Descubre Nuestros Planes
          </Link>
          <a className="button-section">Ver más</a>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
