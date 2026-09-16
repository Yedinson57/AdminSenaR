import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import RequireAuth from '../../components/RequireAuth';
import FormCard from '../../components/FormCard';
import { programs } from '../../data/mockCatalogs';

export default function OfferEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({day:"",registration_date:"",capacity:"",program_id:"",urlFoto:null});

  useEffect(() => {
    setFormData((prev) => ({ ...prev, day: prev.day || 'Registro offer #' + id }));
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Actualizar offer', id, formData);
    navigate('/offer');
  };

  return (
    <RequireAuth>
      <FormCard title="Actualizar Oferta" subtitle="Modifique los datos del registro seleccionado">
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
          <div className="d-flex justify-content-center align-items-center gap-2 mt-4">
            <button type="button" onClick={() => navigate(-1)} className="btn btn-light border fw-bold px-4 py-2 rounded-3">Cancelar</button>
            <button type="submit" className="btn text-white fw-bold px-4 py-2 rounded-3" style={{ backgroundColor: '#39A900' }}>Actualizar</button>
          </div>
        </form>
      </FormCard>
    </RequireAuth>
  );
}
