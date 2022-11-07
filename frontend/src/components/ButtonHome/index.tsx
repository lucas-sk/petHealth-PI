import { Slot } from "@radix-ui/react-slot"
import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

export const ButtonHome = ({ asChild, ...props }: ButtonProps) => {
  const Component = asChild ? Slot : 'button'

  // return (
  //   <Component {...props}>
  //     {props.children}
  //   </Component>
  // )
}