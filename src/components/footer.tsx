import { Link } from 'react-router-dom';
import '../global.css'
import styles from './footer.module.css'
import { TentTree } from 'lucide-react';

import insta from '../assets/images/socials/instagram.webp'
import facebook from '../assets/images/socials/facebook.webp'
import x from '../assets/images/socials/x.webp'
import confetti from '../assets/images/socials/confetti.png'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.footerColumn}>
          <Link className={styles.link} to="/">
            <h2 className='interHeader' style={{marginBottom: "0px"}}>Friendswood Resources</h2>
          </Link>
          <h3 className='interText' style={{marginTop: "4px", marginBottom: "24px"}}>For TSA 2026</h3>
          <div className={styles.contactLinks}>
            <img className={styles.contactImg} src={insta}></img>
            <img className={styles.contactImg} src={x}></img>
            <img className={styles.contactImg} src={facebook}></img>
            <img className={styles.contactImg} src={confetti}></img>
          </div>
        </div>
        <div className={styles.footerColumn}>
          <h2 className='interHeader'>Directory</h2>
          <Link className={styles.link} to="/resources"><h3 className='interText'>Resources</h3></Link>
          <Link className={styles.link} to="/events"><h3 className='interText'>Events</h3></Link>
          <Link className={styles.link} to="/references"><h3 className='interText'>References</h3></Link>
          <Link className={styles.link} to="/contact-us"><h3 className='interText'>Contact Us</h3></Link>
        </div>
        <div className={styles.footerColumn}>
          <h2 className='interHeader'>Legal</h2>
          <Link className={styles.link} to="/references"><h3 className='interText'>References</h3></Link>
          <Link className={styles.link} to="/contact-us"><h3 className='interText'>Contact Us</h3></Link>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <h2 className='interText'>© 2026 Friendswood Resources. All rights reserved.</h2>
      </div>
    </footer>
  )
}

export default Footer;