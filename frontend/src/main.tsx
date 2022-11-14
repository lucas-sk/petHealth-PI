import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Perfil } from './pages/Perfil'
import { Pescription } from './pages/Prescription'
import { Querys } from './pages/Queries'
import { Register } from './pages/Register'
import { Userpet } from './pages/Userpet'
import { Vaccines } from './pages/Vaccines'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entrar" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/user" element={<Userpet />} />
        <Route path="/consultas" element={<Querys />} />
        <Route path="/prescricoes" element={<Pescription />} />
        <Route path="/vacinas" element={<Vaccines />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
