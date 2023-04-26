import { BasketContext } from "./BasketContext";
import { useContext } from "react";
import { MdShoppingCart } from "react-icons/md";
import Button from "./Button";


const BasketOpen = ({ }) => {
    const { getProductsCount } = useContext(BasketContext);

    return (
        <>
            <div className={'_ea587af69ebcf90d9e3b86ab139d841d'}>

                <div className="position-relative">
                    <Button
                        icon={<MdShoppingCart size={24} fill={'gray'} />}
                        btn_style={"gray"}
                        counter={getProductsCount()}
                        counter_style={"up"}
                        onClick={() => alert("Click")}
                    >
                        <span className="fw-500">Корзина</span>
                    </Button>
                </div>


                {/* <button type="button" className="btn position-relative btn-open my-btn-gray"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasBasket"
                    aria-controls="offcanvasBasket">
                    <MdShoppingCart fill="#969696" />
                    <p className={'text-basket'}>Корзина</p>
                    <span className="open-basket-pill position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                        {getProductsCount()}
                    </span>
                </button> */}

            </div>
        </>
    );
}

export default BasketOpen;