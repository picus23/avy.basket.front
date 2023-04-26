import { FC, useContext } from 'react';
import { BasketContext } from "../../BasketContext";
import ButtonCheckout from '../ButtonCheckout';

interface iFooter {
    href?: string,
}

const FooterContent: FC<iFooter> = ({ href }) => {
    const { getProductsCount, getProductsPrice } = useContext(BasketContext);

    return (

        <div className={'_b66b70396c42fad9c205e5cf369f8a1e'}>
            <div className="d-flex flex-column gap-1 mx-3">
                <hr className='' />
                <div className="d-flex justify-content-between">
                    <span className="font-size-16-black">Товаров</span>
                    <span className="font-size-16-black">{getProductsCount()} шт.</span>
                </div>
                <div className="d-flex justify-content-between">
                    <span className="font-size-16-black">Итого</span>
                    <span className="font-size-16-black">{getProductsPrice()} $</span>
                </div>
                <a className='text-decoration-none' href={href ? href : '/shop'}><ButtonCheckout btn_style="my-btn-checkout w-100">Оформить заказ</ButtonCheckout></a>
                <a className='text-decoration-none' href={href ? href : '/shop'}><ButtonCheckout btn_style="my-btn-go-to w-100">Перейти в корзину</ButtonCheckout></a>
            </div>
        </div>

        // <div className={'_b66b70396c42fad9c205e5cf369f8a1e'}>
        //     <div className={'basket-price'}>
        //         <p>Товаров</p>
        //         <p>{getProductsCount()} шт.</p>
        //     </div>
        //     <div className={'basket-positions'}>
        //         <p>Итого</p>
        //         <p>{getProductsPrice()} $</p>
        //     </div>
        //     <a className={'btn btn-order'} href={href ? href : '/shop'}>Оформить заказ</a>
        //     <a className={'btn btn-basket'} href={href ? href : '/shop'}>Перейти в корзину</a>
        // </div>
    );
}

export default FooterContent;