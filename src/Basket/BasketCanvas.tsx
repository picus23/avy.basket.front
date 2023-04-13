import React, {FC, useContext} from "react";
import ABClose from "./Components/Canvas/ButtonClose";
import ABProduct from "./Components/Canvas/ProductContent";
import ABFooter from "./Components/Canvas/FooterContent";
import {BasketContext} from "./BasketContext";

interface iCanvas { }

const BasketCanvas : FC<iCanvas> = ({}) => {
    const {getContext} = useContext(BasketContext);

    let mappedBasket = "Записей не найдено.";

    if (getContext() !== '{}' && getContext() !== null) {
        mappedBasket = JSON.parse(getContext()).map((b: any) => <ABProduct id={b.id as number} href={'/' + b.id} />);
    }

    return (
        <>
            <div className={'_cad536bb9925258cfbb7480e0a68d883 offcanvas offcanvas-end'} id={'offcanvasBasket'} aria-labelledby={'offcanvasBasketLabel'}>
                <div className={'offcanvas-group'}>
                    <div className={'offcanvas-header'}>
                        <h5 className={'offcanvas-title'} id={'offcanvasBasketLabel'}>Ваша корзина</h5>
                        <ABClose />
                    </div>
                    <div className="offcanvas-body">
                        {mappedBasket}
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