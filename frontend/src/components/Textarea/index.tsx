import { TextareaHTMLAttributes } from "react"

interface TextareaProps {
  cols: number,
  rows: number,
}

export const Textarea = (props: TextareaHTMLAttributes<HTMLTextAreaElement>) => {

  return (

    <div>
      <textarea
        cols={props.cols}
        rows={props.rows}
        id="message"
        name="message"
        className="rounded-md outline-none px-2 pt-2"
      >
      </textarea>
    </div>
  );
}