
import 'kit/styles/style.css';
import { FC } from "react";
import MainBasket from '../Basket/MainBasket';
import { Basket } from "../Basket/BasketContext";
import BasketForm from 'kit/components/basket/BasketForm';
import { getDetailBasket, getEnvironment } from '../Basket/Api';




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