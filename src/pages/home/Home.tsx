import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import SearchBar from '../../components/searchBar'
import MiniCalendar from '../../components/miniCalendar'
import FAQ from '../../components/faq'
import BentoBoard from '../../components/bentoBoard'
import '../../global.css'
import foodBank from '../../assets/images/foodbank.webp'
import heroBG from '../../assets/images/heroBG2.png'
import foodBankExt from '../../assets/images/foodbankExt.webp'
import library from '../../assets/images/library.png';
import stevensonPark from '../../assets/images/stevensonPark.webp';
import pool from '../../assets/images/pool.png';
import shepherdsNook from '../../assets/images/shepherdsNook.png';
import wrench from '../../assets/images/wrench.png'
import styles from './Home.module.css'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

function Home() {
  return (
    <>
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
              < SearchBar />
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
                  <button className={styles.cardButton}><ArrowUpRight size={32} strokeWidth={2}/></button>
                </div>
                <div className={styles.cardTagGrid}>
                  <h3 className={styles.cardTag}>Education</h3>
                  <h3 className={styles.cardTag}>Leisure</h3>
                  <h3 className={styles.cardTag}>Family</h3>
                </div>
              </div>

              <div className={styles.projectCard}>
                <img 
                  src={stevensonPark}
                  alt="Stevenson Park"
                  className={styles.cardImage}
                />
                <div className={styles.cardHeaderGrid}>
                  <h2 className={styles.cardHeader}>Stevenson Park</h2>
                  <button className={styles.cardButton}><ArrowUpRight size={32} strokeWidth={2}/></button>
                </div>
                <div className={styles.cardTagGrid}>
                  <h3 className={styles.cardTag}>Fitness</h3>
                  <h3 className={styles.cardTag}>Leisure</h3>
                  <h3 className={styles.cardTag}>Family</h3>
                </div>
              </div>

              <div className={styles.projectCard}>
                <img 
                  src={pool}
                  alt="Friendswood City Pool"
                  className={styles.cardImage}
                />
                <div className={styles.cardHeaderGrid}>
                  <h2 className={styles.cardHeader}>Friendswood City Pool</h2>
                  <button className={styles.cardButton}><ArrowUpRight size={32} strokeWidth={2}/></button>
                </div>
                <div className={styles.cardTagGrid}>
                  <h3 className={styles.cardTag}>Education</h3>
                  <h3 className={styles.cardTag}>Leisure</h3>
                  <h3 className={styles.cardTag}>Family</h3>
                </div>
              </div>

              <div className={styles.projectCard}>
                <img 
                  src={foodBankExt}
                  alt="Houston Food Bank"
                  className={styles.cardImage}
                />
                <div className={styles.cardHeaderGrid}>
                  <h2 className={styles.cardHeader}>Houston Food Bank</h2>
                  <button className={styles.cardButton}><ArrowUpRight size={32} strokeWidth={2}/></button>
                </div>
                <div className={styles.cardTagGrid}>
                  <h3 className={styles.cardTag}>Volunteer</h3>
                  <h3 className={styles.cardTag}>Nonprofit</h3>
                  <h3 className={styles.cardTag}>Service</h3>
                </div>
              </div>

              <div className={styles.projectCard}>
                <img 
                  src={shepherdsNook}
                  alt="ShepherdsNook"
                  className={styles.cardImage}
                />
                <div className={styles.cardHeaderGrid}>
                  <h2 className={styles.cardHeader}>Shepherd's Nook</h2>
                  <button className={styles.cardButton}><ArrowUpRight size={32} strokeWidth={2}/></button>
                </div>
                <div className={styles.cardTagGrid}>
                  <h3 className={styles.cardTag}>Nonprofit</h3>
                  <h3 className={styles.cardTag}>Donation</h3>
                  <h3 className={styles.cardTag}>Service</h3>
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
                  <button className={styles.cardButton}><ArrowUpRight size={32} strokeWidth={2}/></button>
                </div>
                <div className={styles.cardTagGrid}>
                  <h3 className={styles.cardTag}>Education</h3>
                  <h3 className={styles.cardTag}>Leisure</h3>
                  <h3 className={styles.cardTag}>Family</h3>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.events}>
            <div className={styles.eventsContainer}>
              <div className={styles.calendarContainer}>
                < MiniCalendar />
              </div>
              <div className={styles.upcomingEventsContainer}>
                <h2 className={styles.eventsHeader}>Upcoming Events</h2>
                <div className={styles.eventCardGrid}>
                  <div className={styles.eventCard}>
                    <div className={styles.dateContainer}>
                      <h3 className={styles.eventMonth}>Jan</h3>
                      <h3 className={styles.eventDay}>18</h3>
                    </div>
                    <div className={styles.eventDescContainer}>
                      <h3 className={styles.eventCardHeader}>Annual Tree Giveaway</h3>
                      <p className={styles.eventCardDesc}> This is a cool totally fun event where you get a free tree to see if you can breed some trees to keep your garden weed free! </p>
                    </div>
                  </div>

                  <div className={styles.eventCard}>
                    <div className={styles.dateContainer}>
                      <h3 className={styles.eventMonth}>Jan</h3>
                      <h3 className={styles.eventDay}>18</h3>
                    </div>
                    <div className={styles.eventDescContainer}>
                      <h3 className={styles.eventCardHeader}>Annual Tree Giveaway</h3>
                      <p className={styles.eventCardDesc}> This is a cool totally fun event where you get a free tree to see if you can breed some trees to keep your garden weed free! </p>
                    </div>
                  </div>

                  <div className={styles.eventCard}>
                    <div className={styles.dateContainer}>
                      <h3 className={styles.eventMonth}>Jan</h3>
                      <h3 className={styles.eventDay}>18</h3>
                    </div>
                    <div className={styles.eventDescContainer}>
                      <h3 className={styles.eventCardHeader}>Annual Tree Giveaway</h3>
                      <p className={styles.eventCardDesc}> This is a cool totally fun event where you get a free tree to see if you can breed some trees to keep your garden weed free! </p>
                    </div>
                  </div>
                </div>
                
                <div className={styles.eventButtonContainer}>
                  <button className={styles.eventsButton}>View all upcoming events <ArrowRight size={16} strokeWidth={2}/></button>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.faq}>
            <FAQ />
          </section>

          <section className={styles.callToAction}>
            <div className={styles.callToActionContainer}>
              <h1 className={styles.callToActionText}>Building our Community.<br />Together.</h1>
              <button className={styles.callToActionButton}>Make a difference<ArrowRight size={24} strokeWidth={2}/></button>
            </div>
            <img src={wrench} alt="Wrench" className={styles.callToActionImage} />
          </section>

          <section className={styles.bentoBoard}>
            <BentoBoard />
          </section>
        </main>
        <Footer />
    </>
  )
}

export default Home
