import {FC, useContext} from 'react';
import {BasketContext} from "../../BasketContext";

interface iFooter {
    href?: string,
}

const FooterContent: FC<iFooter> = ({ href}) => {
    const {getProductsCount, getProductsPrice} = useContext(BasketContext);

    return (
        <div className={'_b66b70396c42fad9c205e5cf369f8a1e'}>
            <div className={'basket-price'}>
                <p>Товаров</p>
                <p>{getProductsCount()}</p>
            </div>
            <div className={'basket-positions'}>
                <p>Итого</p>
                <p>{getProductsPrice()} $</p>
            </div>
            <a className={'btn btn-order'} href={href ? href : '/shop'}>Оформить заказ</a>
            <a className={'btn btn-basket'} href={href ? href : '/shop'}>Перейти в корзину</a>
        </div>
    );
}

export default FooterContent;