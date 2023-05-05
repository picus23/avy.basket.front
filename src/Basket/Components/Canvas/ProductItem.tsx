import { FC, useContext } from "react";
import Loader from 'kit/components/Loader/Loader';
import FieldEncoding from 'kit/components/searchElement/fields/FieldEncoding'

import { BasketContext } from "../../BasketContext";
import BasketRemoveButton from "../../BasketRemoveButton";
import { WarningInContext } from "@/Basket/Api";

interface iProductItem {
    pagetitle: string,
}

const ProductItem: FC<iProductItem> = ({ pagetitle }) => {
    const {getDetails, setCount} = useContext(BasketContext)


    if (!getDetails || !setCount) return <WarningInContext />


    const details = getDetails && getDetails(pagetitle)
    if (!details)
        return <>{pagetitle}<Loader /></>


    return <FieldEncoding
        imgUrl={details.img}
        pagetitle={pagetitle}
        price={details.price}
        basketButtons={<BasketRemoveButton pagetitle={pagetitle} />}
        onCancelErace={() => setCount(pagetitle, 1)}
    />
}

export default ProductItem;