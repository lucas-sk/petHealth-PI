import { FormEvent } from "react"
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
  const logged = localStorage.getItem('@user');

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
        {logged ? <Route path="/entrar" element={<Login />} /> : <Route path="/perfil" element={<Perfil />} />}
        <Route path="/cadastro" element={<Register />} />
        <Route path="/consultas" element={<Queries />} />
        <Route path="/prescricoes" element={<Pescription />} />
        <Route path="/vacinas" element={<Vaccines />} />
        <Route path="/formulario-consultas" element={<FormQueries />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App
