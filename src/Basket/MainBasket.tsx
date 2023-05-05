import { FC, useContext } from "react";
import { BasketContext } from "./BasketContext";

import Button from "kit/components/buttons/Button";


import CartItem from "kit/components/cartItem/CartItem";


import EncodingOrder from "kit/components/encoding/EncodingOrder";
import EncodingWrapper from "kit/components/encoding/EncodingWrapper";
import { MdDelete } from "react-icons/md";
import { Form, Input, Radio, Select } from "antd";
import BasketRemoveButton from "./BasketRemoveButton";


interface MainBasketProps {
    route?: (url: string) => string
}

const MainBasket: FC<MainBasketProps> = ({ route }) => {
    const { eraseAll, basketList, getDetails, setCount } = useContext(BasketContext)


    return <EncodingWrapper>
            {/* <div className="d-flex"> */}
                <div className="d-flex flex-column w-75 p-2">
                    <div className="d-flex justify-content-between mb-4">
                        <h5>Корзина</h5>
                        <Button
                            onClick={() => eraseAll && eraseAll()}
                            icon={<MdDelete fill="#969696" />}
                            btn_style="btn-outline-secondary">Очистить корзину</Button>
                    </div>
                    <div className="d-flex flex-column gap-4">

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

            {/* </div> */}
        </EncodingWrapper>
}

export default MainBasket;