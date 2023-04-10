import {createContext, Dispatch, FC, ReactNode, SetStateAction, useState} from "react";

interface iBasket {
    children: ReactNode,
}

export interface iBasketContext {
    toggleAdd : (id : number) => void,
}

export const BasketContext = createContext<iBasketContext|null>(null);

export const Basket : FC<iBasket> = ({ children }) => {
    const [basket, setBasket] = useState(localStorage.getItem('basket'))

    let defaultValue = localStorage.getItem('basket');

    if (defaultValue === null) {
        defaultValue = '{}';
    }

    const toggleAdd = (id: number) => {
        alert(123 + id);
    }

    return <BasketContext.Provider value={{toggleAdd}}>
        {children}
    </BasketContext.Provider>
}

// export const BasketProvider: FC<iBasketProvider> = ({children}) => {
//     const [basket, setBasket] = useState(defaultContext.basket);
//
//     const toggleAdd = () => {
//         setBasket('1');
//     }
//
//     return (
//         <BasketContext.Provider value={{basket, toggleAdd}}>
//             {children}
//         </BasketContext.Provider>
//     );
// }