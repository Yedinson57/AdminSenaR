import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RequireAuth from '../../components/RequireAuth';
import FormCard from '../../components/FormCard';
import { offers } from '../../data/mockCatalogs';

export default function CohortCreate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({code:"",start_date:"",schedule:"",offer_id:""});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Guardar cohort:', formData);
    navigate('/cohort');
  };

  return (
    <RequireAuth>
      <FormCard title="Registrar Ficha" subtitle="Ingrese el código y programación de la ficha" indexTo="/cohort">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          
                  <div className="form-floating mb-4">
                    <input type="text" className="form-control" id="code" name="code" placeholder="Código de ficha" value={formData.code} onChange={handleChange} required />
                    <label htmlFor="code" className="text-secondary">Código de ficha</label>
                  </div>

                  <div className="form-floating mb-4">
                    <input type="date" className="form-control" id="start_date" name="start_date" placeholder="Fecha de inicio" value={formData.start_date} onChange={handleChange} required />
                    <label htmlFor="start_date" className="text-secondary">Fecha de inicio</label>
                  </div>

                  <div className="form-floating mb-4">
                    <input type="text" className="form-control" id="schedule" name="schedule" placeholder="Horario" value={formData.schedule} onChange={handleChange} required />
                    <label htmlFor="schedule" className="text-secondary">Horario</label>
                  </div>

                  <div className="form-floating mb-4">
                    <select name="offer_id" id="offer_id" className="form-select" value={formData.offer_id} onChange={handleChange} required>
                      <option value="" disabled>Seleccione una opción...</option>
                      {offers.map((opt) => (<option key={opt.id} value={opt.id}>{opt.day} — {opt.program?.name}</option>))}
                    </select>
                    <label htmlFor="offer_id" className="text-secondary">Oferta</label>
                  </div>
          <div className="d-flex justify-content-between align-items-center mt-4">
            <Link to="/" className="btn btn-outline-secondary px-4 py-2 fw-medium rounded-3">Cancelar</Link>
            <button type="submit" className="btn btn-dark px-5 py-2 fw-bold rounded-3">Guardar Registro</button>
          </div>
        </form>
      </FormCard>
    </RequireAuth>
  );
}
