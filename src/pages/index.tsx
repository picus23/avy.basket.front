import BasketAddButton from "../basket/BasketAddButton";
import BasketOpen from "../basket/BasketOpen";
import BasketRemoveButton from "../basket/BasketRemoveButton";

import { getDetailBasket, getEnvironment } from '../basket/Api';
import Basket from '@/Basket';

export default function Home() {
  return (
    <>

            <Basket getDetailBasket={getDetailBasket}>
                test
                {/* <div>
                    <div className={'d-flex'}>
                        <BasketAddButton pagetitle={'11111111'} />
                        <BasketRemoveButton pagetitle={'11111111'} />
                    </div>
                    <div className={'d-flex'}>
                        <BasketAddButton pagetitle={'22222222'} />
                        <BasketRemoveButton pagetitle={'22222222'} />
                    </div>
                    <div className='mb-4' style={{ width: '147px' }}>
                        <BasketAddButton pagetitle={'33333333'} />
                        <BasketAddButton pagetitle={'44444444'} />
                        <BasketAddButton pagetitle={'55555555'} />
                        <BasketAddButton pagetitle={'66666666'} />
                        <BasketAddButton pagetitle={'77777777'} />
                        <BasketAddButton pagetitle={'88888888'} />
                        <BasketAddButton pagetitle={'99999999'} />
                        <BasketAddButton pagetitle={'10000000'} />
                    </div>
                </div>


                <div className='mb-4' style={{ width: '147px' }}>
                    <BasketOpen />
                </div> */}


            </Basket>
        </>
  )
}
