import { FC, useContext } from "react";
import Loader from 'kit/components/Loader/Loader';

import { BasketContext, DetailBaketItems } from "../../BasketContext";
import BasketRemoveButton from "../../BasketRemoveButton";

interface iProductItem {
    pagetitle: string,
}

const ProductItem: FC<iProductItem> = ({ pagetitle }) => {
    const detailBasketList = useContext(BasketContext).detailBasketList as DetailBaketItems;

    if (!(pagetitle in detailBasketList))
        return <>{pagetitle}<Loader /></>

    const DetailBasketItem = detailBasketList[pagetitle]



    return <div className="d-flex">
        {pagetitle}
        <BasketRemoveButton pagetitle={pagetitle} />
    </div>
}

export default ProductItem;