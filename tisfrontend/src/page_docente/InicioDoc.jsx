import { useState, useEffect } from "react";


import Header from "../components/Header";
import Navbar from "../components/Navbar";
import InfoUsuario from "../components/InfoUsuario";
import Config from "../Config";


const InicioDoc = () => {
    //const botonesNavbar = [{ nombreBoton: " ", hrefBoton: "#" }];
    const [docente, setDocente] = useState({});

    useEffect(() => {
        getInfoDoc(); 
    }, []);

    const getInfoDoc = async () => {
        try {
            const response = await Config.getInfoDoc();
            console.log(response);
            setDocente(response.data);
        } catch (error) {
            console.error(
                "Error al obtener la información del estudiante:",
                error
            );
        }
    };

    
    return (
        <>
            <Header />
            <Navbar />
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
                                info={`${docente.nombre} ${docente.apellido}`}
                            />

                            <InfoUsuario
                                icono={<i className="fa-solid fa-envelope"></i>}
                                titulo={"Correo: "}
                                info={docente.correo}
                            />

                            <InfoUsuario
                                icono={<i className="fa-solid fa-id-badge"></i>}
                                titulo={"Nombre de usuario: "}
                                info={docente.nombre_usuario}
                            />
                            
                            <InfoUsuario
                                icono={<i className="fa-solid fa-building"></i>}
                                titulo={"Grupo Empresas Asignadas: "}
                                info={"3"}
                            />

                            <InfoUsuario
                                icono={
                                    <i className="fa-solid fa-graduation-cap"></i>
                                }
                                titulo={"Info por asignar "}
                                info={"(Poner alguna info)"}
                            
                            />
                            
                        </div>

                        <div className="flex justify-center flex-1 align-middle">
                            <img
                                src={`https://ui-avatars.com/api/?size=100&bold=true&rounded=true&name=${docente.nombre}+${docente.apellido}`}
                                alt="avatar-usuario"
                            />
                        </div>
                    </section>
                </article>
            </div>
        </>
    );
};

export default InicioDoc;
