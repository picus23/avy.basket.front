import { Button } from "antd";
import { BasketContext } from "../../Basket";
import { useContext } from "react";



const BasketOpen = ({ }) => {
    const { basketListCount, openDrawer } = useContext(BasketContext);

    return (
        <>
            <div>

                <div className="position-relative">
                    <Button

                        // icon={<MdShoppingCart size={24} fill={'#969696'} />}
                        // btn_style="btn-outline-secondary"
                        // counterPosition="right"
                        // counter={basketListCount}
                        onClick={() => openDrawer && openDrawer()}
                    >
                        Корзина
                    </Button>
                </div>

            </div>
        </>
    );
}

export default BasketOpen;