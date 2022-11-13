interface DataProps {
  text: string;
  text2: string;
}

export const Datas = (props: DataProps) => {

  return (

    <div className="w-14 leading-none md:w-28">
      <p className="text-1xl font-semibold md:text-xl">{props.text}</p>
      <span className="text-1xl md:text-none">{props.text2}</span>
    </div>
  );
}