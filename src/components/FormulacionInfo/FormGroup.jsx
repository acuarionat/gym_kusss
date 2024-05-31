import React from 'react';
import './FormulacionInfo.css';

const FormGroup = ({ label, id, type = "text", isTextArea = false }) => (
    <div className="form-group">
        <label htmlFor={id}>{label}:</label>
        {isTextArea ? (
            <textarea id={id} className="form-control"></textarea>
        ) : (
            <input type={type} id={id} className="form-control" />
        )}
    </div>
);

export default FormGroup;
