import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import '../../global.css'
import styles from './Events.module.css'
import Calendar from '../../components/calendar'

function Events() {
  return (
    <>
      <Navbar />
      
      <main className={styles.main}>
        < Calendar />
      </main>

      <Footer />
    </>
  )
}

export default Events;
