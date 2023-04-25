import 'bootstrap/dist/css/bootstrap.min.css';

import {FC, useContext, useState} from "react";

import imgDefault from '../icons/icon-default.svg';
import {BasketContext} from "../../BasketContext";
import BasketRemoveButton from "../../BasketRemoveButton";

interface iProductItem {
    id : number,
}

const ProductItem: FC<iProductItem> = ({id}) => {
    const {productInfo} = useContext(BasketContext);
    const [data, setData] = useState({
        pagetitle: "",
        price : 0,
        href : ""
    });

    if (data.pagetitle == "") {
        productInfo(id).then(function (response : any) {
            return response.json();

        }).then(function (data : {pagetitle : string, price : number, href : string}) {
            setData(data);
        });
    }

    return (
        <div className={'product-item placeholder-glow'}>
            <a className={data.href ? 'item-link' : 'item-link placeholder-glow'} href={data.href}>
                <div className={imgDefault ? 'image' : 'image placeholder'}>
                    <img className={'link-image'} src={imgDefault} alt={'PRODUCT IMAGE'} />
                </div>
                <div className={'link-attr'}>
                    <h5 className={data.pagetitle ? 'link-title' : 'placeholder link-title'}>{data.pagetitle ? data.pagetitle : 'empty'}</h5>
                    <p className={data.price ? 'link-description' : 'placeholder link-description'}>{data.price ? data.price : 'empty'} $ за шт.</p>
                </div>
            </a>
            <BasketRemoveButton id={id} />
        </div>
    );
}

export default ProductItem;