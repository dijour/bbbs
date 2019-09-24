import React, {useState, useEffect} from 'react';
import bg from '../../assets/bg.svg'
import styles from './home.module.scss'
import { withRouter, Link } from "react-router-dom";
import {TweenMax, Power2, TimelineMax} from "gsap/TweenMax";
import $ from 'cash-dom';


const Home = () => {
    useEffect(() => {
        // Setup animations
        let mainTimeline = new TimelineMax();
        let tweenButton = new TweenMax.fromTo('#order-now', 0.3, { transform: 'translateY(40px)', opacity: 0 }, { transform: 'translateY(0)', opacity: 1 });
        let tweenText = new TweenMax.fromTo('h1', 0.3, { transform: 'translateY(40px)', opacity: 0 }, { transform: 'translateY(0)', opacity: 1 });
        mainTimeline.add(tweenText, 0.75).add(tweenButton, 1);
            return true
	}, [])


    return (
        <div>
            <div className={styles.heroText}>
                <h1>Bun Bun Bake Shop</h1>
                <Link to={"/order"}>
                    <button id="order-now">Order Now!</button>
                </Link>      
            </div>
            <div className={styles.fullPage}>
            </div>
        </div>
    )
}

export default Home;