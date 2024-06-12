import React, { useState } from "react";
import "./FormularioEditarPerfil.css";
import { useFormik } from "formik";
import axios from "axios";

const FormularioEditarPerfil = ({ cliente, validationSchema }) => {
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [imageUrl, setImageUrl] = useState(cliente.imageUrl || "");

  const initialValues = {
    nombre: cliente.name,
    email: cliente.email,
    telefono: cliente.telefono,
    genero: cliente.genero,
  };

  const onSubmit = async(values) => {
    try {
      const patchedData = {
        ...values,
        imageUrl: imageUrl,
      };
      const response = await fetch('https://665fe2675425580055b13673.mockapi.io/api/v1/clientes/3', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(patchedData),
      });
      if (!response.ok) {
        throw new Error('Error al actualizar los datos');
      }
      console.log("Datos actualizados con éxito:", patchedData);
    } catch (error) {
      console.error("Error al actualizar los datos:", error);
    }
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      setUploading(true);
      setUploadError(null);

      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=bb4db0f74bce9356f123677d566c91ad`,
        formData
      );

      setImageUrl(response.data.data.url);
      console.log("Imagen subida con éxito:", response.data.data.url);
    } catch (error) {
      setUploadError("Error subiendo la imagen.");
      console.error("Error subiendo la imagen:", error);
    } finally {
      setUploading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    enableReinitialize: true,
  });

  return (
    <div className="formulario">
      <form onSubmit={formik.handleSubmit}>
        <div className="general">
        <label htmlFor="imagen">Foto de Perfil:</label>
        {imageUrl && <img className="foto-perfil" src={imageUrl} alt="Imagen de perfil" />}
          <input
            type="file"
            id="imagen"
            name="imagen"
            accept="image/*"
            onChange={handleImageUpload}
          />
          {uploading && <p>Subiendo imagen...</p>}
          {uploadError && <p>{uploadError}</p>}
          <label htmlFor="nombre">Nombre:</label>
          <input 
            onChange={formik.handleChange} 
            value={formik.values.nombre} 
            type="text" 
            id="nombre" 
            name="nombre"
          />
          {formik.errors.nombre && formik.touched.nombre ? (
            <div>{formik.errors.nombre}</div>
          ) : null}

          <label htmlFor="email">Email:</label>
          <input 
            onChange={formik.handleChange} 
            value={formik.values.email} 
            type="email" 
            id="email" 
            name="email"
          />
          {formik.errors.email && formik.touched.email ? (
            <div>{formik.errors.email}</div>
          ) : null}

          <label htmlFor="telefono">Teléfono:</label>
          <input 
            onChange={formik.handleChange} 
            value={formik.values.telefono} 
            type="tel" 
            id="telefono" 
            name="telefono"
          />
          {formik.errors.telefono && formik.touched.telefono ? (
            <div>{formik.errors.telefono}</div>
          ) : null}

          <label htmlFor="genero">Género:</label>
          <select
            value={formik.values.genero}
            onChange={(e) => {
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
