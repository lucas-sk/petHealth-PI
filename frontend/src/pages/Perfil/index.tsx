import { Link } from "react-router-dom";

import { PerfilPet } from "../../components/PerfilPet";

import dog from '../../assets/img/perfil-dog.svg';
import cat from '../../assets/img/perfil-cat.svg';
import lizard from '../../assets/img/perfil-lizard.svg';

import Calender from '../../assets/img/calender.svg'
import { NavbarPerfil } from "../../components/NavbarPerfil";


export const Perfil = () => {

  return (

    <div className="bg-cyan-500">

      <NavbarPerfil />

      <div className="container mx-auto grid mb-10">
        <h1 className="text-3xl font-bold ml-5 mt-24">Meus Pets</h1>

        <div className="flex text-center gap-10 mt-10 mx-10 md:mx-0 md:gap-20">
          <PerfilPet
            src={dog}
            text="Link"
          />

          <PerfilPet
            src={cat}
            text="Cueco"
          />

          <PerfilPet
            src={lizard}
            text="Jack"
          />
        </div>

        <div className="flex justify-end">
          <Link to="" className="group relative w-64 flex justify-center rounded-full border border-transparent bg-black py-2  mt-8 text-sm font-medium text-white hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">CADASTRAR NOVO PET</Link>
        </div>
      </div>

      <div className="bg-white h-auto py-10">
        <h1 className="text-3xl font-semibold mb-20 text-center">Eventos <br /> agendados</h1>

        <div className="grid px-10 gap-10 container md:flex md:mx-auto md:gap-36">
          <div className="bg-slate-300 px-5 py-5 rounded-lg w-full">
            <div className="flex justify-between">
              <h2 className="text-2xl font-semibold md:text-3xl">Link</h2>
              <p className="flex text-xs font-bold items-center"><img src={Calender} alt="" className="mt-2" />01 DE SETEMBRO DE 2022</p>
            </div>
            <p className="font-semibold mt-10 text-1xl">
              A vacina Leptospirose para Link está atrasada. Lembre-se de marca-la como realizada após a aplicação.
            </p>
          </div>

          <div className="bg-slate-300 px-5 py-5 rounded-lg w-full">
            <div className="flex justify-between">
              <h2 className="text-2xl font-semibold md:text-3x">Cueco</h2>
              <p className="flex text-xs font-bold items-center"><img src={Calender} alt="" className="mt-2" />03 DE SETEMBRO DE 2022</p>
            </div>
            <p className="font-semibold mt-10 text-1xl">
              A vacina contra a raiva está marcada para amanhã, 03 de Setembro!
            </p>
          </div>
        </div>
      </div>


    </div>
  );
}