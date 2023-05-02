import React, { FC, useContext } from "react";
import { BasketContext, iBasketContext } from "./BasketContext";

import ButtonGrayAddRemove from "./ButtonGrayAddRemove";
// import ButtonGrayAddRemove from "../../node_modules/kit/components/buttons/ButtonGrayAddRemove";
import Button from "./Button";
// import Button from "kit/components/buttons/Button";
import { MdDelete } from "react-icons/md";

interface iRemoveButton {
    pagetitle: string,
}

const BasketRemoveButton: FC<iRemoveButton> = ({ pagetitle }) => {
    const { getCount, setCount, productErase } = useContext(BasketContext) as iBasketContext;

    return (
        <>
            <div className={'_c86e7976654b821918476186f04f86dd'}>
                <div className={'counter-group me-2 mt-2 d-flex gap-2'} style={{ height: '40px' }}>

                    <ButtonGrayAddRemove
                        onClickRemove={() => {
                            if (getCount(pagetitle) - 1 >= 0) {
                                setCount(pagetitle, getCount(pagetitle) - 1);
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
            </div>
        </>
    );
}

export default BasketRemoveButton;