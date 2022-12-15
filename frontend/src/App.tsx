import { FormEvent, useContext } from "react"
import { http } from "./utils/http"

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Perfil } from './pages/Perfil'
import { Pescription } from './pages/Prescription'
import { Queries } from './pages/Queries'
import { Register } from './pages/Register'
import { Vaccines } from './pages/Vaccines'
import { FormQueries } from "./pages/FormQueries"


import { RequireAuth } from "./contexts/Auth/RequireAuth"
import { AuthProvider } from "./contexts/Auth/AuthProvider"
import { FormPrescription } from "./pages/FormPrescription"
import { RegisterPet } from "./pages/RegisterPet"
import { FormVaccines } from "./pages/FormVaccines"



function App() {

  // async function req1() {
  //   const { data } = await http.get('users')
  //   console.log(data)
  // }
  // req1()

  // async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   const name = e.currentTarget.username.value
  //   const cpf = e.currentTarget.cpf.value
  //   const email = e.currentTarget.email.value
  //   const password = e.currentTarget.password.value

  //   http.post('users', {
  //     name, cpf, email, password
  //   })
  // }

  // vai pegar o usuario caso exista
  // const logged = localStorage.getItem('@user');


  return (
    // <div className="App">
    //   <h1 className="text-3xl font-bold underline">alow</h1>
    //   <div>

    //     <form action="" onSubmit={handleSubmit}>
    //       <label htmlFor="">
    //         cpf
    //       </label>
    //       <input type="text" name="cpf" id="cpf" />
    //       <label htmlFor="">
    //         email
    //       </label>
    //       <input type="text" name="email" id="email" />
    //       <label htmlFor="">
    //         name
    //       </label>
    //       <input type="text" name="username" id="username" />
    //       <label htmlFor="">
    //         password
    //       </label>
    //       <input type="text" name="password" id="password" />
    //       <button type="submit">submit</button>
    //     </form>
    //   </div>
    // </div>



    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/entrar" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/perfil" element={<RequireAuth><Perfil /></RequireAuth>} />
        <Route path="/consultas" element={<RequireAuth><Queries /></RequireAuth>} />
        <Route path="/prescricoes" element={<RequireAuth><Pescription /></RequireAuth>} />
        <Route path="/vacinas" element={<RequireAuth><Vaccines /></RequireAuth>} />
        <Route path="/formulario-consultas" element={<RequireAuth><FormQueries /></RequireAuth>} />
        <Route path="/formulario-prescricao" element={<RequireAuth><FormPrescription /></RequireAuth>} />
        <Route path="/cadastro-pet" element={<RequireAuth><RegisterPet /></RequireAuth>} />
        <Route path="/formulario-vacinas" element={<RequireAuth><FormVaccines /></RequireAuth>} />


      </Routes>
    </BrowserRouter >
  );
};

export default App
