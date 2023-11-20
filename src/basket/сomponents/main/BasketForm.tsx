import { Form, Input, Radio, Select } from "antd";
import { FC } from "react";
// import EncodingOrder from "../encoding/EncodingOrder";
const { Option } = Select;

interface BasketFormProps {
    managerList?: string[]

}

const BasketForm: FC<BasketFormProps> = ({ managerList }) => {
    return <div className="d-flex flex-column p-2 w-25 sticky-top">
        <h5>Оформление заказа</h5>
        <Radio.Group name="radiogroup" defaultValue={1}>
            <Radio className='flex gap-2 rounded '
                value={1} name='delivery'>
                <div className="d-flex flex-column justify-content-center align-items-start">
                    <h6 >Самовывоз</h6>
                    <span style={{ fontSize: '13px', color: '#969696' }}>г.Москва, ул.Большая Семеновская, дом 49.</span>
                </div>
            </Radio>
            <Radio className='flex gap-2 rounded'
                value={1} name='delivery'>
                <div className="d-flex flex-column justify-content-center align-items-start">
                    <h6 >Доставка</h6>
                    <span style={{ fontSize: '13px', color: '#969696' }}>Список партнёров флюид-лайн.</span>
                </div>
            </Radio>
        </Radio.Group>
        <div className="">
            <Form layout="vertical">
                <Form.Item label={<span style={{ fontSize: '16px', color: '#585757' }}>Контактное лицо</span>}>
                    <Input placeholder="ФИО" />
                </Form.Item>
                {/*<Form.Item label={<span style={{ fontSize: '16px', color: '#585757' }}>Телефон</span>}>
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
                        {
                            managerList?.map(el => {
                                return <Option value={el}>{el}</Option>

                            })
                        }
                    </Select>
                </Form.Item> */}
                <span style={{ color: '#969696', fontSize: '13px' }}>Менеджер на стороне Fluid-line. Если заказываете сами, оставьте поле пустым.</span>
                <button type="submit" className="btn btn-primary w-100 my-3">Отправить</button>
            </Form>
        </div>
    </div>;
}

export default BasketForm;