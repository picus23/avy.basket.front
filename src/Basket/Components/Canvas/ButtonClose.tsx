import iconClose from '../icons/icon-close.svg';

const ButtonClose = ({}) => {
    return (
        <button className={'btn-close'} type={'button'} data-bs-dismiss={'offcanvas'} aria-label={'ButtonClose'}>
            <img className={'icon-close'} src={iconClose} alt={'BASKET CLOSE'} />
            <p className={'text-close'}>Закрыть</p>
        </button>
    );
}

export default ButtonClose;
