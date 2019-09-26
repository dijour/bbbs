import React, {useState, useEffect} from 'react';
import styles from '../index/index.module.scss';
import glazeStyles from './glaze.module.scss';
import none from '../../assets/original.svg';
import sugar from '../../assets/sugar-glaze.svg';
import vanilla from '../../assets/vanilla-glaze.svg';
import chocolate from '../../assets/chocolate-glaze.svg';
import {TweenMax, Elastic, TimelineMax} from "gsap/TweenMax";

import { Link } from "react-router-dom";


const Glaze = (props) => {

    useEffect(() => {
        let glazeTimeline = new TimelineMax()
        let tweenImg1 = new TweenMax.fromTo('#img1', 3, { y: (-100), rotation: -30, opacity: 0, ease: Elastic.easeIn }, { y: (0), rotation: 0, opacity: 1, ease: Elastic.easeOut });
        let tweenImg2 = new TweenMax.fromTo('#img2', 3, { y: (-100), rotation: -50, opacity: 0, ease: Elastic.easeIn }, { y: (0), rotation: 0, opacity: 1, ease: Elastic.easeOut });
        let tweenImg3 = new TweenMax.fromTo('#img3', 3, { y: (-100), rotation: 30, opacity: 0, ease: Elastic.easeIn }, { y: (0), rotation: 0, opacity: 1, ease: Elastic.easeOut });
        let tweenImg4 = new TweenMax.fromTo('#img4', 3, { y: (-100), rotation: 45, opacity: 0, ease: Elastic.easeIn }, { y: (0), rotation: 0, opacity: 1, ease: Elastic.easeOut });
        glazeTimeline.add(tweenImg1, .2).add(tweenImg2, .4).add(tweenImg3, .6).add(tweenImg4, .8)
    }, [])


    return (
        <div className={styles.fullPage}>
            <div className={styles.content}>
                <div className={styles.heading}>What <u>glaze</u> would you like?</div>
                <div className={glazeStyles.row}>
                    <Link id="img1" to={`/order/${props.match.params.type}/none/quantity`}>
                        <div className={glazeStyles.listItem}>
                            <img src={none} alt="none"></img>
                            <h1>None</h1>
                        </div>
                    </Link>   
                    <Link id="img2" to={`/order/${props.match.params.type}/vanilla/quantity`}>
                        <div className={glazeStyles.listItem}>
                        <img src={vanilla} alt="vanilla"></img>
                            <h1>Vanilla Milk</h1>
                        </div>
                    </Link>
                    <Link id="img3" to={`/order/${props.match.params.type}/sugar/quantity`}>
                        <div className={glazeStyles.listItem}>
                        <img src={sugar} alt="sugar-milk"></img>
                            <h1>Sugar Milk</h1>
                        </div>
                    </Link>
                    <Link id="img4" to={`/order/${props.match.params.type}/chocolate/quantity`}>
                        <div className={glazeStyles.listItem}>
                        <img src={chocolate} alt="chocolate"></img>
                            <h1>Double Chocolate</h1>
                        </div>
                    </Link>
                </div>
                <div className={glazeStyles.navigationFooter}>
                    <Link to={`/order/${props.match.params.type}`}>
                        <button>{`${`<-- Back`}`}</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Glaze;