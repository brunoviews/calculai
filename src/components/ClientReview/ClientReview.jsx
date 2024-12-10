import React, { useEffect, useRef } from "react";
import "./ClientReview.css";

const ClientReview = ({ reviews }) => {
  reviews = [
    {
      text: "Calcul AI fue de gran ayuda para diseñar, planificar, organizar estratégicamente y desarrollar todas las ideas necesarias para crear un nuevo proyecto y plan de negocios [...] Piensa en ello como un entrenador que te guía a lo largo del proceso.",
      name: "Juan Pérez",
      logo: "/clients/client.jpg",
    },
    {
      text: "Esta herramienta me permitió organizar mis ideas y estructurar mi negocio desde cero. Fue como tener un mentor guiándome paso a paso",
      name: "Ana Gómez",
      logo: "/clients/client.jpg",
    },
    {
      text: "Me ayudó a visualizar el camino que debía seguir para lanzar mi proyecto con confianza. Es como tener un mapa detallado",
      name: "Luis Fernández",
      logo: "/clients/client.jpg",
    },

    {
      text: "Calcul AI me ayudó a crear un plan de negocios sólido y a entender cómo llevar a cabo mi proyecto. Me siento más seguro y preparado para lanzar mi negocio",
      name: "María Rodríguez",
      logo: "/clients/client.jpg",
    },

    {
      text: "Calcul AI me ayudó a estructurar mi idea de negocio y a entender cómo llevarla a cabo. Me siento más seguro y preparado para lanzar mi proyecto",
      name: "Carlos Pérez",
      logo: "/clients/client.jpg",
    },

    {
      text: "Calcul AI me ayudó a visualizar el camino que debía seguir para lanzar mi proyecto con confianza. Es como tener un mapa detallado",
      name: "María Gómez",
      logo: "/clients/client.jpg",
    },

    {
      text: "Calcul AI me ayudó a estructurar mi idea de negocio y a entender cómo llevarla a cabo. Me siento más seguro y preparado para lanzar mi proyecto",
      name: "Carlos Pérez",
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
        A nuestros clientes les encanta nuestro producto
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