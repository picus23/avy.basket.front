import { FC, useContext } from 'react';
import { BasketContext } from "../../BasketContext";
import ButtonCheckout from '../ButtonCheckout';
import { WarningInContext } from '../../Api';

interface iFooter {
    basketUrl: string
}

const FooterContent: FC<iFooter> = ({ basketUrl }) => {
    const { basketListCount, getProductsPrice } = useContext(BasketContext);

    if (!basketListCount || !getProductsPrice) return <WarningInContext />

    return (

        <div className={'_b66b70396c42fad9c205e5cf369f8a1e'}>
            <div className="d-flex flex-column gap-1 mx-3">
                <hr className='' />
                <div className="d-flex justify-content-between">
                    <span className="font-size-16-black">Товаров</span>
                    <span className="font-size-16-black">{basketListCount} шт.</span>
                </div>
                <div className="d-flex justify-content-between">
                    <span className="font-size-16-black">Итого</span>
                    <span className="font-size-16-black">{getProductsPrice()} $</span>
                </div>
                <a className='text-decoration-none' href='#ОформитьЗаказ'><ButtonCheckout btn_style="my-btn-checkout w-100">Оформить заказ</ButtonCheckout></a>
                <a className='text-decoration-none' href={basketUrl}><ButtonCheckout btn_style="my-btn-go-to w-100">Перейти в корзину</ButtonCheckout></a>
            </div>
        </div>

    )
}

export default FooterContent;