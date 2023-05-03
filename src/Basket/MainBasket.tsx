import { FC, useContext } from "react";
import { BasketContext } from "./BasketContext";

import Button from "kit/components/buttons/Button";
import CartItem from "kit/components/cartItem/CartItem";
import EncodingOrder from "kit/components/encoding/EncodingOrder";
import EncodingWrapper from "kit/components/encoding/EncodingWrapper";
import { MdDelete } from "react-icons/md";
import { Form, Input, Radio, Select } from "antd";

import MainBasketEraceTimer from 'kit/components/basket/MainBasketEraceTimer';


interface MainBasketProps {
    
}
 
const MainBasket: FC<MainBasketProps> = () => {
    const { eraseAll, basketList, getDetails } = useContext(BasketContext)


    return <>
        <EncodingWrapper>
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
                                    return '----'

                                if (index==1)
                                    return <MainBasketEraceTimer />

                                return <CartItem 
                                            key={basketItem.pagetitle} 
                                            price={detais.price} 
                                            props_list={[]} 
                                            list={[]} 
                                            count={basketItem.count} 
                                            name_item={basketItem.pagetitle} 
                                        />
                            })
                            : 'Не загружено'

                    }

                </div>
            </div>
            <div className="d-flex flex-column p-2 w-25">
                <h5>Оформление заказа</h5>
                <Radio.Group name="radiogroup">
                    <EncodingOrder
                        value={1}
                        title="Самовывоз"
                        subtitle="г.Москва, ул.Большая Семеновская, дом 49."
                        checked={true}
                    />
                    <EncodingOrder
                        value={2}
                        title="Доставка"
                        subtitle="Список партнёров флюид-лайн."
                    />
                </Radio.Group>
                <div className="">
                    <Form layout="vertical">

                        <Form.Item label={<span style={{ fontSize: '16px', color: '#585757' }}>Контактное лицо</span>}>
                            <Input placeholder="ФИО" />
                        </Form.Item>

                        <Form.Item label={<span style={{ fontSize: '16px', color: '#585757' }}>Телефон</span>}>
                            <Input placeholder="+7 (000) 000-00-00" />
                        </Form.Item>
                        <Form.Item label={<span style={{ fontSize: '16px', color: '#585757' }}>E-mail</span>}>
                            <Input placeholder="example@mail.ru" />
                        </Form.Item>
                        <Form.Item label={<span style={{ fontSize: '16px', color: '#585757' }}>Адрес</span>}>
                            <Input placeholder="" />
                        </Form.Item>

                        <Form.Item
                            name="manager"
                            label={<span style={{ fontSize: '16px', color: '#585757' }}>Ваш менеджер</span>}>
                            <Select placeholder="-">
                                {/* <Option value="1">Калашников</Option>
                                    <Option value="2">Uzi</Option>
                                    <Option value="other">Other</Option> */}
                            </Select>
                        </Form.Item>
                        <span style={{ color: '#969696', fontSize: '13px' }}>Менеджер на стороне Fluid-line. Если заказываете сами, оставьте поле пустым.</span>
                        <button type="submit" className="btn btn-primary w-100 my-3">Отправить</button>

                    </Form>
                </div>
            </div>
        </EncodingWrapper>

    </>;
}
 
export default MainBasket;