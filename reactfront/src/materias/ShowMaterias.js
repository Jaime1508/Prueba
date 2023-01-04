import axios from 'axios'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/materias/'

const CompShowMaterias = () => {
    const [materias, setMateria] = useState([])
    useEffect( ()=>{
        getMaterias()
    }, [])

    //Mostrar todos los alumnos
    const getMaterias = async () => {
        const res = await axios.get(URI)
        setMateria(res.data)
    }

    //Eliminar un alumno
    const deleteMateria = async (id) => {
        await axios.delete(`${URI}${id}`)
        getMaterias()
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to = "/create" className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Materia</th>
                                <th>Promedio</th>
                                <th>Semestre</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {materias.map ((materia) =>(
                                <tr key={materia.id}>
                                    <td>{materia.materia}</td>
                                    <td>{materia.promedio}</td>
                                    <td>{materia.semestre}</td>
                                    <td>
                                        <Link to={`/edit/ ${materia.id}`} className='btn btn-info'>Editar</Link>
                                        <button onClick={()=>deleteMateria(materia.id)} className='btn btn-danger'>Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompShowMaterias