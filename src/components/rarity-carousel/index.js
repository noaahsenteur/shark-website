import styles from './style.module.scss';
import Avatar from '../../../public/avatars/slide1.jpg';

const RarityCarousel = () => {

    return (
        <div className={styles.rarity}>
                    <div className={styles.item}>
                        <div className={styles.image}>
                            <img src={Avatar.src}/>
                        </div>
                        <div className={styles.chances}>
                            66% chances to drop
                        </div>
                        <div className={`title small ${styles.title}`}>
                            Old Shark
                        </div>
                        <div className={styles.text}>
                            Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.image}>
                            <img src={Avatar.src}/>
                        </div>
                        <div className={styles.chances}>
                            66% chances to drop
                        </div>
                        <div className={`title small ${styles.title}`}>
                            Old Shark
                        </div>
                        <div className={styles.text}>
                            Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.image}>
                            <img src={Avatar.src}/>
                        </div>
                        <div className={styles.chances}>
                            66% chances to drop
                        </div>
                        <div className={`title small ${styles.title}`}>
                            Old Shark
                        </div>
                        <div className={styles.text}>
                            Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.image}>
                            <img src={Avatar.src}/>
                        </div>
                        <div className={styles.chances}>
                            66% chances to drop
                        </div>
                        <div className={`title small ${styles.title}`}>
                            Old Shark
                        </div>
                        <div className={styles.text}>
                            Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.image}>
                            <img src={Avatar.src}/>
                        </div>
                        <div className={styles.chances}>
                            66% chances to drop
                        </div>
                        <div className={`title small ${styles.title}`}>
                            Old Shark
                        </div>
                        <div className={styles.text}>
                            Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,
                        </div>
                    </div>
                    
        </div>
    )
}

export default RarityCarousel;