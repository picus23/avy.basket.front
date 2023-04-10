import React, {useContext, useState} from 'react';
import './Avy.css';
import './styles/Canvas.css'


import BasketButton from "./Basket/BasketButton";
import BasketCanvas from "./Basket/BasketCanvas";
import BasketOpen from "./Basket/BasketOpen";
import {Basket, BasketContext} from "./Basket/BasketContext";
import BasketAddButton from "./Basket/BasketButton";

const Avy = ({}) => {
    // const {basket, setBasket} = useContext(BasketContext);
    // const value = {basket, setBasket};

    return (
        <>
            <Basket>
                <BasketAddButton product_id={1} />
                <BasketAddButton product_id={2} />
            </Basket>
            {/*<BasketButton product_id={3} />*/}
            {/*<button onClick={() => { console.log(basket); }}>Показать контекст</button>*/}

            {/*<BasketOpen />*/}

            {/*<BasketProvider>*/}
            {/*    <BasketCanvas />*/}
            {/*</BasketProvider>*/}
        </>
    );

}

export default Avy;



