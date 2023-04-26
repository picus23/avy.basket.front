import { useContext } from "react";
import ButtonClose from "./Components/Canvas/ButtonClose";
import ProductItem from "./Components/Canvas/ProductItem";
import FooterContent from "./Components/Canvas/FooterContent";
import { BasketContext } from "./BasketContext";
import { Drawer } from "antd";

const BasketCanvas = ({ }) => {
    const { getContext } = useContext(BasketContext);

    let mappedItems = "Корзина пуста.";

    if (getContext() !== '{}' && getContext() !== null) {
        mappedItems = JSON.parse(getContext()).map((b: any) => <ProductItem id={b.id as number} />);
    }

    return (

        <Drawer placement="right" width={500} open={true} closable={false}>
            <div className={'offcanvas-header'}>
                <h5 className={'offcanvas-title'} id={'offcanvasBasketLabel'}>Ваша корзина</h5>
                <ButtonClose />
            </div>
            <div className="offcanvas-body">
                {mappedItems}
            </div>
            <div className={'offcanvas-footer'}>
                <FooterContent />
            </div>
        </Drawer>
    );
}

export default BasketCanvas;