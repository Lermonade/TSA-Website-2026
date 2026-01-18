import { Link } from 'react-router-dom';
import '../global.css'
import styles from './navbar.module.css'
import { TentTree, TreeDeciduous } from 'lucide-react';

function Navbar() {
  return (
    <header>
      <Link className={styles.link} to="/">
        <TentTree size={28} strokeWidth={2} style={{marginRight: "12px", marginBottom: "1px"}}/>
        <h2 className='bradfordHeader'>Friendswood Resources</h2>
      </Link>
      <div className={styles.navigation}>
        <Link className={styles.link} to="/resources"><h3 className={`interSubtitle ${styles.navigationLink}`}>Resources</h3></Link>
        <Link className={styles.link} to="/events"><h3 className={`interSubtitle ${styles.navigationLink}`}>Events</h3></Link>
        <Link className={styles.link} to="/references"><h3 className={`interSubtitle ${styles.navigationLink}`}>References</h3></Link>
        <Link className={styles.link} to="/contact-us"><h3 className={`interSubtitle ${styles.navigationLink}`}>Contact Us</h3></Link>
      </div>
    </header>
  )
}

export default Navbar;
