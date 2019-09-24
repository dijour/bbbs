import React, {useState, useEffect} from 'react';
import styles from '../index/index.module.scss';
import showStyles from '../show/show.module.scss';
import none from '../../assets/original.svg';
import sugar from '../../assets/sugar-glaze.svg';
import vanilla from '../../assets/vanilla-glaze.svg';
import chocolate from '../../assets/chocolate-glaze.svg';

import { Link } from "react-router-dom";


const Glaze = (props) => {
    return (
        <div className={styles.fullPage}>
            <div className="content">
                <div className={styles.heading}>What <u>glaze</u> would you like?</div>
                <div className={styles.row}>
                    <Link to={`/order/${props.match.params.type}/none`}>
                        <div className={styles.listItem}>
                            <img src={none} alt="none"></img>
                            <h1>None</h1>
                        </div>
                    </Link>   
                    <Link to={`/order/${props.match.params.type}/vanilla`}>
                        <div className={styles.listItem}>
                        <img src={vanilla} alt="vanilla"></img>
                            <h1>Vanilla Milk</h1>
                        </div>
                    </Link>
                    <Link to={`/order/${props.match.params.type}/sugar`}>
                        <div className={styles.listItem}>
                        <img src={sugar} alt="sugar-milk"></img>
                            <h1>Sugar Milk</h1>
                        </div>
                    </Link>
                    <Link to={`/order/${props.match.params.type}/chocolate`}>
                        <div className={styles.listItem}>
                        <img src={chocolate} alt="chocolate"></img>
                            <h1>Double Chocolate</h1>
                        </div>
                    </Link>
                </div>
                <div className={showStyles.navigationFooter}>
                    <Link to={`/order/${props.match.params.type}`}>
                        <button>{`${`<-- Back`}`}</button>
                    </Link>
                    {/* <Link to={`/order/${props.match.params.type}/glaze`}>
                        <button>{`${`Next -->`}`}</button>
                    </Link> */}
                </div>
            </div>
        </div>
    )
}

export default Glaze;