import React from 'react';
import styles from './cart.module.scss';

const Cart = () => {

    let initial = localStorage.getItem('cart');
    let num = 0;
    if (initial !== null) {
        num = (JSON.parse(initial).length)
    }

    return (
        <div className={styles.fullPage}>
            <div className={styles.leftBox}>
                <h1>{num} Item{num > 1 ? "s" : ""} in Your Cart</h1>
            </div>
            <div className={styles.rightBox}>
                <h3><u>Checkout</u></h3>
                <hr/>
                <h3>Registered Users</h3>
                <div className={styles.login}>
                    <label>Email</label>
                    <input type="text" label="Email"/>
                    <label>Password</label>                    
                    <input type="password" label="Password"/>
                </div>
                <button>Sign in + Checkout</button>
                <hr></hr>
                <h3>New Customers</h3>               
                <button>Create Account</button>
            </div>
        </div>
    )
}

export default Cart;