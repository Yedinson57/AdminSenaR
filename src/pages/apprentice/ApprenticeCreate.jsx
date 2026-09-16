import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RequireAuth from '../../components/RequireAuth';
import FormCard from '../../components/FormCard';
import { courses, computers } from '../../data/mockCatalogs';

export default function ApprenticeCreate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({name:"",email:"",cell_number:"",course_id:"",computer_id:"",urlFoto:null});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Guardar apprentice:', formData);
    navigate('/apprentice');
  };

  return (
    <RequireAuth>
      <FormCard title="Registrar Aprendiz" subtitle="Ingrese los datos del aprendiz" indexTo="/apprentice">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          
                  <div className="form-floating mb-4">
                    <input type="text" className="form-control" id="name" name="name" placeholder="Nombre Completo" value={formData.name} onChange={handleChange} required />
                    <label htmlFor="name" className="text-secondary">Nombre Completo</label>
                  </div>

                  <div className="form-floating mb-4">
                    <input type="email" className="form-control" id="email" name="email" placeholder="Correo Electrónico" value={formData.email} onChange={handleChange} required />
                    <label htmlFor="email" className="text-secondary">Correo Electrónico</label>
                  </div>

                  <div className="form-floating mb-4">
                    <input type="text" className="form-control" id="cell_number" name="cell_number" placeholder="Número de celular" value={formData.cell_number} onChange={handleChange} required />
                    <label htmlFor="cell_number" className="text-secondary">Número de celular</label>
                  </div>

                  <div className="form-floating mb-4">
                    <select name="course_id" id="course_id" className="form-select" value={formData.course_id} onChange={handleChange} required>
                      <option value="" disabled>Seleccione una opción...</option>
                      {courses.map((opt) => (<option key={opt.id} value={opt.id}>{opt.course_number}</option>))}
                    </select>
                    <label htmlFor="course_id" className="text-secondary">Curso</label>
                  </div>

                  <div className="form-floating mb-4">
                    <select name="computer_id" id="computer_id" className="form-select" value={formData.computer_id} onChange={handleChange} required>
                      <option value="" disabled>Seleccione una opción...</option>
                      {computers.map((opt) => (<option key={opt.id} value={opt.id}>#{opt.number} {opt.brand}</option>))}
                    </select>
                    <label htmlFor="computer_id" className="text-secondary">Equipo</label>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="urlFoto" className="form-label fw-bold text-secondary mb-1">Fotografía del Aprendiz</label>
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
