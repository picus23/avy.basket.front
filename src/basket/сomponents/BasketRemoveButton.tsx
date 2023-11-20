import React, { FC, useContext } from "react";
import { BasketContext } from "../../Basket";

import ButtonGrayAddRemove from "./ButtonGrayAddRemove";

import { MdDelete } from "react-icons/md";
import { WarningInContext } from "../Api";
import { Button } from "antd";

interface iRemoveButton {
    pagetitle: string,
}

const BasketRemoveButton: FC<iRemoveButton> = ({ pagetitle }) => {
    const { getBasketItem, setCount, productErase } = useContext(BasketContext)

    if (!getBasketItem || !setCount || !productErase)
        return <WarningInContext message="!getBasketItem || !setCount || !productErase"/>

    const basketItem = getBasketItem(pagetitle)




    return <div className="flex gap-1">

        <ButtonGrayAddRemove
            counter={basketItem?.count}
            onClickRemove={() => {
                if (basketItem && basketItem.count - 1 >= 0) {
                    setCount(pagetitle, basketItem.count - 1);
                }
            }}
            onClickAdd={() => {
                setCount(pagetitle, basketItem ? basketItem.count + 1 : 1);
            }}
        />
     

        <Button
            onClick={() => {
                productErase(pagetitle);
            }}
            icon={<MdDelete size={20} fill="#888" />}
           
            >
        </Button>

    </div>
}

export default BasketRemoveButton;