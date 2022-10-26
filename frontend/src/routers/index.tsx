import { BrowserRouter, Route, Routes as Switch, Navigate } from "react-router-dom";
import { Login } from "../pages";
import { Register } from "../pages/register/Register";

export const Routes = () => {

  return (

    <BrowserRouter>
      <Switch>
        <Route path="/entrar" element={<Login />} />

        <Route path="/cadastro" element={<Register />} />


      </Switch>
    </BrowserRouter>
  );
}