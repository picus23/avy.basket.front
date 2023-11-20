import { FC, useContext } from "react";

import { BasketContext, BasketItem } from "../../Basket";
import BasketRemoveButton from "../BasketRemoveButton";
import { WarningInContext } from "../Api";
import Loader from "./Loader";

interface iProductItem {
    basketItem: BasketItem,
}

const ProductItem: FC<iProductItem> = ({ basketItem }) => {
    const { getDetails, setCount, basketList } = useContext(BasketContext)


    if (!getDetails || !setCount) return <WarningInContext />


    const details = getDetails && getDetails(basketItem.pagetitle)
    if (!details)
        return <>{basketItem.pagetitle}<Loader /></>


    return <FieldEncoding
            imgUrl={details.img}
            pagetitle={details.pagetitle}
            price={details.price}
            basketButtons={
                <BasketRemoveButton pagetitle={basketItem.pagetitle} />
            }
            isDelete={basketItem.isDelete}
            onCancelErace={() => setCount(basketItem.pagetitle, 1)}
        />

}

export default ProductItem;