import React, {useState, useEffect} from 'react';
import styles from './nav.module.scss';
import roll from '../../src/assets/cr.svg'
import order from '../../src/assets/order.svg'
import bag from '../../src/assets/bag.svg'
import classNames from 'classnames';
import { withRouter, Link } from "react-router-dom";

const Nav = (props) => {
    // const [age, setAge] = useState(19)

    console.log(props.location.pathname === "/")

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
                <Link to={"/bag"}>
                    <img src={bag} className={props.location.pathname === "/bag" ? styles.active : ""}  alt="shopping-bag"/>
                </Link>
            </div>
        </div>
    )
}

export default withRouter(Nav);