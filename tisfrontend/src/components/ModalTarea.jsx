import React, { useState } from 'react';
import axios from 'axios';
import "./ModalTarea.css"

const ModalTarea = ({ show, onClose }) => {
  const [tareaData, setTareaData] = useState({
    nro_tarea: '',
    estimacion: '',
    estado: '',
    contenido_tarea: '',
    ID_estudiante: '',
    ID_historia: '',
  });

  const handleChange = (e) => {
    setTareaData({ ...tareaData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); 
      const response = await axios.post('http://localhost:8000/api/v1/tareas', tareaData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data.success) {
        alert('Tarea registrada exitosamente');
        onClose(); 
      }
    } catch (error) {
      console.error('Error al registrar la tarea:', error);
    }
  };

  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Registrar Tarea</h2>
        <form onSubmit={handleSubmit}>
          <label>Nro Tarea:</label>
          <input type="number" name="nro_tarea" value={tareaData.nro_tarea} onChange={handleChange} required />

          <label>Estimación:</label>
          <input type="number" name="estimacion" value={tareaData.estimacion} onChange={handleChange} required />

          <label>Estado:</label>
          <input type="text" name="estado" value={tareaData.estado} onChange={handleChange} required />

          <label>Contenido de la Tarea:</label>
          <textarea name="contenido_tarea" value={tareaData.contenido_tarea} onChange={handleChange} required />

          <label>ID Estudiante:</label>
          <input type="number" name="ID_estudiante" value={tareaData.ID_estudiante} onChange={handleChange} required />

          <label>ID Historia:</label>
          <input type="number" name="ID_historia" value={tareaData.ID_historia} onChange={handleChange} required />

          <button type="submit">Registrar</button>
          <button type="button" onClick={onClose}>Cerrar</button>
        </form>
      </div>
    </div>
  );
};

export default ModalTarea;
