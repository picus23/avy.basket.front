import {BasketContext} from "./BasketContext";
import {useContext} from "react";
import IconTrash from "./Components/icons/icon-trash.svg";

const BasketErase = ({}) => {
    const {eraseAll} = useContext(BasketContext);

    return (
        <>
            <div className={'_9eeb113047fbcf779b6f3323e368aadb'}>
                <button type="button" className="btn btn-erase" onClick={() => {eraseAll()}}>
                    <img className={'icon-basket me-2'} src={IconTrash} alt={'BASKET CLOSE'} />
                    <p className={'text-basket'}>Очистить корзину</p>
                </button>
            </div>
        </>
    );
}

export default BasketErase;