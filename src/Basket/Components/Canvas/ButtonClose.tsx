import { MdClose } from 'react-icons/md';
import { FC } from 'react';

interface iButtonClose {
    onClick?: () => void,
}

const ButtonClose:FC <iButtonClose> = ({ onClick}) => {
    return (
        <button onClick={onClick} type='button' className='text-reset d-flex my-btn-gray my-btn-h40' data-bs-dismiss='offcanvas' aria-label='ButtonClose'>
            <MdClose size={20} fill={'gray'} />
            <span className="font-size-16-black fw-500">Закрыть</span>
        </button>
    );
}

export default ButtonClose;
