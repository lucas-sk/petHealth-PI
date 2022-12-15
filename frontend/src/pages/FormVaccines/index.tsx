import { Input } from "../../components/Input";
import { Userpet } from "../../components/Userpet";
import Stethoscope from "../../assets/img/stethoscope.svg"
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";


export const FormVaccines = () => {

  return (

    <div>
      <Userpet />


      <div className="container mx-auto bg-cyan-500 w-full h-80 rounded-2xl mb-5">
        <h1 className="text-2xl flex justify-center items-center gap-2 py-5 font-semibold"><img src={Stethoscope} alt="" /> Adicionar Vacina</h1>
        <div className="px-10 xborder-t-2 border-t-stone-900 flex justify-between  pt-5">

          <div className="grid">
            <div className="flex items-center w-96">
              <label className="font-semibold" htmlFor="">Nome da vacina:</label>
              <Input
                type="date"
              />
            </div>

            <div className="flex items-center">
              <label className="font-semibold mr-3" htmlFor="">Data início do medicamento:</label>
              <Input />
            </div>

            <div className="flex items-center">
              <label className="font-semibold mr-3" htmlFor="">Horários:</label>
              <Input />
            </div>
          </div>

          <div>
            <label className="font-semibold" htmlFor="">Observações internas:</label>
            <Textarea
              cols={40}
              rows={5}
            />

            <div className="flex justify-around ">
              < Button type="submit" className="group relative w-32 flex justify-center rounded-full border border-transparent bg-black py-2 mt-8 text-sm font-medium text-white hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Salvar</Button>
              < Button className="group relative w-32 flex justify-center rounded-full border border-transparent bg-black py-2 mt-8 text-sm font-medium text-white hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Cancelar</Button>
            </div>

          </div>



        </div>
      </div>
    </div>

  );
}