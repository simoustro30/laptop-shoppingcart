import React from 'react';
import ShoppingCart from './ShoppingCart';
import CartTotal from './CartTotal';

export default function ShoppingSummary({selected}){
    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <ShoppingCart selected={selected}/>
            <CartTotal selected={selected}/>
        </section>
    )
}