interface ICardProps {
  text: string;
  src: string;
}

export const Card = (props: ICardProps) => {

  return (

    <div className="mt-10 md:mt-0">
      <img src={props.src} alt="" className="mx-auto" />
      <p>{props.text}</p>
    </div>
  );
}