import React, {useState, useEffect} from 'react';
import styles from './quantity.module.scss';
import glazeStyles from '../glaze/glaze.module.scss';
import none from '../../assets/original.svg';
import sum3 from '../../assets/3.svg';
import sum6 from '../../assets/6.svg';
import sum12 from '../../assets/12.svg';

import { Link } from "react-router-dom";


const Quantity = (props) => {
    return (
        <div className={styles.fullPage}>
            <div className={styles.content}>
                <div className={styles.heading}>What <u>quantity</u> would you like?</div>
                <div className={styles.row}>
                    <Link to={`/order/${props.match.params.type}/${props.match.params.glaze}/1`}>
                        <div className={styles.listItem}>
                            <img src={none} alt="none"></img>
                            <h1 className={styles.count}>1</h1>
                            <h1 className={styles.price}>$3</h1>
                        </div>
                    </Link>   
                    <Link to={`/order/${props.match.params.type}/${props.match.params.glaze}/3`}>
                        <div className={styles.listItem}>
                        <img src={sum3} alt="3"></img>
                            <h1 className={styles.count}>3</h1>
                            <h1 className={styles.price}>$8</h1>                        </div>
                    </Link>
                    <Link to={`/order/${props.match.params.type}/${props.match.params.glaze}/6`}>
                        <div className={styles.listItem}>
                        <img src={sum6} alt="6"></img>
                            <h1 className={styles.count}>6</h1>
                            <h1 className={styles.price}>$15</h1>  
                        </div>
                    </Link>
                    <Link to={`/order/${props.match.params.type}/${props.match.params.glaze}/12`}>
                        <div className={styles.listItem}>
                        <img src={sum12} alt="12"></img>
                            <h1 className={styles.count}>12</h1>
                            <h1 className={styles.price}>$30</h1>  
                        </div>
                    </Link>
                </div>
                <div className={styles.navigationFooter}>
                    <Link to={`/order/${props.match.params.type}/glaze`}>
                        <button>{`${`<-- Back`}`}</button>
                    </Link>
                    <Link to={`/order/${props.match.params.type}/glaze`}>
                        <button>{`${`Add to Bag`}`}</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Quantity;