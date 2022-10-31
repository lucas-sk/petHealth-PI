import { Slot } from "@radix-ui/react-slot"
import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

export const Button = ({ asChild, ...props}: ButtonProps) => {
  const Component = asChild ? Slot : 'button'

  return (
      <Component className="group relative mx-auto flex justify-center rounded-full border border-transparent bg-cyan-500 py-4 px-20 text-sm font-medium text-white hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" {...props}>
        {props.children}
      </Component>
  )
}