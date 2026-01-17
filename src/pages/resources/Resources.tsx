import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import SearchBar from '../../components/searchBar'
import '../../global.css'
import styles from './Resources.module.css'

import heroBG from '../../assets/images/heroBG2.png'

function Resources() {
  return (
    <>
      <body>
        <Navbar />
        
        <main className={styles.main}>
          <section className={styles.hero}>
            <img 
              src={heroBG} 
              alt="Background Image"
              className={styles.heroBG}
            />

            <div className={styles.content}>
              <h1 className={styles.title}>Community Resources</h1>
              <h2 className={`interSubtitle ${styles.subtitle}`}>Search for local community resources and organizations.</h2>
            </div>
          </section>

          <section className={styles.searchHeader}>
            <div className={styles.searchBox}>
              <SearchBar />
            </div>
          </section>

          <section className={styles.resourceList}>
            <div className={styles.itemGrid}>
              <div className={styles.gridItem}></div>
              <div className={styles.gridItem}></div>
              <div className={styles.gridItem}></div>
              <div className={styles.gridItem}></div>
              <div className={styles.gridItem}></div>
              <div className={styles.gridItem}></div>
              <div className={styles.gridItem}></div>
              <div className={styles.gridItem}></div>
              <div className={styles.gridItem}></div>
              <div className={styles.gridItem}></div>
              <div className={styles.gridItem}></div>
            </div>
          </section>

        </main>

        <Footer />
      </body>
    </>
  )
}

export default Resources;
