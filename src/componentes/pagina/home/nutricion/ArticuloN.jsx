import React from 'react';
import "./ArticuloN.css"
const ArticuloN = ({ data }) => {
  return (
    <div className="containerAriculoN">
      {data.map((article) => (
        <div key={article.id}>
          <h2 className="tituloN">{article.titulo}</h2>
          <p className="parrafoArticuloN">{article.descripcion}</p>
          <img src={article.imagen} alt="Imagen del artículo" className="imagenN" />
        </div>
      ))}
    </div>
  );
};

export default ArticuloN;
