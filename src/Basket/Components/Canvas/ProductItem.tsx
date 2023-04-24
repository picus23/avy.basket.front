import 'bootstrap/dist/css/bootstrap.min.css';

import {FC, useContext} from "react";

import imgDefault from '../icons/icon-default.svg';
import {BasketContext} from "../../BasketContext";
import BasketRemoveButton from "../../BasketRemoveButton";

interface iProductItem {
    id : number,
}

const ProductItem: FC<iProductItem> = ({id}) => {
    const {productPrice, productInfo} = useContext(BasketContext);

    let info = productInfo(id);

    return (
        <div className={'product-item'}>
            <a className={'item-link'} href={'/'}>
                <img className={'link-image'} src={imgDefault} alt={'PRODUCT IMAGE'} />
                <div>
                    <h5 className={'link-title'}>{info.pagetitle ? info.pagetitle : 'B1V-H-3M'}</h5>
                    {/*<h5 className={'link-title'}>{'B1V-H-3M'}</h5>*/}
                    <p className={'link-description'}>{productPrice(id)} $ за шт.</p>
                </div>
            </a>
            <BasketRemoveButton id={id} />
        </div>
    );
}

export default ProductItem;