import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { Userpet } from "../../components/Userpet"

import Healthcare from "../../assets/img/healthcare.svg"
import { Button } from "../../components/Button"
import { useContext, useState } from "react"

import { httpAuth } from "../../utils/http"
import { AuthContext } from "../../contexts/Auth/AuthContext"

export const FormPrescription = () => {

  const auth = useContext(AuthContext)

  const [medicamento, setMedicamento] = useState("");
  const [times, setTimes] = useState("");
  const [prescription, setPrescription] = useState("");


  async function handlePrescription() {

    await httpAuth.post(`pets/${auth.user?.idPet}/prescriptions`, {
      medicamento, times, prescription
    })
      .then(response => console.log(response))
      .catch(error => console.log(error))

    console.log(prescription)

  }

  return (

    <div>
      <Userpet />

      <div className="container mx-auto bg-cyan-500 w-full  h-96 rounded-2xl mb-5">
        <h1 className="text-2xl flex justify-center items-center gap-2 py-5 font-semibold"><img src={Healthcare} alt="" />Nova Prescrição</h1>
        <div className="px-10 border-t-2 border-t-stone-900 flex justify-between  pt-5">

          <div className="grid">
            <div className="flex items-center w-96">
              <label className="font-semibold mr-3" htmlFor="">Medicamento:</label>
              <Input
                type="text"
                value={medicamento}
                onChange={e => setMedicamento(e.target.value)}
              />
            </div>

            <div className="flex items-center">
              <label className="font-semibold mr-3" htmlFor="">Horários:</label>
              <Input
                type="text"
                value={times}
                onChange={e => setTimes(e.target.value)}

              />
            </div>
          </div>

          <div>
            <label className="font-semibold" htmlFor="">Observações internas:</label>
            <Textarea
              cols={40}
              rows={5}
              value={prescription}
              onChange={e => setPrescription(e.target.value)}
            />

            <div className="flex justify-around ">
              < Button onClick={handlePrescription} type="submit" className="group relative w-32 flex justify-center rounded-full border border-transparent bg-black py-2 mt-8 text-sm font-medium text-white hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Salvar</Button>
              < Button className="group relative w-32 flex justify-center rounded-full border border-transparent bg-black py-2 mt-8 text-sm font-medium text-white hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Cancelar</Button>
            </div>
          </div>



        </div>

      </div>
    </div>
  )
}