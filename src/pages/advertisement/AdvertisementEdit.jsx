import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import RequireAuth from '../../components/RequireAuth';
import FormCard from '../../components/FormCard';
import { trainingCenters } from '../../data/mockCatalogs';

export default function AdvertisementEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({title:"",category:"",publish_date:"",author:"",summary:"",content:"",training_center_id:"",urlFoto:null});

  useEffect(() => {
    setFormData((prev) => ({ ...prev, title: prev.title || 'Registro advertisement #' + id }));
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Actualizar advertisement', id, formData);
    navigate('/advertisement');
  };

  return (
    <RequireAuth>
      <FormCard title="Actualizar Anuncio" subtitle="Modifique los datos del registro seleccionado">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          
                  <div className="form-floating mb-4">
                    <input type="text" className="form-control" id="title" name="title" placeholder="Título" value={formData.title} onChange={handleChange} required />
                    <label htmlFor="title" className="text-secondary">Título</label>
                  </div>

                  <div className="form-floating mb-4">
                    <input type="text" className="form-control" id="category" name="category" placeholder="Categoría" value={formData.category} onChange={handleChange} required />
                    <label htmlFor="category" className="text-secondary">Categoría</label>
                  </div>

                  <div className="form-floating mb-4">
                    <input type="date" className="form-control" id="publish_date" name="publish_date" placeholder="Fecha de publicación" value={formData.publish_date} onChange={handleChange} required />
                    <label htmlFor="publish_date" className="text-secondary">Fecha de publicación</label>
                  </div>

                  <div className="form-floating mb-4">
                    <input type="text" className="form-control" id="author" name="author" placeholder="Autor" value={formData.author} onChange={handleChange} required />
                    <label htmlFor="author" className="text-secondary">Autor</label>
                  </div>

                  <div className="form-floating mb-4">
                    <input type="text" className="form-control" id="summary" name="summary" placeholder="Resumen" value={formData.summary} onChange={handleChange} required />
                    <label htmlFor="summary" className="text-secondary">Resumen</label>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="content" className="form-label text-secondary">Contenido</label>
                    <textarea id="content" name="content" className="form-control" rows="4" value={formData.content} onChange={handleChange} required />
                  </div>

                  <div className="form-floating mb-4">
                    <select name="training_center_id" id="training_center_id" className="form-select" value={formData.training_center_id} onChange={handleChange} required>
                      <option value="" disabled>Seleccione una opción...</option>
                      {trainingCenters.map((opt) => (<option key={opt.id} value={opt.id}>{opt.name}</option>))}
                    </select>
                    <label htmlFor="training_center_id" className="text-secondary">Centro de Formación</label>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="urlFoto" className="form-label fw-bold text-secondary mb-1">Fotografía del Anuncio</label>
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
