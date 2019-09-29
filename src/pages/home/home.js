import React, {useEffect} from 'react';
import styles from './home.module.scss';
import { Link } from "react-router-dom";
import {TweenMax, Elastic, TimelineMax} from "gsap/TweenMax";


const Home = () => {

    // Setup animations
    useEffect(() => {
        let mainTimeline = new TimelineMax();
        let tweenText = new TweenMax.fromTo('h1', 0.2, { transform: 'translateY(40px)', opacity: 0 }, { transform: 'translateY(0)', opacity: 1 });
        let tweenButton = new TweenMax.fromTo('#order-now', 1, { transform: 'translateY(40px)', ease: Elastic.easeIn, opacity: 0 }, { transform: 'translateY(0)', ease: Elastic.easeOut, opacity: 1 });
        mainTimeline.add(tweenText, 0.2).add(tweenButton, .5);
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