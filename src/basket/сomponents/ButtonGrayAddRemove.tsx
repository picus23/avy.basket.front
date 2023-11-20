import { Button } from "antd";
import { FC, ReactNode } from "react";
import { MdRemove } from "react-icons/md";
import { MdAdd } from "react-icons/md";

interface ButtonGrayAddRemoveProps {
    counter?: number,
    onClickAdd: () => void,
    onClickRemove: () => void,
}


const ButtonGrayAddRemove: FC<ButtonGrayAddRemoveProps> = ({ counter, onClickRemove, onClickAdd }) => {
    return <div className={`
            flex justify-between items-center 
            gap-2 rounded border border-solid border-gray-300 
        `} >

        <Button size="small" onClick={onClickRemove} style={{ border: 'none', background: 'none' }}>
            <MdRemove size={20} fill={'#969696'} />
        </Button>

        <span className="text-gray-600">{counter ?? 0}</span>

        <Button size="small" onClick={onClickAdd} style={{ border: 'none', background: 'none' }}>
            <MdAdd size={20} color={'#969696'} />
        </Button>

    </div>
}

export default ButtonGrayAddRemove;
