import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import RequireAuth from '../../components/RequireAuth';
import FormCard from '../../components/FormCard';
import { environments } from '../../data/mockCatalogs';

export default function ComputerEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({number:"",brand:"",environment_id:"",urlFoto:null});

  useEffect(() => {
    setFormData((prev) => ({ ...prev, number: prev.number || 'Registro computer #' + id }));
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Actualizar computer', id, formData);
    navigate('/computer');
  };

  return (
    <RequireAuth>
      <FormCard title="Actualizar Equipo" subtitle="Modifique los datos del registro seleccionado">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          
                  <div className="form-floating mb-4">
                    <input type="number" className="form-control" id="number" name="number" placeholder="Número de equipo" value={formData.number} onChange={handleChange} required />
                    <label htmlFor="number" className="text-secondary">Número de equipo</label>
                  </div>

                  <div className="form-floating mb-4">
                    <input type="text" className="form-control" id="brand" name="brand" placeholder="Marca" value={formData.brand} onChange={handleChange} required />
                    <label htmlFor="brand" className="text-secondary">Marca</label>
                  </div>

                  <div className="form-floating mb-4">
                    <select name="environment_id" id="environment_id" className="form-select" value={formData.environment_id} onChange={handleChange} required>
                      <option value="" disabled>Seleccione una opción...</option>
                      {environments.map((opt) => (<option key={opt.id} value={opt.id}>{opt.name}</option>))}
                    </select>
                    <label htmlFor="environment_id" className="text-secondary">Ambiente</label>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="urlFoto" className="form-label fw-bold text-secondary mb-1">Fotografía del Equipo</label>
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
