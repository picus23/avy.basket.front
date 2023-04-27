import React, { FC, useContext, useEffect, useState } from "react";

import { BasketContext } from "../../BasketContext";
import BasketRemoveButton from "../../BasketRemoveButton";
import { Md3DRotation, MdAddComment, MdCheckCircle, MdKeyboardArrowDown, MdOutlineKeyboardArrowUp, MdPictureAsPdf } from "react-icons/md";
import Button from "../../Button";


interface iProductItem {
    id: number,
}

const ShopProductItem: FC<iProductItem> = ({ id }) => {
    const { productPrice, getCount, productInfo, productEnvironment } = useContext(BasketContext);

    const [request, setRequest] = useState(false);

    const [data, setData] = useState({ pagetitle: "", price: 0, href: "" });
    const [environment, setEnvironment] = useState({ status: false });

    useEffect(() => {
        console.log(id, data);
    }, [data])


    if (!request) {
        setRequest(true);

        productInfo(id).then(function (response: any) {
            return response.json();

        }).then(function (data: { pagetitle: string, price: number, href: string }) {
            setData(data);
        });

        productEnvironment(id).then(function (response: any) {
            return response.json();

        }).then(function (data: { status: boolean }) {
            setEnvironment(data);
        });
    }

    return (
        <>
            <div className={'_551de19d3a7b8913067478ec24d67eeb d-flex border-0 my-2'}>
                <div className="d-flex flex-column mx-1 justify-content-center me-2">
                    <button onClick={() => alert(123)} className="border-0 bg-white"><MdOutlineKeyboardArrowUp fill="#969696" /></button>
                    <span className="ms-2 my-2">1</span>
                    <button onClick={() => alert(123)} className="border-0 bg-white"><MdKeyboardArrowDown fill="#969696" /></button>
                </div>
                <img src="node_modules/kit/public/kit/cart_item.png" alt="PRODUCT LOGO" />

                <div className="d-flex flex-column flex-grow-1 ms-3 gap-2 py-1">
                    <div className="row">
                        <div className="col-5">
                            <a className="text-decoration-none" style={{ color: '#585757', fontSize: '16px', fontWeight: '400' }} href={'/'}>Продукция / </a>
                            <a className="text-decoration-none" style={{ color: '#585757', fontSize: '16px', fontWeight: '400' }} href={'/'}>Продукция / </a>
                            <a className="text-decoration-none" style={{ color: '#585757', fontSize: '16px', fontWeight: '400' }} href={'/'}>Продукция</a>
                            <br />
                            <span className="font-size-20 fw-500">{data.pagetitle ? data.pagetitle : 'empty'}</span>
                        </div>
                        <div className="d-flex col gap-2">
                            <div className="d-flex align-items-center gap-1">
                                <Button onClick={() => {
                                    console.log(environment);
                                }} icon={<MdCheckCircle size={20} fill={'gray'} />} btn_style="small-gray my-btn-40x40"></Button>
                                <Button onClick={() => alert(123)} icon={<MdAddComment size={20} fill={'gray'} />} btn_style="small-gray my-btn-40x40"></Button>
                            </div>
                            <div className="d-flex align-items-center gap-1">
                                <Button onClick={() => alert(123)} icon={<Md3DRotation size={20} fill={'gray'} />} btn_style="small-gray my-btn-40x40"></Button>
                                <Button onClick={() => alert(123)} icon={<MdPictureAsPdf size={20} fill={'gray'} />} btn_style="small-gray my-btn-40x40"></Button>
                            </div>
                            <div className="d-flex">
                                <BasketRemoveButton id={id} />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-3">
                            <span className="font-size-13">Давление</span> <br />
                            <span className="font-size-16-black fw-500">до 207 бар при 21°C</span>
                        </div>
                        <div className="col-3">
                            <span className="font-size-13">Давление</span> <br />
                            <span className="font-size-16-black fw-500">до 207 бар при 21°C</span>
                        </div>
                        <div className="col-3">
                            <span className="font-size-13">Давление</span> <br />
                            <span className="font-size-16-black fw-500">до 207 бар при 21°C</span>
                        </div>
                        <div className="d-flex flex-column col-3 justify-content-end align-items-start mr-2">
                            <span className="font-size-13 mb-1">Итого</span>
                            <span className="font-size-16-black fw-500">${productPrice(id) * getCount(id)}</span>
                        </div>
                    </div>

                </div >



                {/* ======================= */}
                {/* <div className={'switcher'}>
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
                            <div className={'product-info placeholder-glow'}>
                                <div className={data.href ? 'breadcrumbs' : 'breadcrumbs placeholder'}>
                                    <a href={'/'}>Продукция</a>
                                    <a href={'/'}>Клапаны</a>
                                    <a href={'/'}>Шаровые краны</a>
                                </div>
                                <h2 className={data.pagetitle ? 'product-title' : 'product-title placeholder'}>{data.pagetitle ? data.pagetitle : 'empty'}</h2>
                            </div>
                            <div className={'product-btn-group'}>
                                <div className={'btn-group'}>
                                    <button className={'btn'} onClick={() => {
                                        console.log(environment);
                                    }}>
                                        <img className={environment.status ? 'btn-environment-true' : 'btn-environment-false'} src={IconEnviroment} alt={''} />
                                    </button>
                                    <button className={'btn'}>
                                        <img src={IconFeedback} alt={''} />
                                    </button>
                                </div>
                                <div className={'btn-group'}>
                                    <button className={'btn'}>
                                        <img src={Icon3D} alt={''} />
                                    </button>
                                    <button className={'btn'}>
                                        <img src={IconPdf} alt={''} />
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
                </div> */}
            </div>
        </>
    );
}

export default ShopProductItem;