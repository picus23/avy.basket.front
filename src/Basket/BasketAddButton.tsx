import { FC, useContext } from "react";
import { BasketContext } from "./BasketContext";

// import ButtonGrayAddRemove from "./ButtonGrayAddRemove";
import ButtonGrayAddRemove from "kit/components/buttons/ButtonGrayAddRemove";
import Button from "./Button";
// import Button from "kit/components/buttons/Button";
import { MdShoppingCart } from "react-icons/md";
import { WarningInContext } from "./Api";

interface iAddButton {
    pagetitle: string,
}

const BasketAddButton: FC<iAddButton> = ({ pagetitle }) => {
    const { getBasketItem, toggleAdd, setCount } = useContext(BasketContext);

    if (!getBasketItem || !toggleAdd || !setCount) return <WarningInContext message="!getBasketItem || !toggleAdd || !setCount" />

    const basketItem = getBasketItem(pagetitle)

    return (
        <>
            <div className={'_44b9484a4c06d5eecc4f7af9ee29b6c5'}>
                <div className={'counter-group me-2 mt-2 d-flex gap-2'} style={{ height: '40px' }}>

                    <ButtonGrayAddRemove
                        counter={basketItem?.count ?? 0}
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
                        icon={<MdShoppingCart size={20} fill={'#fff'} />}
                        btn_style="btn-primary">
                    </Button>
                </div>
            </div>
        </>
    );
}

export default BasketAddButton;