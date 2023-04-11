import React from 'react';
import './Avy.css';
import './styles/Canvas.css'

import {Basket} from "./Basket/BasketContext";
import BasketAddButton from "./Basket/BasketButton";

const Avy = ({}) => {

    return (
        <>
            <Basket>
                <BasketAddButton id={1} />
                <BasketAddButton id={2} />
            </Basket>
        </>
    );
}

export default Avy;



