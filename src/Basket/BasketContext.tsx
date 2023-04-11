import {createContext, Dispatch, FC, ReactNode, SetStateAction, useEffect, useState} from "react";

interface iBasket {
    children: ReactNode,
}

export interface iBasketContext {
    toggleAdd : (id : number, count : number) => void,
    getContext : () => void,
}

export const BasketContext = createContext<iBasketContext>({
    toggleAdd(id : number, count : number): void { },
    getContext() : void { },
});

export const Basket : FC<iBasket> = ({ children }) => {
    const [basket, setBasket] = useState(localStorage.getItem('basket'))

    useEffect(() => {
        localStorage.setItem('basket', basket ? basket : '');
    }, [basket]);

    let defaultValue = localStorage.getItem('basket');

    if (defaultValue === null) {
        defaultValue = '{}';
    }

    const toggleAdd = (id: number, count : number) => {
        if (basket === null) {
            setBasket(JSON.stringify(
                new Array({'id' : id, 'count' : count, 'enviroment' : {'any' : 'any'}})
            ));
        } else {
            let products = JSON.parse(basket);
            let find = products.findIndex((p : any) => p.id === id);

            if (find != -1) {
                products[find] = {'id' : id, 'count' : count, 'enviroment' : {'any' : 'any'}};

            } else {
                products.push({'id' : id, 'count' : count, 'enviroment' : {'any' : 'any'}});
            }

            setBasket(JSON.stringify(
                products
            ));
        }
    }

    const getContext = () => {
        console.log(basket);
    }

    return <BasketContext.Provider value={{toggleAdd, getContext}}>
        {children}
    </BasketContext.Provider>
}
