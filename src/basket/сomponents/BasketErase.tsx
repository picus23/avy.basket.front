import { BasketContext } from "../../Basket";
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { WarningInContext } from "../Api";
import { Button } from "antd";



const BasketErase = ({ }) => {
    const { eraseAll } = useContext(BasketContext);

    if (!eraseAll) return <WarningInContext />

    return <Button
        icon={<MdDelete size={24} fill={'gray'} />}
        onClick={() => { eraseAll() }}
    >
        <span className="fw-500">Очистить корзину</span>
    </Button>
}

export default BasketErase;