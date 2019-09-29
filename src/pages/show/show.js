import React, { useEffect} from 'react';
import styles from './show.module.scss';
import walnut from '../../assets/walnut.svg'
import blackberry from '../../assets/blackberry.svg'
import caramelPecan from '../../assets/caramel-pecan.svg'
import original from '../../assets/original.svg'
import pumpkin from '../../assets/pumpkin-spice.svg'

import { Link } from "react-router-dom";
import {TweenMax, Elastic, TimelineMax} from "gsap/TweenMax";


const Show = (props) => {
    // create dictionary to map strings to their image src counterparts
    let map = {
        "blackberry" : blackberry,
        "walnut" : walnut,
        "caramel-pecan" : caramelPecan,
        "original" : original,
        "gf" : original,
        "pumpkin-spice" : pumpkin
    }

    let image = map[props.match.params.type]

    //animate in all images
    useEffect(() => {
        // Setup animations
        let showTimeline = new TimelineMax();
        let tweenImg = new TweenMax.fromTo('#bun', 0.3, { transform: 'translateY(40px)', opacity: 0 }, { transform: 'translateY(0)', opacity: 1 });
        let tweenText = new TweenMax.fromTo('#description', 0.3, { transform: 'translateY(40px)', opacity: 0 }, { transform: 'translateY(0)', opacity: 1 });        
        let tweenBack = new TweenMax.fromTo('#back', .7, { transform: 'translateX(60px)', opacity: 0 }, { transform: 'translateY(0)', ease: Elastic.easeOut, opacity: 1 });        
        let tweenNext = new TweenMax.fromTo('#next', .7, { transform: 'translateX(-60px)', opacity: 0 }, { transform: 'translateY(0)', ease: Elastic.easeOut, opacity: 1 });        
        showTimeline.add(tweenImg, 0.3).add(tweenText, .7).add(tweenBack, 1).add(tweenNext, 1)
	}, [])

    return (
        <div className={styles.fullPage}>
            <div className={styles.content}>
                <div className={styles.bunDetails}>
                    <div id="bun" className={styles.listItem}>
                        <img src={image} alt={`${props.match.params.type}`}></img>
                        <h1>{props.match.params.type}</h1>
                    </div>
                    <div id="description" className={styles.bunText}>
                        <h1>Price: $3 per bun</h1>
                        <h2>This is the best {props.match.params.type} bun you have ever tried. Hands down.</h2>
                        <h3>Ingredients: </h3>
                        <ul>
                            <li>Sugar</li>
                            <li>Sugar</li>
                            <li>Sugar</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.navigationFooter}>
                    <Link id="back" to={"/order"}>
                        <button>{`${`<-- Back`}`}</button>
                    </Link>
                    <Link id="next" to={`/order/${props.match.params.type}/glaze`}>
                        <button>{`${`Glaze it up!`}`}</button>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Show;