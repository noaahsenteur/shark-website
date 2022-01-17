import Container from '@mui/material/Container';
import Link from 'next/link';
import Image from 'next/image';
import styles from './style.module.scss';

const MintBlock = () => {
    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.mintblock}>
                    <Link href='#'>
                        <a className={styles.button}>Buy on opensea<span className={styles.icon}><Image width='32px' height='32px' src='/opensea.svg'/></span></a>
                    </Link>
                    <div className={styles.content}>
                        0 / 3,3333 MINTED
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default MintBlock