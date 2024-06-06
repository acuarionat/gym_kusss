import './SemanalEjerciciosCliente.css'
import OrgDiaEjercicio from './OrgDiaEjercicio'
import { useEffect, useState } from 'react';
import Ejercicios from '../../../datos/DatosSemanaEjercicio.json'

function SemanalEjercicios() {
    function Aleatorio() {
        const num = Math.floor(Math.random() * (5 - 1 + 1) + 1);
        return num;
    }
    console.log(Aleatorio());

    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchSemana = async () => {
            setUsers(Ejercicios);
        };
        fetchSemana();
    }, []);

    console.log(users)

    const semanal = Ejercicios[Aleatorio()].Semana
    console.log(semanal)

    return (
        <div className='semanal'>
            {
                semanal.map(
                    (datos) => (<OrgDiaEjercicio key={semanal.id} semana={datos} />)
                )
            }
        </div>
    )
}

export default SemanalEjercicios