import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RequireAuth from '../../components/RequireAuth';
import FormCard from '../../components/FormCard';
import { programs } from '../../data/mockCatalogs';

export default function OfferCreate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({day:"",registration_date:"",capacity:"",program_id:"",urlFoto:null});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Guardar offer:', formData);
    navigate('/offer');
  };

  return (
    <RequireAuth>
      <FormCard title="Registrar Oferta" subtitle="Complete los datos de la convocatoria" indexTo="/offer">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          
                  <div className="form-floating mb-4">
                    <input type="text" className="form-control" id="day" name="day" placeholder="Jornada / Día" value={formData.day} onChange={handleChange} required />
                    <label htmlFor="day" className="text-secondary">Jornada / Día</label>
                  </div>

                  <div className="form-floating mb-4">
                    <input type="date" className="form-control" id="registration_date" name="registration_date" placeholder="Fecha de inscripción" value={formData.registration_date} onChange={handleChange} required />
                    <label htmlFor="registration_date" className="text-secondary">Fecha de inscripción</label>
                  </div>

                  <div className="form-floating mb-4">
                    <input type="number" className="form-control" id="capacity" name="capacity" placeholder="Cupos" value={formData.capacity} onChange={handleChange} required />
                    <label htmlFor="capacity" className="text-secondary">Cupos</label>
                  </div>

                  <div className="form-floating mb-4">
                    <select name="program_id" id="program_id" className="form-select" value={formData.program_id} onChange={handleChange} required>
                      <option value="" disabled>Seleccione una opción...</option>
                      {programs.map((opt) => (<option key={opt.id} value={opt.id}>{opt.name}</option>))}
                    </select>
                    <label htmlFor="program_id" className="text-secondary">Programa</label>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="urlFoto" className="form-label fw-bold text-secondary mb-1">Fotografía de la Oferta</label>
                    <input type="file" id="urlFoto" name="urlFoto" className="form-control" accept="image/*" onChange={handleChange} />
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
