import React, {useState, useEffect} from 'react';
import styles from './nav.module.scss';
import roll from '../../src/assets/cr.svg'
import order from '../../src/assets/order.svg'
import bag from '../../src/assets/bag.svg'
import { withRouter, Link } from "react-router-dom";

const Nav = (props) => {
    let initial = localStorage.getItem('cart');
    let initialCount
    if (initial !== null) {
        initialCount = (JSON.parse(initial).length)
    }

    return (
        <div className={styles.nav}>
            <div className={styles.leftBlock}>
                <Link to={"/"}>
                    <img src={roll} className={props.location.pathname === "/" ? styles.active : ""} alt="cinnamon-roll"/>
                </Link>  
            </div>
            <div className={styles.rightBlock}>
                <Link to={"/order"}>
                    <img src={order} className={props.location.pathname === "/order" ? styles.active : ""}  alt="order"/>
                </Link>      
                <Link to={"/cart"}>
                    <div className={styles.centerAlign}>
                        <img src={bag} className={props.location.pathname === "/bag" ? styles.active : ""}  alt="shopping-bag"/>
                        <h1>{initialCount}</h1>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default withRouter(Nav);