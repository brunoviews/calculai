import React, { useEffect, useRef } from "react";
import "./ClientReview.css";

const ClientReview = ({ reviews }) => {
  reviews = [
    {
      text: "DIGITALY allowed me to organize my ideas and structure my business from scratch. It was like having a mentor guiding me step by step.",
      name: "Juan Pérez",
      logo: "/clients/client.jpg",
    },
    {
      text: "It helped me visualize the path I needed to take to launch my project with confidence. It’s like having a detailed map.",
      name: "Ana Gómez",
      logo: "/clients/client.jpg",
    },
    

    {
      text: "DIGITALY helped me structure my business idea and understand how to implement it. I feel more confident and ready to launch my project.",
      name: "María Rodríguez",
      logo: "/clients/client.jpg",
    },

    

   
  ];

  const reviewContainerRef = useRef();

  useEffect(() => {
    const container = reviewContainerRef.current;

    // Duplica los elementos para garantizar la continuidad
    const duplicatedContent = container.innerHTML;
    container.innerHTML += duplicatedContent;

    let animation;
    let animationProgress = 0;

    const startAnimation = () => {
      animation = container.animate([
          { transform: 'translateX(100%)' },
          { transform: 'translateX(-100%)' }
      ], {
          duration: 60000,
          iterations: Infinity
      });

      // Si hay un progreso previo, ajusta el inicio
      if (animationProgress > 0) {
          animation.currentTime = animationProgress;
      }
  };

  const stopAnimation = () => {
      if (animation) {
          animationProgress = animation.currentTime; // Guarda el progreso actual
          animation.pause(); // Pausa la animación
      }
  };

  // Agregar eventos para pausar y reanudar
  container.addEventListener('mouseover', stopAnimation);
  container.addEventListener('mouseout', startAnimation);

  startAnimation();

  // Limpieza al desmontar el componente
  return () => {
      container.removeEventListener('mouseover', stopAnimation);
      container.removeEventListener('mouseout', startAnimation);
  };
}, []);
  return (
    <div className="client-review">
      <h2 className="title-review">
      Success stories with DIGITALY
      </h2>
      <div className="client-review__container" ref={reviewContainerRef}>
        {reviews.map((review, index) => (
          <div key={index} className="client-review__content">
            <p className="client-review__text">{review.text}</p>
            <p className="client-review__name">{review.name}</p>
            <div className="info-block">
              <img src={review.logo} alt={review.name} className="logo-img" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientReview;