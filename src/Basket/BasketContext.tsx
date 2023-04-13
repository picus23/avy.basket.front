import {createContext, FC, ReactNode, useEffect, useState} from "react";

interface iBasket {
    children: ReactNode,
}

export interface iBasketContext {
    toggleAdd : (id : number, count : number, environment : any) => void,
    getContext : () => any,

    getCount : (id : number) => any,
    setCount : (id : number, count : number) => any,

    productErase : (id : number) => void,
    productPrice : (id : number) => number,

    getProductsCount: () => number,
    getProductsPrice: () => number,
}

export const BasketContext = createContext<iBasketContext>({
    toggleAdd(id : number, count : number): void {},
    getContext() : any {},

    getCount(id : number) : any {},
    setCount(id : number, count : number) : any {},

    productErase(id : number) : void {},
    productPrice(id : number) : any {},

    getProductsCount() : any {},
    getProductsPrice() : any {},
});

export const Basket : FC<iBasket> = ({ children }) => {
    const [basket, setBasket] = useState(localStorage.getItem('basket'));

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

    return <BasketContext.Provider value={{toggleAdd, getContext, getCount, setCount, productErase, productPrice, getProductsCount, getProductsPrice}}>
        {children}
    </BasketContext.Provider>
}
