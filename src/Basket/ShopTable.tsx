import ProductItem from "./Components/Canvas/ProductItem";
import React, {useContext} from "react";
import {BasketContext} from "./BasketContext";
import ShopProductItem from "./Components/Shop/ShopProductItem";


const ShopTable = ({}) => {
    const {getContext} = useContext(BasketContext);

    let mappedItems = "Корзина пуста.";

    if (getContext() !== '{}' && getContext() !== null) {
        mappedItems = JSON.parse(getContext()).map((b: any) => <ShopProductItem id={b.id as number} />);
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