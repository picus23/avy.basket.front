import { FC, ReactNode } from 'react'
import Image from 'next/image'
import { Button } from 'antd';


interface FieldEncodingProps {
    imgUrl: string,
    pagetitle: string,
    price?: number,
    amount?: number,
    basketButtons?: ReactNode,
    btnGrayArrow?: ReactNode,
    handleArrowClick?: () => void,
    isDelete: number | boolean,
    onCancelErace: () => void,
}


const FieldEncoding: FC<FieldEncodingProps> = ({ imgUrl, pagetitle, price, amount, basketButtons, btnGrayArrow, handleArrowClick, onCancelErace, isDelete }) => {

    return <div className="my-2 position-relative">
        {
            // isDelete && <MainBasketEraceTimer textSize='14px' onClick={onCancelErace} timerWidth={isDelete} />
            // isDelete && <MainBasketEraceTimer textSize='14px' onClick={onCancelErace} timerWidth={isDelete} />
        }

        <div className='flex justify-between items-center w-100 gap-2'>
            <div className='flex gap-2'>
                <Image width={64} height={64} className='aspect-square' src={imgUrl} alt="logo" />
                <div className="flex flex-col justify-center">
                    <span className="text-[20px] fw-500">{pagetitle}</span>
                    <div className='d-flex gap-2 text-[16px] text-gray-500'>
                        {price ? <span >{price}$ за шт.</span> : false}
                        {amount ? <span>Осталось {amount} шт.</span> : false}
                    </div>
                </div>
            </div>
            <div className='flex gap-2'>
                {basketButtons ?? false}
            </div>
        </div>

        {
            btnGrayArrow
                ? <div>
                    <Button onClick={handleArrowClick} />
                </div>
                : false
        }

    </div>
}
export default FieldEncoding;

