import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/materias/'

const CompCreateMateria = () => {

    const [materia, setMateria] = useState('')
    const [promedio, setPromedio] = useState('')
    const [semestre, setSemestre] = useState('')
    const navigate = useNavigate()

    //guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {materia: materia, promedio: promedio, semestre: semestre})
        navigate('/')
    }

    return (
        <div>
            <h3>create POST</h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Materia</label>
                    <input
                        value = {materia}
                        onChange = {(e)=> setMateria(e.target.value)}
                        type="text"
                        className = 'form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Promedio</label>
                    <input
                        value = {promedio}
                        onChange = {(e)=> setPromedio(e.target.value)}
                        type="text"
                        className = 'form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Semestre</label>
                    <input
                        value = {semestre}
                        onChange = {(e)=> setSemestre(e.target.value)}
                        type="text"
                        className = 'form-control'
                    />
                </div>

                <button type='submit' className='btn btn-primary'>Store</button>
            </form>
        </div>
    )
}

export default CompCreateMateria