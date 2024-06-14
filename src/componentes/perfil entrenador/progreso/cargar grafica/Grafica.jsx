import React, { useState, useEffect } from "react";
import GraficaBarras from "./GraficaBarras";
import './Grafica.css';

const Grafica = ({ idCliente, selectedProgreso, selectedOption }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://6660e68963e6a0189fe7dc30.mockapi.io/api/v1/progreso`);
                const json = await response.json();
                const cliente = json.find(cliente => cliente.id_cliente === idCliente);
                if (cliente && selectedProgreso) {
                    const progresoData = cliente.seguimientos[selectedProgreso.toLowerCase().replace(' ', '_')];
                    setData(progresoData || []);
                } else {
                    setData([]);
                }
            } catch (error) {
                console.error('Error fetching data: ', error);
                setData([]);
            }
        };

        fetchData();
    }, [idCliente, selectedProgreso]);

    return (
        <div className="grafica-container">
            <div className="grafica-header">
                <h2>Gráfica</h2>
            </div>
            <GraficaBarras data={data} selectedOption={selectedOption} />
        </div>
    );
};

export default Grafica;
