import { ReactNode } from "react";


export interface LoaderProps {
    style?: {},
    size?: number, 
}


export interface FieldEncodingProps {
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

