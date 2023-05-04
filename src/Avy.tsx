import React from 'react';
// import './Avy.css';
import 'kit/styles/style.css';

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
import BasketOpen from "./Basket/BasketOpen";
import BasketRemoveButton from "./Basket/BasketRemoveButton";
import BasketErase from "./Basket/BasketErase";
import { getDetailBasket, getEnvironment } from './Basket/Api';
import MainBasket from './Basket/MainBasket';


const Avy = ({ }) => {
    return (
        <>

            <Basket getEnvironment={getEnvironment} getDetailBasket={getDetailBasket}>
                <div>
                    {/* Кнопки в таблице */}
                    <div className={'d-flex'}>
                        {/* Кнопка добавления */}
                        <BasketAddButton pagetitle={'11111111'} />
                        {/* Кнопка добавления */}

                        {/* Кнопка удаления */}
                        <BasketRemoveButton pagetitle={'11111111'} />
                        {/* Кнопка удаления */}
                    </div>
                    <div className={'d-flex'}>
                        {/*    /!* Кнопка добавления *!/*/}
                        <BasketAddButton pagetitle={'22222222'} />
                        {/*    /!* Кнопка добавления *!/*/}

                        {/*    /!* Кнопка удаления *!/*/}
                        <BasketRemoveButton pagetitle={'22222222'} />
                        {/*    /!* Кнопка удаления *!/*/}
                    </div>
                    <div className='mb-4' style={{ width: '147px' }}>
                        <BasketAddButton pagetitle={'33333333'} />
                        <BasketAddButton pagetitle={'44444444'} />
                        <BasketAddButton pagetitle={'55555555'} />
                        <BasketAddButton pagetitle={'66666666'} />
                        <BasketAddButton pagetitle={'77777777'} />
                        <BasketAddButton pagetitle={'88888888'} />
                        <BasketAddButton pagetitle={'99999999'} />
                        <BasketAddButton pagetitle={'100000000'} />
                    </div>

                </div>

               

                <div className='mb-4' style={{ width: '147px' }}>
                    <BasketOpen />
                </div>
                <BasketErase />




                {/* <MainBasket /> */}
            </Basket>
        </>
    );
}

export default Avy;


