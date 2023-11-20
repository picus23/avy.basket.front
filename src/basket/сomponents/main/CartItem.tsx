import { FC, ReactNode } from "react";
import { Md3DRotation } from 'react-icons/md';
import { MdPictureAsPdf } from 'react-icons/md';
import { MdCheckCircle } from 'react-icons/md';
import { MdAddComment } from 'react-icons/md';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Image from "next/image";
import { Breadcrumb, Button } from "antd";

interface encoding {
    title: string,
    value: string
}

interface CartItemProps {
    pagetitle: string,
    props?: encoding[],
    breadCrumbs: string[],
    breadCrumbsRoute?: (url: string) => string,
    imgUrl: string,
    BasketButton: ReactNode,
    price?: number,
    index?: number
    count?: number,
    icon?: ReactNode,
    btn_style?: string,
    onClick?: () => void,
    isDelete?: false | number,

    onCancelErace: () => void,
}


const CartItem: FC<CartItemProps> = ({ BasketButton, props, btn_style, breadCrumbs, breadCrumbsRoute, count, imgUrl, price, onClick, pagetitle, index, onCancelErace, isDelete }) => {



    return <>
        <div className="flex position-relative">
            {
                // isDelete && <MainBasketEraceTimer onClick={onCancelErace} timerWidth={isDelete >= 0 && isDelete <=100 ? isDelete : false}  />
            }

            <div className="flex flex-column mx-1 justify-content-center me-2">
                <button onClick={() => alert('Click')} className="border-0 bg-transparent"><MdOutlineKeyboardArrowUp fill="#969696" /></button>
                <span className="ms-2">{index}</span>
                <button onClick={() => alert('Click')} className="border-0 bg-transparent"><MdKeyboardArrowDown fill="#969696" /></button>
            </div>
            <Image src={imgUrl} alt="PRODUCT LOGO" width={100} height={100} />

            <div className="flex flex-col flex-grow ">
                <div className="flex">
                    <Breadcrumb items={[{ key: '1', href: '/dd', title: 'Продукция' }]} />
                    <span className="font-size-20 fw-500">{pagetitle}</span>

                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-1">
                            <Button onClick={() => alert('Click')} icon={<MdCheckCircle size={20} fill={'#969696'} />} ></Button>
                            <Button onClick={() => alert('Click')} icon={<MdAddComment size={20} fill={'#969696'} />} ></Button>
                        </div>
                        <div className="flex items-center gap-1">
                            <Button onClick={() => alert('Click')} icon={<Md3DRotation size={20} fill={'#969696'} />} ></Button>
                            <Button onClick={() => alert('Click')} icon={<MdPictureAsPdf size={20} fill={'#969696'} />} ></Button>
                        </div>
                        <div className="flex items-center gap-1">
                            {BasketButton}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="flex col-9">
                        {props
                            ? props.map(el => {
                                return <div key={el.title} className="col">
                                    <span className="font-size-13">{el.title}</span> <br />
                                    <span className="font-size-16-black fw-500">{el.value}</span>
                                </div>
                            })
                            : false
                        }
                    </div>
                    <div className="flex flex-col col-3 justify-end items-center mr-2">
                        <span className="font-size-13 mb-1">Итого</span>
                        <span className="font-size-16-black fw-500">$ {price}</span>
                    </div>
                </div>

            </div >

        </div>
    </>

}

export default CartItem;