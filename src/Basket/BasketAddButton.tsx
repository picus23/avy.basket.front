import { FC, useContext } from "react";
import { BasketContext, iBasketContext } from "./BasketContext";

// import ButtonGrayAddRemove from "./ButtonGrayAddRemove";
import ButtonGrayAddRemove from "kit/components/buttons/ButtonGrayAddRemove";
import Button from "./Button";
// import Button from "kit/components/buttons/Button";
import { MdShoppingCart } from "react-icons/md";

interface iAddButton {
    pagetitle: string,
}

const BasketAddButton: FC<iAddButton> = ({ pagetitle }) => {
    const { toggleAdd, getCount, setCount } = useContext(BasketContext) as iBasketContext;

    return (
        <>
            <div className={'_44b9484a4c06d5eecc4f7af9ee29b6c5'}>
                <div className={'counter-group me-2 mt-2 d-flex gap-2'} style={{ height: '40px' }}>

                    <ButtonGrayAddRemove
                        counter={getCount(pagetitle)}
                        onClickRemove={() => {
                            if (getCount(pagetitle) - 1 >= 0) {
                                setCount(pagetitle, getCount(pagetitle) - 1);
                            }
                        }}
                        onClickAdd={() => {
                            setCount(pagetitle, getCount(pagetitle) + 1);
                        }}
                    />

                    <Button
                        onClick={() => {
                            toggleAdd(pagetitle, getCount(pagetitle));
                        }}
                        icon={<MdShoppingCart size={20} fill={'#fff'} />}
                        btn_style={"blue d-flex align-items-center"}>
                    </Button>
                </div>
            </div>
        </>
    );
}

export default BasketAddButton;