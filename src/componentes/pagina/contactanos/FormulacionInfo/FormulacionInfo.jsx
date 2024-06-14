import React from 'react';
import Card from './Card';
import FormGroup from './FormGroup';
import Boton from './Boton';
import './FormulacionInfo.css';

const FormulacionInfo = () => {
    return (
        <Card>
            <form 
                action="https://formspree.io/f/mknddzwq" 
                method="POST"
            >
                <FormGroup label="NOMBRE" id="name" name="Nombre:" />
                <FormGroup label="TELÉFONO" id="phone" name="Telefono:" type="tel" />
                <FormGroup label="EMAIL" id="email" name="Email:" type="email" />
                <FormGroup label="CONSULTA" id="query" name="Mensaje:" isTextArea={true} />
                <Boton text="SOLICITAR INFORMACIÓN" />
            </form>
        </Card>
    );
};

export default FormulacionInfo;
