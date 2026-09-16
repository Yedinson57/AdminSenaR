import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import RequireAuth from '../../components/RequireAuth';
import FormCard from '../../components/FormCard';
import { courses, computers } from '../../data/mockCatalogs';

export default function ApprenticeEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({name:"",email:"",cell_number:"",course_id:"",computer_id:"",urlFoto:null});

  useEffect(() => {
    setFormData((prev) => ({ ...prev, name: prev.name || 'Registro apprentice #' + id }));
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Actualizar apprentice', id, formData);
    navigate('/apprentice');
  };

  return (
    <RequireAuth>
      <FormCard title="Actualizar Aprendiz" subtitle="Modifique los datos del registro seleccionado">
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
          <div className="d-flex justify-content-center align-items-center gap-2 mt-4">
            <button type="button" onClick={() => navigate(-1)} className="btn btn-light border fw-bold px-4 py-2 rounded-3">Cancelar</button>
            <button type="submit" className="btn text-white fw-bold px-4 py-2 rounded-3" style={{ backgroundColor: '#39A900' }}>Actualizar</button>
          </div>
        </form>
      </FormCard>
    </RequireAuth>
  );
}
