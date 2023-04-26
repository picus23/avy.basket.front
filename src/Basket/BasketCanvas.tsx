import { useContext, FC, ReactNode } from "react";
import ButtonClose from "./Components/Canvas/ButtonClose";
import ProductItem from "./Components/Canvas/ProductItem";
import FooterContent from "./Components/Canvas/FooterContent";
import { BasketContext } from "./BasketContext";
import { Drawer } from "antd";

interface BasketCanvasProps {
    children: ReactNode,
}

const BasketCanvas : FC<BasketCanvasProps> = ({ children }) => {
    const { getContext, isOpenDrawer, closeDrawer} = useContext(BasketContext);

    let mappedItems = "Корзина пуста.";

    if (getContext() !== '{}' && getContext() !== null) {
        mappedItems = JSON.parse(getContext()).map((b: any) => <ProductItem id={b.id as number} />);
    }

    return (

        <>
            {children}
            <Drawer placement="right" width={512} open={isOpenDrawer} closable={false} onClose={closeDrawer}>
                {/* <div className={'_cad536bb9925258cfbb7480e0a68d883 offcanvas offcanvas-end'} id={'offcanvasBasket'} aria-labelledby={'offcanvasBasketLabel'}> */}
                <div className='offcanvas-group' id={'offcanvasBasket'} aria-labelledby={'offcanvasBasketLabel'}>
                    <div className={'offcanvas-header'}>
                        <h5 className='offcanvas-title font-size-20-black fw-500' id={'offcanvasBasketLabel'}>Ваша корзина</h5>
                        <ButtonClose onClick={closeDrawer} />
                    </div>
                    <div className="offcanvas-body">
                        {mappedItems}
                    </div>
                    <div className={'offcanvas-footer'}>
                        <FooterContent />
                    </div>
                </div>
                {/* </div> */}
            </Drawer>

        </>
    );
}

export default BasketCanvas;