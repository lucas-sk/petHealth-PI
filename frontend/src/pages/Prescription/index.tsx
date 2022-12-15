import { Userpet } from "../../components/Userpet";
import { Button } from "../../components/Button";

import Healthcare from "../../assets/img/healthcare.svg"
import { Link } from "react-router-dom";


export const Pescription = () => {

  return (

    <div>
      <Userpet />

      <div className="mt-14 pb-8 flex">
        <div className="bg-cyan-500 py-4 px-10 my-auto ml-10 rounded-2xl">
          <h1 className="text-2xl text-center flex items-center gap-2 font-semibold"><img src={Healthcare} alt="" /> Nova Prescrição</h1>

          <Link to="/formulario-prescricao" className="group relative w-64 flex justify-center rounded-lg border border-transparent bg-black py-2 mb-20 mt-8 text-sm font-medium text-white hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Novo medicamento</Link >
        </div>

        <div className="bg-cyan-500 ml-10 w-full h-80 mr-10 rounded-2xl">
          <h1 className="text-center mt-5">Histórico de Prescrições</h1>
        </div>
      </div>
    </div>
  );
}