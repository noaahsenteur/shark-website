import { Container } from "@mui/material"
import TextBlock from "@app/components/text-block"
import FaqItem from "@app/components/faq-item"
import styles from './style.module.scss'

const FaqBlock = () => {
    return (
        <div className={styles.faqBlock}>
            <Container>
                <TextBlock align='left' title='FAQ' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis purus augue, congue nec justo sit amet, feugiat sodales magna. Vestibulum massa enim, maximus nec diam a, tempus condimentum nunc. Donec aliquet risus non neque auctor congue. Proin eu dui et quam sodales elementum id at purus.'/>
                <div className={styles.faqs}>
                    <FaqItem title='What is an NFT ?' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis purus augue, congue nec justo sit amet, feugiat sodales magna. Vestibulum massa enim, maximus nec diam a, tempus condimentum nunc. Donec aliquet risus non neque auctor congue. Proin eu dui et quam sodales elementum id at purus.'/>
                    <FaqItem title='What is an NFT ?' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis purus augue, congue nec justo sit amet, feugiat sodales magna. Vestibulum massa enim, maximus nec diam a, tempus condimentum nunc. Donec aliquet risus non neque auctor congue. Proin eu dui et quam sodales elementum id at purus.'/>
                    <FaqItem title='What is an NFT ?' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis purus augue, congue nec justo sit amet, feugiat sodales magna. Vestibulum massa enim, maximus nec diam a, tempus condimentum nunc. Donec aliquet risus non neque auctor congue. Proin eu dui et quam sodales elementum id at purus.'/>
                    <FaqItem title='What is an NFT ?' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis purus augue, congue nec justo sit amet, feugiat sodales magna. Vestibulum massa enim, maximus nec diam a, tempus condimentum nunc. Donec aliquet risus non neque auctor congue. Proin eu dui et quam sodales elementum id at purus.'/>
                    <FaqItem title='What is an NFT ?' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis purus augue, congue nec justo sit amet, feugiat sodales magna. Vestibulum massa enim, maximus nec diam a, tempus condimentum nunc. Donec aliquet risus non neque auctor congue. Proin eu dui et quam sodales elementum id at purus.'/>
                    <FaqItem title='What is an NFT ?' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis purus augue, congue nec justo sit amet, feugiat sodales magna. Vestibulum massa enim, maximus nec diam a, tempus condimentum nunc. Donec aliquet risus non neque auctor congue. Proin eu dui et quam sodales elementum id at purus.'/>
                    <FaqItem title='What is an NFT ?' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis purus augue, congue nec justo sit amet, feugiat sodales magna. Vestibulum massa enim, maximus nec diam a, tempus condimentum nunc. Donec aliquet risus non neque auctor congue. Proin eu dui et quam sodales elementum id at purus.'/>
                </div>   
            </Container> 
        </div>
    )
}

export default FaqBlock