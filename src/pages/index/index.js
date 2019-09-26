import React, {useState, useEffect} from 'react';
import styles from './index.module.scss';
import walnut from '../../assets/walnut.svg'
import blackberry from '../../assets/blackberry.svg'
import caramelPecan from '../../assets/caramel-pecan.svg'
import original from '../../assets/original.svg'
import pumpkin from '../../assets/pumpkin-spice.svg'

import { withRouter, Link } from "react-router-dom";
import {TweenMax, Sine, Power2, Bounce, Elastic, TimelineMax} from "gsap/TweenMax";
import $ from 'cash-dom';

const Index = () => {

    useEffect(() => {
        // Setup animations
        TweenMax.set("#content", { autoAlpha: 1, xPercent: 0 });
        const listItem = document.querySelectorAll("a");
        let indexTimeline = new TimelineMax();
        
        listItem.forEach.call(listItem, function(el) {
            el.addEventListener("mouseover", function(e) {
                let thisItem = this.getAttribute("id");
                if (thisItem) {
                    let imageItem = (this.childNodes[0].childNodes[0].getAttribute("id"));
                    if (imageItem) {
                    let randomRotation = Math.floor(Math.random() * 200) - 40;
                    (TweenMax.to(`#${imageItem}`, .3, {rotation: randomRotation, ease: Power2.easeIn}));
                    }
                }
            });
        });
        
        listItem.forEach.call(listItem, function(el) {
            el.addEventListener("mouseout", function(e) {
                let thisItem = this.getAttribute("id");
                if (thisItem) {
                    let imageItem = (this.childNodes[0].childNodes[0].getAttribute("id"));
                    if (imageItem) {
                    (TweenMax.to(`#${imageItem}`, 1, { rotation: 0, ease: Elastic.easeOut }));
                    }
                }
            });
        });

        let tweenImg1 = new TweenMax.fromTo('#img1', 3, { y: (-100), rotation: -30, opacity: 0, ease: Elastic.easeIn }, { y: (0), rotation: 0, opacity: 1, ease: Elastic.easeOut });
        let tweenImg2 = new TweenMax.fromTo('#img2', 3, { y: (-100), rotation: -70, opacity: 0, ease: Elastic.easeIn }, { y: (0), rotation: 0, opacity: 1, ease: Elastic.easeOut });
        let tweenImg3 = new TweenMax.fromTo('#img3', 3, { y: (-100), rotation: -20, opacity: 0, ease: Elastic.easeIn }, { y: (0), rotation: 0, opacity: 1, ease: Elastic.easeOut });
        let tweenImg4 = new TweenMax.fromTo('#img4', 3, { y: (-100), rotation: 45, opacity: 0, ease: Elastic.easeIn }, { y: (0), rotation: 0, opacity: 1, ease: Elastic.easeOut });
        let tweenImg5 = new TweenMax.fromTo('#img5', 3, { y: (-100), rotation: 65, opacity: 0, ease: Elastic.easeIn }, { y: (0), rotation: 0, opacity: 1, ease: Elastic.easeOut });
        let tweenImg6 = new TweenMax.fromTo('#img6', 3, { y: (-100), rotation: 90, opacity: 0, ease: Elastic.easeIn }, { y: (0), rotation: 0, opacity: 1, ease: Elastic.easeOut });
        
        indexTimeline.add(tweenImg1, .2).add(tweenImg2, .4).add(tweenImg3, .6).add(tweenImg4, .8).add(tweenImg5, 1).add(tweenImg6, 1.2)
    }, [])

    return (
        <div className={styles.fullPage}>
            <div id="content" className={styles.content}>
                <div className={styles.heading}>What <u>flavor</u> would you like?</div>
                <div className={styles.box}>
                    <div className={styles.row}>
                        <Link id="img1" to={"/order/original"}>
                            <div className={styles.listItem}>
                                <img id="bun1" src={original} alt="original"></img>
                                <h1>Original</h1>
                            </div>
                        </Link>   
                        <Link id="img2" to={"/order/gf"}>
                            <div className={styles.listItem}>
                                <img id="bun2" src={original} alt="original GF"></img>
                                <h1>Original (GF)</h1>
                            </div>
                        </Link>
                        <Link id="img3" to={"/order/blackberry"}>    
                            <div className={styles.listItem}>
                                <img id="bun3" src={blackberry} alt="blackberry"></img>
                                <h1>Blackberry</h1>
                            </div>
                        </Link>
                    </div>
                    <div className={styles.row}>
                        <Link id="img4" to={"/order/caramel-pecan"}>
                            <div className={styles.listItem}>
                                <img id="bun4" src={caramelPecan} alt="caramel-pecan"></img>
                                <h1>Caramel Pecan</h1>
                            </div>
                        </Link>
                        <Link id="img5" to={"/order/pumpkin-spice"}>
                            <div className={styles.listItem}>
                                <img id="bun5" src={pumpkin} alt="pumpkin"></img>
                                <h1>Pumpkin Spice</h1>
                            </div>
                        </Link>
                        <Link id="img6" to={"/order/walnut"}>
                            <div className={styles.listItem}>
                                <img id="bun6" src={walnut} alt="walnut"></img>
                                <h1>Walnut</h1>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;