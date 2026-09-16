import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'

// Importo componentes globales
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'

// importo componentes de autenticación Login y register
import Login from './pages/auth/login'
import Register from './pages/auth/register'

// importo area con sus respectivos cruds
import AreaCreate from './pages/area/AreaCreate'
import AreaIndex from './pages/area/AreaIndex'
import AreaEdit from './pages/area/AreaEdit'
import AreaShow from './pages/area/AreaShow'

// importo centro de formacion con sus respectivos cruds
import TrainingcenterCreate from './pages/trainingcenter/TrainingcenterCreate'
import TrainingcenterIndex from './pages/trainingcenter/TrainingcenterIndex'
import TrainingcenterEdit from './pages/trainingcenter/TrainingcenterEdit'
import TrainingcenterShow from './pages/trainingcenter/TrainingcenterShow'

// importo instructor con sus respectivos cruds
import TeacherCreate from './pages/teacher/TeacherCreate'
import TeacherIndex from './pages/teacher/TeacherIndex'
import TeacherEdit from './pages/teacher/TeacherEdit'
import TeacherShow from './pages/teacher/TeacherShow'

// importo programa con sus respectivos cruds
import ProgramCreate from './pages/program/ProgramCreate'
import ProgramIndex from './pages/program/ProgramIndex'
import ProgramEdit from './pages/program/ProgramEdit'
import ProgramShow from './pages/program/ProgramShow'

// importo oferta con sus respectivos cruds
import OfferCreate from './pages/offer/OfferCreate'
import OfferIndex from './pages/offer/OfferIndex'
import OfferEdit from './pages/offer/OfferEdit'
import OfferShow from './pages/offer/OfferShow'

// importo ficha con sus respectivos cruds
import CohortCreate from './pages/cohort/CohortCreate'
import CohortIndex from './pages/cohort/CohortIndex'
import CohortEdit from './pages/cohort/CohortEdit'
import CohortShow from './pages/cohort/CohortShow'

// importo ambiente con sus respectivos cruds
import EnvironmentCreate from './pages/environment/EnvironmentCreate'
import EnvironmentIndex from './pages/environment/EnvironmentIndex'
import EnvironmentEdit from './pages/environment/EnvironmentEdit'
import EnvironmentShow from './pages/environment/EnvironmentShow'

// importo anuncio con sus respectivos cruds
import AdvertisementCreate from './pages/advertisement/AdvertisementCreate'
import AdvertisementIndex from './pages/advertisement/AdvertisementIndex'
import AdvertisementEdit from './pages/advertisement/AdvertisementEdit'
import AdvertisementShow from './pages/advertisement/AdvertisementShow'

// importo computador con sus respectivos cruds
import ComputerCreate from './pages/computer/ComputerCreate'
import ComputerIndex from './pages/computer/ComputerIndex'
import ComputerEdit from './pages/computer/ComputerEdit'
import ComputerShow from './pages/computer/ComputerShow'

// importo curso con sus respectivos cruds
import CourseCreate from './pages/course/CourseCreate'
import CourseIndex from './pages/course/CourseIndex'
import CourseEdit from './pages/course/CourseEdit'
import CourseShow from './pages/course/CourseShow'

// importo aprendiz con sus respectivos cruds
import ApprenticeCreate from './pages/apprentice/ApprenticeCreate'
import ApprenticeIndex from './pages/apprentice/ApprenticeIndex'
import ApprenticeEdit from './pages/apprentice/ApprenticeEdit'
import ApprenticeShow from './pages/apprentice/ApprenticeShow'

// importo componentes de ejemplo con sus respectivos cruds
import AnunciosIndex from './pages/anuncios/AnunciosIndex'
import AnunciosShow from './pages/anuncios/AnunciosShow'
import OfertasIndex from './pages/ofertas/OfertasIndex'
import OfertasShow from './pages/ofertas/OfertasShow'
import EventosIndex from './pages/eventos/EventosIndex'
import EventosShow from './pages/eventos/EventosShow'

const resourceRoutes = (base, Index, Create, Show, Edit) => (
  <>
    <Route path={`/${base}`} element={<Index />} />
    <Route path={`/${base}/create`} element={<Create />} />
    <Route path={`/${base}/:id`} element={<Show />} />
    <Route path={`/${base}/:id/edit`} element={<Edit />} />
  </>
)

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {resourceRoutes('area', AreaIndex, AreaCreate, AreaShow, AreaEdit)}
        <Route path="/area/areacreate" element={<AreaCreate />} />
        <Route path="/area/areaindex" element={<AreaIndex />} />
        <Route path="/area/areaedit/:id" element={<AreaEdit />} />
        <Route path="/area/areashow/:id" element={<AreaShow />} />

        {resourceRoutes('trainingcenter', TrainingcenterIndex, TrainingcenterCreate, TrainingcenterShow, TrainingcenterEdit)}
        <Route path="/trainingcenter/trainingcentercreate" element={<TrainingcenterCreate />} />
        <Route path="/trainingcenter/trainingcenterindex" element={<TrainingcenterIndex />} />

        {resourceRoutes('teacher', TeacherIndex, TeacherCreate, TeacherShow, TeacherEdit)}
        <Route path="/teacher/teachercreate" element={<TeacherCreate />} />
        <Route path="/teacher/teacherindex" element={<TeacherIndex />} />

        {resourceRoutes('program', ProgramIndex, ProgramCreate, ProgramShow, ProgramEdit)}
        {resourceRoutes('offer', OfferIndex, OfferCreate, OfferShow, OfferEdit)}
        {resourceRoutes('cohort', CohortIndex, CohortCreate, CohortShow, CohortEdit)}
        {resourceRoutes('environment', EnvironmentIndex, EnvironmentCreate, EnvironmentShow, EnvironmentEdit)}
        {resourceRoutes('advertisement', AdvertisementIndex, AdvertisementCreate, AdvertisementShow, AdvertisementEdit)}
        {resourceRoutes('computer', ComputerIndex, ComputerCreate, ComputerShow, ComputerEdit)}
        {resourceRoutes('course', CourseIndex, CourseCreate, CourseShow, CourseEdit)}
        {resourceRoutes('apprentice', ApprenticeIndex, ApprenticeCreate, ApprenticeShow, ApprenticeEdit)}

        <Route path="/anuncios" element={<AnunciosIndex />} />
        <Route path="/anuncios/:id" element={<AnunciosShow />} />
        <Route path="/ofertas" element={<OfertasIndex />} />
        <Route path="/ofertas/:id" element={<OfertasShow />} />
        <Route path="/eventos" element={<EventosIndex />} />
        <Route path="/eventos/:id" element={<EventosShow />} />
      </Routes>
      <Footer />
    </AuthProvider>
  )
}

export default App
