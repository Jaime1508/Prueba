import axios from 'axios'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/alumnos/'

const CompShowAlumnos = () => {
    const [alumnos, setAlumno] = useState([])
    useEffect( ()=>{
        getAlumnos()
    }, [])

    //Mostrar todos los alumnos
    const getAlumnos = async () => {
        const res = await axios.get(URI)
        setAlumno(res.data)
    }

    //Eliminar un alumno
    const deleteAlumno = async (id) => {
        await axios.delete(`${URI}${id}`)
        getAlumnos()
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to = "/create" className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>Matricula</th>
                                <th>Carrera</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alumnos.map ((alumno) =>(
                                <tr key={alumno.id}>
                                    <td>{alumno.nombre}</td>
                                    <td>{alumno.apellidos}</td>
                                    <td>{alumno.matricula}</td>
                                    <td>{alumno.carrera}</td>
                                    <td>
                                        <Link to={`/edit/ ${alumno.id}`} className='btn btn-info'>Editar</Link>
                                        <button onClick={()=>deleteAlumno(alumno.id)} className='btn btn-danger'>Eliminar</button>
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

export default CompShowAlumnos