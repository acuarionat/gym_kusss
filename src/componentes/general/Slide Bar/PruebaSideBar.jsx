import React from 'react'
import './PruebaSideBar.css'
import SideBar from './SideBar'

function PruebaSideBar() {
    return (
        <div className='pruebaCuerpo'>
            <input type="checkbox" id='btnMenu' />
            <label htmlFor='btnMenu'>
                Abrir el SideBar :D
            </label>
            <SideBar />
        </div>
    )
}

export default PruebaSideBar