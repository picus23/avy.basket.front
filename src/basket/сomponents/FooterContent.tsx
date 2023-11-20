import { FC, useContext } from 'react';
import { BasketContext } from "../../Basket";
import ButtonCheckout from '../ButtonCheckout';
import { Button } from 'antd';

interface iFooter {
    basketUrl: string
}

const FooterContent: FC<iFooter> = ({ basketUrl }) => {
    const { basketListCount, getProductsPrice } = useContext(BasketContext);

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
                    <span className="font-size-16-black">{getProductsPrice && (getProductsPrice() ?? '$$$$')} $</span>
                </div>
                <a className='text-decoration-none' href='#ОформитьЗаказ'>
                    <Button>Оформить заказ</Button>
                </a>
                <a className='text-decoration-none' href={basketUrl}>
                    <Button>Перейти в корзину</Button>
                </a>
            </div>
        </div>

    )
}

export default FooterContent;