import React, {FC, useContext} from "react";
import {BasketContext, iBasketContext} from "./BasketContext";

import imgRemove from "./Components/icons/icon-remove.svg";
import imgAdd from "./Components/icons/icon-add.svg";
import imgTrash from "./Components/icons/icon-trash.svg";

interface iRemoveButton {
    id : number,
}

const BasketRemoveButton : FC<iRemoveButton> = ({id}) => {
    const {getCount, setCount, productErase} = useContext(BasketContext) as iBasketContext;

    return (
        <>
            <div className={'_c86e7976654b821918476186f04f86dd'}>
                <div className={'counter-group me-2'}>
                    <button className={'btn'} onClick={() => {
                        if (getCount(id) - 1 >= 0) {
                            setCount(id, getCount(id) - 1);
                        }
                    }}>
                        <img src={imgRemove} alt={'REMOVE'}/>
                    </button>
                    <button className={'btn btn-count'} disabled={true}>{getCount(id)}</button>
                    <button className={'btn'} onClick={() => {
                        setCount(id, getCount(id) + 1);
                    }}>
                        <img src={imgAdd} alt={'ADD'}/>
                    </button>
                </div>
                <button className={'btn btn-trash'} onClick={() => {
                    productErase(id);
                }}>
                    <img src={imgTrash} alt={'TO TRASH'}/>
                </button>
            </div>
        </>
    );
}

export default BasketRemoveButton;