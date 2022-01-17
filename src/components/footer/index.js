import { Container } from '@mui/material';
import Image from 'next/image';
import styles from './style.module.scss';

const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.footer}>
                    <div className={styles.logo}>
                        <Image
                            src='/logo.png'
                            layout='fill'
                        />
                    </div>
                    <div className={styles.socials}>
                                <div className={styles.social} >
                                    <Image
                                        src='/discord.svg'
                                        layout='fill'
                                    />
                                </div>
                                <div className={styles.social} >
                                    <Image
                                        src='/opensea.svg'
                                        layout='fill'
                                    />
                                </div>
                                <div className={styles.social} >
                                    <Image
                                        src='/twitter.svg'
                                        layout='fill'
                                    />
                                </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer;