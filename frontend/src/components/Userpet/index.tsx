import { Link } from "react-router-dom";

import { PerfilPet } from "../PerfilPet";

import dog from '../../assets/img/perfil-dog.svg';

import Calender from '../../assets/img/calender.svg'
import { Datas } from "../Datas";
import { NavbarPet } from "../NavbarPet";


export const Userpet = () => {

  return (

    <div className="bg-cyan-500">

      <NavbarPet />

      <div className="container mx-auto grid mb-10">

        <div className="grid mt-28 md:flex">
          <PerfilPet
            src={dog}
            text="Link"
          />

          <div className="ml-6 mt-5 md:ml-10 md:mx-0 md:mt-0">
            <div className="flex gap-12 md:gap-28">
              <Datas
                text="Tutor"
                text2="Beatriz"
              />

              <Datas
                text="Nascimento"
                text2="19/12/21"
              />

              <Datas
                text="Temperamento"
                text2="Dócil"
              />
            </div>

            <div className="flex gap-12 mt-5 md:gap-28">
              <Datas
                text="Espécie"
                text2="Cachorro"
              />

              <Datas
                text="Sexo"
                text2="Macho"
              />

              <Datas
                text="Pelagem"
                text2="Pequena"
              />
            </div>

            <div className="flex gap-12 mt-5 md:gap-28">
              <Datas
                text="Raça"
                text2="Pug"
              />

              <Datas
                text="Peso"
                text2="7 kg"
              />
            </div>
          </div>

          <div>

          </div>

        </div>
      </div>

      <div className="bg-white h-auto py-10">
        <div className="bg-slate-300 flex justify-evenly py-5 rounded-2xl font-bold text-2xl text-center mx-44">
          <Link to="/consultas">Consultas</Link>
          <Link to="/prescricoes">Prescrições</Link>
          <Link to="/vacinas">Vacinas</Link>
        </div>
      </div>
    </div>
  );
}