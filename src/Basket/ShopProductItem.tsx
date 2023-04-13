import {FC, useContext} from "react";
import IconDefault from './Components/icons/icon-default.svg';
import ArrowUp from './Components/icons/icon-arrow-up.svg';
import ArrowDown from './Components/icons/icon-arrow-down.svg';
import {BasketContext} from "./BasketContext";

interface iProductItem {
    id : number,
    position? : number,
    productTitle? : string
}

const ShopProductItem : FC<iProductItem> = ({id, position, productTitle}) => {
    const {} = useContext(BasketContext);

    return (
        <>
            <div className={'_551de19d3a7b8913067478ec24d67eeb'}>
                <div className={'switcher'}>
                    <button className={'btn-arrow'}>
                        <img src={ArrowUp} alt={'ARROW UP'} />
                    </button>
                    <p className={'item-position'}>{position ? position : 1}</p>
                    <button className={'btn-arrow'}>
                        <img src={ArrowDown} alt={'ARROW DOWN'} />
                    </button>
                </div>
                <div className={'product-item'}>
                    <div className={'item-logo'}>
                        <img src={IconDefault} alt={'PRODUCT LOGO'} />
                    </div>
                    <div className={'item-information'}>
                        <div className={'product-info'}>
                            <div className={'breadcrumbs'}>
                                <a href={'/'}>Продукция</a>
                                <a href={'/'}>Клапаны</a>
                                <a href={'/'}>Шаровые краны</a>
                            </div>
                            <h2 className={'product-title'}>{productTitle ? productTitle : 'H1B-H-6M'}</h2>
                        </div>
                        <div>1</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShopProductItem;