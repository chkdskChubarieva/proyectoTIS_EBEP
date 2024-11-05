import { useState, useEffect } from "react";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import InfoUsuario from "../components/InfoUsuario";
import Config from "../Config";

const InicioEst = () => {
    //const botonesNavbar = [{ nombreBoton: " ", hrefBoton: "#" }];
    const [estudiante, setEstudiante] = useState({});

    useEffect(() => {
        getInfoEst(); 
    }, []);

    const getInfoEst = async () => {
        try {
            const response = await Config.getInfoEst();
            console.log(response);
            setEstudiante(response.data);
        } catch (error) {
            console.error(
                "Error al obtener la información del estudiante:",
                error
            );
        }
    };

    
    return (
        <section className="form-container">
            <div className="mx-auto w-fit">
                <div className="p-3 my-4 text-center rounded-md bg-primary-600">
                    <span className="text-xl font-semibold text-primary-100">
                        Bienvenido tu espacio de trabajo
                    </span>
                </div>

                <article className="px-6 py-5 mx-auto rounded-md bg-primary-600 w-fit text-primary-100">
                    <h1 className="flex justify-center mb-4 text-lg font-semibold">
                        Información de usuario
                    </h1>
                    <section className="flex gap-10">
                        <div className="space-y-2">
                            <InfoUsuario
                                icono={<i className="fa-solid fa-user"></i>}
                                titulo={"Usuario: "}
                                info={`${estudiante.nombre} ${estudiante.apellido}`}
                            />

                            <InfoUsuario
                                icono={<i className="fa-solid fa-envelope"></i>}
                                titulo={"Correo: "}
                                info={estudiante.correo}
                            />

                            <InfoUsuario
                                icono={<i className="fa-solid fa-id-badge"></i>}
                                titulo={"Código SISS: "}
                                info={estudiante.cod_sis}
                            />

                            <InfoUsuario
                                icono={<i className="fa-solid fa-building"></i>}
                                titulo={"Grupo-empresa: "}
                                info={"VistaSoft"}
                            />

                            <InfoUsuario
                                icono={
                                    <i className="fa-solid fa-graduation-cap"></i>
                                }
                                titulo={"Docente: "}
                                info={"David Escalera"}
                            />
                        </div>

                        <div className="flex justify-center flex-1 align-middle">
                            <img
                                src={`https://ui-avatars.com/api/?size=100&bold=true&rounded=true&name=${estudiante.nombre}+${estudiante.apellido}`}
                                alt="avatar-usuario"
                            />
                        </div>
                    </section>
                </article>
            </div>
        </section>
    );
};

export default InicioEst;
