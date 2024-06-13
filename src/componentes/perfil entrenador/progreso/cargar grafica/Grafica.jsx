import React, { useState, useEffect } from "react";
import GraficaBarras from "./GraficaBarras";
import './Grafica.css';

const Grafica = ({ idCliente }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://6660e68963e6a0189fe7dc30.mockapi.io/api/v1/progreso`);
                const json = await response.json();
                const cliente = json.find(cliente => cliente.id_cliente === idCliente);
                if (cliente) {
                    setData(cliente.seguimientos);
                }
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, [idCliente]);

    return (
        <div className="grafica-container">
            <div className="grafica-header">
                <h2>Gráfica</h2>
            </div>
            <GraficaBarras data={data} />
        </div>
    );
};

export default Grafica;
