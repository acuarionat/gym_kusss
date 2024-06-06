// SaludMental.jsx
import React, { useState, useEffect } from 'react';
import Header from './CabezaS';
import Section from './SeccionS';
import Article from './ArticuloS';
import "./VistaSaludMental.css";

const VistaSaludMental = () => {
    const [saludMentalData, setSaludMentalData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://665fc14e5425580055b0bc8c.mockapi.io/Project/api/v1/Pages');
                const jsonData = await response.json();
                const filteredData = jsonData.flatMap(item => item.SaludMental || []);
                setSaludMentalData(filteredData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="containerS">
            <Header />
            <Section />
            <Article data={saludMentalData} />
        </div>
    );
};

export default VistaSaludMental;
