import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Home from './pages/Home'
import Animais from './pages/Animais'
import AnimalDetalhe from './pages/AnimalDetalhes'
import Voluntariado from './pages/Voluntario'
import PerdidosEncontrados from './pages/PerdidosEcontrados'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"                      element={<Home />} />
        <Route path="/animais"               element={<Animais />} />
        <Route path="/animais/:id"           element={<AnimalDetalhe />} />
        <Route path="/voluntariado"          element={<Voluntariado />} />
        <Route path="/perdidos-encontrados"  element={<PerdidosEncontrados />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App