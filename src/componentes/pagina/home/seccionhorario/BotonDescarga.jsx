import React from "react";
import "./BotonDescarga.css";

const BotonDescarga = () => {
  return (
    <div class="combobox">
        <form>
            <select className="Metodos" id="">
                <option value="none">DESCARGAR HORARIO</option>
                <option value="">JPG</option>
                <option value="">PNG</option>
                <option value="">PDF</option>
            </select>
        </form>
    </div>
  );
};

export default BotonDescarga;
