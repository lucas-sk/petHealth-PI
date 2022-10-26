import { Link } from "react-router-dom";
import { useState } from "react";
import { InputRegister } from "./components/inputRegister";

import Logo from '../../assets/img/logo.svg'


export const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [cpf, setCpf] = useState("")

  return (
    <div className="bg-cyan-500">

      <div className="flex min-h-full items-center justify-center pb-20 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 my-5 mx-5">
          <form className="mt-8 space-y-6 bg-white text-center px-10 pb-5 rounded-lg">
            <img src={Logo} alt="" className="mx-auto w-auto pt-6" />
            <p className="text-xl">CRIE SUA CONTA</p>
            <InputRegister
              placeholder="NOME COMPLETO"
              type="text"
              value={name}
              onChange={newValue => setName(newValue)}
            />

            <InputRegister
              placeholder="EMAIL"
              type="email"
              value={email}
              onChange={newValue => setEmail(newValue)}
            />

            <InputRegister
              placeholder="TELEFONE"
              type="number"
              value={phone}
              onChange={newValue => setPhone(newValue)}
            />

            <InputRegister
              placeholder="CPF"
              type="number"
              value={cpf}
              onChange={newValue => setCpf(newValue)}
            />

            <InputRegister
              placeholder="SENHA"
              type="password"
              value={password}
              onChange={newValue => setPassword(newValue)}
            />

            <button type="button" className="group relative mx-auto flex justify-center rounded-full border border-transparent bg-cyan-500 py-4 px-20 text-sm font-medium text-white hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">ACESSAR</button>

            <div>
              <p>
                Já possui conta?
              </p>
              <Link to="/entrar" className="text-sky-400/100">LOGAR</Link>
            </div>
          </form>
        </div>
      </div>


    </div >

  );
}