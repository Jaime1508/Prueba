import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/alumnos/'

const CompCreateAlumno = () => {

    const [nombre, setNombre] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [matricula, setMatricula] = useState('')
    const [carrera, setCarrera] = useState('')
    const navigate = useNavigate()

    //guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {nombre: nombre, apellidos: apellidos, matricula: matricula, carrera: carrera})
        navigate('/')
    }

    return (
        <div>
            <h3>create POST</h3>
            <form onSubmit={store}>
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

                <button type='submit' className='btn btn-primary'>Store</button>
            </form>
        </div>
    )
}

export default CompCreateAlumno