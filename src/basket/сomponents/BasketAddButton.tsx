import { FC, useContext } from "react";
import { BasketContext } from "../../Basket";

// import ButtonGrayAddRemove from "kit/components/buttons/ButtonGrayAddRemove";

import { MdShoppingCart } from "react-icons/md";
import { WarningInContext } from "../Api";
import { Button } from "antd";
import ButtonGrayAddRemove from "./ButtonGrayAddRemove";

interface iAddButton {
    pagetitle: string,
    title?: string,
}

const BasketAddButton: FC<iAddButton> = ({ pagetitle, title }) => {
    const { getBasketItem, toggleAdd, setCount } = useContext(BasketContext);

    if (!getBasketItem || !toggleAdd || !setCount) return <WarningInContext message="!getBasketItem || !toggleAdd || !setCount" />

    const basketItem = getBasketItem(pagetitle)

    return (
        <>
            <div>
                <div className='flex gap-1'>

                    <ButtonGrayAddRemove
                        counter={basketItem?.count}
                        onClickRemove={() => {
                            if (basketItem && basketItem.count - 1 >= 0)
                                setCount(pagetitle, basketItem.count - 1)

                        }}
                        onClickAdd={() => {
                            setCount(pagetitle, basketItem ? basketItem.count + 1 : 1);
                        }}
                    />

                    <Button
                        onClick={() => {
                            toggleAdd(pagetitle, basketItem?.count ?? 1);
                        }}
                        icon={<MdShoppingCart size={20} fill={'#888'} />}

                    >
                    </Button>

                </div>
            </div>
        </>
    );
}

export default BasketAddButton;