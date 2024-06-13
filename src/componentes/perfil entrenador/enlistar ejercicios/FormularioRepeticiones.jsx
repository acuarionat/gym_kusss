import "./FormularioRepeticiones.css";

function FormularioEditarRutina() {
  return (
    <div className="formularioRepesSeries">
      <form action="">
        <div className="inputs">
        <label>Series:</label>
        <input type="number" className="ingresoSeries" />
        <label>Repeticiones:</label>
        <input type="number" className="ingresoRepeticiones" />
        <label>Consejo Experto:</label>
        <input type="text" className="ingresoConsejoExperto" />
        </div>
        <input className="confirmar" type="submit" value="CONFIRMAR EJERCICIO" />
      </form>
    </div>
  );
}

export default FormularioEditarRutina;
