import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RequireAuth from '../../components/RequireAuth';
import FormCard from '../../components/FormCard';
import { areas } from '../../data/mockCatalogs';

export default function ProgramCreate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({name:"",description:"",type:"",modality:"",duration:"",area_id:"",urlFoto:null});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Guardar program:', formData);
    navigate('/program');
  };

  return (
    <RequireAuth>
      <FormCard title="Registrar Programa" subtitle="Ingrese los datos del programa" indexTo="/program">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          
                  <div className="form-floating mb-4">
                    <input type="text" className="form-control" id="name" name="name" placeholder="Nombre Completo" value={formData.name} onChange={handleChange} required />
                    <label htmlFor="name" className="text-secondary">Nombre Completo</label>
                  </div>

                  <div className="form-floating mb-4">
                    <input type="text" className="form-control" id="description" name="description" placeholder="Descripción" value={formData.description} onChange={handleChange} required />
                    <label htmlFor="description" className="text-secondary">Descripción</label>
                  </div>

                  <div className="form-floating mb-4">
                    <select name="type" id="type" className="form-select" value={formData.type} onChange={handleChange} required>
                      <option value="" disabled>Seleccione una opción...</option>
                      <option value="Tecnólogo">Tecnólogo</option>
                      <option value="Técnico">Técnico</option>
                      <option value="Especializacion">Especializacion</option>
                      <option value="Curso">Curso</option>
                    </select>
                    <label htmlFor="type" className="text-secondary">Tipo de Formación</label>
                  </div>

                  <div className="form-floating mb-4">
                    <select name="modality" id="modality" className="form-select" value={formData.modality} onChange={handleChange} required>
                      <option value="" disabled>Seleccione una opción...</option>
                      <option value="Presencial">Presencial</option>
                      <option value="Virtual">Virtual</option>
                    </select>
                    <label htmlFor="modality" className="text-secondary">Modalidad</label>
                  </div>

                  <div className="form-floating mb-4">
                    <input type="text" className="form-control" id="duration" name="duration" placeholder="Duración" value={formData.duration} onChange={handleChange} required />
                    <label htmlFor="duration" className="text-secondary">Duración</label>
                  </div>

                  <div className="form-floating mb-4">
                    <select name="area_id" id="area_id" className="form-select" value={formData.area_id} onChange={handleChange} required>
                      <option value="" disabled>Seleccione una opción...</option>
                      {areas.map((opt) => (<option key={opt.id} value={opt.id}>{opt.name}</option>))}
                    </select>
                    <label htmlFor="area_id" className="text-secondary">Área de Especialidad</label>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="urlFoto" className="form-label fw-bold text-secondary mb-1">Fotografía del Programa</label>
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
