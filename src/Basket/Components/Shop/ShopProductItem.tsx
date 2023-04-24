import React, {FC, useContext} from "react";

import IconDefault from '../icons/icon-default.svg';
import ArrowUp from '../icons/icon-arrow-up.svg';
import ArrowDown from '../icons/icon-arrow-down.svg';
import IconPdf from '../icons/icon-pdf.svg';
import Icon3D from '../icons/icon-3d.svg';
import IconEnviroment from '../icons/icon-enviroment.svg';
import IconFeedback from '../icons/icon-feedback.svg';

import {BasketContext} from "../../BasketContext";
import BasketRemoveButton from "../../BasketRemoveButton";

interface iProductItem {
    id : number,
    position? : number,
    productTitle? : string
}

const ShopProductItem : FC<iProductItem> = ({id, position, productTitle}) => {
    const {productPrice, getCount} = useContext(BasketContext);

    return (
        <>
            <div className={'_551de19d3a7b8913067478ec24d67eeb'}>
                <div className={'switcher'}>
                    <button className={'btn-arrow'}>
                        <img src={ArrowUp} alt={'ARROW UP'} />
                    </button>
                    <p className={'item-position'}>{position ? position : 1}</p>
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
                                <h2 className={'product-title'}>{productTitle ? productTitle : 'H1B-H-6M'} - {id}</h2>
                            </div>
                            <div className={'product-btn-group'}>
                                <div className={'btn-group'}>
                                    <button className={'btn'}>
                                        <img src={IconEnviroment} alt={''}/>
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