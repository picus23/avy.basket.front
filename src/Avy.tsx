import React from 'react';
import './Avy.css';

import './styles/BasketAddButton.css';
import './styles/BasketRemoveButton.css';
import './styles/BasketCanvas.css';
import './styles/BasketCloseButton.css';
import './styles/BasketProductItem.css';
import './styles/BasketCanvasFooter.css';
import './styles/BasketOpenButton.css';
import './styles/BasketErase.css';
import './styles/ShopProductItem.css';

import {Basket} from "./Basket/BasketContext";
import BasketAddButton from "./Basket/BasketAddButton";
import BasketCanvas from "./Basket/BasketCanvas";
import BasketOpen from "./Basket/BasketOpen";
import BasketRemoveButton from "./Basket/BasketRemoveButton";
import BasketErase from "./Basket/BasketErase";
import ShopTable from "./Basket/ShopTable";

const Avy = ({}) => {

    async function getEnvi (pagetitle : string) : Promise<any> {
        return await fetch('http://avy-api.loc/environment', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
    }

    async function getInfo<T> (basket : any): Promise<T> {
        let body = {
            basket: basket
        }

        return await fetch('http://avy-api.loc/', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(body),
        }).then(a => a.json());
    }

    return (
        <>
            <Basket>
                {/* Кнопки в таблице */}
                <div className={'d-flex'}>
                    {/* Кнопка добавления */}
                    <BasketAddButton pagetitle={'Продукт 0'} />
                    {/* Кнопка добавления */}

                    {/* Кнопка удаления */}
                    <BasketRemoveButton pagetitle={'Продукт 0'} />
                    {/* Кнопка удаления */}
                </div>
                <div className={'d-flex'}>
                {/*    /!* Кнопка добавления *!/*/}
                    <BasketAddButton pagetitle={'Продукт 1'} />
                {/*    /!* Кнопка добавления *!/*/}

                {/*    /!* Кнопка удаления *!/*/}
                    <BasketRemoveButton pagetitle={'Продукт 1'} />
                {/*    /!* Кнопка удаления *!/*/}
                </div>
                <BasketAddButton pagetitle={'Продукт 2'} />
                <BasketAddButton pagetitle={'Продукт 3'} />
                <BasketAddButton pagetitle={'Продукт 4'} />
                <BasketAddButton pagetitle={'Продукт 5'} />
                <BasketAddButton pagetitle={'Продукт 6'} />
                <BasketAddButton pagetitle={'Продукт 7'} />
                <BasketAddButton pagetitle={'Продукт 8'} />
                <BasketAddButton pagetitle={'Продукт 9'} />
                {/* Кнопки в таблице */}

                {/* Корзина списком */}
                <BasketCanvas getProductsInfo={getInfo} />
                {/* Корзина списком */}

                {/* Кнопка открытия */}
                <BasketOpen />
                {/* Кнопка открытия */}

                {/* Кнопка отчистить корзину */}
                <BasketErase />
                {/* Кнопка отчистить корзину */}

                {/* Продукты на странице "Корзина" */}
                <ShopTable getProductsInfo={getInfo} getEnvi={getEnvi} />
                {/* Продукты на странице "Корзина" */}
            </Basket>
        </>
    );
}

export default Avy;



