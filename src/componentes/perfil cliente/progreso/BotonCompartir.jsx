import React, { useState } from "react";
import "./BotonCompartir.css";
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
		<div className="button-container">
			<button onClick={handleShareClick}>
				<div className="icono-compartir">
					<img
						src="/imagenes/compartir.png"
						alt="Icono Compartir"
					/>
				</div>
				COMPARTE TU PROGRESO
			</button>
			{isModalOpen && <ModalCompartir url={url} title={title} onClose={handleCloseModal} />}
		</div>
	);
};

export default BotonCompartir;
