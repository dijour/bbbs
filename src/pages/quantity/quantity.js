import React, {useState, useEffect} from 'react';
import styles from './quantity.module.scss';
import none from '../../assets/original.svg';
import sum3 from '../../assets/3.svg';
import sum6 from '../../assets/6.svg';
import sum12 from '../../assets/12.svg';
import {TweenMax, Elastic, TimelineMax} from "gsap/TweenMax";

import { Link } from "react-router-dom";


const Quantity = (props) => {
    const [quantity, setQuantity] = useState()
    const [cost, setCost] = useState()
    const [count, setCount] = useState(0)
    const [oldImg, setOldImg] = useState()
    const [newImg, setNewImg] = useState()
    const [popup, setPopup] = useState(false)
    

    let order = {
        "type": props.match.params.type, 
        "glaze": props.match.params.glaze, 
        "quantity": props.match.params.quantity,
        "cost": ""
    }

    useEffect(() => {
        let glazeTimeline = new TimelineMax()
        let tweenImg1 = new TweenMax.fromTo('#img1', 3, { x: (-100), y: (-100), rotation: -30, opacity: 0, ease: Elastic.easeIn }, { x: (0), y: (0), rotation: 0, opacity: 1, ease: Elastic.easeOut });
        let tweenImg2 = new TweenMax.fromTo('#img2', 3, { x: (-100), y: (-100), rotation: -60, opacity: 0, ease: Elastic.easeIn }, {x: (0), y: (0), rotation: 0, opacity: 1, ease: Elastic.easeOut });
        let tweenImg3 = new TweenMax.fromTo('#img3', 3, { x: (100), y: (-100), rotation: 20, opacity: 0, ease: Elastic.easeIn }, { x: (0), y: (0), rotation: 0, opacity: 1, ease: Elastic.easeOut });
        let tweenImg4 = new TweenMax.fromTo('#img4', 3, { x: (100), y: (-100), rotation: 45, opacity: 0, ease: Elastic.easeIn }, { x: (0), y: (0), rotation: 0, opacity: 1, ease: Elastic.easeOut });
        glazeTimeline.add(tweenImg1, .2).add(tweenImg2, .4).add(tweenImg3, .6).add(tweenImg4, .8)
    }, [])

    useEffect(() => {
        order.quantity = quantity;
        order.cost = cost;
    }, [order, quantity, cost])

    const alterQuantity = (e, quantitee, kost) => {
        setOldImg(newImg)
        setNewImg(e.target)
        setQuantity(quantitee)
        setCost(kost)
    }

    useEffect(() => {
        if (oldImg) {
            oldImg.style.border = "none"
        }
        if (newImg) {
            newImg.style.border = "4px dashed orange"
        }
    }, [oldImg, newImg])

    const setCart = (e) => {
        if (!quantity) {
            return
        }
        e.preventDefault();
        let currentCart = localStorage.getItem('cart');
        let newCart;
        if (currentCart !== null) {
            try {
                currentCart = JSON.parse(currentCart)
              } catch (ex) {
                console.error(ex);
              }
            currentCart.push(order);
            newCart = currentCart;
        }
        else {
            newCart = [order];
        }
        localStorage.setItem('cart', JSON.stringify(newCart));
        setCount(count + 1)
    }

    return (
        <div className={styles.fullPage}>
            <div className={styles.content}>
                {count < 1 ?
                <div>
                    <div className={styles.heading}>What <u>quantity</u> would you like?</div>
                    <div className={styles.row}>
                        <div id="img1" className={styles.listItem}>
                            <img src={none} onClick={(e) => alterQuantity(e, 1, 3)} alt="none"></img>
                            <h1 className={styles.count}>1 / $3</h1>
                        </div>
                        <div id="img2" className={styles.listItem}>
                            <img src={sum3} onClick={(e) => alterQuantity(e, 3, 8)} alt="3"></img>
                            <h1 className={styles.count}>3 / $8</h1>
                        </div>
                        <div id="img3" className={styles.listItem}>
                            <img onClick={(e) => alterQuantity(e, 6, 15)} src={sum6} alt="6"></img>
                            <h1 className={styles.count}>6 / $15</h1>
                        </div>
                        <div id="img4" className={styles.listItem}>
                            <img onClick={(e) => alterQuantity(e, 12, 30)} src={sum12} alt="12"></img>
                            <h1 className={styles.count}>12 / $30</h1>
                        </div>
                    </div>
                    <div className={styles.navigationFooter}>
                        <Link to={`/order/${props.match.params.type}/glaze`}>
                            <button>{`${`<-- Back`}`}</button>
                        </Link>
                        <Link onClick={(e) => setCart(e)}>
                            <button className={quantity !== undefined ? styles.active : styles.disabled }>{`${`Add to Bag`}`}</button>
                        </Link>
                    </div>
                </div>
                :
                <div>
                    <div className={styles.heading}>Congrats, you added {count} order to your bag!</div>
                    <div className={styles.padding}></div>
                    <div className={styles.buttonRow}>
                        <Link to={`/order`}>
                            <button>{`${`Start Over`}`}</button>
                        </Link>
                        <Link onClick={(e) => setCart(e)}>
                            <button>{`${`Add More`}`}</button>
                        </Link>
                        <Link to={`/cart`}>
                            <button>{`${`Go to Cart`}`}</button>
                        </Link>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

export default Quantity;