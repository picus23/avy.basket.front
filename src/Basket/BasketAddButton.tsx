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
    const { getCount, toggleAdd, setCount } = useContext(BasketContext);

    if (!getCount || !toggleAdd || !setCount) return <WarningInContext />

    const pagetitleCount = getCount(pagetitle)

    return (
        <>
            <div className={'_44b9484a4c06d5eecc4f7af9ee29b6c5'}>
                <div className={'counter-group me-2 mt-2 d-flex gap-2'} style={{ height: '40px' }}>

                    <ButtonGrayAddRemove
                        counter={pagetitleCount}
                        onClickRemove={() => {
                            if (pagetitleCount - 1 >= 0) {
                                setCount(pagetitle, pagetitleCount - 1);
                            }
                        }}
                        onClickAdd={() => {
                            setCount(pagetitle, pagetitleCount + 1);
                        }}
                    />

                    <Button
                        onClick={() => {
                            toggleAdd(pagetitle, pagetitleCount);
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