import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RequireAuth from '../../components/RequireAuth';
import FormCard from '../../components/FormCard';
import { trainingCenters } from '../../data/mockCatalogs';

export default function AdvertisementCreate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({title:"",category:"",publish_date:"",author:"",summary:"",content:"",training_center_id:"",urlFoto:null});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Guardar advertisement:', formData);
    navigate('/advertisement');
  };

  return (
    <RequireAuth>
      <FormCard title="Registrar Anuncio" subtitle="Publique un comunicado para la comunidad" indexTo="/advertisement">
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
          <div className="d-flex justify-content-between align-items-center mt-4">
            <Link to="/" className="btn btn-outline-secondary px-4 py-2 fw-medium rounded-3">Cancelar</Link>
            <button type="submit" className="btn btn-dark px-5 py-2 fw-bold rounded-3">Guardar Registro</button>
          </div>
        </form>
      </FormCard>
    </RequireAuth>
  );
}
