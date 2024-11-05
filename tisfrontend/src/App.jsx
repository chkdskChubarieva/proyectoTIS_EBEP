import LayoutPublic from "./layouts/LayoutPublic";
import PageHome from "./pagepublic/PageHome";
import LayoutEstudiante from "./layouts/LayoutEstudiante";
import LayoutDocente from "./layouts/LayoutDocente";
import ProtectedRoutes from "./pageauth/ProtectedRoutes";
import Register from "./pageauth/Register";
import InicioEst from "./page_estudiante/InicioEst";
import InicioDoc from "./page_docente/InicioDoc";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pageauth/Login";

import JoinGroupForm from "./components/grupo-empresa/JoinGroupForm";
import RegistroEmpresa from "./components/grupo-empresa/RegistroEmpresa";
import SprintPlanning from "./components/grupo-empresa/SprintPlanning";

import './app.css'
import PreviaEmpresas from "./page_docente/PreviaEmpresas";



export const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LayoutPublic />}>
                    <Route index element={<PageHome />} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                </Route>
                <Route element={<ProtectedRoutes/>}>
                    <Route path="/estudiante" element={<LayoutEstudiante/>}>
                        <Route path="" element={<InicioEst />} />
                        <Route path="info" element={<JoinGroupForm />} />
                        <Route path="registro" element={<RegistroEmpresa />} />
                        <Route path="unirse" element={<JoinGroupForm />} />
                        <Route path="calendario" element={<JoinGroupForm />} />
                        <Route path="registro-sprint" element={<SprintPlanning />} />
                        <Route path="product-backlog" element={<JoinGroupForm />} />
                    </Route>
                    <Route path="/docente" element={<LayoutDocente />}>
                        <Route index element={<InicioDoc />} />
                        <Route path="/docente/empresas" element={<PreviaEmpresas/>} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
};


export default App; // Exportación por defecto