import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import RequireAuth from '../../components/RequireAuth';
import FormCard from '../../components/FormCard';
import { trainingCenters, cohorts, environments } from '../../data/mockCatalogs';

export default function CourseEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({course_number:"",day:"",training_center_id:"",cohort_id:"",environment_id:"",urlFoto:null});

  useEffect(() => {
    setFormData((prev) => ({ ...prev, course_number: prev.course_number || 'Registro course #' + id }));
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Actualizar course', id, formData);
    navigate('/course');
  };

  return (
    <RequireAuth>
      <FormCard title="Actualizar Curso" subtitle="Modifique los datos del registro seleccionado">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          
                  <div className="form-floating mb-4">
                    <input type="text" className="form-control" id="course_number" name="course_number" placeholder="Número de curso" value={formData.course_number} onChange={handleChange} required />
                    <label htmlFor="course_number" className="text-secondary">Número de curso</label>
                  </div>

                  <div className="form-floating mb-4">
                    <input type="text" className="form-control" id="day" name="day" placeholder="Día" value={formData.day} onChange={handleChange} required />
                    <label htmlFor="day" className="text-secondary">Día</label>
                  </div>

                  <div className="form-floating mb-4">
                    <select name="training_center_id" id="training_center_id" className="form-select" value={formData.training_center_id} onChange={handleChange} required>
                      <option value="" disabled>Seleccione una opción...</option>
                      {trainingCenters.map((opt) => (<option key={opt.id} value={opt.id}>{opt.name}</option>))}
                    </select>
                    <label htmlFor="training_center_id" className="text-secondary">Centro de Formación</label>
                  </div>

                  <div className="form-floating mb-4">
                    <select name="cohort_id" id="cohort_id" className="form-select" value={formData.cohort_id} onChange={handleChange} required>
                      <option value="" disabled>Seleccione una opción...</option>
                      {cohorts.map((opt) => (<option key={opt.id} value={opt.id}>{opt.code}</option>))}
                    </select>
                    <label htmlFor="cohort_id" className="text-secondary">Ficha</label>
                  </div>

                  <div className="form-floating mb-4">
                    <select name="environment_id" id="environment_id" className="form-select" value={formData.environment_id} onChange={handleChange} required>
                      <option value="" disabled>Seleccione una opción...</option>
                      {environments.map((opt) => (<option key={opt.id} value={opt.id}>{opt.name}</option>))}
                    </select>
                    <label htmlFor="environment_id" className="text-secondary">Ambiente</label>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="urlFoto" className="form-label fw-bold text-secondary mb-1">Fotografía del Curso</label>
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
