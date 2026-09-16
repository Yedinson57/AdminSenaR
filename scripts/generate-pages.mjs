import fs from 'fs';
import path from 'path';

const root = 'C:/admin_SenaR/src/pages';

function write(rel, content) {
  const full = path.join(root, rel);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content.trimStart());
  console.log('wrote', rel);
}

const indexTpl = ({ folder, Comp, title, desc, createTo, createLabel, headers, mock, cells, showTo, editTo, confirm }) => `
import React, { useState } from 'react';
import RequireAuth from '../../components/RequireAuth';
import IndexHeader from '../../components/IndexHeader';
import ActionButtons from '../../components/ActionButtons';

export default function ${Comp}() {
  const [items, setItems] = useState(${mock});

  const handleDelete = (id) => {
    if (window.confirm('${confirm}')) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  return (
    <RequireAuth>
      <div className="py-4">
        <div className="container">
          <IndexHeader
            title="${title}"
            description="${desc}"
            createTo="${createTo}"
            createLabel="${createLabel}"
          />
          <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0" style={{ width: '100%' }}>
                  <thead className="table-dark" style={{ backgroundColor: '#212529' }}>
                    <tr>
                      ${headers}
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id}>
                        ${cells}
                        <td className="text-center">
                          <ActionButtons
                            showTo={\`${showTo}\`}
                            editTo={\`${editTo}\`}
                            onDelete={() => handleDelete(item.id)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RequireAuth>
  );
}
`;

const showTpl = ({ Comp, title, indexTo, fields, extraState }) => `
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import RequireAuth from '../../components/RequireAuth';
import FormCard from '../../components/FormCard';
import { formatDate } from '../../utils/formatDate';

export default function ${Comp}() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);

  useEffect(() => {
    setItem({
      id,
      ${extraState}
      created_at: '2026-03-10T14:30:00Z',
      updated_at: '2026-03-15T09:15:00Z',
    });
  }, [id]);

  if (!item) return null;

  return (
    <RequireAuth>
      <FormCard title="${title}" subtitle={item.name || item.title || item.code || \`Registro #\${item.id}\`}>
        ${fields}
        <div className="row g-3 mb-4">
          <div className="col-sm-6">
            <span className="text-muted small d-block mb-1 fw-bold text-uppercase">Fecha de registro</span>
            <div className="p-2 bg-light rounded-2 small text-secondary">{formatDate(item.created_at)}</div>
          </div>
          <div className="col-sm-6">
            <span className="text-muted small d-block mb-1 fw-bold text-uppercase">Última modificación</span>
            <div className="p-2 bg-light rounded-2 small text-secondary">{formatDate(item.updated_at)}</div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <button type="button" onClick={() => navigate('${indexTo}')} className="btn btn-dark px-4 py-2 fw-bold rounded-3">
            Volver al Listado
          </button>
        </div>
      </FormCard>
    </RequireAuth>
  );
}
`;

function fieldBlock(label, expr) {
  return `
        <div className="mb-4">
          <span className="text-muted small d-block mb-1 fw-bold text-uppercase">${label}</span>
          <div className="p-3 bg-light rounded-3 fw-medium text-dark">{${expr}}</div>
        </div>`;
}

function photoBlock() {
  return `
        {item.urlFoto ? (
          <div className="mb-4 text-center">
            <img src={item.urlFoto} alt="" className="rounded-3 img-fluid" style={{ maxHeight: '250px', objectFit: 'cover' }} />
          </div>
        ) : (
          <div className="p-4 border rounded-4 bg-light text-muted mb-4">
            <i className="bi bi-image fs-1 d-block mb-2"></i>
            <span>Sin fotografía asignada</span>
          </div>
        )}`;
}

const resources = [
  {
    folder: 'trainingcenter',
    Index: 'TrainingcenterIndex',
    Create: 'TrainingcenterCreate',
    Edit: 'TrainingcenterEdit',
    Show: 'TrainingcenterShow',
    title: 'Listado de Centros de Formación',
    desc: 'Sedes operacionales y complejos regionales registrados en el sistema.',
    createLabel: 'Nuevo Centro',
    createTitle: 'Registrar Centro de Formación',
    createSub: 'Añada una nueva sede o centro de operaciones',
    editTitle: 'Actualizar Centro de Formación',
    showTitle: 'Información del Centro',
    confirm: '¿Está seguro de eliminar este centro de formación?',
    mock: `[{ id: 1, name: 'Centro de Comercio y Servicios', location: 'Neiva', urlFoto: 'https://via.placeholder.com/600x400' }]`,
    headers: `<th className="ps-4 py-3">ID</th><th className="py-3">Nombre</th><th className="py-3">Ubicación</th><th className="text-center py-3">Acciones</th>`,
    cells: `<td className="ps-4 fw-bold text-secondary">#{item.id}</td><td className="fw-bold text-dark">{item.name}</td><td>{item.location}</td>`,
    extraState: `name: 'Centro de Comercio y Servicios', location: 'Neiva', urlFoto: 'https://via.placeholder.com/600x400',`,
    showFields: fieldBlock('Nombre', 'item.name') + fieldBlock('Ubicación', 'item.location') + photoBlock(),
    createFields: [
      { name: 'name', label: 'Nombre del Centro de Formación', type: 'text' },
      { name: 'location', label: 'Ubicación / Complejo Regional', type: 'text' },
      { name: 'urlFoto', label: 'Fotografía', type: 'file' },
    ],
  },
  {
    folder: 'teacher',
    skipIndex: true,
    skipCreate: true,
    Edit: 'TeacherEdit',
    Show: 'TeacherShow',
    editTitle: 'Actualizar Instructor',
    showTitle: 'Detalle del Instructor',
    extraState: `name: 'Carlos Pérez', email: 'cperez@sena.edu.co', area_id: 1, training_center_id: 1, urlFoto: 'https://via.placeholder.com/600x400',`,
    showFields: fieldBlock('Nombre Completo', 'item.name') + fieldBlock('Correo Institucional', 'item.email') + fieldBlock('ID del Área', 'item.area_id') + fieldBlock('ID del Centro', 'item.training_center_id') + photoBlock(),
    createFields: [
      { name: 'name', label: 'Nombre Completo', type: 'text' },
      { name: 'email', label: 'Correo Electrónico Institucional', type: 'email' },
      { name: 'area_id', label: 'Área de Especialidad', type: 'select', optionsFrom: 'areas' },
      { name: 'training_center_id', label: 'Centro de Formación Asignado', type: 'select', optionsFrom: 'trainingCenters' },
      { name: 'urlFoto', label: 'Fotografía del Instructor', type: 'file' },
    ],
  },
  {
    folder: 'program',
    Index: 'ProgramIndex',
    Create: 'ProgramCreate',
    Edit: 'ProgramEdit',
    Show: 'ProgramShow',
    title: 'Listado de Programas',
    desc: 'Programas de formación titulada y complementaria.',
    createLabel: 'Nuevo Programa',
    createTitle: 'Registrar Programa',
    createSub: 'Ingrese los datos del programa',
    editTitle: 'Actualizar Programa',
    showTitle: 'Información del Programa',
    confirm: '¿Está seguro de eliminar este programa?',
    mock: `[{ id: 1, name: 'ADSO', type: 'Tecnólogo', modality: 'Presencial', duration: '24 meses', area: { name: 'Sistemas e Informática' } }]`,
    headers: `<th className="ps-4 py-3">ID</th><th className="py-3">Nombre</th><th className="py-3">Tipo</th><th className="py-3">Modalidad</th><th className="py-3">Área</th><th className="text-center py-3">Acciones</th>`,
    cells: `<td className="ps-4 fw-bold text-secondary">#{item.id}</td><td className="fw-bold">{item.name}</td><td>{item.type}</td><td>{item.modality}</td><td>{item.area?.name}</td>`,
    extraState: `name: 'ADSO', description: 'Análisis y Desarrollo de Software', type: 'Tecnólogo', modality: 'Presencial', duration: '24 meses', area_id: 1, urlFoto: 'https://via.placeholder.com/600x400',`,
    showFields: fieldBlock('Nombre', 'item.name') + fieldBlock('Descripción', 'item.description') + fieldBlock('Tipo', 'item.type') + fieldBlock('Modalidad', 'item.modality') + fieldBlock('Duración', 'item.duration') + photoBlock(),
    createFields: [
      { name: 'name', label: 'Nombre Completo', type: 'text' },
      { name: 'description', label: 'Descripción', type: 'text' },
      { name: 'type', label: 'Tipo de Formación', type: 'select', options: ['Tecnólogo', 'Técnico', 'Especializacion', 'Curso'] },
      { name: 'modality', label: 'Modalidad', type: 'select', options: ['Presencial', 'Virtual'] },
      { name: 'duration', label: 'Duración', type: 'text' },
      { name: 'area_id', label: 'Área de Especialidad', type: 'select', optionsFrom: 'areas' },
      { name: 'urlFoto', label: 'Fotografía del Programa', type: 'file' },
    ],
  },
  {
    folder: 'offer',
    Index: 'OfferIndex',
    Create: 'OfferCreate',
    Edit: 'OfferEdit',
    Show: 'OfferShow',
    title: 'Listado de Ofertas',
    desc: 'Convocatorias asociadas a programas de formación.',
    createLabel: 'Nueva Oferta',
    createTitle: 'Registrar Oferta',
    createSub: 'Complete los datos de la convocatoria',
    editTitle: 'Actualizar Oferta',
    showTitle: 'Información de la Oferta',
    confirm: '¿Está seguro de eliminar esta oferta?',
    mock: `[{ id: 1, day: 'Lunes a Viernes', registration_date: '2026-08-01', capacity: 30, program: { name: 'ADSO' } }]`,
    headers: `<th className="ps-4 py-3">ID</th><th className="py-3">Jornada</th><th className="py-3">Inscripción</th><th className="py-3">Cupos</th><th className="py-3">Programa</th><th className="text-center py-3">Acciones</th>`,
    cells: `<td className="ps-4 fw-bold text-secondary">#{item.id}</td><td>{item.day}</td><td>{item.registration_date}</td><td>{item.capacity}</td><td>{item.program?.name}</td>`,
    extraState: `day: 'Lunes a Viernes', registration_date: '2026-08-01', capacity: 30, program_id: 1, urlFoto: 'https://via.placeholder.com/600x400',`,
    showFields: fieldBlock('Jornada', 'item.day') + fieldBlock('Fecha de inscripción', 'item.registration_date') + fieldBlock('Cupos', 'item.capacity') + fieldBlock('Programa', 'item.program_id') + photoBlock(),
    createFields: [
      { name: 'day', label: 'Jornada / Día', type: 'text' },
      { name: 'registration_date', label: 'Fecha de inscripción', type: 'date' },
      { name: 'capacity', label: 'Cupos', type: 'number' },
      { name: 'program_id', label: 'Programa', type: 'select', optionsFrom: 'programs' },
      { name: 'urlFoto', label: 'Fotografía de la Oferta', type: 'file' },
    ],
  },
  {
    folder: 'cohort',
    Index: 'CohortIndex',
    Create: 'CohortCreate',
    Edit: 'CohortEdit',
    Show: 'CohortShow',
    title: 'Listado de Fichas',
    desc: 'Cohortes o fichas de formación asociadas a una oferta.',
    createLabel: 'Nueva Ficha',
    createTitle: 'Registrar Ficha',
    createSub: 'Ingrese el código y programación de la ficha',
    editTitle: 'Actualizar Ficha',
    showTitle: 'Información de la Ficha',
    confirm: '¿Está seguro de eliminar esta ficha?',
    mock: `[{ id: 1, code: '2874057', start_date: '2026-02-01', schedule: 'Diurna', offer: { day: 'Lunes a Viernes' } }]`,
    headers: `<th className="ps-4 py-3">ID</th><th className="py-3">Código</th><th className="py-3">Inicio</th><th className="py-3">Horario</th><th className="py-3">Oferta</th><th className="text-center py-3">Acciones</th>`,
    cells: `<td className="ps-4 fw-bold text-secondary">#{item.id}</td><td className="fw-bold">{item.code}</td><td>{item.start_date}</td><td>{item.schedule}</td><td>{item.offer?.day}</td>`,
    extraState: `code: '2874057', start_date: '2026-02-01', schedule: 'Diurna', offer_id: 1,`,
    showFields: fieldBlock('Código', 'item.code') + fieldBlock('Fecha de inicio', 'item.start_date') + fieldBlock('Horario', 'item.schedule') + fieldBlock('Oferta', 'item.offer_id'),
    createFields: [
      { name: 'code', label: 'Código de ficha', type: 'text' },
      { name: 'start_date', label: 'Fecha de inicio', type: 'date' },
      { name: 'schedule', label: 'Horario', type: 'text' },
      { name: 'offer_id', label: 'Oferta', type: 'select', optionsFrom: 'offers' },
    ],
  },
  {
    folder: 'environment',
    Index: 'EnvironmentIndex',
    Create: 'EnvironmentCreate',
    Edit: 'EnvironmentEdit',
    Show: 'EnvironmentShow',
    title: 'Listado de Ambientes',
    desc: 'Ambientes de formación disponibles en cada centro.',
    createLabel: 'Nuevo Ambiente',
    createTitle: 'Registrar Ambiente',
    createSub: 'Añada un ambiente de formación',
    editTitle: 'Actualizar Ambiente',
    showTitle: 'Información del Ambiente',
    confirm: '¿Está seguro de eliminar este ambiente?',
    mock: `[{ id: 1, name: 'Ambiente 204', location: 'Bloque Tecnológico', training_center: { name: 'Centro de Comercio y Servicios' } }]`,
    headers: `<th className="ps-4 py-3">ID</th><th className="py-3">Nombre</th><th className="py-3">Ubicación</th><th className="py-3">Centro</th><th className="text-center py-3">Acciones</th>`,
    cells: `<td className="ps-4 fw-bold text-secondary">#{item.id}</td><td className="fw-bold">{item.name}</td><td>{item.location}</td><td>{item.training_center?.name}</td>`,
    extraState: `name: 'Ambiente 204', location: 'Bloque Tecnológico', training_center_id: 1, urlFoto: 'https://via.placeholder.com/600x400',`,
    showFields: fieldBlock('Nombre', 'item.name') + fieldBlock('Ubicación', 'item.location') + fieldBlock('Centro', 'item.training_center_id') + photoBlock(),
    createFields: [
      { name: 'name', label: 'Nombre del ambiente', type: 'text' },
      { name: 'location', label: 'Ubicación', type: 'text' },
      { name: 'training_center_id', label: 'Centro de Formación', type: 'select', optionsFrom: 'trainingCenters' },
      { name: 'urlFoto', label: 'Fotografía del Ambiente', type: 'file' },
    ],
  },
  {
    folder: 'advertisement',
    Index: 'AdvertisementIndex',
    Create: 'AdvertisementCreate',
    Edit: 'AdvertisementEdit',
    Show: 'AdvertisementShow',
    title: 'Listado de Anuncios',
    desc: 'Comunicados internos del centro de formación.',
    createLabel: 'Nuevo Anuncio',
    createTitle: 'Registrar Anuncio',
    createSub: 'Publique un comunicado para la comunidad',
    editTitle: 'Actualizar Anuncio',
    showTitle: 'Detalle del Anuncio',
    confirm: '¿Está seguro de eliminar este anuncio?',
    mock: `[{ id: 1, title: 'Mantenimiento LMS', category: 'Sistemas', publish_date: '2026-08-25', author: 'Coordinación Académica' }]`,
    headers: `<th className="ps-4 py-3">ID</th><th className="py-3">Título</th><th className="py-3">Categoría</th><th className="py-3">Fecha</th><th className="py-3">Autor</th><th className="text-center py-3">Acciones</th>`,
    cells: `<td className="ps-4 fw-bold text-secondary">#{item.id}</td><td className="fw-bold">{item.title}</td><td>{item.category}</td><td>{item.publish_date}</td><td>{item.author}</td>`,
    extraState: `title: 'Mantenimiento LMS', category: 'Sistemas', publish_date: '2026-08-25', author: 'Coordinación Académica', summary: 'Actualización de servidores', content: 'Mantenimiento el sábado a las 10:00 PM.', training_center_id: 1, urlFoto: 'https://via.placeholder.com/600x400',`,
    showFields: fieldBlock('Título', 'item.title') + fieldBlock('Categoría', 'item.category') + fieldBlock('Fecha', 'item.publish_date') + fieldBlock('Autor', 'item.author') + fieldBlock('Resumen', 'item.summary') + fieldBlock('Contenido', 'item.content') + photoBlock(),
    createFields: [
      { name: 'title', label: 'Título', type: 'text' },
      { name: 'category', label: 'Categoría', type: 'text' },
      { name: 'publish_date', label: 'Fecha de publicación', type: 'date' },
      { name: 'author', label: 'Autor', type: 'text' },
      { name: 'summary', label: 'Resumen', type: 'text' },
      { name: 'content', label: 'Contenido', type: 'textarea' },
      { name: 'training_center_id', label: 'Centro de Formación', type: 'select', optionsFrom: 'trainingCenters' },
      { name: 'urlFoto', label: 'Fotografía del Anuncio', type: 'file' },
    ],
  },
  {
    folder: 'computer',
    Index: 'ComputerIndex',
    Create: 'ComputerCreate',
    Edit: 'ComputerEdit',
    Show: 'ComputerShow',
    title: 'Listado de Equipos',
    desc: 'Equipos de cómputo asignados a ambientes de formación.',
    createLabel: 'Nuevo Equipo',
    createTitle: 'Registrar Equipo',
    createSub: 'Registre un computador de ambiente',
    editTitle: 'Actualizar Equipo',
    showTitle: 'Información del Equipo',
    confirm: '¿Está seguro de eliminar este equipo?',
    mock: `[{ id: 1, number: 12, brand: 'Lenovo', environment: { name: 'Ambiente 204' } }]`,
    headers: `<th className="ps-4 py-3">ID</th><th className="py-3">Número</th><th className="py-3">Marca</th><th className="py-3">Ambiente</th><th className="text-center py-3">Acciones</th>`,
    cells: `<td className="ps-4 fw-bold text-secondary">#{item.id}</td><td>{item.number}</td><td>{item.brand}</td><td>{item.environment?.name}</td>`,
    extraState: `number: 12, brand: 'Lenovo', environment_id: 1, urlFoto: 'https://via.placeholder.com/600x400',`,
    showFields: fieldBlock('Número', 'item.number') + fieldBlock('Marca', 'item.brand') + fieldBlock('Ambiente', 'item.environment_id') + photoBlock(),
    createFields: [
      { name: 'number', label: 'Número de equipo', type: 'number' },
      { name: 'brand', label: 'Marca', type: 'text' },
      { name: 'environment_id', label: 'Ambiente', type: 'select', optionsFrom: 'environments' },
      { name: 'urlFoto', label: 'Fotografía del Equipo', type: 'file' },
    ],
  },
  {
    folder: 'course',
    Index: 'CourseIndex',
    Create: 'CourseCreate',
    Edit: 'CourseEdit',
    Show: 'CourseShow',
    title: 'Listado de Cursos',
    desc: 'Cursos asociados a fichas, centros y ambientes.',
    createLabel: 'Nuevo Curso',
    createTitle: 'Registrar Curso',
    createSub: 'Complete la programación del curso',
    editTitle: 'Actualizar Curso',
    showTitle: 'Información del Curso',
    confirm: '¿Está seguro de eliminar este curso?',
    mock: `[{ id: 1, course_number: 'C-101', day: 'Martes', training_center: { name: 'Centro de Comercio y Servicios' }, cohort: { code: '2874057' } }]`,
    headers: `<th className="ps-4 py-3">ID</th><th className="py-3">Número</th><th className="py-3">Día</th><th className="py-3">Centro</th><th className="py-3">Ficha</th><th className="text-center py-3">Acciones</th>`,
    cells: `<td className="ps-4 fw-bold text-secondary">#{item.id}</td><td>{item.course_number}</td><td>{item.day}</td><td>{item.training_center?.name}</td><td>{item.cohort?.code}</td>`,
    extraState: `course_number: 'C-101', day: 'Martes', training_center_id: 1, cohort_id: 1, environment_id: 1, urlFoto: 'https://via.placeholder.com/600x400',`,
    showFields: fieldBlock('Número de curso', 'item.course_number') + fieldBlock('Día', 'item.day') + fieldBlock('Centro', 'item.training_center_id') + fieldBlock('Ficha', 'item.cohort_id') + fieldBlock('Ambiente', 'item.environment_id') + photoBlock(),
    createFields: [
      { name: 'course_number', label: 'Número de curso', type: 'text' },
      { name: 'day', label: 'Día', type: 'text' },
      { name: 'training_center_id', label: 'Centro de Formación', type: 'select', optionsFrom: 'trainingCenters' },
      { name: 'cohort_id', label: 'Ficha', type: 'select', optionsFrom: 'cohorts' },
      { name: 'environment_id', label: 'Ambiente', type: 'select', optionsFrom: 'environments' },
      { name: 'urlFoto', label: 'Fotografía del Curso', type: 'file' },
    ],
  },
  {
    folder: 'apprentice',
    Index: 'ApprenticeIndex',
    Create: 'ApprenticeCreate',
    Edit: 'ApprenticeEdit',
    Show: 'ApprenticeShow',
    title: 'Listado de Aprendices',
    desc: 'Aprendices matriculados, sus cursos y equipos asignados.',
    createLabel: 'Nuevo Aprendiz',
    createTitle: 'Registrar Aprendiz',
    createSub: 'Ingrese los datos del aprendiz',
    editTitle: 'Actualizar Aprendiz',
    showTitle: 'Información del Aprendiz',
    confirm: '¿Está seguro de eliminar este aprendiz?',
    mock: `[{ id: 1, name: 'Ana Gómez', email: 'agomez@soy.sena.edu.co', cell_number: '3001234567', course: { course_number: 'C-101' } }]`,
    headers: `<th className="ps-4 py-3">ID</th><th className="py-3">Nombre</th><th className="py-3">Email</th><th className="py-3">Celular</th><th className="py-3">Curso</th><th className="text-center py-3">Acciones</th>`,
    cells: `<td className="ps-4 fw-bold text-secondary">#{item.id}</td><td className="fw-bold">{item.name}</td><td>{item.email}</td><td>{item.cell_number}</td><td>{item.course?.course_number}</td>`,
    extraState: `name: 'Ana Gómez', email: 'agomez@soy.sena.edu.co', cell_number: '3001234567', course_id: 1, computer_id: 1, urlFoto: 'https://via.placeholder.com/600x400',`,
    showFields: fieldBlock('Nombre', 'item.name') + fieldBlock('Email', 'item.email') + fieldBlock('Celular', 'item.cell_number') + fieldBlock('Curso', 'item.course_id') + fieldBlock('Equipo', 'item.computer_id') + photoBlock(),
    createFields: [
      { name: 'name', label: 'Nombre Completo', type: 'text' },
      { name: 'email', label: 'Correo Electrónico', type: 'email' },
      { name: 'cell_number', label: 'Número de celular', type: 'text' },
      { name: 'course_id', label: 'Curso', type: 'select', optionsFrom: 'courses' },
      { name: 'computer_id', label: 'Equipo', type: 'select', optionsFrom: 'computers' },
      { name: 'urlFoto', label: 'Fotografía del Aprendiz', type: 'file' },
    ],
  },
];

function initialState(fields) {
  const obj = {};
  for (const f of fields) obj[f.name] = f.type === 'file' ? null : '';
  return JSON.stringify(obj).replace(/"([^"]+)":/g, '$1:');
}

function catalogImport(fields) {
  const used = [...new Set(fields.filter((f) => f.optionsFrom).map((f) => f.optionsFrom))];
  if (!used.length) return '';
  return `import { ${used.join(', ')} } from '../../data/mockCatalogs';\n`;
}

function renderField(f) {
  if (f.type === 'file') {
    return `
                  <div className="mb-4">
                    <label htmlFor="${f.name}" className="form-label fw-bold text-secondary mb-1">${f.label}</label>
                    <input type="file" id="${f.name}" name="${f.name}" className="form-control" accept="image/*" onChange={handleChange} />
                  </div>`;
  }
  if (f.type === 'textarea') {
    return `
                  <div className="mb-4">
                    <label htmlFor="${f.name}" className="form-label text-secondary">${f.label}</label>
                    <textarea id="${f.name}" name="${f.name}" className="form-control" rows="4" value={formData.${f.name}} onChange={handleChange} required />
                  </div>`;
  }
  if (f.type === 'select') {
    let options;
    if (f.optionsFrom === 'areas' || f.optionsFrom === 'trainingCenters' || f.optionsFrom === 'programs' || f.optionsFrom === 'environments') {
      options = `{${f.optionsFrom}.map((opt) => (<option key={opt.id} value={opt.id}>{opt.name}</option>))}`;
    } else if (f.optionsFrom === 'offers') {
      options = `{offers.map((opt) => (<option key={opt.id} value={opt.id}>{opt.day} — {opt.program?.name}</option>))}`;
    } else if (f.optionsFrom === 'cohorts') {
      options = `{cohorts.map((opt) => (<option key={opt.id} value={opt.id}>{opt.code}</option>))}`;
    } else if (f.optionsFrom === 'courses') {
      options = `{courses.map((opt) => (<option key={opt.id} value={opt.id}>{opt.course_number}</option>))}`;
    } else if (f.optionsFrom === 'computers') {
      options = `{computers.map((opt) => (<option key={opt.id} value={opt.id}>#{opt.number} {opt.brand}</option>))}`;
    } else {
      options = f.options.map((o) => `<option value="${o}">${o}</option>`).join('\n                      ');
    }
    return `
                  <div className="form-floating mb-4">
                    <select name="${f.name}" id="${f.name}" className="form-select" value={formData.${f.name}} onChange={handleChange} required>
                      <option value="" disabled>Seleccione una opción...</option>
                      ${options}
                    </select>
                    <label htmlFor="${f.name}" className="text-secondary">${f.label}</label>
                  </div>`;
  }
  return `
                  <div className="form-floating mb-4">
                    <input type="${f.type}" className="form-control" id="${f.name}" name="${f.name}" placeholder="${f.label}" value={formData.${f.name}} onChange={handleChange} required />
                    <label htmlFor="${f.name}" className="text-secondary">${f.label}</label>
                  </div>`;
}

function createTpl(r) {
  const indexTo = `/${r.folder}`;
  return `
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RequireAuth from '../../components/RequireAuth';
import FormCard from '../../components/FormCard';
${catalogImport(r.createFields)}
export default function ${r.Create}() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(${initialState(r.createFields)});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Guardar ${r.folder}:', formData);
    navigate('${indexTo}');
  };

  return (
    <RequireAuth>
      <FormCard title="${r.createTitle}" subtitle="${r.createSub}" indexTo="${indexTo}">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          ${r.createFields.map(renderField).join('\n')}
          <div className="d-flex justify-content-between align-items-center mt-4">
            <Link to="/" className="btn btn-outline-secondary px-4 py-2 fw-medium rounded-3">Cancelar</Link>
            <button type="submit" className="btn btn-dark px-5 py-2 fw-bold rounded-3">Guardar Registro</button>
          </div>
        </form>
      </FormCard>
    </RequireAuth>
  );
}
`;
}

function editTpl(r) {
  const indexTo = `/${r.folder}`;
  const firstText = r.createFields.find((f) => f.type !== 'file' && f.type !== 'select')?.name || 'name';
  return `
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import RequireAuth from '../../components/RequireAuth';
import FormCard from '../../components/FormCard';
${catalogImport(r.createFields)}
export default function ${r.Edit}() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(${initialState(r.createFields)});

  useEffect(() => {
    setFormData((prev) => ({ ...prev, ${firstText}: prev.${firstText} || 'Registro ${r.folder} #' + id }));
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Actualizar ${r.folder}', id, formData);
    navigate('${indexTo}');
  };

  return (
    <RequireAuth>
      <FormCard title="${r.editTitle}" subtitle="Modifique los datos del registro seleccionado">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          ${r.createFields.map(renderField).join('\n')}
          <div className="d-flex justify-content-center align-items-center gap-2 mt-4">
            <button type="button" onClick={() => navigate(-1)} className="btn btn-light border fw-bold px-4 py-2 rounded-3">Cancelar</button>
            <button type="submit" className="btn text-white fw-bold px-4 py-2 rounded-3" style={{ backgroundColor: '#39A900' }}>Actualizar</button>
          </div>
        </form>
      </FormCard>
    </RequireAuth>
  );
}
`;
}

for (const r of resources) {
  if (!r.skipIndex) {
    write(`${r.folder}/${r.Index}.jsx`, indexTpl({
      folder: r.folder,
      Comp: r.Index,
      title: r.title,
      desc: r.desc,
      createTo: `/${r.folder}/create`,
      createLabel: r.createLabel,
      headers: r.headers,
      mock: r.mock,
      cells: r.cells,
      showTo: `/${r.folder}/\${item.id}`,
      editTo: `/${r.folder}/\${item.id}/edit`,
      confirm: r.confirm,
    }));
  }
  if (!r.skipCreate) {
    write(`${r.folder}/${r.Create}.jsx`, createTpl(r));
  }
  write(`${r.folder}/${r.Edit}.jsx`, editTpl(r));
  write(`${r.folder}/${r.Show}.jsx`, showTpl({
    Comp: r.Show,
    title: r.showTitle,
    indexTo: `/${r.folder}`,
    fields: r.showFields,
    extraState: r.extraState,
  }));
}

write('anuncios/AnunciosIndex.jsx', `
import React from 'react';
import { Link } from 'react-router-dom';
import { anuncios } from '../../data/publicContent';

export default function AnunciosIndex() {
  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold" style={{ color: '#00324D' }}>Anuncios e Informativos</h2>
          <p className="text-muted mb-0">Comunicados oficiales para la comunidad SENA</p>
        </div>
        <Link to="/" className="btn btn-outline-secondary btn-sm">
          <i className="bi bi-arrow-left me-1"></i> Volver al Inicio
        </Link>
      </div>
      <div className="row g-4">
        {anuncios.map((anuncio) => (
          <div className="col-md-6" key={anuncio.id}>
            <div className="card h-100 border-2 shadow-sm rounded-4 overflow-hidden">
              <img src={anuncio.imagen} className="card-img-top" alt={anuncio.titulo} style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="badge bg-success bg-opacity-10 text-success fw-bold px-3 py-2 rounded-pill">{anuncio.categoria}</span>
                  <small className="text-muted"><i className="bi bi-calendar3 me-1"></i>{anuncio.fecha}</small>
                </div>
                <h5 className="fw-bold text-dark mt-2">{anuncio.titulo}</h5>
                <p className="text-muted small mb-3">{anuncio.resumen}</p>
                <Link to={\`/anuncios/\${anuncio.id}\`} className="btn text-white fw-bold w-100 rounded-3" style={{ backgroundColor: '#39A900' }}>
                  Leer Anuncio Completo <i className="bi bi-arrow-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
`);

write('anuncios/AnunciosShow.jsx', `
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { anuncios } from '../../data/publicContent';

export default function AnunciosShow() {
  const { id } = useParams();
  const anuncio = anuncios.find((item) => String(item.id) === String(id));

  if (!anuncio) {
    return (
      <div className="container py-5 text-center">
        <h4>Anuncio no encontrado</h4>
        <Link to="/anuncios" className="btn btn-dark mt-3">Volver</Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <Link to="/anuncios" className="btn btn-link text-decoration-none text-muted mb-3 p-0">
            <i className="bi bi-arrow-left me-1"></i> Volver a Anuncios
          </Link>
          <div className="card border-2 shadow-sm rounded-4 overflow-hidden">
            <img src={anuncio.imagen} className="w-100" style={{ maxHeight: '350px', objectFit: 'cover' }} alt={anuncio.titulo} />
            <div className="card-body p-4 p-md-5 bg-white">
              <span className="badge px-3 py-2 rounded-pill text-white mb-3" style={{ backgroundColor: '#00324D' }}>{anuncio.categoria}</span>
              <h2 className="fw-bold text-dark mb-3">{anuncio.titulo}</h2>
              <div className="d-flex align-items-center gap-3 text-muted small border-bottom pb-3 mb-4">
                <span><i className="bi bi-person-fill me-1"></i>{anuncio.autor}</span>
                <span><i className="bi bi-calendar-event me-1"></i>{anuncio.fecha}</span>
              </div>
              <p className="fs-6 text-secondary mb-0">{anuncio.contenido}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
`);

write('ofertas/OfertasIndex.jsx', `
import React from 'react';
import { Link } from 'react-router-dom';
import { ofertas } from '../../data/publicContent';

export default function OfertasIndex() {
  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold" style={{ color: '#00324D' }}>Oferta Educativa SENA</h2>
          <p className="text-muted mb-0">Programas de formación disponibles para inscripción</p>
        </div>
        <Link to="/" className="btn btn-outline-secondary btn-sm">
          <i className="bi bi-arrow-left me-1"></i> Volver al Inicio
        </Link>
      </div>
      <div className="row g-4">
        {ofertas.map((oferta) => (
          <div className="col-md-6 col-lg-4" key={oferta.id}>
            <div className="card h-100 border-2 shadow-sm rounded-4 overflow-hidden">
              <img src={oferta.imagen} className="card-img-top" style={{ height: '180px', objectFit: 'cover' }} alt={oferta.titulo} />
              <div className="card-body p-4 d-flex flex-column">
                <span className="badge text-uppercase fw-bold px-3 py-2 rounded-pill mb-2 w-auto me-auto" style={{ backgroundColor: '#00324D', color: 'white' }}>
                  {oferta.modalidad}
                </span>
                <h5 className="fw-bold text-dark mt-2 mb-2">{oferta.titulo}</h5>
                <p className="text-muted small flex-grow-1">{oferta.descripcion}</p>
                <ul className="list-unstyled small text-secondary my-3 border-top pt-2">
                  <li><i className="bi bi-clock me-2 text-success"></i><strong>Duración:</strong> {oferta.duracion}</li>
                  <li><i className="bi bi-people me-2 text-success"></i><strong>Cupos:</strong> {oferta.cupos} disponibles</li>
                </ul>
                <Link to={\`/ofertas/\${oferta.id}\`} className="btn text-white fw-bold w-100 rounded-3" style={{ backgroundColor: '#39A900' }}>
                  Ver Detalles e Inscribirme
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
`);

write('ofertas/OfertasShow.jsx', `
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ofertas } from '../../data/publicContent';

export default function OfertasShow() {
  const { id } = useParams();
  const oferta = ofertas.find((item) => String(item.id) === String(id));

  if (!oferta) {
    return (
      <div className="container py-5 text-center">
        <h4>Oferta no encontrada</h4>
        <Link to="/ofertas" className="btn btn-dark mt-3">Volver</Link>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Link to="/ofertas" className="btn btn-outline-secondary btn-sm rounded-pill fw-bold px-3">
          <i className="bi bi-arrow-left me-1"></i> Volver a Ofertas
        </Link>
        <span className="text-muted small"><i className="bi bi-journal-plus me-1"></i> Oferta #{oferta.id}</span>
      </div>
      <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
        <div className="w-100 bg-dark text-center overflow-hidden" style={{ maxHeight: '350px' }}>
          <img src={oferta.imagen} className="img-fluid w-100 object-fit-cover" alt={oferta.titulo} style={{ maxHeight: '350px' }} />
        </div>
        <div className="card-body p-4 p-md-5">
          <div className="d-flex align-items-center gap-2 mb-3">
            <span className="badge bg-success-subtle text-success border border-success px-3 py-2 rounded-pill fw-bold">{oferta.modalidad}</span>
            <span className="badge bg-light text-dark border px-3 py-2 rounded-pill">{oferta.cupos} Cupos disponibles</span>
          </div>
          <h2 className="fw-bold text-dark mb-3">{oferta.titulo}</h2>
          <p className="text-secondary">{oferta.descripcion}</p>
          <div className="mb-4 p-3 bg-light rounded-3 border-start border-4 border-success">
            <h6 className="fw-bold text-dark mb-1">Requisitos de Ingreso</h6>
            <p className="mb-0 text-muted small">{oferta.requisitos}</p>
          </div>
          <div className="row g-3">
            <div className="col-md-4"><div className="p-3 bg-light rounded-3 h-100"><small className="text-muted d-block">Duración</small><span className="fw-bold">{oferta.duracion}</span></div></div>
            <div className="col-md-4"><div className="p-3 bg-light rounded-3 h-100"><small className="text-muted d-block">Modalidad</small><span className="fw-bold">{oferta.modalidad}</span></div></div>
            <div className="col-md-4"><div className="p-3 bg-light rounded-3 h-100"><small className="text-muted d-block">Centro</small><span className="fw-bold">{oferta.centro}</span></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
`);

write('eventos/EventosIndex.jsx', `
import React from 'react';
import { Link } from 'react-router-dom';
import { eventos } from '../../data/publicContent';

export default function EventosIndex() {
  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold" style={{ color: '#00324D' }}>Próximos Eventos</h2>
          <p className="text-muted mb-0">Agenda Institucional y Actividades Académicas</p>
        </div>
        <Link to="/" className="btn btn-outline-secondary btn-sm">
          <i className="bi bi-arrow-left me-1"></i> Volver al Inicio
        </Link>
      </div>
      <div className="row g-4">
        {eventos.map((evento) => (
          <div className="col-md-6" key={evento.id}>
            <div className="card border-2 shadow-sm rounded-4 overflow-hidden">
              <div className="row g-0">
                <div className="col-sm-5">
                  <img src={evento.imagen} className="w-100 h-100" style={{ objectFit: 'cover', minHeight: '200px' }} alt={evento.titulo} />
                </div>
                <div className="col-sm-7">
                  <div className="card-body p-4">
                    <span className="badge bg-warning text-dark fw-bold mb-2"><i className="bi bi-calendar3 me-1"></i> {evento.fecha}</span>
                    <h5 className="fw-bold text-dark">{evento.titulo}</h5>
                    <p className="text-muted small mb-2"><i className="bi bi-geo-alt-fill text-danger me-1"></i>{evento.lugar}</p>
                    <p className="text-muted small mb-3"><i className="bi bi-clock-fill me-1"></i>{evento.hora}</p>
                    <Link to={\`/eventos/\${evento.id}\`} className="btn btn-sm text-white fw-bold px-3 py-2 rounded-3" style={{ backgroundColor: '#00324D' }}>
                      Más Información
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
`);

write('eventos/EventosShow.jsx', `
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { eventos } from '../../data/publicContent';

export default function EventosShow() {
  const { id } = useParams();
  const evento = eventos.find((item) => String(item.id) === String(id));

  if (!evento) {
    return (
      <div className="container py-5 text-center">
        <h4>Evento no encontrado</h4>
        <Link to="/eventos" className="btn btn-dark mt-3">Volver</Link>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Link to="/eventos" className="btn btn-outline-secondary btn-sm rounded-pill fw-bold px-3">
          <i className="bi bi-arrow-left me-1"></i> Volver a Eventos
        </Link>
        <span className="text-muted small"><i className="bi bi-calendar-event me-1"></i> Evento #{evento.id}</span>
      </div>
      <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
        <img src={evento.imagen} className="img-fluid w-100 object-fit-cover" alt={evento.titulo} style={{ maxHeight: '350px' }} />
        <div className="card-body p-4 p-md-5">
          <span className="badge bg-primary-subtle text-primary border border-primary px-3 py-2 rounded-pill fw-bold mb-3">{evento.organizador}</span>
          <h2 className="fw-bold text-dark mb-3">{evento.titulo}</h2>
          <p className="text-secondary">{evento.descripcion}</p>
          <div className="row g-3">
            <div className="col-md-3"><div className="p-3 bg-light rounded-3 h-100"><small className="text-muted d-block">Fecha</small><span className="fw-bold">{evento.fecha}</span></div></div>
            <div className="col-md-3"><div className="p-3 bg-light rounded-3 h-100"><small className="text-muted d-block">Hora</small><span className="fw-bold">{evento.hora}</span></div></div>
            <div className="col-md-3"><div className="p-3 bg-light rounded-3 h-100"><small className="text-muted d-block">Lugar</small><span className="fw-bold">{evento.lugar}</span></div></div>
            <div className="col-md-3"><div className="p-3 bg-light rounded-3 h-100"><small className="text-muted d-block">Organizador</small><span className="fw-bold">{evento.organizador}</span></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
`);

console.log('done');
