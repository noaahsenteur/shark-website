import Container from '@mui/material/Container';
import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.scss';

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.navigation}>
                    <div className={styles.logo}>
                        <Image
                            src='/logo.png'
                            layout='fill'
                        />
                    </div>
                    <div className={styles.navigationItems}>
                        <Link href='#'><a className={styles.navigationItem}>Welcome</a></Link>
                        <Link href='#'><a className={styles.navigationItem}>Goals</a></Link>
                        <Link href='#'><a className={styles.navigationItem}>Rarity</a></Link>
                        <Link href='#'><a className={styles.navigationItem}>FAQ</a></Link>
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

export default Header