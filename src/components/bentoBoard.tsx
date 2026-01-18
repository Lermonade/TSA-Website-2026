import React from 'react';
import styles from './bentoBoard.module.css';
import foodBankExt from '../assets/images/foodbankExt.webp';
import library from '../assets/images/library.png';
import stevensonPark from '../assets/images/stevensonPark.webp';
import pool from '../assets/images/pool.png';
import shepherdsNook from '../assets/images/shepherdsNook.png';

const bentoBoard: React.FC = () => {
return (
<>
<h1 className={styles.bentoBoardTitle}>Gallery</h1>
    <div className={styles.bentoBoardContainer}>
        <div className={styles.bentoLarge}>
        <img src={library} alt="Friendswood Library" className={styles.bentoImage}/>
        </div>
        <div className={styles.bentoSmall}>
        <img src={stevensonPark} alt="Stevenson Park" className={styles.bentoImage}/>
        </div>
        <div className={styles.bentoLarge}>
        <img src={pool} alt="Friendswood City Pool" className={styles.bentoImage}/>
        </div>
        <div className={styles.bentoSmall}>
        <img src={shepherdsNook} alt="Shepherd's Nook" className={styles.bentoImage}/>
        </div>
        <div className={styles.bentoSmall}>
        <img src={foodBankExt} alt="Houston Food Bank Exterior" className={styles.bentoImage}/>
        </div> 
        <div className={styles.bentoLarge}>
        <img src={library} alt="Friendswood Library" className={styles.bentoImage}/>
        </div>
        <div className={styles.bentoSmall}>
        <img src={stevensonPark} alt="Stevenson Park" className={styles.bentoImage}/>
        </div>
        <div className={styles.bentoSmall}>
        <img src={foodBankExt} alt="Houston Food Bank Exterior" className={styles.bentoImage}/>
        </div>
        <div className={styles.bentoLarge}>
        <img src={stevensonPark} alt="Stevenson Park" className={styles.bentoImage}/>
        </div>
        <div className={styles.bentoSmall}>
        <img src={pool} alt="Friendswood City Pool" className={styles.bentoImage}/>
        </div>
        <div className={styles.bentoSmall}>
        <img src={foodBankExt} alt="Houston Food Bank Exterior" className={styles.bentoImage}/>
        </div>
    </div>
</>
);
}

export default bentoBoard;