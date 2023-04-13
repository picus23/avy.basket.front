import 'bootstrap/dist/css/bootstrap.min.css';

import {FC, useContext} from "react";

import imgDefault from '../icons/icon-default.svg';
import {BasketContext} from "../../BasketContext";
import BasketRemoveButton from "../../BasketRemoveButton";

interface iProductItem {
    id : number,
    href?: string,
    src?: string,
    pagetitle?: string,
}

const ProductItem: FC<iProductItem> = ({id, href, src, pagetitle}) => {
    const {productPrice} = useContext(BasketContext);

    return (
        <div className={'product-item'}>
            <a className={'item-link'} href={href ? href : '/'}>
                <img className={'link-image'} src={src ? src : imgDefault} alt={'PRODUCT IMAGE'} />
                <div>
                    <h5 className={'link-title'}>{pagetitle ? pagetitle : 'B1V-H-3M'}</h5>
                    <p className={'link-description'}>{productPrice(id)} $ за шт.</p>
                </div>
            </a>
            <BasketRemoveButton id={id} />
        </div>
    );
}

export default ProductItem;