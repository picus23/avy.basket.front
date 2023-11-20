import BasketOpen from "../basket/сomponents/BasketOpen";

import { getDetailBasket } from '../basket/Api';
import Basket from '@/Basket';
import { ConfigProvider } from "antd";
import { defaultData } from "@/basket/config/config";
import BasketAddButton from "@/basket/сomponents/BasketAddButton";
import BasketRemoveButton from "@/basket/сomponents/BasketRemoveButton";




export default function Home() {
    return (
        <>
            <ConfigProvider theme={defaultData}>
                <Basket getDetailBasket={getDetailBasket}>
                    <div className="flex flex-col gap-3">
                        <BasketOpen />

                        <div className="flex gap-3 bg-gray-200 p-3">
                            <BasketAddButton pagetitle={'11111111'} />
                            <BasketRemoveButton pagetitle={'11111111'} />
                        </div>


                        {
                            [
                                '111111111111111',
                                '222222222222222',
                                '333333333333333',
                                '444444444444444',
                                '555555555555555',
                                '666666666666666',
                                '777777777777777',
                            ].map(pagetitle => {
                                return <div key={pagetitle} className="flex gap-3 items-center">

                                    <BasketAddButton pagetitle={pagetitle} />
                                    {pagetitle}

                                </div>
                            })
                        }

                    </div>
                </Basket>
            </ConfigProvider>
        </>
    )
}
