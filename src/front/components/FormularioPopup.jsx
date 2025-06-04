import { useState, useEffect } from "react";

export const FormularioPopup = ({ isOpen, onClose }) => {
  const [availableNumbers, setAvailableNumbers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    number: ""
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    fetch("https://sample-service-name-kfsd.onrender.com/api/available-numbers")
      .then(res => res.json())
      .then(data => setAvailableNumbers(data.available_numbers))
      .catch(() => setError("No se pudieron cargar los números disponibles"));
  }, []);

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if(!formData.name || !formData.phone || formData.number === "") {
      setError("Por favor complete todos los campos");
      return;
    }

    fetch("https://sample-service-name-kfsd.onrender.com//api/participations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: formData.name,
        phone: formData.phone,
        number: formData.number // Número como string, ej: "00"
      })
    })
    .then(async res => {
      if(res.ok) {
        setSuccess("¡Participación registrada con éxito!");
        setFormData({ name: "", phone: "", number: "" });
        // Actualizar números disponibles para no mostrar el que se usó
        const data = await res.json();
        setAvailableNumbers(prev => prev.filter(n => n !== data.number));
      } else {
        const errorData = await res.json();
        setError(errorData.message || "Error al registrar la participación");
      }
    })
    .catch(() => setError("Error de conexión con el servidor"));
  };

 if (!isOpen) return null;

  return (
     <div className="modal-overlay">
      <div className="modall">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Apúntate al sorteo</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label><br/>
      </div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      <div>
        <label>Teléfono:</label><br/>
        
      </div>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      <div>
        <label>Número (elige uno disponible):</label><br/>
        <select
          name="number"
          value={formData.number}
          onChange={handleChange}
          required
        >
          <option value="">-- Selecciona un número --</option>
          {availableNumbers.map(num => (
            <option key={num} value={num}>
              {num.toString().padStart(2, "0")}
            </option>
          ))}
        </select>
      </div>

      {error && <p style={{color: "red"}}>{error}</p>}
      {success && <p style={{color: "green"}}>{success}</p>}

      <button type="submit" style={{ marginTop: 10 }}>Participar</button>
    </form>
    </div></div>
  )
}
