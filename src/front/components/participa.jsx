import React, { useState } from "react";

export const FormularioPopup = ({ isOpen, onClose }) => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [numero, setNumero] = useState("");

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modall">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Apúntate al sorteo</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Teléfono"
            value={telefono}
            onChange={e => setTelefono(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Número (00-99)"
            value={numero}
            onChange={e => setNumero(e.target.value)}
            required
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};
