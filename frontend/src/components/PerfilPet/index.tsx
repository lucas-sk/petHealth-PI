interface IPerfilPetProps {
  src: string;
  text: string;
}

export const PerfilPet = (props: IPerfilPetProps) => {

  return (

    <div className="text-2xl mx-auto font-semibold text-center cursor-pointer md:mx-0">
      <img src={props.src} alt="" />
      <span>{props.text}</span>
    </div>
  );
}