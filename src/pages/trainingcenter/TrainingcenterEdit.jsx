import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import RequireAuth from '../../components/RequireAuth';
import FormCard from '../../components/FormCard';

export default function TrainingcenterEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({name:"",location:"",urlFoto:null});

  useEffect(() => {
    setFormData((prev) => ({ ...prev, name: prev.name || 'Registro trainingcenter #' + id }));
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Actualizar trainingcenter', id, formData);
    navigate('/trainingcenter');
  };

  return (
    <RequireAuth>
      <FormCard title="Actualizar Centro de Formación" subtitle="Modifique los datos del registro seleccionado">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          
                  <div className="form-floating mb-4">
                    <input type="text" className="form-control" id="name" name="name" placeholder="Nombre del Centro de Formación" value={formData.name} onChange={handleChange} required />
                    <label htmlFor="name" className="text-secondary">Nombre del Centro de Formación</label>
                  </div>

                  <div className="form-floating mb-4">
                    <input type="text" className="form-control" id="location" name="location" placeholder="Ubicación / Complejo Regional" value={formData.location} onChange={handleChange} required />
                    <label htmlFor="location" className="text-secondary">Ubicación / Complejo Regional</label>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="urlFoto" className="form-label fw-bold text-secondary mb-1">Fotografía</label>
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
