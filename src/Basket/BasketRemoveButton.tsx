import React, { FC, useContext } from "react";
import { BasketContext, iBasketContext } from "./BasketContext";

import imgRemove from "./Components/icons/icon-remove.svg";
import imgAdd from "./Components/icons/icon-add.svg";
import imgTrash from "./Components/icons/icon-trash.svg";
import BtnAdd from "./BtnAdd";
import { MdDelete } from "react-icons/md";
import ButtonBuy from "kit/components/buttons/ButtonBuy";

interface iRemoveButton {
    id: number,
}

const BasketRemoveButton: FC<iRemoveButton> = ({ id }) => {
    const { getCount, setCount, productErase } = useContext(BasketContext) as iBasketContext;

    return (
        <>
            <div className={'_c86e7976654b821918476186f04f86dd'}>
                <div className={'counter-group me-2 mt-2'}>

                    <BtnAdd
                        onClickRemove={() => {
                            if (getCount(id) - 1 >= 0) {
                                setCount(id, getCount(id) - 1);
                            }
                        }}
                        onClickAdd={() => {
                            setCount(id, getCount(id) + 1);
                        }}>
                        <span style={{ color: '#969696' }}>{getCount(id)}</span>
                    </BtnAdd>

                </div>

                <button className='btn' style={{border:'1px solid #E8E8E8'}}
                    onClick={() => {
                        productErase(id);
                    }}>
                    <MdDelete fill="#969696" />
                </button>

                {/* <ButtonBuy icon={<MdDelete fill="#969696" />}
                    onClick={() => { productErase(id); }}
                    btn_style='gray'>
                </ButtonBuy> */}

            </div>
        </>
    );
}

export default BasketRemoveButton;