import { useState } from 'react'
import FazerLogin from './pages/FazerLogin/FazerLogin'
import CriarLogin from './pages/CriarLogin/CriarLogin'
import Habitos from './pages/Habitos/Habitos'
import Hoje from './pages/Hoje/Hoje'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Historico from './pages/Historico/Histórico'

export default function App() {

  const [tela1, setTela1] = useState(false);
  const [tela2, setTela2] = useState(false);

  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<FazerLogin />}></Route>
          <Route path="/cadastro" element={<CriarLogin />}></Route>
          <Route path="/habitos" element={<Habitos tela1={tela1} setTela1={setTela1} tela2={tela2} setTela2={setTela2} />}></Route>
          <Route path="/historico" element={<Historico />}></Route>
          <Route path="/hoje" element={<Hoje />}></Route>

        </Routes>

      </BrowserRouter>

    </>
  )
}
