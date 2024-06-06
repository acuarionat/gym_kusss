import './SideBar.css'
import OrgSobre from './OrgSobre'
import KussLogo from '/imagenes/KussLogo.png'
import Close from '/imagenes/Close.png'
import SlideDatos from '../../../datos/DatosSideBar.json'

function SideBar() {
    return (
        <div className='principalSideBar'>
            <div className='primeraParte'>
                <div className='close'>
                    <img src={Close} alt="Equisxd" />
                </div>
                <div className='menu'>
                    <p className='textoMenu'>Menu</p>
                    {
                        SlideDatos.map(
                            (datos) => (<OrgSobre nombre={datos} />)
                        )
                    }
                </div>
            </div>
            <div className='logo'>
                <img className='imgLogo' src={KussLogo} alt="KussLogo" />
            </div>
        </div>
    )
};

export default SideBar;