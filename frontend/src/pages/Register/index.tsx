import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from '../../assets/img/logo.svg';
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [cpf, setCpf] = useState("")

  return (
    <div className="bg-cyan-500">

      <div className="flex min-h-full items-center justify-center sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 my-5 mx-5">
          <form className="mt-8 space-y-6 bg-white text-center px-10 pb-5 rounded-lg">
            <img src={Logo} alt="" className="mx-auto w-auto pt-6" />
            <p className="text-xl">CRIE SUA CONTA</p>
            <Input
              placeholder="NOME COMPLETO"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />

            <Input
              placeholder="EMAIL"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <Input
              placeholder="CPF"
              type="text"
              value={cpf}
              onChange={e => setCpf(e.target.value)}
            />

            <Input
              placeholder="SENHA"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <Button className="group relative mx-auto flex justify-center rounded-full border border-transparent bg-cyan-500 py-4 px-20 text-sm font-medium text-white hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">CRIAR CONTA</Button>

            <div>
              <p>
                Já possui conta?
              </p>
              <Link to="/entrar" className="text-sky-400/100 font-semibold">LOGAR</Link>
            </div>
          </form>
        </div>
      </div>
    </div >
  );
}