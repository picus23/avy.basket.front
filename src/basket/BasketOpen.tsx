import { BasketContext } from "../Basket";
import { useContext } from "react";
import { MdShoppingCart } from "react-icons/md";
import Button from "./Button";


const BasketOpen = ({ }) => {
    const { basketListCount, openDrawer } = useContext(BasketContext);

    return (
        <>
            <div className={'_ea587af69ebcf90d9e3b86ab139d841d'}>

                {/* <button className="position-relative border-0" style={{background:'none'}}
                    type='button'
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasBasket"
                    aria-controls="offcanvasBasket"> */}
                <div className="position-relative">
                    <Button
                        
                        icon={<MdShoppingCart size={24} fill={'#969696'} />}
                        btn_style="btn-outline-secondary"
                        counterPosition="right"
                        counter={basketListCount}
                        onClick={() => openDrawer && openDrawer()}
                    >
                        Корзина
                    </Button>
                </div>
                {/* </button> */}


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