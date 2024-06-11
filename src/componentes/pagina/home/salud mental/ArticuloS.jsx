import React from 'react';
import './ArticuloS.css'

const ArticuloS = ({ data }) => {
    return (
        <div className="containerAriculoS">
            {data.map(article => (
                <div key={article.id}>
                    <h2 className="tituloS">{article.titulo}</h2>
                    <p className="parrafoArticuloS">{article.descripcion}</p>
                    <img src={article.imagen} alt={article.titulo} className="imagenS" />
                </div>
            ))}
        </div>
    );
};

export default ArticuloS;
