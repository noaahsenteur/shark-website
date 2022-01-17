import cn from 'clsx';
import styles from './style.module.scss';



const TextBlock = ({content, title, align}) => {

    const textClassName = cn(styles.textblock,{
        [styles.alignTextRight]: align === 'right',
        [styles.alignTextLeft]: align === 'left'
    })

    return (
        <div className={textClassName}>
            <div className={styles.content}>
                <div className='title'>{ title }</div>
                <div className={styles.paragraph}>{ content }</div>
            </div>
        </div>
    )
}

export default TextBlock