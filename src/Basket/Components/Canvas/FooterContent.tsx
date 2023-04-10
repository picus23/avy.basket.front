import { FC } from 'react';

interface iFooter {
    full_count?: number,
    full_price?: number,
    href?: string,
}

const FooterContent: FC<iFooter> = ({full_count, full_price, href}) => {
    return (
        <div className={'footer-basket'}>
            <div className={'basket-price'}>
                <p>Товаров</p>
                <p>{full_count ? full_count : '0'}</p>
            </div>
            <div className={'basket-positions'}>
                <p>Итого</p>
                <p>{full_price ? full_price : '0'}$</p>
            </div>
            <a className={'btn btn-set-an-order'} href={href ? href : '/shop'}>Оформить заказ</a>
            <a className={'btn btn-go-basket'} href={href ? href : '/shop'}>Перейти в корзину</a>
        </div>

    );
}

export default FooterContent;