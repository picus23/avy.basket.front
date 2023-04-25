import React, {useContext} from "react";
import ButtonClose from "./Components/Canvas/ButtonClose";
import ProductItem from "./Components/Canvas/ProductItem";
import FooterContent from "./Components/Canvas/FooterContent";
import {BasketContext} from "./BasketContext";

const BasketCanvas = ({}) => {
    const {getContext} = useContext(BasketContext);

    let mappedItems = "Корзина пуста.";

    if (getContext() !== '{}' && getContext() !== null) {
        mappedItems = JSON.parse(getContext()).map((b: any) => <ProductItem id={b.id as number} />);
    }

    return (
        <>
            <div className={'_cad536bb9925258cfbb7480e0a68d883 offcanvas offcanvas-end'} id={'offcanvasBasket'} aria-labelledby={'offcanvasBasketLabel'}>
                <div className={'offcanvas-group'}>
                    <div className={'offcanvas-header'}>
                        <h5 className={'offcanvas-title'} id={'offcanvasBasketLabel'}>Ваша корзина</h5>
                        <ButtonClose />
                    </div>
                    <div className="offcanvas-body">
                        {mappedItems}
                    </div>
                    <div className={'offcanvas-footer'}>
                        <FooterContent />
                    </div>
                </div>
            </div>
        </>
    );
}

export default BasketCanvas;