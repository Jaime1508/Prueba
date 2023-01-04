import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const URI = 'http://localhost:8000/alumnos/'

const CompEditAlumnos = () => {
    const [nombre, setNombre] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [matricula, setMatricula] = useState('')
    const [carrera, setCarrera] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    //Actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            nombre: nombre,
            apellidos: apellidos,
            matricula: matricula,
            carrera: carrera
        })
        navigate('/')
    }

    useEffect( () => {
        getAlumnoById()
    }, [])

    const getAlumnoById = async () => {
        const res = await axios.get(URI+id)
        setNombre(res.data.nombre)
        setApellidos(res.data.apellidos)
        setMatricula(res.data.matricula)
        setCarrera(res.data.carrera)

    }

    return (
        <div>
        <h3>Edit POST</h3>
        <form onSubmit={update}>
            <div className='mb-3'>
                <label className='form-label'>Nombre</label>
                <input
                    value = {nombre}
                    onChange = {(e)=> setNombre(e.target.value)}
                    type="text"
                    className = 'form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Apellidos</label>
                <input
                    value = {apellidos}
                    onChange = {(e)=> setApellidos(e.target.value)}
                    type="text"
                    className = 'form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Matricula</label>
                <input
                    value = {matricula}
                    onChange = {(e)=> setMatricula(e.target.value)}
                    type="text"
                    className = 'form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Carrera</label>
                <input
                    value = {carrera}
                    onChange = {(e)=> setCarrera(e.target.value)}
                    type="text"
                    className = 'form-control'
                />
            </div>

            <button type='submit' className='btn btn-primary'>update</button>
        </form>
    </div>
    )
}

export default CompEditAlumnos