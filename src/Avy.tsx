import React from 'react';
// import './Avy.css';

// import './styles/BasketAddButton.css';
// import './styles/BasketRemoveButton.css';
// import './styles/BasketCanvas.css';
// import './styles/BasketCloseButton.css';
// import './styles/BasketProductItem.css';
// import './styles/BasketCanvasFooter.css';
// import './styles/BasketOpenButton.css';
// import './styles/BasketErase.css';
// import './styles/ShopProductItem.css';

import { Basket } from "./Basket/BasketContext";
import BasketAddButton from "./Basket/BasketAddButton";
import BasketCanvas from "./Basket/BasketCanvas";
import BasketOpen from "./Basket/BasketOpen";
import BasketRemoveButton from "./Basket/BasketRemoveButton";
import BasketErase from "./Basket/BasketErase";
import ShopTable from "./Basket/ShopTable";


import Button from "kit/components/buttons/Button"


const Avy = ({ }) => {
    return (
        <>
            <Button type="primary">112323</Button>

            <Basket>
                <div>
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
                    <div style={{width:'147px'}}>
                        <BasketAddButton id={3} />
                        <BasketAddButton id={4} />
                        <BasketAddButton id={5} />
                        <BasketAddButton id={6} />
                        <BasketAddButton id={7} />
                        <BasketAddButton id={8} />
                        <BasketAddButton id={9} />
                        <BasketAddButton id={10} />
                    </div>

                </div>
                {/* Кнопки в таблице */}

                {/* Корзина списком */}
                {/* <BasketCanvas /> */}
                {/* Корзина списком */}

                {/* Кнопка открытия */}
                <BasketOpen />
                {/* Кнопка открытия */}

                {/* Кнопка отчистить корзину */}
                <BasketErase />
                {/* Кнопка отчистить корзину */}

                {/* Продукты на странице "Корзина" */}
                <ShopTable />
                {/* Продукты на странице "Корзина" */}
            </Basket>
        </>
    );
}

export default Avy;



