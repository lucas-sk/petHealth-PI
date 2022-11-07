import { Button } from "../../components/Button";
import { Navbar } from "../../components/Navbar";

import catDog from '../../assets/img/bg-dog-cat.svg';
import dog from '../../assets/img/dog.svg';
import bird from '../../assets/img/bird.svg';
import cat from '../../assets/img/cat.svg';
import { Card } from "../../components/Card";

export const Home = () => {

  return (
    <div className="bg-cyan-500 h-screen">
      <Navbar />

      <div className="container mx-auto grid justify-center md:flex md:justify-between ">

        <div className="text-center mt-10 md:my-auto">
          <h1 className="text-3xl font-bold mb-5 md:text-5xl">
            CUIDE DO SEU PET. <br />
            VEM PRA HEALTH!
          </h1>

          <Button className="group relative flex justify-center rounded-full border border-transparent bg-black py-4 px-10 mx-auto text-sm font-medium text-white hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">REALIZAR CONSULTA</Button>
        </div>

        <div className="mt-10 md:mt-5">
          <img src={catDog} alt="" className="pt-5 object-contain h-80 w-96 md:h-full md:w-full md:pt-0" />
        </div>
      </div>

      <div className=" bg-white text-center pb-20">
        <div className="container mx-auto grid pt-10">
          <h1 className="text-3xl font-semibold mb-5">Fique de olho
            na saúde do
            <br /> seu pet!</h1>

          <div className="row grid-cols-3 gap-x-32  mx-20 items-center md:grid md:mx-0 font-semibold">
            <Card
              src={dog}
              text="Para que seu cãozinho fique imunizado contra doenças graves, o calendário de imunização inclui três doses de vacinas para cachorro essenciais e obrigatórias: a V8 ou a V10 e a antirrábica."
            />

            <Card
              src={bird}
              text="Imprescindível para o controle de infecções bacterianas na avicultura, o uso de antibiótico para aves é um cuidado que permite o combate aos agentes patogênicos que podem influenciar no processo produtivo."
            />

            <Card
              src={cat}
              text="Existem três tipos de vacinas polivalentes. A V3 protege os bichanos contra Panleucopenia, Rinotraqueíte e Calicivirose. A V4 inclui também proteção contra Clamidiose e a V5 soma a imunização contra Leucemia Felina."
            />
          </div>
        </div>

      </div>
    </div>
  );
}