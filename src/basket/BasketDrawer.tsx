import { useContext, FC } from "react";
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
        <div className='flex flex-col gap-3 h-full '>
            <div className='flex justify-between items-center'>
                <h5 className='text-xl m-0' id={'offcanvasBasketLabel'}>Ваша корзина</h5>
                <Button className="flex items-center gap-2" onClick={closeDrawer} icon={<MdClose size={20} fill={'gray'} />}>Закрыть</Button>
            </div>
            <div className="flex-grow">
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
            <FooterContent basketUrl="/basket" />
        </div>
    </Drawer>

}

export default BasketDrawer;