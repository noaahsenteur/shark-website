import { useState } from 'react';
import styles from './style.module.scss';

const FaqItem = ({title, content}) => {

    const [open, setOpen] = useState(false);

    return (
        <div className={styles.faq}>
           <div onClick={() => setOpen(!open)} className={styles.header}>
               <div className={styles.title}>{ title }</div>
               <div className={styles.button}>open</div>
            </div>
           {open && <div className={styles.content}>{content}</div>}
        </div>
    )
}

export default FaqItem;