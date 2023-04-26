import ProductItem from "./Components/Canvas/ProductItem";
import React, {FC, useContext, useEffect, useState} from "react";
import {BasketContext} from "./BasketContext";
import ShopProductItem from "./Components/Shop/ShopProductItem";

interface iPromiseResponse {
    attachments : [
        {
            pagetitle : string
            price : number
            href : string
        },
    ]
    full_price : number
}

interface iShopTable {
    getProductsInfo (basket : any) : Promise<any>
    getEnvi (pagetitle : string) : Promise<any>
}

const ShopTable : FC<iShopTable> = ({getProductsInfo, getEnvi}) => {
    const {getContext} = useContext(BasketContext);

    useEffect(() => {
        setUpdateProducts(true);
    }, [getContext]);

    const [updateProducts, setUpdateProducts] = useState(true);

    const [products, setProducts] = useState<Array<{pagetitle : string, price : number, href : string}>>([]);
    const [fullPrice, setFullPrice] = useState(0);

    if (updateProducts) {
        setUpdateProducts(false);

        getProductsInfo(getContext() as string).then(function (data : iPromiseResponse) {
            setProducts(data.attachments);
            setFullPrice(data.full_price);
        })
    }

    let mappedItems: JSX.Element[] = [];

    if (getContext() !== '{}' && getContext() !== null) {
        mappedItems = products.map((b: any) => <ShopProductItem pagetitle={b.pagetitle} price={b.price as number} href={b.href} />);
    }

    return (
        <>
            <div className={'container'}>
                {mappedItems}
            </div>
        </>
    );
}

export default ShopTable;