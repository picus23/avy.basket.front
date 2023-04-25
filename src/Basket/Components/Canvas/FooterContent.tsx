import {FC, useContext, useState} from 'react';
import {BasketContext} from "../../BasketContext";

interface iFooter {
    href?: string,
    getFullPrice (basket : string) : Promise<any>
}

const FooterContent: FC<iFooter> = ({ href, getFullPrice}) => {
    const {getContext, getProductsCount} = useContext(BasketContext);
    const [fullPrice, setFullPrice] = useState(0);

    getFullPrice(getContext()).then(function (response) {
        return response.json();
    }).then(function (response : {price : number}) {
       setFullPrice(response.price);
    });

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
            <a className={'btn btn-order'} href={href ? href : '/shop'}>Оформить заказ</a>
            <a className={'btn btn-basket'} href={href ? href : '/shop'}>Перейти в корзину</a>
        </div>
    );
}

export default FooterContent;