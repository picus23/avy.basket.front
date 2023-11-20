
import { FC } from "react";
import MainBasket from '../basket/MainBasket';
import { getDetailBasket } from '../basket/Api';
import Basket from '@/Basket';




interface BasketProps {

}


const BasketIndex: FC<BasketProps> = (props) => {
    return <Basket getDetailBasket={getDetailBasket}>
        <div className="d-flex">

            <MainBasket />
            {/* <BasketForm /> */}
        </div>
    </Basket>
}

export default BasketIndex;