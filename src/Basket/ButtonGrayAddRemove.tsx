import { FC, ReactNode } from "react";
import { MdRemove } from "react-icons/md";
import { MdAdd } from "react-icons/md";

interface BtnAddProps {
    onClickRemove: () => void,
    onClickAdd: () => void,
    children: ReactNode
}


function BtnAdd(props: BtnAddProps) {
    return <div className='d-flex justify-content-between align-items-center gap-3 px-2 py-2 bg-white btn'
        style={{ borderRadius: '8px', border: '1px solid #E8E8E8' }}>

        <button onClick={props.onClickRemove} style={{ border: 'none', background: 'none' }}><MdRemove size={20} fill={'#969696'} /></button>

        <span style={{ color: '#969696'}}>{props.children}</span>
        {/* <span style={{ color: '#969696' }} className=''>{props.counter ?? 0}</span> */}

        <button onClick={props.onClickAdd} style={{ border: 'none', background: 'none' }}><MdAdd size={20} fill={'#969696'} /></button>
    
    </div>
}

export default BtnAdd;