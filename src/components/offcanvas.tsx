import React, { FC } from 'react';
import ABClose from "./close";
import ABProduct from "./product";
import ABFooter from "./footer";

interface iCanvas {

}

const Canvas: FC<iCanvas> = ({}) => {
    return (
      <>
          <div className="offcanvas offcanvas-end" id={'offcanvasBasket'} aria-labelledby="offcanvasRightLabel">
              <div className={'offcanvas-container'}>
                  <div className={'offcanvas-group'}>
                      <div className="offcanvas-header">
                          <h5 className="offcanvas-title" id="offcanvasRightLabel">Ваша корзина</h5>
                          <ABClose />
                      </div>
                      <div className="offcanvas-body">
                          <ABProduct />
                      </div>
                  </div>
                  <div className={'offcanvas-footer'}>
                      <ABFooter />
                  </div>
              </div>
          </div>
      </>
    );
}

export default Canvas;