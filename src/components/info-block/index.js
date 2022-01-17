import Carousel from '@app/components/carousel';
import TextBlock from '@app/components/text-block';
import styles from './style.module.scss';

const InfoBlock = () => {
    return (
        <div className={styles.infoBlock}>
            <TextBlock title='Gutter Sharks' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis purus augue, congue nec justo sit amet, feugiat sodales magna. Vestibulum massa enim, maximus nec diam a, tempus condimentum nunc. Donec aliquet risus non neque auctor congue. Proin eu dui et quam sodales elementum id at purus.'/>         
            <Carousel/>
            <Carousel/>
            <Carousel/>
        </div>
    )
}

export default InfoBlock;