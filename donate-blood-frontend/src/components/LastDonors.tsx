
import styles from '../styles/components/LastDonors.module.css'

export function LastDonors() {
  return (
  <div className={styles.lastDonorsContainer}>
    
    
    <h2>Últimos <span>doadores</span></h2>

    <section className={styles.donors}>
      <div className={styles.donor}>
        <div className={styles.blood}>AB+</div>
        <p>Darlei Schmegel</p>
      </div>
      <div className={styles.donor}>
        <div className={styles.blood}>B+</div>
        <p>Darlene Schmegel</p>
      </div>
      <div className={styles.donor}>
        <div className={styles.blood}>A+</div>
        <p>Udi Schmegel</p>
      </div>
      <div className={styles.donor}>
        <div className={styles.blood}>O+</div>
        <p>Eldina Schmegel</p>
      </div>



      <div className={styles.donor}>
        <div className={styles.blood}>B+</div>
        <p>Darlene Schmegel</p>
      </div>
      <div className={styles.donor}>
        <div className={styles.blood}>O+</div>
        <p>Ana Paula</p>
      </div>

      <div className={styles.donor}>
        <div className={styles.blood}>B+</div>
        <p>Darlene Schmegel</p>
      </div>
      <div className={styles.donor}>
        <div className={styles.blood}>A+</div>
        <p>Udi Schmegel</p>
      </div>
      <div className={styles.donor}>
        <div className={styles.blood}>O+</div>
        <p>Eldina Schmegel</p>
      </div>
      <div className={styles.donor}>
        <div className={styles.blood}>O+</div>
        <p>Ana Paula</p>
      </div>
    </section>

  </div>
  )
}