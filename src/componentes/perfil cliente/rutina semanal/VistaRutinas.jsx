import React, { useEffect, useState } from 'react';
import './VistaRutinas.css';
import NavBarPerfil from '../../general/NavBarPerfil';
import CabezaRutinas from './CabezaRutinas';
import SemanalEjerciciosCliente from './SemanalEjerciciosCliente';

function VistaRutinas() {
    const [clientData, setClientData] = useState(null);
    const [rutinas, setRutinas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resCliente = await fetch('https://665fe2675425580055b13673.mockapi.io/api/v1/clientes/1');
                const cliente = await resCliente.json();
                setClientData(cliente);

                const resRutinas = await fetch('https://6669267d2e964a6dfed3f9ee.mockapi.io/api/v3/rutina');
                const allRutinas = await resRutinas.json();
                const clienteRutinas = allRutinas.filter(rutina => cliente.rutinas.includes(parseInt(rutina.id)));
                setRutinas(clienteRutinas);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='principalRutinas'>
            <CabezaRutinas />
            {clientData && <SemanalEjerciciosCliente rutinas={rutinas} />}
            <NavBarPerfil />
        </div>
    );
}

export default VistaRutinas;
