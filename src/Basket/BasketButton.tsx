import React, {FC, useContext, useState} from "react";
import {BasketContext, iBasketContext} from "./BasketContext";

import imgRemove from "./Components/icons/icon-remove.svg";
import imgAdd from "./Components/icons/icon-add.svg";
import iconCart from './Components/icons/icon-cart.svg';

interface iButton {
    product_id : number,
    environment? : any
}

const BasketAddButton : FC<iButton> = ({product_id}) => {
    const {toggleAdd} = useContext(BasketContext) as iBasketContext;

    return (
        <>
            <button onClick={() => {
                toggleAdd(product_id)
                // setBasket(product_id.toString())
                // console.log(basket, product_id.toString());
            }}>click {product_id}</button>
        </>
    );
    // let findCount = 1;

    // if (basket.basket !== null) {
    //     let find = JSON.parse(basket.basket).find((p : any) => p.product_id === product_id)
    //     if (find !== undefined) {
    //         if (find.count != undefined) {
    //             findCount = find.count;
    //         }
    //     }
    // }

    // const [count, setCount] = useState(findCount);

    // const handleToggleAdd = (product_id : number, count : number) => {

        // let storage = basket.basket;
        //
        // if (storage !== null) {
        //     if (storage === '{}' || storage === null) {
        //         let product = new Array({'product_id' : product_id, 'count' : count, 'enviroment' : {'any' : 'any'}});
        //
        //         let stringify = JSON.stringify(product);
        //         localStorage.setItem('basket', stringify);
        //         basket.basket = stringify;
        //
        //     } else {
        //         let productArray = JSON.parse(storage);
        //
        //         let find = productArray.findIndex((p : any) => p.product_id === product_id);
        //
        //         if (find >= 0) {
        //             productArray[find] = {'product_id' : product_id, 'count' : count, 'enviroment' : {'any' : 'any'}}
        //
        //         } else {
        //             let product = {'product_id' : product_id, 'count' : count, 'enviroment' : {'any' : 'any'}};
        //             productArray.push(product);
        //         }
        //
        //         let stringify = JSON.stringify(productArray);
        //         localStorage.setItem('basket', stringify);
        //         basket.basket = stringify;
        //     }
        // }
    // }
    //
    // return (
    //     <>
    //         <div className={'d-flex'}>
    //             <div className={'counter-group me-2'}>
    //                 <button className={'btn btn-remove'} onClick={
    //                     () => {
    //                         if (count - 1 >= 1) {
    //                             setCount(prev => prev - 1);
    //                             toggleAdd(product_id, count - 1);
    //                         }
    //                     }
    //                 }>
    //                     <img className={'remove-image'} src={imgRemove} alt={'REMOVE'}/>
    //                 </button>
    //                 <button className={'btn current-count'} disabled={true}>{count ? count : 1}</button>
    //                 <button className={'btn btn-add'} onClick={
    //                     () => {
    //                         setCount(prev => prev + 1);
    //                         toggleAdd(product_id, count + 1);
    //                     }
    //                 }>
    //                     <img className={'add-image'} src={imgAdd} alt={'ADD'}/>
    //                 </button>
    //             </div>
    //             <button
    //                 type={'button'}
    //                 className={'btn btn-primary'}
    //                 data-bs-toggle="offcanvas"
    //                 data-bs-target="#offcanvasBasket"
    //                 aria-controls="offcanvasBasket" onClick={
    //                     () => {
    //                         toggleAdd(product_id, count);
    //                     }
    //                 }>
    //                 <img src={iconCart} alt={'ADD'}/>
    //             </button>
    //         </div>
    //     </>
    // );
}

export default BasketAddButton;