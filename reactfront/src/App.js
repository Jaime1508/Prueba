import logo from './logo.svg';
import './App.css';

import CompShowAlumnos from './alumnos/ShowAlumnos';
import CompCreateAlumno from './alumnos/CreateAlumno';
import CompEditAlumnos from './alumnos/EditAlumno';

import CompShowMaterias from './materias/ShowMaterias';
import CompCreateMateria from './materias/CreateMateria';
import CompEditMaterias from './materias/EditMateria';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompShowAlumnos/>} />
          <Route path='/create' element={<CompCreateAlumno/>} />
          <Route path='/edit/:id' element={<CompEditAlumnos/>} />
        </Routes>
      </BrowserRouter>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompShowMaterias/>} />
          <Route path='/create' element={<CompCreateMateria/>} />
          <Route path='/edit/:id' element={<CompEditMaterias/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
