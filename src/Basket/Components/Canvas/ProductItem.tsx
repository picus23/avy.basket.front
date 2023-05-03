import { FC, useContext } from "react";
import Loader from 'kit/components/Loader/Loader';
import FieldEncoding from 'kit/components/searchElement/fields/FieldEncoding'

import { BasketContext } from "../../BasketContext";
import BasketRemoveButton from "../../BasketRemoveButton";

interface iProductItem {
    pagetitle: string,
}

const ProductItem: FC<iProductItem> = ({ pagetitle }) => {
    const {getDetails} = useContext(BasketContext)


    const details = getDetails && getDetails(pagetitle)
    if (!details)
        return <>{pagetitle}<Loader /></>


    return <FieldEncoding
        imgUrl={details.img}
        pagetitle={pagetitle}
        price={details.price}
        basketButtons={<BasketRemoveButton pagetitle={pagetitle} />}
    />
}

export default ProductItem;