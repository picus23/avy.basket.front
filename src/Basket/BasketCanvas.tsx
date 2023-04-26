import React, {FC, useContext, useEffect, useState} from "react";
import ButtonClose from "./Components/Canvas/ButtonClose";
import ProductItem from "./Components/Canvas/ProductItem";
import FooterContent from "./Components/Canvas/FooterContent";
import {BasketContext} from "./BasketContext";

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

interface iBasketCanvas {
    getProductsInfo (basket : any) : Promise<any>
}

const BasketCanvas : FC<iBasketCanvas> = ({getProductsInfo}) => {
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
        mappedItems = products.map((b: any) => <ProductItem pagetitle={b.pagetitle} price={b.price as number} href={b.href} />);
    }

    return (
        <>
            <div className={'_cad536bb9925258cfbb7480e0a68d883 offcanvas offcanvas-end'} id={'offcanvasBasket'} aria-labelledby={'offcanvasBasketLabel'}>
                <div className={'offcanvas-group'}>
                    <div className={'offcanvas-header'}>
                        <h5 className={'offcanvas-title'} id={'offcanvasBasketLabel'}>Ваша корзина</h5>
                        <ButtonClose />
                    </div>
                    <div className="offcanvas-body">
                        {mappedItems}
                    </div>
                    <div className={'offcanvas-footer'}>
                        <FooterContent fullPrice={fullPrice}  />
                    </div>
                </div>
            </div>
        </>
    );
}

export default BasketCanvas;