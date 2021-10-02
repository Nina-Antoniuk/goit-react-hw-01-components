import PropTypes from 'prop-types';
import styles from '../Statistics/Statistics.module.css';

export function Statistics({ title, stats }) {
  return <section className={styles.statistics}>
           {title && <h2 className={styles.title}>Upload stats</h2>}
         
          <ul className={styles.statList}>
            {stats.map(data => {             
              return <li className={styles.item} key={data.id} style={{backgroundColor: `rgb(${color()})`}}>
                <span className={styles.label}>{data.label}</span>
                <span className={styles.percentage}>{data.percentage}%</span>
             </li>})}
           </ul>
         </section>
}



function color() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `${r}, ${g}, ${b}`
}


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array
}
