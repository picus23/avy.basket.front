import { FC } from 'react';

import iconClose from './icons/icon-close.svg';

interface iClose { }

const Close: FC<iClose> = ({}) => {
    return (
        <button className={'btn-close-basket'} type={'button'} data-bs-dismiss={'offcanvas'} aria-label={'Close'}>
            <img className={'icon-close'} src={iconClose} alt={'BASKET CLOSE'} />
            <p className={'text-close'}>Закрыть</p>
        </button>
    );
}

export default Close;
