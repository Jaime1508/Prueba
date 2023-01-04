import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const URI = 'http://localhost:8000/materias/'

const CompEditMaterias = () => {
    const [materia, setMateria] = useState('')
    const [promedio, setPromedio] = useState('')
    const [semestre, setSemestre] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    //Actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            materia: materia,
            promedio: promedio,
            semestre: semestre
        })
        navigate('/')
    }

    useEffect( () => {
        getMateriaById()
    }, [])

    const getMateriaById = async () => {
        const res = await axios.get(URI+id)
        setMateria(res.data.materia)
        setPromedio(res.data.promedio)
        setSemestre(res.data.semestre)
    }

    return (
        <div>
        <h3>Edit POST</h3>
        <form onSubmit={update}>
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

            <button type='submit' className='btn btn-primary'>update</button>
        </form>
    </div>
    )
}

export default CompEditMaterias