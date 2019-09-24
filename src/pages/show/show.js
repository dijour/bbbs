import React, {useState, useEffect} from 'react';
import styles from './show.module.scss';
import walnut from '../../assets/walnut.svg'
import blackberry from '../../assets/blackberry.svg'
import caramelPecan from '../../assets/caramel-pecan.svg'
import original from '../../assets/original.svg'
import pumpkin from '../../assets/pumpkin-spice.svg'

import { Link } from "react-router-dom";


const Show = (props) => {
    // console.log(props.match.params.type)

    let map = {
        "blackberry" : blackberry,
        "walnut" : walnut,
        "caramel-pecan" : caramelPecan,
        "original" : original,
        "gf" : original,
        "pumpkin-spice" : pumpkin
    }

    let image = map[props.match.params.type]

    return (
        <div className={styles.fullPage}>
            <div className={styles.content}>
                <div className={styles.bunDetails}>
                    <div className={styles.listItem}>
                        <img src={image} alt={`${props.match.params.type}`}></img>
                        <h1>{props.match.params.type}</h1>
                    </div>
                    <div className={styles.bunText}>
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
                    <Link to={"/order"}>
                        <button>{`${`<-- Back`}`}</button>
                    </Link>
                    <Link to={`/order/${props.match.params.type}/glaze`}>
                        <button>{`${`Next -->`}`}</button>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Show;