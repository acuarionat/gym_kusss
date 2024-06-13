import React from "react";
import Dropdown from "./Dropdown";
import BotonCompartir from './BotonCompartir';
import CabezaCargarProgreso from './CabezaCargaProgreso';

const VistaProgreso = () => {
    const url = window.location.href; 
    const title = "Mira mi progreso!"; 

    return (
        <div className="vista-cargar-progreso">
            <CabezaCargarProgreso />
            <Dropdown />
            <BotonCompartir url={url} title={title} />
        </div>
    );
};

export default VistaProgreso;
