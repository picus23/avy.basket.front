import { FC, useContext } from "react";
import Loader from 'kit/components/Loader/Loader';
import FieldEncoding from 'kit/components/searchElement/fields/FieldEncoding'

import { BasketContext, BasketItem } from "../../BasketContext";
import BasketRemoveButton from "../../BasketRemoveButton";
import { WarningInContext } from "../../Api";

interface iProductItem {
    pagetitle: string,
    basketItem: BasketItem,
}

const ProductItem: FC<iProductItem> = ({ pagetitle,basketItem }) => {
    const { getDetails, setCount,basketList } = useContext(BasketContext)


    if (!getDetails || !setCount) return <WarningInContext />


    const details = getDetails && getDetails(pagetitle)
    if (!details)
        return <>{pagetitle}<Loader /></>


    return <FieldEncoding
        imgUrl={details.img}
        pagetitle={pagetitle}
        price={details.price}
        basketButtons={
            <BasketRemoveButton pagetitle={pagetitle} />
        }
        isDelete={basketItem.isDelete}
        onCancelErace={() => setCount(pagetitle, 1)}
    />
}

export default ProductItem;