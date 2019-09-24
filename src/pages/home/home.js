import React, {useState, useEffect} from 'react';
import bg from '../../assets/bg.svg'
import styles from './home.module.scss'
import { withRouter, Link } from "react-router-dom";

const Home = () => {
    // const [age, setAge] = useState(19)
    // const [siblingsNum, setSiblingsNum] = 
    //     useState(10)

    // const handleAge = () => setAge(age + 1)
    // const handleSiblingsNum = () => 
    //     setSiblingsNum(siblingsNum + 1)


    return (
        <div>
            <div className={styles.heroText}>
                <h1>Bun Bun Bake Shop</h1>
                <Link to={"/order"}>
                    <button>Order Now!</button>
                </Link>      
            </div>
            <div className={styles.fullPage}>
            </div>
        </div>
        // <img src={bg} alt="background"></img>
        // <div>
        // <p>Today I am {age} Years of Age</p>
        // <p>I have {siblingsNum} siblings</p>

        // <div>
        //     <button onClick={handleAge}>
        //     Get older! 
        //     </button>
        //     <button onClick={handleSiblingsNum}>
        //         More siblings! 
        //     </button>
        // </div>
        // </div>
    )
}

export default Home;