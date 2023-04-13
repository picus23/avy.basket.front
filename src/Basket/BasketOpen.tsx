import {BasketContext} from "./BasketContext";
import {useContext} from "react";
import iconCart from "./Components/icons/icon-cart.svg";

const BasketOpen = ({}) => {
    const {getProductsCount} = useContext(BasketContext);

    return (
        <>
            <div className={'_ea587af69ebcf90d9e3b86ab139d841d'}>
                <button type="button" className="btn position-relative btn-open"
                        data-bs-toggle="offcanvas" data-bs-target="#offcanvasBasket"
                        aria-controls="offcanvasBasket">
                    <img className={'icon-basket me-2'} src={iconCart} alt={'BASKET CLOSE'} />
                    <p className={'text-basket'}>Корзина</p>
                    <span className="open-basket-pill position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                    {getProductsCount()}
                </span>
                </button>
            </div>
        </>
    );
}

export default BasketOpen;