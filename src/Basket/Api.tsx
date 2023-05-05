import { BasketItem, DetailBaketItems } from "./BasketContext"
import { EnvStorage } from "./environment/Interfaces"


export const getDetailBasket = (basketList :BasketItem[]): Promise<DetailBaketItems> => {
    console.log('basketList', basketList)



    const result: DetailBaketItems = {}
    basketList.forEach(basketItem => {
        result[basketItem.pagetitle] = {
            pagetitle: basketItem.pagetitle,
            count: basketItem.count,
            price: 404,
        
            environment: basketItem.environment,
            compatibilityStatus: 4,
            img: '/logo192.png',
        
            breadСrumbs: [
                {
                    id: 0,
                    title: 'Продукция',
                    url: '#prod'
                },
                {
                    id: 1,
                    title: 'тестовые данные',
                    url: '#test'
                },
                {
                    id: 2,
                    title: basketItem.pagetitle,
                    url: '#pageitle'
                },
            ],
            documents: [],
        }
    })


    return new Promise((res) => {

        setTimeout(() => {
            res(result)
        }, 5000)

    })
}



export const getEnvironment = (): EnvStorage => {
    return {
        compatibility: [],
        id: '1',
        wp: {
            from: 0, to: 0
        },
        wr: {
            from: 0, to: 0
        },
        wt: {
            from: 0, to: 0
        },
    }
}




export const WarningInContext = () => {
    return <>- use in context -</>
}