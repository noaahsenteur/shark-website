import { Container } from "@mui/material"
import { style } from "@mui/system"
import TextBlock from "../text-block"
import styles from './style.module.scss'

const GoalsBlock = () => {
    return (
        <div className={styles.goalsBlock}>
          <Container>
            <TextBlock title='The goals' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis purus augue, congue nec justo sit amet, feugiat sodales magna. Vestibulum massa enim, maximus nec diam a, tempus condimentum nunc. Donec aliquet risus non neque auctor congue. Proin eu dui et quam sodales elementum id at purus.' />
            <div className={styles.goals}>
              <div className={styles.goal}>
                <div className={styles.goalTitle}>
                  25%
                </div>
                <div className={styles.goalContent}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis purus augue, congue nec justo sit amet, feugiat sodales magna. Vestibulum massa enim, maximus nec diam a, tempus condimentum nunc. Donec aliquet risus non neque auctor congue. Proin eu dui et quam sodales elementum id at purus.' 
                </div>
              </div>
              <div className={styles.goal}>
                <div className={styles.goalTitle}>
                  25%
                </div>
                <div className={styles.goalContent}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis purus augue, congue nec justo sit amet, feugiat sodales magna. Vestibulum massa enim, maximus nec diam a, tempus condimentum nunc. Donec aliquet risus non neque auctor congue. Proin eu dui et quam sodales elementum id at purus.' 
                </div>
              </div>
              <div className={styles.goal}>
                <div className={styles.goalTitle}>
                  25%
                </div>
                <div className={styles.goalContent}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis purus augue, congue nec justo sit amet, feugiat sodales magna. Vestibulum massa enim, maximus nec diam a, tempus condimentum nunc. Donec aliquet risus non neque auctor congue. Proin eu dui et quam sodales elementum id at purus.' 
                </div>
              </div>
              <div className={styles.goal}>
                <div className={styles.goalTitle}>
                  25%
                </div>
                <div className={styles.goalContent}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis purus augue, congue nec justo sit amet, feugiat sodales magna. Vestibulum massa enim, maximus nec diam a, tempus condimentum nunc. Donec aliquet risus non neque auctor congue. Proin eu dui et quam sodales elementum id at purus.' 
                </div>
              </div>
            </div>
          </Container>  
        </div>
    )
}

export default GoalsBlock