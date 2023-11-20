import { useContext, FC } from "react";
import ButtonClose from "./сomponents/Canvas/ButtonClose";
import ProductItem from "./сomponents/ProductItem";
import FooterContent from "./сomponents/FooterContent";
import { BasketContext } from "../Basket";
import { Button, Drawer } from "antd";
import { MdClose } from "react-icons/md";

interface BasketDrawerProps {

}

const BasketDrawer: FC<BasketDrawerProps> = () => {
    const { basketList, basketListCount, isOpenDrawer, closeDrawer } = useContext(BasketContext);

    return <Drawer placement="right" width={512} open={isOpenDrawer} closable={false} onClose={closeDrawer}>
        <div className='d-flex flex-column h-100' id={'offcanvasBasket'} aria-labelledby={'offcanvasBasketLabel'}>
            <div className={'offcanvas-header'}>
                <h5 className='offcanvas-title font-size-20-black fw-500' id={'offcanvasBasketLabel'}>Ваша корзина</h5>
                <Button onClick={closeDrawer} icon={<MdClose size={20} fill={'gray'} />}>Закрыть</Button>
            </div>
            <div className="offcanvas-body flex-grow-1">
                {

                    basketListCount && basketList
                        ? basketList.map(basketItem => {
                            return <div key={basketItem.pagetitle}>
                                <ProductItem basketItem={basketItem} />
                            </div>
                        })
                        : "Корзина пуста."

                }
            </div>
            <div className={'offcanvas-footer'}>
                <FooterContent basketUrl="/basket" />
            </div>
        </div>
    </Drawer>

}

export default BasketDrawer;