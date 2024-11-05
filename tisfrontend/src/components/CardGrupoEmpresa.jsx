import React from "react";

const CardGrupoEmpresa = ({ nombreGrupoEmpresa, imagen }) => {
    return (
        <>
            <div className="flex flex-col rounded-md overflow-hidden select-none cursor-pointer hover:scale-95 transition-all shadow">
                <div className="bg-slate-200 h-36">
                    <img
                        className="object-cover w-full h-full" //cambiar entre cover o contain para ver cual queda mejor
                        src={imagen}
                        alt="logo-grupoempresa"
                    />
                </div>
                <div className="bg-primary-600 px-3 py-4 text-center">
                    <span className="font-semibold text-white text-lg">
                        {nombreGrupoEmpresa}
                    </span>
                </div>
            </div>
        </>
    );
};

export default CardGrupoEmpresa;
