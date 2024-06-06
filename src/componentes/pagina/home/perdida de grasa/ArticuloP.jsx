import React from 'react';
import "./ArticuloP.css"

const ArticuloP = ({ data }) => {
  return (
    <div className="containerAriculoP">
      {data.map(article => (
        <div key={article.id}>
          <h2 className="tituloP">{article.titulo}</h2>
          <p className="parrafoArticuloP">{article.descripcion}</p>
          <img src={article.imagen} alt={article.titulo} className="imagenP" />
        </div>
      ))}
    </div>
  );
};

export default ArticuloP;
