import React, { useState, useEffect } from "react";
import GraficaBarras from "./GraficaBarras";
import './Grafica.css';

const Grafica = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://6660e68963e6a0189fe7dc30.mockapi.io/api/v1/table")
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

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