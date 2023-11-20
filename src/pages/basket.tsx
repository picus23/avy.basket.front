
import { FC } from "react";
import MainBasket from '../basket/MainBasket';
import { getDetailBasket } from '../basket/Api';
import Basket from '@/Basket';
import BasketForm from "@/basket/сomponents/main/BasketForm";




interface BasketProps {

}


const BasketIndex: FC<BasketProps> = (props) => {
    return <Basket getDetailBasket={getDetailBasket}>
        <div className="flex">
            <div className="flex-grow">
            <MainBasket />
            </div>
            <BasketForm />
        </div>
    </Basket>
}

export default BasketIndex;