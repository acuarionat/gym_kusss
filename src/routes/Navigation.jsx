import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VistaGeneralHome from "../componentes/pagina/home/VistaGeneralHome";
import VistaNosotros from "../componentes/pagina/nosotros/VistaNosotros";
import VistaContactanos from "../componentes/pagina/contactanos/VistaContactanos";
import VistaVideos from "../componentes/pagina/home/videos/VistaVideos";
import VistaHorario from "../componentes/pagina/home/horario/VistaHorario";
import VistaEquipamiento from "../componentes/pagina/home/equipamiento/VistaEquipamiento";
import VistaSugerencias from "../componentes/pagina/home/sugerencias/VistaSugerencias";
import VistaPerdidaDeGrasa from "../componentes/pagina/home/perdida de grasa/VistaPerdidaDeGrasa";
import VistaSaludMental from "../componentes/pagina/home/salud mental/VistaSaludMental";
import VistaNutricion from "../componentes/pagina/home/nutricion/VistaNutricion";
import VistaSeccionMaquinas from "../componentes/pagina/home/seccionmaquinas/VistaSeccionMaquinas";
import VistaSeccionEquipamiento from "../componentes/pagina/home/seccioninformacion/VistaSeccionInformacion";
const Navigation = () => {
    return (
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element= {<VistaGeneralHome/>} /> */}
          <Route path="/nosotros" element= {<VistaNosotros/>} />
          <Route path="/contactanos" element= {<VistaContactanos/>} />
          <Route path="/videos" element= {<VistaVideos/>} />
          <Route path="/horario" element= {<VistaHorario/>} />
          <Route path="/equipamiento" element= {<VistaEquipamiento/>} />
          <Route path="/sugerencias" element= {<VistaSugerencias/>} />
          <Route path="/perdida-de-grasa" element= {<VistaPerdidaDeGrasa/>} />
          <Route path="/masamusc" element= {<VistaNutricion/>} />
          <Route path="/saludmental" element= {<VistaSaludMental/>} />
          <Route path="/" element= {<VistaSeccionEquipamiento/>} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Navigation;