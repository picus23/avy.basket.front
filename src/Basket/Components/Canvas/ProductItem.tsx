import 'bootstrap/dist/css/bootstrap.min.css';

import {FC} from "react";

import imgDefault from '../icons/icon-default.svg';
import BasketRemoveButton from "../../BasketRemoveButton";

interface iProductItem {
    pagetitle : string
    price : number
    href : string
}

const ProductItem: FC<iProductItem> = ({pagetitle, price, href}) => {
    return (
        <div className={'product-item placeholder-glow'}>
            <a className={href ? 'item-link' : 'item-link placeholder-glow'} href={href}>
                <div className={imgDefault ? 'image' : 'image placeholder'}>
                    <img className={'link-image'} src={imgDefault} alt={'PRODUCT IMAGE'} />
                </div>
                <div className={'link-attr'}>
                    <h5 className={pagetitle ? 'link-title' : 'placeholder link-title'}>{pagetitle ? pagetitle : 'empty'}</h5>
                    <p className={price ? 'link-description' : 'placeholder link-description'}>{price ? price : 'empty'} $ за шт.</p>
                </div>
            </a>
            <BasketRemoveButton pagetitle={pagetitle} />
        </div>
    );
}

export default ProductItem;