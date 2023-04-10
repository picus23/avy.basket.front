import React, {FC, useContext, useState} from "react";
import ABClose from "./Components/Canvas/ButtonClose";
import ABProduct from "./Components/Canvas/ProductContent";
import ABFooter from "./Components/Canvas/FooterContent";
import {BasketContext} from "./BasketContext";

interface iCanvas {

}

const BasketCanvas : FC<iCanvas> = ({}) => {
    // const {basket, toggleAdd} = useContext(BasketContext);

    // const handleOnClick = (e : MouseEvent<HTMLButtonElement>) => {
    //     e.preventDefault();
    //
    // }
    // let mappedBasket = "Записей не найдено.";
    //
    // if (basket.basket !== '{}' && basket.basket !== null) {
    //     mappedBasket = JSON.parse(basket.basket).map((b: any) => <ABProduct href={'/' + b.product_id} count={b.count} />);
    // }

    return (
        <>
            <div className="offcanvas offcanvas-end" id={'offcanvasBasket'} aria-labelledby={'offcanvasBasketLabel'}>
                <div className={'offcanvas-container'}>
                    <div className={'offcanvas-group'}>
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id={'offcanvasBasketLabel'}>Ваша корзина</h5>
                            <ABClose />
                        </div>
                        <div className="offcanvas-body">
                            {/*{mappedBasket}*/}
                        </div>
                    </div>
                    <div className={'offcanvas-footer'}>
                        <ABFooter />
                    </div>
                </div>
            </div>
        </>
    );
}

export default BasketCanvas;