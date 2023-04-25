import ProductItem from "./Components/Canvas/ProductItem";
import React, {FC, useContext} from "react";
import {BasketContext} from "./BasketContext";
import ShopProductItem from "./Components/Shop/ShopProductItem";

interface iShopTable {
    getInfo (pagetitle : string) : Promise<any>
    getEnvi (pagetitle : string) : Promise<any>
}

const ShopTable : FC<iShopTable> = ({getInfo, getEnvi}) => {
    const {getContext} = useContext(BasketContext);

    let mappedItems = "Корзина пуста.";

    if (getContext() !== '{}' && getContext() !== null) {
        mappedItems = JSON.parse(getContext()).map((b: any) =>
            <ShopProductItem getProductInformation={getInfo} getProductEnvironment={getEnvi} pagetitle={b.pagetitle} />
        );
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