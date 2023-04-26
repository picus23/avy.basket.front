import { FC, ReactNode } from "react";

interface ButtonCheckoutProps {
    btn_style:string,
    children?:ReactNode
}
 
const ButtonCheckout: FC<ButtonCheckoutProps> = ({children, btn_style}) => {
    return <button className={btn_style}>
        {children}
    </button>;
}
 
export default ButtonCheckout;