import React, {useState, useEffect} from 'react';
import styles from './index.module.scss';
import walnut from '../../assets/walnut.svg'
import blackberry from '../../assets/blackberry.svg'
import caramelPecan from '../../assets/caramel-pecan.svg'
import original from '../../assets/original.svg'
import pumpkin from '../../assets/pumpkin-spice.svg'

import { withRouter, Link } from "react-router-dom";
import {TweenMax, Bounce, TimelineMax} from "gsap/TweenMax";
import $ from 'cash-dom';

const Index = () => {
    useEffect(() => {
        // Setup animations
        let indexTimeline = new TimelineMax();
        let elements = ($(`.listItem`))
        console.log(elements)
        let tweenImg1 = new TweenMax.fromTo('#img1', 0.3, { transform: 'translateY(40px)', opacity: 0, ease: Bounce.easeIn }, { transform: 'translateY(0)', opacity: 1, ease: Bounce.easeOut });
        let tweenImg2 = new TweenMax.fromTo('#img2', 0.3, { transform: 'translateY(40px)', opacity: 0, ease: Bounce.easeIn }, { transform: 'translateY(0)', opacity: 1, ease: Bounce.easeOut });
        let tweenImg3 = new TweenMax.fromTo('#img3', 0.3, { transform: 'translateY(40px)', opacity: 0, ease: Bounce.easeIn }, { transform: 'translateY(0)', opacity: 1, ease: Bounce.easeOut });
        let tweenImg4 = new TweenMax.fromTo('#img4', 0.3, { transform: 'translateY(40px)', opacity: 0, ease: Bounce.easeIn }, { transform: 'translateY(0)', opacity: 1, ease: Bounce.easeOut });
        let tweenImg5 = new TweenMax.fromTo('#img5', 0.3, { transform: 'translateY(40px)', opacity: 0, ease: Bounce.easeIn }, { transform: 'translateY(0)', opacity: 1, ease: Bounce.easeOut });
        let tweenImg6 = new TweenMax.fromTo('#img6', 0.3, { transform: 'translateY(40px)', opacity: 0, ease: Bounce.easeIn }, { transform: 'translateY(0)', opacity: 1, ease: Bounce.easeOut });
        
        indexTimeline.add(tweenImg1, .2).add(tweenImg2, .4).add(tweenImg3, .6).add(tweenImg4, .8).add(tweenImg5, 1).add(tweenImg6, 1.2)
    }, [])

    return (
        <div className={styles.fullPage}>
            <div className={styles.content}>
                <div className={styles.heading}>What <u>flavor</u> would you like?</div>
                <div className={styles.row}>
                    <Link to={"/order/original"}>
                        <div id="img1" className={styles.listItem}>
                            <img src={original} alt="original"></img>
                            <h1>Original</h1>
                        </div>
                    </Link>   
                    <Link to={"/order/gf"}>
                        <div id="img2" className={styles.listItem}>
                        <img src={original} alt="original GF"></img>
                            <h1>Original (GF)</h1>
                        </div>
                    </Link>
                    <Link to={"/order/blackberry"}>    
                        <div id="img3" className={styles.listItem}>
                        <img src={blackberry} alt="blackberry"></img>
                            <h1>Blackberry</h1>
                        </div>
                    </Link>
                </div>
                <div className={styles.row}>
                    <Link to={"/order/caramel-pecan"}>
                        <div id="img4" className={styles.listItem}>
                            <img src={caramelPecan} alt="caramel-pecan"></img>
                            <h1>Caramel Pecan</h1>
                        </div>
                    </Link>
                    <Link to={"/order/pumpkin-spice"}>
                        <div id="img5" className={styles.listItem}>
                            <img src={pumpkin} alt="pumpkin"></img>
                            <h1>Pumpkin Spice</h1>
                        </div>
                    </Link>
                    <Link to={"/order/walnut"}>
                        <div id="img6" className={styles.listItem}>
                            <img src={walnut} alt="walnut"></img>
                            <h1>Walnut</h1>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Index;