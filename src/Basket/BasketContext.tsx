import {createContext, FC, ReactNode, useEffect, useState} from "react";
import BasketCanvas from "./BasketCanvas";

interface iBasket {
    children: ReactNode,
}

export interface iBasketContext {
    isOpenDrawer: boolean,
    closeDrawer(): void ,
    openDriver(): void ,
    toggleAdd : (id : number, count : number, environment : any) => void,
    getContext : () => any,

    getCount : (id : number) => any,
    setCount : (id : number, count : number) => any,

    productErase : (id : number) => void,
    productPrice : (id : number) => number,
    productInfo : (id: number) => any,
    productEnvironment : (id: number) => any,

    getProductsCount: () => number,
    getProductsPrice: () => number,

    eraseAll: () => void,
}

export const BasketContext = createContext<iBasketContext>({
    isOpenDrawer: false,
    closeDrawer(): void {},
    openDriver() : void {},
    toggleAdd(id : number, count : number): void {},
    getContext() : any {},

    getCount(id : number) : any {},
    setCount(id : number, count : number) : any {},

    productErase(id : number) : void {},
    productPrice(id : number) : any {},
    productInfo(id : number) : any {},
    productEnvironment(id : number) : any {},

    getProductsCount() : any {},
    getProductsPrice() : any {},

    eraseAll() : void {},
});

export const Basket : FC<iBasket> = ({ children }) => {
    const defaultBasket = '[]'
    const [basket, setBasket] = useState(defaultBasket);
    const [isOpenDrawer, setIsOpenDrawer] = useState(false)


    useEffect(() => {
        setBasket(localStorage.getItem('basket') ?? defaultBasket)
    }, [])


    const closeDrawer = () => {
        setIsOpenDrawer(false)
    }

    const openDriver = () => {
        setIsOpenDrawer(true)
    }

    useEffect(() => {
        localStorage.setItem('basket', basket ? basket : '[]');
    }, [basket]);

    const toggleAdd = (id: number, count : number) => {
        if (count == 0) {
            count = 1;
        }

        if (basket === null) {
            setBasket(JSON.stringify(
                new Array({'id' : id, 'count' : count, 'environment' : {'any' : 'any'}})
            ));
        } else {
            let products = JSON.parse(basket);

            let find = products.findIndex((p : any) => p.id === id);

            if (find != -1) {
                products[find] = {'id' : id, 'count' : count, 'environment' : {'any' : 'any'}};

            } else {
                products.push({'id' : id, 'count' : count, 'environment' : {'any' : 'any'}});
            }

            setBasket(JSON.stringify(
                products
            ));
        }
    }

    const getContext = () => {
        return basket;
    }

    const getCount = (id: number) : number => {
        if (basket === null) {
            return 0;
        } else {
            let products = JSON.parse(basket);
            let find = products.findIndex((p : any) => p.id === id);

            if (find == -1) {
                return 0;
            } else {
                return products[find].count
            }
        }
    };

    const setCount = (id : number, count : number) : any => {
        if (basket !== null) {
            let products = JSON.parse(basket);
            let find = products.findIndex((p : any) => p.id === id);

            if (find !== -1) {
                if (count == 0) {
                    productErase(id);
                } else {
                    products[find] = {'id' : id, 'count' : count, 'environment' : products[find].environment}
                    setBasket(JSON.stringify(products));
                }
            } else {
                toggleAdd(id, count);
            }
        }
    }

    const productErase = (id : number) : void => {
        if (basket !== null) {
            let products = JSON.parse(basket);
            let find = products.findIndex((p : any) => p.id === id);

            if (find !== -1) {
                products.splice(find, 1);
                setBasket(JSON.stringify(products));
            }
        }
    }

    const productPrice = (id : number) : number => {
        if (id == 1) {
            return 14;
        }
        else if (id == 2) {
            return 36;
        }
        else if (id == 4) {
            return 111;
        }
        else {
            return 156;
        }
    }

    const productInfo = async (id: number): Promise<any> => {
        let body = {
            id: id
        }

        return await fetch('http://avy-api.loc/', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(body),

        });
    }

    const productEnvironment = async (id: number) : Promise<any> => {
        return await fetch('http://avy-api.loc/environment', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
    }

    const getProductsCount = () : number => {
        if (basket !== null) {
            let products = JSON.parse(basket);

            return products.length;

        } else {
            return 0;
        }
    }

    const getProductsPrice = () : number => {
        if (basket !== null) {
            let fullPrice = 0;
            let products = JSON.parse(basket);

            for (let i = 0; i < products.length; i++) {
                fullPrice += productPrice(products[i].id) * products[i].count;
            }

            return fullPrice;

        } else {
            return 0;
        }
    }

    const eraseAll = () : void => {
        setBasket('[]');
    }

    return <BasketContext.Provider value={{isOpenDrawer, closeDrawer, openDriver ,toggleAdd, getContext, getCount, setCount, productErase, productPrice, productInfo, productEnvironment, getProductsCount, getProductsPrice, eraseAll}}>
        <BasketCanvas>{children}</BasketCanvas>
    </BasketContext.Provider>
}
