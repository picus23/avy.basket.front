import { message } from "antd"
import { BasketItem, DetailBaketItems } from "../Basket"
import { EnvStorage } from "./environment/Interfaces"


export const getDetailBasket = (basketList :BasketItem[]): Promise<DetailBaketItems> => {
    console.log('getDetailBasket', basketList)



    const result: DetailBaketItems = {}
    basketList.forEach(basketItem => {
        result[basketItem.pagetitle] = {
            pagetitle: basketItem.pagetitle,
            count: basketItem.count,
            prittyPagetitle: false,
            price: 404,
        
            // props: {
            //     environment: basketItem.environment
            // },
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
        wp: [1, 10],
        wr: [0, 300],
        wt: [0, 21],
    }
}




export const WarningInContext = ({message = 'use in context'}: {message?: string}) => {
    return <div style={{border: '1px solid #222', padding: 10, background: '#f00'}}>- {message} -</div>
}