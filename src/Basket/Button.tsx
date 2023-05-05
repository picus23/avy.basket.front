import { FC, ReactNode } from "react";


interface ButtonProps {
    children?: ReactNode,
    icon?: ReactNode,
    icon2?: ReactNode
    counter?: ReactNode,
    btn_style: string,
    counter_style?: string,
    class_name?: string,
    onClick: () => void,
}

const Button: FC<ButtonProps> = ({ children, icon, icon2, counter, btn_style, counter_style, onClick }) => {
    return <button className={'my-btn-' + btn_style} onClick={onClick} type="button"
        data-bs-toggle="offcanvas" data-bs-target="#offcanvasBasket"
        aria-controls="offcanvasBasket">

        {icon ?? false}
        {children}

        <span className={'py-1 counter-' + counter_style}>{counter}</span>
        {icon2 ?? false}
    </button>
}

export default Button;


// {`${btn_style ? 'my-btn-' + btn_style : 'btn-primary'}`} 