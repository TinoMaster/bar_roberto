import { useEffect, useState } from "react";
import papelSVG from "../../assets/svgs/papel_roto.svg";
import papelSVGRev from "../../assets/svgs/papel_roto_rev.svg";

export const BrokeBackground = () => {
  const [cantidadRepeticiones, setCantidadRepeticiones] = useState(
    Math.ceil(window.innerWidth / 144)
  );
  useEffect(() => {
    const handleResize = () => {
      setCantidadRepeticiones(Math.ceil(window.innerWidth / 144));
    };

    // Agregar el manejador de eventos al montar el componente
    window.addEventListener("resize", handleResize);

    // Limpiar el manejador de eventos al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Up */}
      <div className="w-full flex overflow-hidden absolute -top-8">
        {[...Array(cantidadRepeticiones)].map((_, index) => (
          <img
            key={index}
            src={papelSVG}
            alt="Papel SVG Repetido"
            style={{ width: "144px" }}
          />
        ))}
      </div>
      {/* Down */}
      <div className="w-full flex overflow-hidden absolute -bottom-8">
        {[...Array(cantidadRepeticiones)].map((_, index) => (
          <img
            key={index}
            src={papelSVGRev}
            alt="Papel SVG Repetido"
            style={{ width: "144px" }}
          />
        ))}
      </div>
    </>
  );
};
