import { Navbar } from "../../components/Navbar";
import { PerfilPet } from "../../components/PerfilPet";

import dog from '../../assets/img/perfil-dog.svg';
import cat from '../../assets/img/perfil-cat.svg';
import lizard from '../../assets/img/perfil-lizard.svg';


export const Perfil = () => {

  return (

    <div className="bg-cyan-500 h-screen">
      <Navbar />

      <div className="container mx-auto grid">
        <h1 className="text-3xl font-bold ml-5 mt-10">Meus Pets</h1>

        <div className="flex text-center gap-20 mt-10">
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
      </div>


    </div>
  );
}