import React, { FC, useContext } from "react";
import { BasketContext, iBasketContext } from "./BasketContext";

import ButtonGrayAddRemove from "./ButtonGrayAddRemove";
import Button from "./Button";
import { MdDelete } from "react-icons/md";

interface iRemoveButton {
    pagetitle: string,
}

const BasketRemoveButton: FC<iRemoveButton> = ({ pagetitle }) => {
    const { getCount, setCount, productErase } = useContext(BasketContext) as iBasketContext;

    if (!getCount || !setCount || !productErase)
        return <>not in basket-context</>


    return <div>

        <ButtonGrayAddRemove
            onClickRemove={() => {
                if (getCount(pagetitle) - 1 >= 0) {
                    setCount && setCount(pagetitle, getCount(pagetitle) - 1);
                }
            }}
            onClickAdd={() => {
                setCount(pagetitle, getCount(pagetitle) + 1);
            }}>
            <span style={{ color: '#969696' }}>{getCount(pagetitle)}</span>
        </ButtonGrayAddRemove>

        <Button
            onClick={() => {
                productErase(pagetitle);
            }}
            icon={<MdDelete fill="#969696" />}
            btn_style={"gray d-flex align-items-center"}>
        </Button>

    </div>
}

export default BasketRemoveButton;