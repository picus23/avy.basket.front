import React, { FC, useContext } from "react";
import { BasketContext, iBasketContext } from "./BasketContext";

import ButtonGrayAddRemove from "./ButtonGrayAddRemove";
import Button from "./Button";
import { MdDelete } from "react-icons/md";
import { WarningInContext } from "./Api";

interface iRemoveButton {
    pagetitle: string,
}

const BasketRemoveButton: FC<iRemoveButton> = ({ pagetitle }) => {
    const { getBasketItem, setCount, productErase } = useContext(BasketContext) as iBasketContext;

    if (!getBasketItem || !setCount || !productErase)
        return <WarningInContext message="!getBasketItem || !setCount || !productErase"/>

    const basketItem = getBasketItem(pagetitle)




    return <div className="d-flex gap-1">

        <ButtonGrayAddRemove
            style={{ height: '40px' }}
            onClickRemove={() => {
                if (basketItem && basketItem.count - 1 >= 0) {
                    setCount(pagetitle, basketItem.count - 1);
                }
            }}
            onClickAdd={() => {
                setCount(pagetitle, basketItem ? basketItem.count + 1 : 1);
            }}>
            <span style={{ color: '#969696' }}>{basketItem ? basketItem.count : 0}</span>
        </ButtonGrayAddRemove>

        <Button
            onClick={() => {
                productErase(pagetitle);
            }}
            icon={<MdDelete fill="#969696" />}
            btn_style="btn-outline-secondary"
            style={{ height: '40px' }}>
        </Button>

    </div>
}

export default BasketRemoveButton;