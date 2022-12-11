import { Input } from "../../components/Input";
import { Userpet } from "../../components/Userpet";
import Stethoscope from "../../assets/img/stethoscope.svg"
import { Textarea } from "../../components/Textarea";


export const FormQueries = () => {

  return (

    <div>
      <Userpet />


      <div className="container mx-auto bg-cyan-500 w-full h-80 rounded-2xl mb-5">
        <h1 className="text-2xl flex justify-center items-center gap-2 py-5 font-semibold"><img src={Stethoscope} alt="" /> Consulta Padrão</h1>
        <div className="px-10 border-t-2 border-t-stone-900 flex justify-between  pt-5">

          <div className="grid">
            <div className="flex items-center w-96">
              <label className="font-semibold" htmlFor="">Data da Consulta:</label>
              <Input
                type="date"
              />
            </div>

            <div className="flex items-center">
              <label className="font-semibold mr-3" htmlFor="">Anamnese/motivo:</label>
              <Input />
            </div>
          </div>

          <div>
            <label className="font-semibold" htmlFor="">Observações internas:</label>
            <Textarea
              cols={40}
              rows={5}
            />

          </div>



        </div>
      </div>
    </div>

  );
}