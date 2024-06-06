import Sobre from '/imagenes/SobreNosotros.png'

function OrgSobre(props) {
    const sideDatos = props.nombre
    return (
        <div className='textosIma'>
            <p className='textos'>{sideDatos.SideBar}</p>
            <img className='icoMenu' src={sideDatos.imagen} alt="Nosotros" />
        </div>
    )
}

export default OrgSobre