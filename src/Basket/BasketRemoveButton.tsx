import React, { FC, useContext } from "react";
import { BasketContext, iBasketContext } from "./BasketContext";

import ButtonGrayAddRemove from "./ButtonGrayAddRemove";
// import ButtonGrayAddRemove from "../../node_modules/kit/components/buttons/ButtonGrayAddRemove";
import Button from "./Button";
// import Button from "kit/components/buttons/Button";
import { MdDelete } from "react-icons/md";

interface iRemoveButton {
    id: number,
}

const BasketRemoveButton: FC<iRemoveButton> = ({ id }) => {
    const { getCount, setCount, productErase } = useContext(BasketContext) as iBasketContext;

    return (
        <>
            <div className={'_c86e7976654b821918476186f04f86dd'}>
                <div className={'counter-group me-2 mt-2 d-flex gap-2'} style={{ height: '40px' }}>

                    <ButtonGrayAddRemove
                        onClickRemove={() => {
                            if (getCount(id) - 1 >= 0) {
                                setCount(id, getCount(id) - 1);
                            }
                        }}
                        onClickAdd={() => {
                            setCount(id, getCount(id) + 1);
                        }}>
                        <span style={{ color: '#969696' }}>{getCount(id)}</span>
                    </ButtonGrayAddRemove>

                    <Button
                        onClick={() => {
                            productErase(id);
                        }}
                        icon={<MdDelete fill="#969696" />}
                        btn_style={"gray d-flex align-items-center"}>
                    </Button>

                </div>



                {/* <button className='btn' style={{ border: '1px solid #E8E8E8' }}
                    onClick={() => {
                        productErase(id);
                    }}>
                    <MdDelete fill="#969696" />
                </button> */}

            </div>
        </>
    );
}

export default BasketRemoveButton;