import React, { FC, useContext } from "react";
import { BasketContext, iBasketContext } from "./BasketContext";

import ButtonGrayAddRemove from "./ButtonGrayAddRemove";
// import ButtonGrayAddRemove from "../../node_modules/kit/components/buttons/ButtonGrayAddRemove";
import Button from "./Button";
// import Button from "kit/components/buttons/Button";
import { MdShoppingCart } from "react-icons/md";

interface iAddButton {
    id: number,
    environment?: any
}

const BasketAddButton: FC<iAddButton> = ({ id, environment }) => {
    const { toggleAdd, getCount, setCount } = useContext(BasketContext) as iBasketContext;

    return (
        <>
            <div className={'_44b9484a4c06d5eecc4f7af9ee29b6c5'}>
                <div className={'counter-group me-2 mt-2 d-flex gap-2'} style={{ height: '40px' }}>

                    {/* Добавить offcanvas */}
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
                            toggleAdd(id, getCount(id), environment);
                        }}
                        icon={<MdShoppingCart size={20} fill={'#fff'} />}
                        btn_style={"blue d-flex align-items-center"}>
                    </Button>
                    {/* Добавить offcanvas */}

                </div>


                {/* <button type={'button'} className={'btn btn-primary'} data-bs-toggle="offcanvas" data-bs-target="#offcanvasBasket" aria-controls="offcanvasBasket"
                    onClick={() => {
                        toggleAdd(id, getCount(id), environment);
                    }
                    }>
                    <MdShoppingCart size={20} fill={'#fff'} />
                </button> */}

            </div>
        </>
    );
}

export default BasketAddButton;