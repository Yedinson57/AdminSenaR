import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RequireAuth from '../../components/RequireAuth';
import FormCard from '../../components/FormCard';
import { trainingCenters } from '../../data/mockCatalogs';

export default function EnvironmentCreate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({name:"",location:"",training_center_id:"",urlFoto:null});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Guardar environment:', formData);
    navigate('/environment');
  };

  return (
    <RequireAuth>
      <FormCard title="Registrar Ambiente" subtitle="Añada un ambiente de formación" indexTo="/environment">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          
                  <div className="form-floating mb-4">
                    <input type="text" className="form-control" id="name" name="name" placeholder="Nombre del ambiente" value={formData.name} onChange={handleChange} required />
                    <label htmlFor="name" className="text-secondary">Nombre del ambiente</label>
                  </div>

                  <div className="form-floating mb-4">
                    <input type="text" className="form-control" id="location" name="location" placeholder="Ubicación" value={formData.location} onChange={handleChange} required />
                    <label htmlFor="location" className="text-secondary">Ubicación</label>
                  </div>

                  <div className="form-floating mb-4">
                    <select name="training_center_id" id="training_center_id" className="form-select" value={formData.training_center_id} onChange={handleChange} required>
                      <option value="" disabled>Seleccione una opción...</option>
                      {trainingCenters.map((opt) => (<option key={opt.id} value={opt.id}>{opt.name}</option>))}
                    </select>
                    <label htmlFor="training_center_id" className="text-secondary">Centro de Formación</label>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="urlFoto" className="form-label fw-bold text-secondary mb-1">Fotografía del Ambiente</label>
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
