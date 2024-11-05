import React, { useReducer } from 'react';
import axios from 'axios';
import './JoinGroupForm.css';
import Icon from "../../assets/empresa/zorro.png";
import CodeChecker from '../CodeChecker';

const initialState = {
    groupCode: '',
    message: '',
    error: false,
};

function reducer(state, action) {
    switch (action.type) {
        case 'SET_CODE':
            return { ...state, groupCode: action.payload };
        case 'SET_MESSAGE':
            return { ...state, message: action.payload, error: action.error };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}

const JoinGroupForm = () => {
    const userData = JSON.parse(sessionStorage.getItem('user')); 
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleJoinClick = async () => {

        const userID = userData ? userData.ID_usuario : null;
        console.log(userID);
        if (!state.groupCode) {
            dispatch({ type: 'SET_MESSAGE', payload: 'Por favor ingresa un código de grupo', error: true });
            return;
        }

      
        const groupData = await getGroupData(state.groupCode, userID); 
        if (groupData) {
            console.log(userID)
            await updateEstudiante(userID, groupData.ID_empresa);
            dispatch({ type: 'SET_MESSAGE', payload: `Te has unido exitosamente al grupo con código: ${state.groupCode}`, error: false });
        } else {
            dispatch({ type: 'SET_MESSAGE', payload: 'Código de grupo no válido', error: true });
        }
    };
    const updateEstudiante = async (userID, idEmpresa) => {
        try {
            const response = await axios.put(`http://localhost:8000/api/v1/estudiantes/${userID}/grupo-empresa`, {
                ID_empresa: idEmpresa,
            });
    
            console.log(response.data); 
        } catch (error) {
            console.error("Error al actualizar el estudiante:", error);
        }
    };

    const getGroupData = async (code, userID) => {
        try {
            const response = await axios.get(`http://localhost:8000/api/v1/grupo-empresa/data/${code}?userID=${userID}`); // Enviar el userID
            console.log("Datos de la grupo empresa:", response.data);
            return response.data;
        } catch (error) {
            console.error("Error al obtener datos de la grupo empresa:", error);
            return null; 
        }
    };


    return (
        <section className="form-container">
            <div className='container-form'>
                <article className='input-code'>
                    <h2>Unirse a grupo-empresa</h2>
                    <p>Código de grupo-empresa</p>
                    <input
                        type="text"
                        placeholder="Código de grupo-empresa"
                        value={state.groupCode}
                        onChange={(e) => dispatch({ type: 'SET_CODE', payload: e.target.value })}
                        className="input"
                    />
                    <button onClick={handleJoinClick} className="button">Unirse</button>
                </article>
                <img src={Icon} alt="" />
            </div>
            {/* <CodeChecker /> */}
        </section>
    );
};

export default JoinGroupForm;
