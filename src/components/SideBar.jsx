import './SideBar.css'
import KussLogo from '../assets/KussLogo.png'
import Close from '../assets/Close.png'
import Contac from '../assets/Contactanos.png'
import Ingre from '../assets/Ingresar.png'
import Nove from '../assets/Novedades.png'
import Regist from '../assets/Registrate.png'
import Sobre from '../assets/SobreNosotros.png'

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
                        <p className='textos'>Ingresar Personal</p>
                        <img className='icoMenu' src={Ingre} alt="Img Personal" />
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