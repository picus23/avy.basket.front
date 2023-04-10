import 'bootstrap/dist/css/bootstrap.min.css';

import { FC } from "react";

import imgDefault from '../icons/icon-default.svg';
import imgAdd from '../icons/icon-add.svg';
import imgRemove from '../icons/icon-remove.svg';
import imgTrash from '../icons/icon-trash.svg';

interface iProduct {
    href?: string,
    src?: string,
    pagetitle?: string,
    price?: number,
    count?: number,
}

const ProductContent: FC<iProduct> = ({href, src, pagetitle, price, count}) => {

    return (
        <div className={'product-item'}>
            <a className={'item-link'} href={href ? href : '/'}>
                <img className={'link-image'} src={src ? src : imgDefault} alt={'PRODUCT IMAGE'} />
                <div>
                    <h5 className={'link-title'}>{pagetitle ? pagetitle : 'B1V-H-3M'}</h5>
                    <p className={'link-description'}>{price ? price : '156'}$ за шт.</p>
                </div>
            </a>
            <div className={'item-buttons'}>
                <div className={'counter-group me-2'}>
                    <button className={'btn btn-remove'}>
                        <img className={'remove-image'} src={imgRemove} alt={'REMOVE'}/>
                    </button>
                    <button className={'btn current-count'} disabled={true}>{count ? count : 1}</button>
                    <button className={'btn btn-add'}>
                        <img className={'add-image'} src={imgAdd} alt={'ADD'}/>
                    </button>
                </div>
                <button className={'btn btn-to-trash'}>
                    <img src={imgTrash} alt={'TO TRASH'}/>
                </button>
            </div>
        </div>
    );
}

export default ProductContent;