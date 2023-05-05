import { BasketContext } from "./BasketContext";
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import Button from "./Button";
import { WarningInContext } from "./Api";



const BasketErase = ({ }) => {
    const { eraseAll } = useContext(BasketContext);

    if (!eraseAll) return <WarningInContext />

    return (
        <>
            <div className={'_9eeb113047fbcf779b6f3323e368aadb'}>

                <Button
                    icon={<MdDelete size={24} fill={'gray'} />}
                    btn_style={"gray"}
                    onClick={() => { eraseAll() }}
                >
                    <span className="fw-500">Очистить корзину</span>
                </Button>

                {/* <button type="button" className="btn btn-erase" onClick={() => { eraseAll() }}>
                    <MdDelete fill="#969696" />
                    <p className={'text-basket'}>Очистить корзину</p>
                </button> */}
            </div>
        </>
    );
}

export default BasketErase;