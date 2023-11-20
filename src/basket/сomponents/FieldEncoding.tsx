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

        <div className='d-flex justify-content-between align-items-center w-100 gap-2'>
            <div className='d-flex gap-2'>
                <Image width={64} height={64} style={{ aspectRatio: '1/1', width: '64px', height: '64px' }} src={imgUrl} alt="logo" />
                <div className="d-flex flex-column justify-content-center">
                    <span className="font-size-20 fw-500">{pagetitle}</span>
                    <div className='d-flex gap-2'>
                        {price ? <span className="font-size-16-gray fw-500">{price}$ за шт.</span> : false}
                        {amount ? <span className="font-size-16-gray fw-500">Осталось {amount} шт.</span> : false}
                    </div>
                </div>
            </div>
            <div className='d-flex gap-2'>
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

