import { FormEvent, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Logo from '../../assets/img/logo.svg';

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { httpAuth } from "../../utils/http"

export const RegisterPet = () => {

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  let [yearsPet, setYears] = useState("");
  const [gender, setGender] = useState("");
  const [breed, setBreed] = useState("");
  let [weightPet, setWeight] = useState("");
  const [color, setColor] = useState("");



  const years = Number(yearsPet)
  const weight = Number(weightPet)



  // async function handleRegister(e: FormEvent<HTMLFormElement>) {
  //   e.preventDefault();

  //   http.post('users', {
  //     name, cpf, email, password
  //   })
  // }

  async function handleRegisterPet(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const res = await httpAuth.get(`/users/${auth.user?.id}/pets`)

    console.log(res)




    await httpAuth.post(`/users/${auth.user?.id}/pets`, {
      name, years, gender, breed, weight, color
    })
      .then(response => console.log(response))
      .catch(error => console.log(error))

    navigate('/perfil')
  }


  return (
    <div className="bg-cyan-500">

      <div className="flex min min-h-screen items-center justify-center sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 my-5 mx-5">
          <form className="mt-8 space-y-6 bg-white text-center px-10 pb-5 rounded-lg" onSubmit={handleRegisterPet}>
            <img src={Logo} alt="" className="mx-auto w-auto pt-6" />
            <p className="text-xl">NOVO PET </p>

            <Input
              placeholder="NOME"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />

            <Input
              placeholder="Idade"
              type="number"
              value={yearsPet}
              onChange={e => setYears(e.target.value)}
            />

            <Input
              placeholder="Sexo"
              type="text"
              value={gender}
              onChange={e => setGender(e.target.value)}
            />

            <Input
              placeholder="Espécie"
              type="text"
              value={breed}
              onChange={e => setBreed(e.target.value)}
            />

            <Input
              placeholder="Peso"
              type="number"
              value={weightPet}
              onChange={e => setWeight(e.target.value)}
            />

            <Input
              placeholder="Cor"
              type="text"
              value={color}
              onChange={e => setColor(e.target.value)}
            />

            <Button type="submit" className="group relative mx-auto flex justify-center rounded-full border border-transparent bg-cyan-500 py-4 px-20 text-sm font-medium text-white hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">CADASTRAR PET</Button>

          </form>
        </div>
      </div>
    </div >
  );
}