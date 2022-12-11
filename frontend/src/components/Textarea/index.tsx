interface TextareaProps {
  cols: number,
  rows: number,

}

export const Textarea = (props: TextareaProps) => {

  return (

    <div>
      <textarea
        cols={props.cols}
        rows={props.rows}

        className="rounded-md outline-none px-2 pt-2"
      >
      </textarea>
    </div>
  );
}