import { createContext, FC, ReactNode, useEffect, useState } from "react"
import BasketCanvas from "./BasketCanvas"
import { EnvStorage } from "./environment/Interfaces";
import {IBreadСrumbs} from 'kit/components/breadСrumbs/interface'




export interface iBasketContext {
    isOpenDrawer: boolean,
    closeDrawer(): void,
    openDrawer(): void,
    toggleAdd: (pagetitle: string, count: number, environment: any) => void,
    getContext: () => any,

    getCount: (pagetitle: string) => any,
    setCount: (pagetitle: string, count: number) => any,

    productErase: (pagetitle: string) => void,
    productPrice: (pagetitle: string) => number,
    productInfo: (pagetitle: string) => any,
    productEnvironment: (pagetitle: string) => any,

    getProductsCount: () => number,
    getProductsPrice: () => number,

    eraseAll: () => void,
}

export const BasketContext = createContext<iBasketContext>({
    isOpenDrawer: false,
    closeDrawer(): void { },
    openDrawer(): void { },
    toggleAdd(pagetitle: string, count: number): void { },
    getContext(): any { },

    getCount(pagetitle: string): any { },
    setCount(pagetitle: string, count: number): any { },

    productErase(pagetitle: string): void { },
    productPrice(pagetitle: string): any { },
    productInfo(pagetitle: string): any { },
    productEnvironment(pagetitle: string): any { },

    getProductsCount(): any { },
    getProductsPrice(): any { },

    eraseAll(): void { },
});



interface IDetailBasketItem {
    pagetitle: string,
    count: number,
    price: number,
    
    environment: EnvStorage,
    compatibilityStatus: number,
    imageUrl: string,

    breadCrumbs: IBreadСrumbs[],
    documents: [],
}





interface iBasket {
    children: ReactNode,
    getEnvironment: () => EnvStorage,
    runTask: () => Promise
}


export const Basket: FC<iBasket> = ({ children, getEnvironment, runTask }) => {
    const defaultBasket = '[]'
    const [basket, setBasket] = useState(defaultBasket);
    const [isOpenDrawer, setIsOpenDrawer] = useState(false)


    const [detailBasket, setDetailBasket] = useState<IDetailBasketItem[]>([])


    useEffect(() => {
        console.log('My basket', localStorage.getItem('basket'))
        setBasket(localStorage.getItem('basket') ?? defaultBasket)
    }, [])


    const closeDrawer = () => {
        setIsOpenDrawer(false)
    }

    const openDrawer = () => {
        setIsOpenDrawer(true)
    }

    useEffect(() => {
        localStorage.setItem('basket', basket ? basket : '[]');
        console.log('basket', basket)
    }, [basket]);


    const toggleAdd = (pagetitle: string, count: number) => {
        const environment = getEnvironment()

        if (count == 0) {
            count = 1;
        }

        if (basket === null) {
            setBasket(JSON.stringify(
                new Array({ pagetitle, count, environment  })
            ));
        } else {
            let products = JSON.parse(basket);

            let find = products.findIndex((p: any) => p.pagetitle === pagetitle);

            if (find != -1) {
                products[find] = { pagetitle, count, environment  };

            } else {
                products.push({ pagetitle, count, environment  });
            }

            setBasket(JSON.stringify(
                products
            ));
        }
    }

    const getContext = () => {
        return basket;
    }

    const getCount = (pagetitle: string): number => {
        if (basket === null) {
            return 0;
        } else {
            let products = JSON.parse(basket);
            let find = products.findIndex((p: any) => p.pagetitle === pagetitle);

            if (find == -1) {
                return 0;
            } else {
                return products[find].count
            }
        }
    };



    const setCount = (pagetitle: string, count: number): any => {
        if (basket !== null) {
            let products = JSON.parse(basket);
            let find = products.findIndex((p: any) => p.pagetitle === pagetitle);

            if (find !== -1) {
                if (count == 0) {
                    productErase(pagetitle);
                } else {
                    products[find] = { pagetitle, count, 'environment': getEnvironment() }
                    setBasket(JSON.stringify(products));
                }
            } else {
                toggleAdd(pagetitle, count);
            }
        }
    }

    const productErase = (pagetitle: string): void => {
        if (basket !== null) {
            let products = JSON.parse(basket);
            let find = products.findIndex((p: any) => p.pagetitle === pagetitle);

            if (find !== -1) {
                products.splice(find, 1);
                setBasket(JSON.stringify(products));
            }
        }
    }

    const productPrice = (pagetitle: string): number => {
        return 10
    }

    const productInfo = async (pagetitle: string): Promise<any> => {
        // let body = {
        //     id: id
        // }

        // return await fetch('http://avy-api.loc/', {
        //     method: 'POST',
        //     headers: {
        //         "Accept": "application/json",
        //         'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        //     body: JSON.stringify(body),

        // });
        return runTask<any>('basketInfo', {pagetitle})
    }

    const productEnvironment = async (pagetitle: string): Promise<any> => {
        return await fetch('http://avy-api.loc/environment', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
    }

    const getProductsCount = (): number => {
        if (basket !== null) {
            let products = JSON.parse(basket);

            return products.length;

        } else {
            return 0;
        }
    }

    const getProductsPrice = (): number => {
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

    const eraseAll = (): void => {
        setBasket('[]');
    }

    return <BasketContext.Provider value={
        {
            isOpenDrawer,
            closeDrawer,
            openDrawer,
            toggleAdd,
            getContext,
            getCount,
            setCount,
            productErase,
            productPrice,
            productInfo,
            productEnvironment,
            getProductsCount,
            getProductsPrice,
            eraseAll
        }
    }>
        <BasketCanvas />
        { children }
    </BasketContext.Provider>
}
