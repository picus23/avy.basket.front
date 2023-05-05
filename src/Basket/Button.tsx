import { CSSProperties, FC, ReactNode } from "react";


interface ButtonProps {
    children?: ReactNode,
    icon?: ReactNode,
    iconRightContent?: ReactNode
    counter?: number,
    class_name?: string,
    style?: CSSProperties,
    isCounterUp?: boolean,
    counterPosition?: 'left' | 'right'
    contentPosition?: 'center' | 'start'
    btn_style?: 'btn-primary' | 'btn-secondary' | 'btn-outline-secondary' | 'btn-success' | 'btn-outline-primary',
    onClick?: () => void,
    htmlType?: 'submit' | 'reset',
    fontSize?: string,
}

const Button: FC<ButtonProps> = ({ children, icon, iconRightContent, onClick, counter, style, btn_style, class_name, contentPosition = 'center', counterPosition, htmlType = 'submit', fontSize }) => {
    return <button
        onClick={onClick}
        type={htmlType}
        className={btn_style
            ? 'd-flex justify-content-' + contentPosition + ' ' + class_name + ' position-relative align-items-center btn ' + btn_style
            : 'd-flex justify-content-' + contentPosition + ' ' + class_name + ' position-relative align-items-center btn btn-primary'}
        style={style}>

        {icon ?? false}
        {children ?
            <span className="mx-2" style={{ fontWeight: '500', fontSize: fontSize }}>{children}</span> :
            <span style={{ fontWeight: '500', fontSize: fontSize }}></span>}

        {counterPosition == 'left' ?
            <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-primary">{counter}
                <span className="visually-hidden">unread messages</span>
            </span> :
            false}
        {counterPosition == 'right' ?
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">{counter}
                <span className="visually-hidden">unread messages</span>
            </span> :
            false}

        {iconRightContent ?? false}

    </button>

}

export default Button;


// {`${btn_style ? 'my-btn-' + btn_style : 'btn-primary'}`} 




// import { FC, ReactNode } from "react";


// interface ButtonProps {
//     children?: ReactNode,
//     icon?: ReactNode,
//     icon2?: ReactNode
//     counter?: ReactNode,
//     btn_style: string,
//     counter_style?: string,
//     class_name?: string,
//     onClick: () => void,
// }

// const Button: FC<ButtonProps> = ({ children, icon, icon2, counter, btn_style, counter_style, onClick }) => {
//     return <button className={'my-btn-' + btn_style} onClick={onClick} type="button"
//         data-bs-toggle="offcanvas" data-bs-target="#offcanvasBasket"
//         aria-controls="offcanvasBasket">

//         {icon ?? false}
//         {children}

//         <span className={'py-1 counter-' + counter_style}>{counter}</span>
//         {icon2 ?? false}
//     </button>
// }

// export default Button;


// {`${btn_style ? 'my-btn-' + btn_style : 'btn-primary'}`} 