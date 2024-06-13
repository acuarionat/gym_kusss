import React, { useState } from "react";
import "./BotonCompartir.css";
import IconoCompartir from "./IconoCompartir";
import ModalCompartir from "./ModalCompartir";

const BotonCompartir = ({ url, title }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleShareClick = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="boton-container">
            <button onClick={handleShareClick}>
                <IconoCompartir />
                COMPARTE TU PROGRESO
            </button>
            {isModalOpen && <ModalCompartir url={url} title={title} onClose={handleCloseModal} />}
        </div>
    );
};

export default BotonCompartir;
