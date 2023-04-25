import React, {FC, useContext, useEffect, useState} from "react";

import IconDefault from '../icons/icon-default.svg';
import ArrowUp from '../icons/icon-arrow-up.svg';
import ArrowDown from '../icons/icon-arrow-down.svg';
import IconPdf from '../icons/icon-pdf.svg';
import Icon3D from '../icons/icon-3d.svg';
import IconEnviroment from '../icons/icon-enviroment.svg';
import IconFeedback from '../icons/icon-feedback.svg';

import {BasketContext} from "../../BasketContext";
import BasketRemoveButton from "../../BasketRemoveButton";
import {clearInterval} from "timers";

interface iProductItem {
    id : number,
}

const ShopProductItem : FC<iProductItem> = ({id}) => {
    const {productPrice, getCount, productInfo, productEnvironment} = useContext(BasketContext);

    const [request, setRequest] = useState(false);

    const [data, setData] = useState({pagetitle : "", price : 0, href : ""});
    const [environment, setEnvironment] = useState({status : false});

    useEffect(() => {
        console.log(id, data);
    }, [data])


    if (!request) {
        setRequest(true);

        productInfo(id).then(function (response : any) {
            return response.json();

        }).then(function (data : {pagetitle : string, price : number, href : string}) {
            setData(data);
        });

        productEnvironment(id).then(function (response : any) {
            return response.json();

        }).then(function (data : { status : boolean }) {
            setEnvironment(data);
        });
    }

    return (
        <>
            <div className={'_551de19d3a7b8913067478ec24d67eeb'}>
                <div className={'switcher'}>
                    <button className={'btn-arrow'}>
                        <img src={ArrowUp} alt={'ARROW UP'} />
                    </button>
                    <p className={'item-position'}>1</p>
                    <button className={'btn-arrow'}>
                        <img src={ArrowDown} alt={'ARROW DOWN'} />
                    </button>
                </div>
                <div className={'product-item'}>
                    <div className={'item-logo'}>
                        <img src={IconDefault} alt={'PRODUCT LOGO'} />
                    </div>
                    <div className={'product-rows'}>
                        <div className={'item-information'}>
                            <div className={'product-info'}>
                                <div className={'breadcrumbs'}>
                                    <a href={'/'}>Продукция</a>
                                    <a href={'/'}>Клапаны</a>
                                    <a href={'/'}>Шаровые краны</a>
                                </div>
                                <h2 className={'product-title'}>{data.pagetitle ? data.pagetitle : 'H1B-H-6M'}</h2>
                            </div>
                            <div className={'product-btn-group'}>
                                <div className={'btn-group'}>
                                    <button className={'btn'} onClick={() => {
                                        console.log(environment);
                                    }}>
                                        <img className={environment.status ? 'btn-environment-true' : 'btn-environment-false'} src={IconEnviroment} alt={''}/>
                                    </button>
                                    <button className={'btn'}>
                                        <img src={IconFeedback} alt={''}/>
                                    </button>
                                </div>
                                <div className={'btn-group'}>
                                    <button className={'btn'}>
                                        <img src={Icon3D} alt={''}/>
                                    </button>
                                    <button className={'btn'}>
                                        <img src={IconPdf} alt={''}/>
                                    </button>
                                </div>
                                <BasketRemoveButton id={id} />
                            </div>
                        </div>
                        <div className={'item-attributes'}>
                            <div className={'product-attr-group'}>
                                <div className={'attr-block'}>
                                    <h5 className={'attr-title'}>Давление</h5>
                                    <p className={'attr-description'}>до 207 бар при 21°C</p>
                                </div>
                                <div className={'attr-block'}>
                                    <h5 className={'attr-title'}>Давление</h5>
                                    <p className={'attr-description'}>до 207 бар при 21°C</p>
                                </div>
                                <div className={'attr-block'}>
                                    <h5 className={'attr-title'}>Давление</h5>
                                    <p className={'attr-description'}>до 207 бар при 21°C</p>
                                </div>
                                <div className={'attr-block'}>
                                    <h5 className={'attr-title'}>Давление</h5>
                                    <p className={'attr-description'}>до 207 бар при 21°C</p>
                                </div>
                                <div className={'attr-block'}>
                                    <h5 className={'attr-title'}>Давление</h5>
                                    <p className={'attr-description'}>до 207 бар при 21°C</p>
                                </div>
                                <div className={'attr-block'}>
                                    <h5 className={'attr-title'}>Давление</h5>
                                    <p className={'attr-description'}>до 207 бар при 21°C</p>
                                </div>
                                <div className={'attr-block'}>
                                    <h5 className={'attr-title'}>Давление</h5>
                                    <p className={'attr-description'}>до 207 бар при 21°C</p>
                                </div>
                                <div className={'attr-block'}>
                                    <h5 className={'attr-title'}>Давление</h5>
                                    <p className={'attr-description'}>до 207 бар при 21°C</p>
                                </div>
                            </div>
                            <div className={'product-attr-price'}>
                                <h5 className={'price-title'}>Итого</h5>
                                <p className={'price-number'}>${productPrice(id) * getCount(id)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShopProductItem;