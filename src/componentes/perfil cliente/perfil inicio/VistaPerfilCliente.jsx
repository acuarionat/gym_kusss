import React, { useEffect } from "react";
import './VistaPerfilCliente.css';
import PerfilBienvenida from "./PerfilBienvenida";
import PerfilClienteApp from "../../../PerfilClienteApp";
import NavBarPerfil from "../../general/NavBarPerfil";

const VistaPerfilCliente = ({ perfil }) => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://mediafiles.botpress.cloud/12cb4a23-61d0-4ffe-86e8-e6e3e7ae24da/webchat/config.js';
    script2.defer = true;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div className="vista-perfil">
      <div className="superior-perfil-cliente">
        <PerfilClienteApp perfil={perfil} />
        <PerfilBienvenida />
      </div>
      <NavBarPerfil />
    </div>
  );
};

export default VistaPerfilCliente;
