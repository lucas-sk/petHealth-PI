import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from '../../assets/img/logo.svg';
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  return (
    <div className="bg-cyan-500">

      <div className="flex min-h-full items-center justify-center h-screen sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 my-5 mx-5">
          <form className="mt-8 space-y-6 bg-white text-center px-10 pb-20 rounded-lg">
            <img src={Logo} alt="" className="mx-auto w-auto pt-6" />
            <p className="text-xl">ACESSAR CONTA</p>
            <Input
              placeholder="LOGIN"
              type="email"
              value={email}
              onChange={newValue => setEmail(newValue)}
            />

            <Input
              placeholder="SENHA"
              type="password"
              value={password}
              onChange={newValue => setPassword(newValue)}
            />

            <Button className="group relative mx-auto flex justify-center rounded-full border border-transparent bg-cyan-500 py-4 px-20 text-sm font-medium text-white hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">ACESSAR</Button>

            <div>
              <p>
                Ainda não tem conta?
              </p>

              <Link to="/cadastro" className="text-sky-400/100">CADASTRE-SE</Link>
            </div>
          </form>
        </div>
      </div>
    </div >
  );
}