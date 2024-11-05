import React from "react";
import AuthUser from "../pageauth/AuthUser";
import Config from "../Config";

const BotonLogout = ({ hrefBoton, nombreBoton }) => {
    const { getLogout } = AuthUser();

    const logoutUser = () => {
        Config.getLogout("/logout").then((response) => {
            getLogout();
            console.log(response);
        });
    };

    return (
        <>
            <a
                href={hrefBoton}
                className="flex items-center justify-center gap-2 p-2 text-white transition-all bg-red-600 rounded select-none hover:bg-red-500 hover:shadow"
                onClick={logoutUser}
            >
                <i className="fa-solid fa-right-from-bracket"></i>
                {nombreBoton}
            </a>
        </>
    );
};

export default BotonLogout;
