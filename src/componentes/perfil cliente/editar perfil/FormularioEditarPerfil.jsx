import React, { useState, useEffect } from "react";
import "./FormularioEditarPerfil.css";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from 'yup';

const FormularioEditarPerfil = ({ cliente }) => {
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [imageUrl, setImageUrl] = useState(cliente.foto || "");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setLoading(false);
      setError('User not found in localStorage');
    }
  }, []);

  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);

  const initialValues = {
    name: cliente.name || '',
    email: cliente.email || '',
    telefono: cliente.telefono || '',
    id: cliente.id || ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Campo requerido'),
    email: Yup.string().email('Correo no válido').required('Campo requerido'),
    telefono: Yup.string()
      .matches(/^\d+$/, 'Teléfono no válido')
      .min(7, 'Teléfono no válido')
      .max(10, 'Teléfono no válido')
      .required('Campo requerido'),
  });

  const onSubmit = async (values) => {
    try {
      if (!user) {
        throw new Error('User not loaded');
      }

      const patchedData = {
        ...values,
        foto: imageUrl || cliente.foto,
      };

      const response = await fetch(`https://665fe2675425580055b13673.mockapi.io/api/v1/clientes/${user.id}`, {
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
      alert("Cambios guardados");
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

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="formulario">
      <form className="form-editar" onSubmit={formik.handleSubmit}>
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

          <label htmlFor="name">Nombre:</label>
          <input 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            type="text"
            id="name"
            name="name"
          />
          {formik.errors.name && formik.touched.name && (
            <small className="error">{formik.errors.name}</small>
          )}

          <label htmlFor="email">Email:</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            type="email"
            id="email"
            name="email"
          />
          {formik.errors.email && formik.touched.email && (
            <small className="error">{formik.errors.email}</small>
          )}

          <label htmlFor="telefono">Teléfono:</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.telefono}
            type="tel"
            id="telefono"
            name="telefono"
          />
          {formik.errors.telefono && formik.touched.telefono && (
            <small className="error">{formik.errors.telefono}</small>
          )}
        </div>

        <input className="guardar" type="submit" value="GUARDAR" />
      </form>
    </div>
  );
};

export default FormularioEditarPerfil;
