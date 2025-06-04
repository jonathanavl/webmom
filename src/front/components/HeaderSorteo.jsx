import React, { useState } from "react";
import sorteoImg from "../assets/img/sorteo-marykay.png";
import { FormularioPopup } from "./FormularioPopup";

export const HeaderSorteo = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  return (
    <>
      <header className="header-sorteo">
        <img src={sorteoImg} alt="Sorteo Mary Kay" className="header-sorteo-image" />
        <div className="header-sorteo-content">
          <h1>¡Gran sorteo de Mary Key!</h1>
          <h2>¡Participa en nuestro sorteo y descubre la magia de Mary Kay!</h2>
          <p>
            Obtén la oportunidad de ganar estos 5 fabulosos productos Mary Kay valorados en <strong>173,50 €</strong> por solo 3€ las 2 participaciones.
          </p>
          <p>
            El sorteo se llevará a cabo con las 2 ultimas cifras del cuponazo de la ONCE el <strong>Viernes 27 de Junio</strong>.<br />
            ¡Y solo por participar, te llevas una sesión de belleza gratis!
          </p>
          <button className="btn-sorteo" onClick={() => setMostrarFormulario(true)}>
            ¡Apúntate ahora!
          </button>
        </div>
      </header>

      <FormularioPopup isOpen={mostrarFormulario} onClose={() => setMostrarFormulario(false)} />
    </>
  );
};
