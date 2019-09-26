import React, {useState, useEffect} from 'react';
import styles from './cart.module.scss';

const Cart = () => {

    let initial = localStorage.getItem('cart');
    let num = 0;
    if (initial !== null) {
        num = (JSON.parse(initial).length)
    }

    return (
        <div className={styles.fullPage}>
            <div className={styles.content}>
                <h1>{num} Items in Your Cart</h1>
                <h1>iF i HaD tHe EnErGy tO aCtUaLlY mAkE tHiS cArT wOrK</h1>
                <h1>it would be cool</h1>
                <h1>for now just pretend it works</h1>
            </div>
        </div>
    )
}

export default Cart;