import React, {FC, useContext} from "react";
import {BasketContext, iBasketContext} from "./BasketContext";

import imgRemove from "./Components/icons/icon-remove.svg";
import imgAdd from "./Components/icons/icon-add.svg";
import imgTrash from "./Components/icons/icon-trash.svg";

interface iRemoveButton {
    pagetitle : string,
}

const BasketRemoveButton : FC<iRemoveButton> = ({pagetitle}) => {
    const {getCount, setCount, productErase} = useContext(BasketContext) as iBasketContext;

    return (
        <>
            <div className={'_c86e7976654b821918476186f04f86dd'}>
                <div className={'counter-group me-2'}>
                    <button className={'btn'} onClick={() => {
                        if (getCount(pagetitle) - 1 >= 0) {
                            setCount(pagetitle, getCount(pagetitle) - 1);
                        }
                    }}>
                        <img src={imgRemove} alt={'REMOVE'}/>
                    </button>
                    <button className={'btn btn-count'} disabled={true}>{getCount(pagetitle)}</button>
                    <button className={'btn'} onClick={() => {
                        setCount(pagetitle, getCount(pagetitle) + 1);
                    }}>
                        <img src={imgAdd} alt={'ADD'}/>
                    </button>
                </div>
                <button className={'btn btn-trash'} onClick={() => {
                    productErase(pagetitle);
                }}>
                    <img src={imgTrash} alt={'TO TRASH'}/>
                </button>
            </div>
        </>
    );
}

export default BasketRemoveButton;