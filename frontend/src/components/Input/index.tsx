import { InputHTMLAttributes } from "react";

export const Input = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => {

  return (
    <input
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
    />
  );
}