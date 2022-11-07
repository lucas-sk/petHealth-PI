
interface IPerfilPetProps {
  src: string;
  text: string;
}

export const PerfilPet = (props: IPerfilPetProps) => {

  return (

    <div className="text-2xl font-semibold">
      <img src={props.src} alt="" />
      <span>{props.text}</span>
    </div>
  );
}