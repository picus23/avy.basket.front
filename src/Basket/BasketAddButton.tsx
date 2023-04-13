import React, {FC, useContext} from "react";
import {BasketContext, iBasketContext} from "./BasketContext";

import imgRemove from "./Components/icons/icon-remove.svg";
import imgAdd from "./Components/icons/icon-add.svg";
import iconCart from './Components/icons/icon-cart.svg';

interface iAddButton {
    id : number,
    environment? : any
}

const BasketAddButton : FC<iAddButton> = ({id, environment}) => {
    const {toggleAdd, getCount, setCount} = useContext(BasketContext) as iBasketContext;

    return (
        <>
            <div className={'_44b9484a4c06d5eecc4f7af9ee29b6c5'}>
                <div className={'counter-group me-2'}>
                    <button className={'btn'} onClick={
                        () => {
                            if (getCount(id) - 1 >= 0) {
                                setCount(id, getCount(id) - 1);
                            }
                        }
                    }>
                        <img src={imgRemove} alt={'REMOVE'}/>
                    </button>
                    <button className={'btn btn-count'} disabled={true}>{getCount(id)}</button>
                    <button className={'btn'} onClick={
                        () => {
                            setCount(id, getCount(id) + 1);
                        }
                    }>
                        <img src={imgAdd} alt={'ADD'}/>
                    </button>
                </div>
                <button type={'button'} className={'btn btn-primary'} data-bs-toggle="offcanvas" data-bs-target="#offcanvasBasket" aria-controls="offcanvasBasket"
                        onClick={() => {
                            toggleAdd(id, getCount(id), environment);
                        }
                    }>
                    <img src={iconCart} alt={'ADD'}/>
                </button>
            </div>
        </>
    );
}

export default BasketAddButton;