import { FormEvent, useContext, useState } from "react";
import { Link, useNavigate, redirect } from "react-router-dom";


import jwt from 'jwt-decode'

import Logo from '../../assets/img/logo.svg';
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { httpAuth } from "../../utils/http";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  // const navigate = useNavigate();


  // const [credentials, setCredentials] = useState({
  //   email: "",
  //   password: "",
  // })

  const handleLogin = async () => {


    if (email && password) {
      const isLogged = await auth.signin(email, password);

      if (isLogged) {
        navigate('/perfil')
      } else {
        alert("Opa! Dados incorretos");
      }
    }

    // const response = await httpAuth.post('/login', credentials);

    // const response = await httpAuth.post('/login', {
    //   email, password
    // })
    //   .then(res => {
    //     const token = res.data.token;
    //     const user = jwt(token);
    //     localStorage.setItem('@user', JSON.stringify(res.data.user));


    //     const data = httpAuth.get(`/users/${user.id}`)
    //       .then(res => {

    //         console.log(res)
    //       })


    //   })


    // const res = response.data;

    // console.log(res)

    // // verificar se existe erro
    // if (res.error) {
    //   alert(res.message);
    //   return false;
    // }

    // guarda todas as informações do usuário
    // console.log(localStorage.getItem('@user'));

    // if (email === "teste@gmail.com" && password === "1234") {
    //   navigate("/perfil")

    //   // }
    // }
  }


  // function handleLogin(e: FormEvent<HTMLFormElement>) {
  //   e.preventDefault()

  //   httpAuth.post('/login', {
  //     email, password
  //   });
  // };
  return (
    <div className="bg-cyan-500">

      <div className="flex min-h-full items-center justify-center h-screen sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 my-5 mx-5">
          <div className="mt-8 space-y-6 bg-white text-center px-10 pb-20 rounded-lg" /*onSubmit={handleLogin}*/ >
            <img src={Logo} alt="" className="mx-auto w-auto pt-6" />
            <p className="text-xl">ACESSAR CONTA</p>
            <Input
              placeholder="EMAIL"
              type="email"
              // value={email}
              onChange={e => setEmail(e.target.value)}
            // onChange={e => setCredentials({ ...credentials, email: e.target.value })}
            />

            <Input
              placeholder="SENHA"
              type="password"
              // value={password}
              onChange={e => setPassword(e.target.value)}
            // onChange={e => setCredentials({ ...credentials, password: e.target.value })}
            />

            <Button onClick={handleLogin} className="group relative mx-auto flex justify-center rounded-full border border-transparent bg-cyan-500 py-4 px-20 text-sm font-medium text-white hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">ACESSAR</Button>

            <div>
              <p>
                Ainda não tem conta?
              </p>

              <Link to="/cadastro" className="text-sky-400/100 font-semibold">CADASTRE-SE</Link>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};