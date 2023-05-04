import { createContext, FC, ReactNode, useEffect, useRef, useState } from "react"
import BasketCanvas from "./BasketCanvas"
import { EnvStorage } from "./environment/Interfaces";
import { IBreadСrumbs } from 'kit/components/breadСrumbs/interface'




export interface BasketItem {
    pagetitle: string,
    count: number,
    environment: EnvStorage,
    isDelete: boolean,
}

interface DetailBaketItem {
    pagetitle: string,
    count: number,
    price: number,

    environment: EnvStorage,
    compatibilityStatus: number,
    img: string,

    breadСrumbs: IBreadСrumbs[],
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
    getDetailBasket: (basketList :BasketItem[]) => Promise<DetailBaketItems>
}


export const Basket: FC<iBasket> = ({ children, getEnvironment, getDetailBasket }) => {
    const [isInit, setIsInit] = useState(false);

    const [basketList, setBasketList] = useState<BasketItems>({});
    const [detailBasketList, setDetailBasketList] = useState<DetailBaketItems>({})
    const [basketListCount, setBasketListCount] = useState(0)

    const [isOpenDrawer, setIsOpenDrawer] = useState(false)



    useEffect(() => {
        const storage = localStorage.getItem('basket')
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
        getDetailBasket(Object.values(basketList)).then((detailsBasketList: DetailBaketItems) => {
            setDetailBasketList(detailsBasketList)
        })
    }


    useEffect(() => {
        if (isInit){

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
        tempBasketList[pagetitle] = { pagetitle, count, environment, isDelete: false }

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
            if (count <= 0) {
                productErase(pagetitle)
            } else {
                const tempBasketList = { ...basketList }
                tempBasketList[pagetitle].count = count
                tempBasketList[pagetitle].isDelete = false


                setBasketList(tempBasketList)
            }
        } else {
            toggleAdd(pagetitle, count, false)
        }
    }


    const productErase = (pagetitle: string): void => {
        if (pagetitle in basketList) {

            const tempBasketList = { ...basketList }
            // delete 
            tempBasketList[pagetitle].isDelete = true

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
