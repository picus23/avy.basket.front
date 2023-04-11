import React, {FC, useContext, useState} from "react";
import {BasketContext, iBasketContext} from "./BasketContext";

import imgRemove from "./Components/icons/icon-remove.svg";
import imgAdd from "./Components/icons/icon-add.svg";
import iconCart from './Components/icons/icon-cart.svg';

interface iButton {
    id : number,
    environment? : any
}

const BasketAddButton : FC<iButton> = ({id}) => {
    const {toggleAdd, getContext} = useContext(BasketContext) as iBasketContext;

    const getCount = () : number => {
        let storage = localStorage.getItem('basket');

        if (storage === null) {
            return 1;
        } else {
            let products = JSON.parse(storage);
            let find = products.findIndex((p : any) => p.id === id);

            if (find == -1) {
                return 1;
            } else {
                return products[find].count
            }
        }
    };

    const [count, setCount] = useState(getCount());

    return (
        <>
            <div className={'d-flex'}>
                <div className={'counter-group me-2'}>
                    <button className={'btn btn-remove'} onClick={
                        () => {
                            if (count - 1 >= 1) {
                                setCount(prev => prev - 1);
                                toggleAdd(id, count - 1);
                            }
                        }
                    }>
                        <img className={'remove-image'} src={imgRemove} alt={'REMOVE'}/>
                    </button>
                    <button className={'btn current-count'} disabled={true}>{count ? count : 1}</button>
                    <button className={'btn btn-add'} onClick={
                        () => {
                            setCount(prev => prev + 1);
                            toggleAdd(id, count + 1);
                        }
                    }>
                        <img className={'add-image'} src={imgAdd} alt={'ADD'}/>
                    </button>
                </div>
                <button
                    type={'button'}
                    className={'btn btn-primary'}
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasBasket"
                    aria-controls="offcanvasBasket" onClick={
                    () => {
                        toggleAdd(id, count);
                    }
                }>
                    <img src={iconCart} alt={'ADD'}/>
                </button>
            </div>
        </>
    );
}

export default BasketAddButton;