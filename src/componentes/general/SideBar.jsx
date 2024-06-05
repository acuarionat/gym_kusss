import './SideBar.css'
import KussLogo from '/imagenes/KussLogo.png'
import Close from '/imagenes/Close.png'
import Contac from '/imagenes/Contactanos.png'
import Ingre from '/imagenes/Ingresar.png'
import Nove from '/imagenes/Novedades.png'
import Regist from '/imagenes/Registrate.png'
import Sobre from '/imagenes/SobreNosotros.png'

function SideBar() {
    return (
        <div className='principalSideBar'>
            <div className='primeraParte'>
                <div className='close'>
                    <img src={Close} alt="Equisxd" />
                </div>
                <div className='menu'>
                    <p className='textoMenu'>Menu</p>
                    <div className='textosIma'>
                        <p className='textos'>Sobre Nosotros</p>
                        <img className='icoMenu' src={Sobre} alt="Nosotros" />
                    </div>
                    <div className='textosIma'>
                        <p className='textos'>Ingresar</p>
                        <img className='icoMenu' src={Ingre} alt="Img Ingresar" />
                    </div>
                    <div className='textosIma'>
                        <p className='textos'>Regístrate</p>
                        <img className='icoMenu' src={Regist} alt="Registrate" />
                    </div>
                    <div className='textosIma'>
                        <p className='textos'>Novedades</p>
                        <img className='icoMenu' src={Nove} alt="Novedades" />
                    </div>
                    <div className='textosIma'>
                        <p className='textos'>Contactanos</p>
                        <img className='icoMenu' src={Contac} alt="Contactanos" />
                    </div>
                </div>
            </div>
            <div className='logo'>
                <img className='imgLogo' src={KussLogo} alt="KussLogo" />
            </div>
        </div>
    )
};

export default SideBar;