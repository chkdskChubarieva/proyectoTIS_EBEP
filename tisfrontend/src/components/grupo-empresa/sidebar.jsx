import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

import Address from "../../assets/empresa/address.svg";
import Bracket from "../../assets/empresa/bracket.svg";
import Build from "../../assets/empresa/building.svg";
import Calendar from "../../assets/empresa/calendar.svg";
import HomeIcon from "../../assets/empresa/home.svg"; 
import Pencil from "../../assets/empresa/pencil.svg"; 
import Person from "../../assets/empresa/person.svg"; 
import Vector from "../../assets/empresa/Vector.svg"; 

const Sidebar = () => {

    const [grupoEmpresa, setGrupoEmpresa] = useState(true);


    return (
        <nav className="sidebar-container">
            {grupoEmpresa && <div className='logotipo-grupoempresa'>
                <img src={Person} alt="" />
                <p>Grupo empresa 1</p>
            </div>}
            <div>
                <Link to="/estudiante" exact="true" activeClassName="active">
                    <span role="img" aria-label="home" className='nav-aside'>
                        <img src={HomeIcon} alt="Inicio" />
                        <p>Inicio</p>
                    </span> 
                </Link>
            </div>

            <div className='line'></div>

            <div className="menu-group conteiner-nav">
                <span role="img" aria-label="group" className='nav-aside aside-head'>
                    <img src={Build} alt="Grupo Empresa" />
                    <p>Grupo Empresa</p>
                </span> 
                <ul>
                    <li>
                        <Link to="./info" activeClassName="active" >
                            <span role="img" aria-label="info" className='nav-aside'>
                                <img src={Vector} alt="Información" />
                                <p>Información</p>
                            </span> 
                        </Link>
                    </li>
                    <li>
                        <Link to="./registro" activeClassName="active" >
                            <span role="img" aria-label="register" className='nav-aside'>
                                <img src={Address} alt="Registro" />
                                <p>Registro</p>
                            </span> 
                        </Link>
                    </li>
                    <li>
                        <Link to="./unirse" activeClassName="active" >
                            <span role="img" aria-label="join" className='nav-aside'>
                                <img src={Bracket} alt="Unirse" />
                                <p>Unirse</p>
                            </span> 
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="menu-group conteiner-nav">
                <span role="img" aria-label="planning" className='nav-aside aside-head'>
                    <img src={Person} alt="Planificación" />
                    <p>Planificación</p>
                </span> 
                <ul>
                    {grupoEmpresa && <>
                        <li>
                        <Link to="./product-backlog" activeClassName="active" >
                            <span role="img" aria-label="calendar" className='nav-aside'>
                                <img src={Calendar} alt="Calendario" />
                                <p>Product backlog</p>
                            </span> 
                        </Link>
                    </li>
                    <li>
                        <Link to="./registro-sprint" activeClassName="active" >
                            <span role="img" aria-label="calendar" className='nav-aside'>
                                <img src={Calendar} alt="Calendario" />
                                <p>Registro Sprint</p>
                            </span> 
                        </Link>
                    </li>
                    </>
                    }
                    <li>
                        <Link to="./calendario" activeClassName="active" >
                            <span role="img" aria-label="calendar" className='nav-aside'>
                                <img src={Calendar} alt="Calendario" />
                                <p>Calendario</p>
                            </span> 
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <Link to="./evaluations" activeClassName="active" >
                    <span role="img" aria-label="evaluations" className='nav-aside'>
                        <img src={Pencil} alt="Evaluaciones" />
                        <p>Evaluaciones</p>
                    </span> 
                </Link>
            </div>
        </nav>
    );
};

export default Sidebar;
