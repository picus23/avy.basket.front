import { FC, useContext } from "react";
import Loader from 'kit/components/Loader/Loader';
import FieldEncoding from 'kit/components/searchElement/fields/FieldEncoding'

import { BasketContext, BasketItem } from "../../BasketContext";
import BasketRemoveButton from "../../BasketRemoveButton";
import { WarningInContext } from "../../Api";

interface iProductItem {
    basketItem: BasketItem,
}

const ProductItem: FC<iProductItem> = ({ basketItem }) => {
    const { getDetails, setCount, basketList } = useContext(BasketContext)


    if (!getDetails || !setCount) return <WarningInContext />


    const details = getDetails && getDetails(basketItem.pagetitle)
    if (!details)
        return <>{basketItem.pagetitle}<Loader /></>


    return <>
        { basketItem.isDelete } |
        <FieldEncoding
            imgUrl={details.img}
            pagetitle={basketItem.pagetitle}
            price={details.price}
            basketButtons={
                <BasketRemoveButton pagetitle={basketItem.pagetitle} />
            }
            isDelete={basketItem.isDelete}
            onCancelErace={() => setCount(basketItem.pagetitle, 1)}
        />
    </>
}

export default ProductItem;