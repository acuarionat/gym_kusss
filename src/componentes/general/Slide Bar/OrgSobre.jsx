import './OrgSobre.css'

function OrgSobre(props) {
    const sideDatos = props.nombre
    return (
        <button className='textosIma'>
            <p className='textos'>{sideDatos.SideBar}</p>
            <img className='icoMenu' src={sideDatos.imagen} alt="Nosotros" />
        </button>
    )
}

export default OrgSobre