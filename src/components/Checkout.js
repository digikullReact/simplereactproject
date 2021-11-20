import React from 'react';
import useStore from '../store';

const Checkout = () => {

    const bookedSeats = useStore(state => state.bookedSeats)

    return (
        <div>
            <h1>
                Checkout Component
            </h1>
            {
                bookedSeats.map(ele=>(
                    <li>
                        {ele.price}
                    </li>
                ))
            }
            
        </div>
    )
}

export default Checkout
