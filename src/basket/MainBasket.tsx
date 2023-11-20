import { FC, useContext } from "react";
import { BasketContext } from "../Basket";

import { MdDelete } from "react-icons/md";
import BasketRemoveButton from "./сomponents/BasketRemoveButton";
import { Button } from "antd";
import CartItem from "./сomponents/main/CartItem";





interface MainBasketProps {
    route?: (url: string) => string
}

const MainBasket: FC<MainBasketProps> = ({ route }) => {
    const { eraseAll, basketList, getDetails, setCount } = useContext(BasketContext)


    return <>

        <div className="flex flex-col w-75 p-2">
            <div className="flex justify-between">
                <h5 className='text-xl m-0'>Корзина</h5>
                <Button
                    className="flex items-center gap-2"
                    onClick={() => eraseAll && eraseAll()}
                    icon={<MdDelete size={20} fill="gray" />}
                >Очистить корзину</Button>
            </div>
            <div className="flex flex-col gap-4">

                {

                    basketList
                        ? Object.values(basketList).map((basketItem, index) => {
                            const detais = getDetails && getDetails(basketItem.pagetitle)

                            if (!detais)
                                return <></>

                            return <CartItem
                                key={basketItem.pagetitle}
                                index={index + 1}
                                price={detais.price}
                                props={[]}
                                count={basketItem.count}
                                pagetitle={basketItem.pagetitle}
                                breadCrumbs={detais.breadСrumbs}
                                breadCrumbsRoute={route}
                                imgUrl={detais.img}
                                BasketButton={
                                    <BasketRemoveButton pagetitle={basketItem.pagetitle} />
                                }

                                isDelete={basketItem.isDelete}
                                onCancelErace={() => setCount && setCount(basketItem.pagetitle, 1)}
                            />

                        })
                        : 'Не загружено'

                }

            </div>
        </div>
    </>
}

export default MainBasket;