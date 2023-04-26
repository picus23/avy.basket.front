import {createContext, FC, ReactNode, useEffect, useState} from "react";

interface iBasket {
    children: ReactNode,
}

export interface iBasketContext {
    toggleAdd : (pagetitle : string, count : number, environment : any) => void,
    getContext : () => any,

    getCount : (pagetitle : string) => any,
    setCount : (pagetitle : string, count : number) => any,

    productErase : (pagetitle : string) => void,

    getProductsCount :() => number,

    eraseAll: () => void,
}

export const BasketContext = createContext<iBasketContext>({
    toggleAdd(pagetitle : string, count : number): void {},
    getContext() : any {},

    getCount(pagetitle : string) : any {},
    setCount(pagetitle : string, count : number) : any {},

    productErase(pagetitle : string) : void {},

    getProductsCount() : any {},

    eraseAll() : void {},
});

export const Basket : FC<iBasket> = ({ children }) => {
    const [basket, setBasket] = useState(localStorage.getItem('basket'));

    useEffect(() => {
        localStorage.setItem('basket', basket ? basket : '[]');

        console.log(basket);
    }, [basket]);


    const toggleAdd = (pagetitle : string, count : number) => {
        if (count == 0) {
            count = 1;
        }

        if (basket === null) {
            setBasket(JSON.stringify(
                new Array({'pagetitle' : pagetitle, 'count' : count, 'environment' : {'any' : 'any'}})
            ));
        } else {
            let products = JSON.parse(basket);
            let find = products.findIndex((p : any) => p.pagetitle === pagetitle);

            if (find != -1) {
                products[find] = {'pagetitle': products[find].pagetitle, 'count': count, 'environment': products[find].environment};
            } else {
                products.push({'pagetitle' : pagetitle, 'count' : count, 'environment' : {'any' : 'any'}});
            }

            setBasket(JSON.stringify(
                products
            ));
        }
    }

    const getContext = () => {
        return basket;
    }

    const getCount = (pagetitle : string) : number => {
        if (basket === null) {
            return 0;
        } else {
            let products = JSON.parse(basket);
            let find = products.findIndex((p : any) => p.pagetitle === pagetitle);

            if (find == -1) {
                return 0;
            } else {
                return products[find].count
            }
        }
    };

    const setCount = (pagetitle : string, count : number) : any => {
        if (basket !== null) {
            let products = JSON.parse(basket);
            let find = products.findIndex((p : any) => p.pagetitle === pagetitle);

            if (find !== -1) {
                if (count == 0) {
                    productErase(pagetitle);
                } else {
                    products[find] = {'pagetitle': pagetitle, 'count': count, 'environment': products[find].environment};

                    setBasket(JSON.stringify(products));
                }
            } else {
                toggleAdd(pagetitle, count);
            }
        } else {
            toggleAdd(pagetitle, count);
        }
    }

    const productErase = (pagetitle : string) : void => {
        if (basket !== null) {
            let products = JSON.parse(basket);
            let find = products.findIndex((p : any) => p.pagetitle === pagetitle);

            if (find !== -1) {
                products.splice(find, 1);
                setBasket(JSON.stringify(products));
            }
        }
    }

    const getProductsCount = () : number => {
        if (basket !== null) {
            let products = JSON.parse(basket);

            return products.length;

        } else {
            return 0;
        }
    }

    const eraseAll = () : void => {
        setBasket('[]');
    }

    return <BasketContext.Provider value={{toggleAdd, getContext, getCount, setCount, productErase, getProductsCount, eraseAll}}>
        {children}
    </BasketContext.Provider>
}
