import { createContext, FC, ReactNode, useCallback, useEffect, useRef, useState } from "react"
import BasketCanvas from "./BasketCanvas"
import { EnvStorage } from "./environment/Interfaces";
import { IBreadСrumbs } from 'kit/components/breadСrumbs/interface'




export interface BasketItem {
    pagetitle: string,
    count: number,
    environment?: EnvStorage,
    isDelete: number | false,
}

interface DetailBaketItem {
    pagetitle: string,
    count: number,
    price: number,

    environment?: EnvStorage,
    compatibilityStatus: number,
    img: string,

    breadСrumbs: IBreadСrumbs[],
    documents: [],
}





export interface DetailBaketItems {
    [pagetitle: string]: DetailBaketItem,
}


export interface iBasketContext {
    basketList?: BasketItem[],
    basketListCount?: number,

    isOpenDrawer?: boolean,



    getDetails?: (pagetitle: string) => DetailBaketItem | false,
    closeDrawer?: () => void,
    openDrawer?: () => void,
    toggleAdd?: (pagetitle: string, count: number, openDrawer?: boolean) => void,

    setCount?: (pagetitle: string, count: number) => void,
    getBasketItem?: (pagetitle: string) => BasketItem | undefined,

    productErase?: (pagetitle: string) => void,
    productPrice?: (pagetitle: string) => number,
    getProductsPrice?: () => number | false,
    eraseAll?: () => void,
}

export const BasketContext = createContext<iBasketContext>({});


interface iBasket {
    children: ReactNode,
    getEnvironment: () => EnvStorage | undefined,
    getDetailBasket: (basketList: BasketItem[]) => Promise<DetailBaketItems>
}


export const Basket: FC<iBasket> = ({ children, getEnvironment, getDetailBasket }) => {
    const [isInit, setIsInit] = useState(false);

    const [basketList, setBasketList] = useState<BasketItem[]>([]);
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


    const loadDetailBasket = useCallback(() => {
        getDetailBasket(basketList).then((detailsBasketList: DetailBaketItems) => {
            setDetailBasketList(detailsBasketList)
        })
    }, [basketList, getDetailBasket])


    useEffect(() => {
        if (isInit) {
            localStorage.setItem('basket', JSON.stringify(basketList))

            setBasketListCount(basketList.reduce((a, basketItem) => a + basketItem.count, 0))




            const interval = setInterval(
                () => {

                    setBasketList(prev =>

                        [...prev
                            .map(basketItem => {
                                if (basketItem.isDelete !== false)
                                    basketItem.isDelete -= 25

                                return basketItem
                            })
                            .filter(basketItem => {
                                if (basketItem.isDelete !== false)
                                    if (basketItem.isDelete <= 0)
                                        return false
                                return true
                            })
                        ]

                    )

                }, 1000)
            return () => clearInterval(interval)
        }
    }, [basketList, isInit]);


    useEffect(() => {
        if (basketListCount)
            loadDetailBasket()
        else
            setDetailBasketList({})
    }, [basketListCount, loadDetailBasket])


    const getBasketItem = (pagetitle: string) => {
        return basketList.find(item => item.pagetitle == pagetitle)
    }


    const toggleAdd = (pagetitle: string, count: number, openDrawer = true) => {
        const environment = getEnvironment()

        setBasketList(prev => {
            const nextBasketList = [...prev]
            const itemExists = nextBasketList.find(item => item.pagetitle == pagetitle)
            if (count < 1) count = 1;
            if (itemExists) {
                itemExists.count = count
                return nextBasketList
            } else {
                const newBasketItem: BasketItem = { pagetitle, count, environment, isDelete: false }
                return [...nextBasketList, newBasketItem]
            }

        })

        if (openDrawer)
            setIsOpenDrawer(true)
    }








    const setCount = (pagetitle: string, count: number) => {
        const basketItem = getBasketItem(pagetitle)

        if (basketItem)
            setBasketList(prev => prev.map(item => {
                if (item.pagetitle != pagetitle)
                    return item

                if (count <= 0) {
                    item.count = 0
                    basketItem.isDelete = 100
                } else {
                    item.count = count
                    item.isDelete = false
                }


                return item
            }))
        else
            toggleAdd(pagetitle, count, false)
    }


    const productErase = (pagetitle: string): void => {
        setBasketList(prev => prev.map(item => {
            if (item.pagetitle != pagetitle)
                return item

            item.isDelete = 100

            return item
        }))
    }


    const productRecover = (pagetitle: string): void => {

    }


    const productPrice = (pagetitle: string): number => {
        return 10
    }



    const getProductsPrice = (): number | false => {
        let price = 0

        for (const basketItem of basketList) {
            if (!(basketItem.pagetitle in detailBasketList))
                return false

            price += basketItem.count * detailBasketList[basketItem.pagetitle].price
        }


        return Math.round(price)
    }


    const eraseAll = (): void => {
        setBasketList([])
    }


    const getDetails = (pagetitle: string): DetailBaketItem | false => {
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

            getBasketItem,
            setCount,

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
