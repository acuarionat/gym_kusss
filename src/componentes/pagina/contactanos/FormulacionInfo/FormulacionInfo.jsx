import React from 'react';
import Card from './Card';
import FormGroup from './FormGroup';
import Boton from './Boton';
import './FormulacionInfo.css';

const FormulacionInfo = () => {
    return (
        <Card>
            <form>
                <FormGroup label="NOMBRE" id="name" />
                <FormGroup label="TELÉFONO" id="phone" type="tel" />
                <FormGroup label="EMAIL" id="email" type="email" />
                <FormGroup label="CONSULTA" id="query" isTextArea={true} />
                <Boton text="SOLICITAR INFORMACIÓN" />
            </form>
        </Card>
    );
};

export default FormulacionInfo;