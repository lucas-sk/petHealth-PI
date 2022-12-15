import { Button } from "../../components/Button";
import { Userpet } from "../../components/Userpet";

import Health from "../../assets/img/health.svg"
import { Link } from "react-router-dom";

export const Vaccines = () => {

  return (

    <div>
      <Userpet />

      <div className="mt-14 pb-8 flex">
        <div className="bg-cyan-500 py-4 px-10 my-auto ml-10 rounded-2xl">
          <h1 className="text-2xl text-center flex items-center gap-2 font-semibold"><img src={Health} alt="" /> Nova Vacina</h1>

          <Link to="/formulario-vacinas" className="group relative w-64 flex justify-center rounded-lg border border-transparent bg-black py-2 mb-20 mt-8 text-sm font-medium text-white hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Histórico de Vacinas</Link >
        </div>

        <div className="bg-cyan-500 ml-10 w-full h-80 mr-10 rounded-2xl">
          <h1 className="text-center mt-5">Histórico de Vacinas</h1>
        </div>
      </div>
    </div>

  );
}