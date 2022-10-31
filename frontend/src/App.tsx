import { FormEvent } from "react"
import { http } from "./utils/http"


function App() {

  async function req1() {
    const { data } = await http.get('users')
    console.log(data)
  }
  req1()

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const name = e.currentTarget.username.value
    const cpf = e.currentTarget.cpf.value
    const email = e.currentTarget.email.value
    const password = e.currentTarget.password.value

    http.post('users', {
      name, cpf, email, password
    })
  }

  return (
    // <div className="App">
    //   <h1 className="text-3xl font-bold underline">alow</h1>
    //   <div>

    //     <form action="" onSubmit={handleSubmit}>
    //       <label htmlFor="">
    //         cpf
    //       </label>
    //       <input type="text" name="cpf" id="cpf" />
    //       <label htmlFor="">
    //         email
    //       </label>
    //       <input type="text" name="email" id="email" />
    //       <label htmlFor="">
    //         name
    //       </label>
    //       <input type="text" name="username" id="username" />
    //       <label htmlFor="">
    //         password
    //       </label>
    //       <input type="text" name="password" id="password" />
    //       <button type="submit">submit</button>
    //     </form>
    //   </div>
    // </div>
    <h1>as</h1>
  )
}

export default App
