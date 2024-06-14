import React from 'react';
import './TarjetaDeEjerciciosCliente.css';

function TarjetaDeEjerciciosCliente({ ejercicios }) {
    return (
        <div className='listaEjer'>
            {ejercicios.map((ejercicio, index) => (
                <div key={ejercicio.id} className={index % 2 === 0 ? 'barraEjer1' : 'barraEjer2'}>
                    <div className='tipoEjer'>
                        <p className='textoListaEjerTar'>{ejercicio.nombre}</p>
                    </div>
                    <div className='repeticiones'>
                        <p className='textoListaEjerTar'>{ejercicio.series} series x {ejercicio.repeticiones} repeticiones</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TarjetaDeEjerciciosCliente;