import React, {useState, useEffect} from 'react';
import styles from './index.module.scss';
import walnut from '../../assets/walnut.svg'
import blackberry from '../../assets/blackberry.svg'
import caramelPecan from '../../assets/caramel-pecan.svg'
import original from '../../assets/original.svg'
import pumpkin from '../../assets/pumpkin-spice.svg'

import { Link } from "react-router-dom";


const Index = () => {
    return (
        <div className={styles.fullPage}>
            <div className="content">
                <div className={styles.heading}>What <u>flavor</u> would you like?</div>
                <div className={styles.row}>
                    <Link to={"/order/original"}>
                        <div className={styles.listItem}>
                            <img src={original} alt="original"></img>
                            <h1>Original</h1>
                        </div>
                    </Link>   
                    <Link to={"/order/gf"}>
                        <div className={styles.listItem}>
                        <img src={original} alt="original GF"></img>
                            <h1>Original (GF)</h1>
                        </div>
                    </Link>
                    <Link to={"/order/blackberry"}>    
                        <div className={styles.listItem}>
                        <img src={blackberry} alt="blackberry"></img>
                            <h1>Blackberry</h1>
                        </div>
                    </Link>
                </div>
                <div className={styles.row}>
                    <Link to={"/order/caramel-pecan"}>
                        <div className={styles.listItem}>
                            <img src={caramelPecan} alt="caramel-pecan"></img>
                            <h1>Caramel Pecan</h1>
                        </div>
                    </Link>
                    <Link to={"/order/pumpkin-spice"}>
                        <div className={styles.listItem}>
                            <img src={pumpkin} alt="pumpkin"></img>
                            <h1>Pumpkin Spice</h1>
                        </div>
                    </Link>
                    <Link to={"/order/walnut"}>
                        <div className={styles.listItem}>
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