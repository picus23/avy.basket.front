import {FC, useContext, useState} from 'react';
import {BasketContext} from "../../BasketContext";

interface iFooter {
    fullPrice : number
}

const FooterContent: FC<iFooter> = ({fullPrice}) => {
    const {getProductsCount} = useContext(BasketContext);

    return (
        <div className={'_b66b70396c42fad9c205e5cf369f8a1e'}>
            <div className={'basket-price'}>
                <p>Товаров</p>
                <p>{getProductsCount()} шт.</p>
            </div>
            <div className={'basket-positions'}>
                <p>Итого</p>
                <p>{fullPrice ? fullPrice : 0} $</p>
            </div>
            <a className={'btn btn-order'} href={'/shop'}>Оформить заказ</a>
            <a className={'btn btn-basket'} href={'/shop'}>Перейти в корзину</a>
        </div>
    );
}

export default FooterContent;