import Footer from './components/footer'
import Navbar from './components/navbar'
import TypingText from './components/typingText'
import Calendar from './components/calendar'
import './global.css'
import foodBank from './assets/images/foodbank.webp'
import heroBG from './assets/images/heroBG2.png'
import foodBankExt from './assets/images/foodbankExt.webp'
import upRightArrow from './assets/images/upRightArrow.png'
import searchIcon from './assets/images/searchIcon.png'
import library from './assets/images/library.jpg';
import styles from './Home.module.css'

function Home() {
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
              <h1 className={styles.title}>F<span className={styles.titleKerning}>r</span>iend<span className={styles.titleKerning2}>s</span>wood, TX</h1>
              <h2 className={`interSubtitle ${styles.subtitle}`}>Community Resource Hub</h2>
              <div className={styles.searchBar}>
                <div className={styles.searchBarText}>
                  <p className={styles.searchForText}>Search for</p>
                  <TypingText />
                </div>
                <button className={styles.searchButton}><img src={searchIcon} alt="Search" className={styles.searchButtonImage}/></button>
              </div>
            </div>
          </section>
          
          <section className={styles.description}>
            <img 
              src={foodBank} 
              alt="Houston Food Bank" 
              className={styles.foodBankImg} 
            />
            <h1 className={styles.descriptionText}>Here at Friendswood's Community Resource Hub, we are dedicated to providing our community with the resources and support needed to thrive.</h1>
          </section>

          <section className={styles.spotlight}>
            <h1 className={styles.spotlightTitle}>Community Spotlight</h1>
            <div className={styles.projectGrid}>
              <div className={styles.projectCard}>
                <img 
                  src={library}
                  alt="Friendswood Library"
                  className={styles.cardImage}
                />
                <div className={styles.cardHeaderGrid}>
                  <h2 className={styles.cardHeader}>Friendswood Library</h2>
                  <button className={styles.cardButton}><img src={upRightArrow} alt="Link" className={styles.cardButtonImage}/></button>
                </div>
                <div className={styles.cardTagGrid}>
                  <h3 className={styles.cardTag}>Education</h3>
                  <h3 className={styles.cardTag}>Leisure</h3>
                  <h3 className={styles.cardTag}>Family</h3>
                </div>
              </div>

              <div className={styles.projectCard}>
                <img 
                  src={library}
                  alt="Friendswood Library"
                  className={styles.cardImage}
                />
                <div className={styles.cardHeaderGrid}>
                  <h2 className={styles.cardHeader}>Friendswood Library</h2>
                  <button className={styles.cardButton}><img src={upRightArrow} alt="Link" className={styles.cardButtonImage}/></button>
                </div>
                <div className={styles.cardTagGrid}>
                  <h3 className={styles.cardTag}>Education</h3>
                  <h3 className={styles.cardTag}>Leisure</h3>
                  <h3 className={styles.cardTag}>Family</h3>
                </div>
              </div>

              <div className={styles.projectCard}>
                <img 
                  src={library}
                  alt="Friendswood Library"
                  className={styles.cardImage}
                />
                <div className={styles.cardHeaderGrid}>
                  <h2 className={styles.cardHeader}>Friendswood Library</h2>
                  <button className={styles.cardButton}><img src={upRightArrow} alt="Link" className={styles.cardButtonImage}/></button>
                </div>
                <div className={styles.cardTagGrid}>
                  <h3 className={styles.cardTag}>Education</h3>
                  <h3 className={styles.cardTag}>Leisure</h3>
                  <h3 className={styles.cardTag}>Family</h3>
                </div>
              </div>

              <div className={styles.projectCard}>
                <img 
                  src={library}
                  alt="Friendswood Library"
                  className={styles.cardImage}
                />
                <div className={styles.cardHeaderGrid}>
                  <h2 className={styles.cardHeader}>Friendswood Library</h2>
                  <button className={styles.cardButton}><img src={upRightArrow} alt="Link" className={styles.cardButtonImage}/></button>
                </div>
                <div className={styles.cardTagGrid}>
                  <h3 className={styles.cardTag}>Education</h3>
                  <h3 className={styles.cardTag}>Leisure</h3>
                  <h3 className={styles.cardTag}>Family</h3>
                </div>
              </div>

              <div className={styles.projectCard}>
                <img 
                  src={library}
                  alt="Friendswood Library"
                  className={styles.cardImage}
                />
                <div className={styles.cardHeaderGrid}>
                  <h2 className={styles.cardHeader}>Friendswood Library</h2>
                  <button className={styles.cardButton}><img src={upRightArrow} alt="Link" className={styles.cardButtonImage}/></button>
                </div>
                <div className={styles.cardTagGrid}>
                  <h3 className={styles.cardTag}>Education</h3>
                  <h3 className={styles.cardTag}>Leisure</h3>
                  <h3 className={styles.cardTag}>Family</h3>
                </div>
              </div>

              <div className={styles.projectCard}>
                <img 
                  src={library}
                  alt="Friendswood Library"
                  className={styles.cardImage}
                />
                <div className={styles.cardHeaderGrid}>
                  <h2 className={styles.cardHeader}>Friendswood Library</h2>
                  <button className={styles.cardButton}><img src={upRightArrow} alt="Link" className={styles.cardButtonImage}/></button>
                </div>
                <div className={styles.cardTagGrid}>
                  <h3 className={styles.cardTag}>Education</h3>
                  <h3 className={styles.cardTag}>Leisure</h3>
                  <h3 className={styles.cardTag}>Family</h3>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.calendar}>
            <Calendar />
          </section>
        </main>

        <Footer />
      </body>
    </>
  )
}

export default Home
