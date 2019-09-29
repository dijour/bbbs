import React from 'react';
import styles from './nav.module.scss';
import roll from '../../src/assets/cr.svg'
import order from '../../src/assets/order.svg'
import bag from '../../src/assets/bag.svg'
import { withRouter, Link } from "react-router-dom";

const Nav = (props) => {
    let initial = localStorage.getItem('cart');
    let initialCount = 0;
    if (initial !== null) {
        initialCount = (JSON.parse(initial).length)
    }

    return (
        <div className={styles.nav}>
            <div className={styles.leftBlock}>
                <Link className={props.location.pathname === "/" ? styles.active : styles.hoverable} to={"/"}>
                    <img src={roll} alt="cinnamon-roll"/>
                </Link>  
            </div>
            <div className={styles.rightBlock}>
                <Link className={props.location.pathname === "/order" ? styles.active : styles.hoverable} to={"/order"}>
                    <img src={order}   alt="order"/>
                </Link>      
                <Link className={props.location.pathname === "/bag" ? styles.active : styles.hoverable} to={"/cart"}>
                    <div className={styles.centerAlign}>
                        <img src={bag}  alt="shopping-bag"/>
                        <h1>{initialCount}</h1>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default withRouter(Nav);