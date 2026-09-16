export const areas = [
  { id: 1, name: 'Sistemas e Informática' },
  { id: 2, name: 'Gestión Administrativa' },
  { id: 3, name: 'Agropecuaria' },
];

export const trainingCenters = [
  { id: 1, name: 'Centro de Comercio y Servicios', location: 'Neiva' },
  { id: 2, name: 'Centro de Formación Central', location: 'Bogotá' },
];

export const programs = [
  { id: 1, name: 'ADSO', type: 'Tecnólogo', modality: 'Presencial' },
  { id: 2, name: 'Gestión Empresarial', type: 'Técnico', modality: 'Virtual' },
];

export const offers = [
  { id: 1, day: 'Lunes a Viernes', program: { name: 'ADSO' } },
  { id: 2, day: 'Sábados', program: { name: 'Gestión Empresarial' } },
];

export const cohorts = [
  { id: 1, code: '2874057' },
  { id: 2, code: '2874100' },
];

export const environments = [
  { id: 1, name: 'Ambiente 204' },
  { id: 2, name: 'Sala de Sistemas 1' },
];

export const computers = [
  { id: 1, number: 12, brand: 'Lenovo' },
  { id: 2, number: 8, brand: 'HP' },
];

export const courses = [
  { id: 1, course_number: 'C-101' },
  { id: 2, course_number: 'C-202' },
];
