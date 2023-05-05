
import 'kit/styles/style.css';
import { FC } from "react";
import MainBasket from '../Basket/MainBasket';
import { Basket } from "../Basket/BasketContext";
import { getDetailBasket, getEnvironment } from '../Basket/Api';




interface BasketProps {

}


const BasketIndex: FC<BasketProps> = (props) => {
    return <Basket getEnvironment={getEnvironment} getDetailBasket={getDetailBasket}>
        <MainBasket />
    </Basket>
}

export default BasketIndex;