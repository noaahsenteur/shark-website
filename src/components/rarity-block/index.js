import { Container } from "@mui/material";
import Image from 'next/image';
import RarityCarousel from "../rarity-carousel";
import styles from './style.module.scss';


const RarityBlock = () => {
    return(
        <div className={styles.rarityBlock}>
            <Container>
                <div className={styles.header}>
                    <div className={styles.textBlock}>
                        <div className='title'>
                            Rarity
                        </div>
                        <div class='body'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis purus augue, congue nec justo sit amet, feugiat sodales magna. Vestibulum massa enim, maximus nec diam a, tempus condimentum nunc. Donec aliquet risus non neque auctor congue. Proin eu dui et quam sodales elementum id at purus.'
                        </div>
                    </div>
                    <div className={styles.imageBlock}>
                        <div className={styles.image}>
                            <Image src='/img-ghost.png' layout='fill'/>
                        </div>
                    </div>
                </div>
                <RarityCarousel/>
            </Container>
        </div>
    )
}

export default RarityBlock;