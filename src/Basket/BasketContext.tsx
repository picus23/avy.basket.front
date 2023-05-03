import { createContext, FC, ReactNode, useEffect, useRef, useState } from "react"
import BasketCanvas from "./BasketCanvas"
import { EnvStorage } from "./environment/Interfaces";
import { IBreadСrumbs } from 'kit/components/breadСrumbs/interface'




interface BasketItem {
    pagetitle: string,
    count: number,
    environment: EnvStorage,
}

interface DetailBaketItem {
    pagetitle: string,
    count: number,
    price: number,

    environment: EnvStorage,
    compatibilityStatus: number,
    img: string,

    breadCrumbs: IBreadСrumbs[],
    documents: [],
}




interface BasketItems {
    [pagetitle: string]: BasketItem,
}

export interface DetailBaketItems {
    [pagetitle: string]: DetailBaketItem,
}


export interface iBasketContext {
    basketList?: BasketItems,
    basketListCount?: number,

    isOpenDrawer?: boolean,



    getDetails?: (pagetitle: string) => DetailBaketItem | false,
    closeDrawer?: () => void,
    openDrawer?: () => void,
    toggleAdd?: (pagetitle: string, count: number, openDrawer?: boolean) => void,

    getCount?: (pagetitle: string) => number,
    setCount?: (pagetitle: string, count: number) => void,

    productErase?: (pagetitle: string) => void,
    productPrice?: (pagetitle: string) => number,
    getProductsPrice?: () => number,
    eraseAll?: () => void,
}

export const BasketContext = createContext<iBasketContext>({});


interface iBasket {
    children: ReactNode,
    getEnvironment: () => EnvStorage,
    runTask: (task: string, props: {}) => Promise
}


export const Basket: FC<iBasket> = ({ children, getEnvironment, runTask }) => {
    const [isInit, setIsInit] = useState(false);

    const [basketList, setBasketList] = useState<BasketItems>({});
    const [detailBasketList, setDetailBasketList] = useState<DetailBaketItems>({})
    const [basketListCount, setBasketListCount] = useState(0)

    const [isOpenDrawer, setIsOpenDrawer] = useState(false)



    useEffect(() => {
        console.log('read storage')

        const storage = localStorage.getItem('basket')
        console.log('storage', storage)
        if (storage) {
            const tempBasket = JSON.parse(storage as string)
            setBasketList(tempBasket)
        }

        setIsInit(true)
    }, [])


    const closeDrawer = () => {
        setIsOpenDrawer(false)
    }

    const openDrawer = () => {
        setIsOpenDrawer(true)
    }


    const loadDetailBasket = () => {
        runTask('getDetailBasket', { basket: Object.values(basketList) }).then((detailsBasketList: DetailBaketItems) => {
            setDetailBasketList(detailsBasketList)
        })
    }


    useEffect(() => {
        if (isInit){

            console.log('write storage', basketList)
            localStorage.setItem('basket', JSON.stringify(basketList))
            
            
            setBasketListCount(Object.values(basketList).reduce((a, basketItem) => a + basketItem.count, 0))
        }
    }, [basketList]);


    useEffect(() => {
        if (basketListCount)
            loadDetailBasket()
        else
            setDetailBasketList({})
    }, [basketListCount])




    const toggleAdd = (pagetitle: string, count: number, openDrawer = true) => {
        const environment = getEnvironment()

        if (count < 1) count = 1;

        const tempBasketList = { ...basketList }
        tempBasketList[pagetitle] = { pagetitle, count, environment }

        setBasketList(tempBasketList)
        if (openDrawer)
            setIsOpenDrawer(true)
    }




    const getCount = (pagetitle: string) => {
        if (pagetitle in basketList) {
            return basketList[pagetitle].count
        } else {
            return 0
        }
    }

    const setCount = (pagetitle: string, count: number) => {
        if (pagetitle in basketList) {
            if (count < 1) {
                productErase(pagetitle)
            } else {
                const tempBasketList = { ...basketList }
                tempBasketList[pagetitle].count = count

                setBasketList(tempBasketList)
            }
        } else {
            toggleAdd(pagetitle, count, false)
        }
    }


    const productErase = (pagetitle: string): void => {
        if (pagetitle in basketList) {

            const tempBasketList = { ...basketList }
            delete tempBasketList[pagetitle]

            setBasketList(tempBasketList)
        }
    }


    const productPrice = (pagetitle: string): number => {
        return 10
    }


    const getProductsPrice = (): number => {
        let price = 0
        Object.values(detailBasketList).forEach(detailBasketItem => {
            price += detailBasketItem.price * (detailBasketItem.pagetitle in basketList ? basketList[detailBasketItem.pagetitle].count : 0)
        })

        return Math.round(price)
    }

    const eraseAll = (): void => {
        setBasketList({})
    }

    const getDetails = (pagetitle: string) : DetailBaketItem | false => {
        if (pagetitle in detailBasketList) 
            return detailBasketList[pagetitle];

        return false
    }

    return <BasketContext.Provider value={
        {
            basketList,
            getDetails,
            basketListCount,

            isOpenDrawer,
            closeDrawer,
            openDrawer,
            toggleAdd,

            setCount,
            getCount,

            productErase,
            productPrice,
            getProductsPrice,
            eraseAll
        }
    }>
        <BasketCanvas />
        {children}
    </BasketContext.Provider>
}
