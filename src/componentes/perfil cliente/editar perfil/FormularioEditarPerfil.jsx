import React, { useState, useEffect } from "react";
import "./FormularioEditarPerfil.css";
import { object, string, number } from "yup";
import { Formik, useFormik } from "formik";

const userSchema = object({
  nombre: string().required(),
  telefono: number().required().positive(),
  email: string().email(),
});

const FormularioEditarPerfil = ({ cliente }) => {
  const initialValues = {
    nombre: cliente?.name,
    email: cliente?.email,
    telefono: cliente?.telefono,
    genero: cliente?.genero 
  };

  const [selectedOption, setSelectedOption] = useState(initialValues.genero);

  const onSubmit = (values) => {
    console.log("Formulario enviado con los siguientes valores:", values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: userSchema,
    onSubmit,
    enableReinitialize: true, 
  });

  return (
    <div className="formulario">
      <form onSubmit={formik.handleSubmit}>
        <div className="general">
          <label htmlFor="nombre">Nombre:</label>
          <input 
            onChange={formik.handleChange} 
            value={formik.values.nombre} 
            type="text" 
            id="nombre" 
            name="nombre"
          />

          <label htmlFor="email">Email:</label>
          <input 
            onChange={formik.handleChange} 
            value={formik.values.email} 
            type="email" 
            id="email" 
            name="email"
          />

          <label htmlFor="telefono">Teléfono:</label>
          <input 
            onChange={formik.handleChange} 
            value={formik.values.telefono} 
            type="tel" 
            id="telefono" 
            name="telefono"
          />

          <label htmlFor="genero">Género:</label>
          <select
            value={formik.values.genero}
            onChange={(e) => {
              setSelectedOption(e.target.value);
              formik.handleChange(e);
            }}
            id="genero"
            name="genero"
          >
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <input className="guardar" type="submit" value="GUARDAR" />
      </form>
    </div>
  );
};

export default FormularioEditarPerfil;
