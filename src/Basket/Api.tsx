import { BasketItem, DetailBaketItems } from "./BasketContext"
import { EnvStorage } from "./environment/Interfaces"


export const getDetailBasket = (basketList :BasketItem[]): Promise<DetailBaketItems> => {
    console.log('basketList', basketList)


    return new Promise((res) => {
        const result: DetailBaketItems = {}

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