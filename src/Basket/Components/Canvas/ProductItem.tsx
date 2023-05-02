import { FC, useContext } from "react";
import Loader from 'kit/components/Loader/Loader';
import FieldEncoding from 'kit/components/searchElement/fields/FieldEncoding'

import { BasketContext, DetailBaketItems } from "../../BasketContext";
import BasketRemoveButton from "../../BasketRemoveButton";

interface iProductItem {
    pagetitle: string,
}

const ProductItem: FC<iProductItem> = ({ pagetitle }) => {
    const detailBasketList = useContext(BasketContext).detailBasketList as DetailBaketItems;

    if (!(pagetitle in detailBasketList))
        return <>{pagetitle}<Loader /></>

    const detailBasketItem = detailBasketList[pagetitle]



    return <FieldEncoding
        imgUrl={'/kit/empty_square.png'}
        pagetitle={pagetitle}
        price={detailBasketItem.price}
        basketButtons={<BasketRemoveButton pagetitle={pagetitle} />}
    />
}

export default ProductItem;