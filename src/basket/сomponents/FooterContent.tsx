import { FC, useContext } from 'react';
import { BasketContext } from "../../Basket";
import { Button } from 'antd';

interface iFooter {
    basketUrl: string
}

const FooterContent: FC<iFooter> = ({ basketUrl }) => {
    const { basketListCount, getProductsPrice } = useContext(BasketContext);

    return <div className="flex flex-col gap-3   border-0 border-t-[1px] border-solid border-gray-200 pt-3">
        <div className="flex justify-between text-[16px]">
            <span>Товаров</span>
            <span>{basketListCount} шт.</span>
        </div>
        <div className="flex justify-between text-[16px]">
            <span>Итого</span>
            <span>{getProductsPrice && (getProductsPrice() ?? '$$$$')} $</span>
        </div>
        <a className='text-decoration-none' href='#ОформитьЗаказ'>
            <Button type='primary' className='w-full'>Оформить заказ</Button>
        </a>
        <a className='text-decoration-none' href={basketUrl}>
            <Button type='link' className='w-full'>Перейти в корзину</Button>
        </a>
    </div>
}

export default FooterContent;