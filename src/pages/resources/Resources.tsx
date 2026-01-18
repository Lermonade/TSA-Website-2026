import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import SearchBar from '../../components/searchBar'
import '../../global.css'
import styles from './Resources.module.css'

import heroBG from '../../assets/images/heroBG2.png'
import stevensonPark from '../../assets/images/stevensonPark.webp'

import { CarFront, CircleParking, FerrisWheel, LocateFixed, MapPin, Trees, WavesLadder } from 'lucide-react'

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
              <div className={styles.gridItem}>
                <img 
                  src={stevensonPark} 
                  alt="Image"
                  className={styles.gridItemImage}
                />
                <div className={styles.mapCircle}>
                  <MapPin size={30} strokeWidth={2}/>
                </div>
                <div className={styles.cardContent}>
                  <h2 className='interHeader' style={{marginBottom: "0.3em"}}>Stevenson Park</h2>
                  <h2 className='interDescription' style={{marginBottom: "1em"}}>Friendswood's central park, featuring paths, a playground, swimming pools, and events.</h2>
                  <div className={styles.cardTopicBox}>
                    <div className={styles.cardTopic}>
                      <Trees size={20} strokeWidth={2}/>
                    </div>
                    <div className={styles.cardTopic}>
                      <LocateFixed size={20} strokeWidth={2}/>
                    </div>
                    <div className={styles.cardTopic}>
                      <CarFront size={20} strokeWidth={2}/>
                    </div>
                    <div className={styles.cardTopic}>
                      <WavesLadder size={20} strokeWidth={2}/>
                    </div>
                    <div className={styles.cardTopic}>
                      <FerrisWheel size={20} strokeWidth={2}/>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.gridItem}>
                <img 
                  src={stevensonPark} 
                  alt="Image"
                  className={styles.gridItemImage}
                />
                <div className={styles.mapCircle}>
                  <MapPin size={30} strokeWidth={2}/>
                </div>
                <div className={styles.cardContent}>
                  <h2 className='interHeader' style={{marginBottom: "0.3em"}}>Stevenson Park</h2>
                  <h2 className='interDescription' style={{marginBottom: "1em"}}>Friendswood's central park, featuring paths, a playground, swimming pools, and events.</h2>
                  <div className={styles.cardTopicBox}>
                    <div className={styles.cardTopic}>
                      <Trees size={20} strokeWidth={2}/>
                    </div>
                    <div className={styles.cardTopic}>
                      <LocateFixed size={20} strokeWidth={2}/>
                    </div>
                    <div className={styles.cardTopic}>
                      <CarFront size={20} strokeWidth={2}/>
                    </div>
                    <div className={styles.cardTopic}>
                      <WavesLadder size={20} strokeWidth={2}/>
                    </div>
                    <div className={styles.cardTopic}>
                      <FerrisWheel size={20} strokeWidth={2}/>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.gridItem}>
                <img 
                  src={stevensonPark} 
                  alt="Image"
                  className={styles.gridItemImage}
                />
                <div className={styles.mapCircle}>
                  <MapPin size={30} strokeWidth={2}/>
                </div>
                <div className={styles.cardContent}>
                  <h2 className='interHeader' style={{marginBottom: "0.3em"}}>Stevenson Park</h2>
                  <h2 className='interDescription' style={{marginBottom: "1em"}}>Friendswood's central park, featuring paths, a playground, swimming pools, and events.</h2>
                  <div className={styles.cardTopicBox}>
                    <div className={styles.cardTopic}>
                      <Trees size={20} strokeWidth={2}/>
                    </div>
                    <div className={styles.cardTopic}>
                      <LocateFixed size={20} strokeWidth={2}/>
                    </div>
                    <div className={styles.cardTopic}>
                      <CarFront size={20} strokeWidth={2}/>
                    </div>
                    <div className={styles.cardTopic}>
                      <WavesLadder size={20} strokeWidth={2}/>
                    </div>
                    <div className={styles.cardTopic}>
                      <FerrisWheel size={20} strokeWidth={2}/>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.gridItem}>
                <img 
                  src={stevensonPark} 
                  alt="Image"
                  className={styles.gridItemImage}
                />
                <div className={styles.mapCircle}>
                  <MapPin size={30} strokeWidth={2}/>
                </div>
                <div className={styles.cardContent}>
                  <h2 className='interHeader' style={{marginBottom: "0.3em"}}>Stevenson Park</h2>
                  <h2 className='interDescription' style={{marginBottom: "1em"}}>Friendswood's central park, featuring paths, a playground, swimming pools, and events.</h2>
                  <div className={styles.cardTopicBox}>
                    <div className={styles.cardTopic}>
                      <Trees size={20} strokeWidth={2}/>
                    </div>
                    <div className={styles.cardTopic}>
                      <LocateFixed size={20} strokeWidth={2}/>
                    </div>
                    <div className={styles.cardTopic}>
                      <CarFront size={20} strokeWidth={2}/>
                    </div>
                    <div className={styles.cardTopic}>
                      <WavesLadder size={20} strokeWidth={2}/>
                    </div>
                    <div className={styles.cardTopic}>
                      <FerrisWheel size={20} strokeWidth={2}/>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.gridItem}>
                <img 
                  src={stevensonPark} 
                  alt="Image"
                  className={styles.gridItemImage}
                />
                <div className={styles.mapCircle}>
                  <MapPin size={30} strokeWidth={2}/>
                </div>
                <div className={styles.cardContent}>
                  <h2 className='interHeader' style={{marginBottom: "0.3em"}}>Stevenson Park</h2>
                  <h2 className='interDescription' style={{marginBottom: "1em"}}>Friendswood's central park, featuring paths, a playground, swimming pools, and events.</h2>
                  <div className={styles.cardTopicBox}>
                    <div className={styles.cardTopic}>
                      <Trees size={20} strokeWidth={2}/>
                    </div>
                    <div className={styles.cardTopic}>
                      <LocateFixed size={20} strokeWidth={2}/>
                    </div>
                    <div className={styles.cardTopic}>
                      <CarFront size={20} strokeWidth={2}/>
                    </div>
                    <div className={styles.cardTopic}>
                      <WavesLadder size={20} strokeWidth={2}/>
                    </div>
                    <div className={styles.cardTopic}>
                      <FerrisWheel size={20} strokeWidth={2}/>
                    </div>
                  </div>
                </div>
              </div>
              
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
