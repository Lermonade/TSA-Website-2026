import '../global.css'
import styles from './searchBar.module.css'

import { Search } from 'lucide-react'

import TypingText from './typingText';

function SearchBar() {
    return (
        <div className={styles.searchBar}>
            <div className={styles.searchBarText}>
                <p className={styles.searchForText}>Search for</p>
                <TypingText />
            </div>
            <button className={styles.searchButton}><Search size={24} strokeWidth={3}/></button>
        </div>
    )
}

export default SearchBar;