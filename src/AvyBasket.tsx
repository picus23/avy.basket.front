import React, {FC, useEffect, useState} from 'react';
import './AvyBasket.css';

import ABClose from './components/close';
import ABProduct from './components/product';
import ABFooter from './components/footer';

interface iAvyBasket {
    api : string
}

const AvyBasket : FC<iAvyBasket> = ({api}) => {
    const [path, setPath] = useState(api);
    const [goods, setGoods] = useState(localStorage.getItem('basket'));

    useEffect(() => {
        console.log('Корзина / Создание корзины.');
    }, [goods]);

    useEffect(() => {
        console.log('Корзина / Путь установлен: "' + path + '"');
    }, [path]);

    return (
        <>
            <button type={'button'} className={'btn btn-primary'}>Добавить в корзину</button>
        </>
    );
}

export default AvyBasket;
