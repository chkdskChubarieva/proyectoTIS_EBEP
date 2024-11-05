import React from "react";

const InfoUsuario = ({ icono, titulo, info }) => {
    return (
        <>
            <div className="text-lg flex">
                <div className="w-8">{icono}</div>

                <span>
                    <strong className="font-semibold">{titulo}</strong>
                    {info}
                </span>
            </div>
        </>
    );
};

export default InfoUsuario;
