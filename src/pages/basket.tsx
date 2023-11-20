
import 'kit/styles/style.css';
import { FC } from "react";
import MainBasket from '../basket/MainBasket';
import { Basket } from "../Basket";
import BasketForm from 'kit/components/basket/BasketForm';
import { getDetailBasket, getEnvironment } from '../basket/Api';




interface BasketProps {

}


const BasketIndex: FC<BasketProps> = (props) => {
    return <Basket getEnvironment={getEnvironment} getDetailBasket={getDetailBasket}>
        <div className="d-flex">

            <MainBasket />
            <BasketForm />
        </div>
    </Basket>
}

export default BasketIndex;