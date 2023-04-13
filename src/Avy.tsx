import React from 'react';
import './Avy.css';

import './styles/BasketAddButton.css';
import './styles/BasketRemoveButton.css';
import './styles/BasketCanvas.css';
import './styles/BasketCloseButton.css';
import './styles/BasketProductItem.css';
import './styles/BasketCanvasFooter.css';
import './styles/BasketOpenButton.css';

import './styles/ShopProductItem.css';


import {Basket} from "./Basket/BasketContext";
import BasketAddButton from "./Basket/BasketAddButton";
import BasketCanvas from "./Basket/BasketCanvas";
import BasketOpen from "./Basket/BasketOpen";
import BasketRemoveButton from "./Basket/BasketRemoveButton";
import ShopProductItem from "./Basket/ShopProductItem";

const Avy = ({}) => {

    return (
        <>
            <Basket>
                {/* Кнопки в таблице */}
                <div className={'d-flex'}>
                    {/* Кнопка добавления */}
                    <BasketAddButton id={1} />
                    {/* Кнопка добавления */}

                    {/* Кнопка удаления */}
                    <BasketRemoveButton id={1} />
                    {/* Кнопка удаления */}
                </div>
                <div className={'d-flex'}>
                {/*    /!* Кнопка добавления *!/*/}
                    <BasketAddButton id={2} />
                {/*    /!* Кнопка добавления *!/*/}

                {/*    /!* Кнопка удаления *!/*/}
                    <BasketRemoveButton id={2} />
                {/*    /!* Кнопка удаления *!/*/}
                </div>
                <BasketAddButton id={3} />
                <BasketAddButton id={4} />
                <BasketAddButton id={5} />
                <BasketAddButton id={6} />
                <BasketAddButton id={7} />
                <BasketAddButton id={8} />
                <BasketAddButton id={9} />
                <BasketAddButton id={10} />
                {/* Кнопки в таблице */}

                {/* Корзина списком */}
                <BasketCanvas />
                {/* Корзина списком */}

                {/* Кнопка открытия */}
                <BasketOpen />
                {/* Кнопка открытия */}

                <div className={'container'}>
                    <ShopProductItem id={1}/>
                </div>
            </Basket>
        </>
    );
}

export default Avy;



