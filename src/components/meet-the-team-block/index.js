import { Container } from '@mui/material';
import Avatar from '../../../public/avatars/slide1.jpg';
import styles from './style.module.scss';

const MeetTheTeamBlock = () => {
    return (
        <div className={styles.meetTheTeamBlock}>
            <Container>
                <div className={styles.header}>
                    <div className='title'>
                        Meet the team
                    </div>
                </div>
                <div className={styles.members}>
                    <div className={styles.member}>
                        <div className={styles.image}>
                            <img src={Avatar.src}/>
                        </div>
                        <div className={styles.role}>the developer</div>
                        <div className={`title small ${styles.title}`}>Gigtep</div>
                        <div className={styles.description}>lalalalala</div>
                    </div>
                    <div className={styles.member}>
                        <div className={styles.image}>
                            <img src={Avatar.src}/>
                        </div>
                        <div className={styles.role}>the developer</div>
                        <div className={`title small ${styles.title}`}>Gigtep</div>
                        <div className={styles.description}>lalalalala</div>
                    </div>
                    <div className={styles.member}>
                        <div className={styles.image}>
                            <img src={Avatar.src}/>
                        </div>
                        <div className={styles.role}>the developer</div>
                        <div className={`title small ${styles.title}`}>Gigtep</div>
                        <div className={styles.description}>lalalalala</div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default MeetTheTeamBlock;