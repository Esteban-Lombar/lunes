import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Detector from './pages/Detector'

import './App.css'

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/detector' element={<Detector />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App