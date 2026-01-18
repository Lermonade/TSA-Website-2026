import useTypingEffect from '../hooks/useTypingEffect'
import { Search } from 'lucide-react'
import styles from './searchBar.module.css'
import React, { useState } from "react";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const placeholderText = useTypingEffect(isFocused);

  return (
    <div className={styles.searchBar}>
      <input
        className={styles.searchInput}
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder={!isFocused && !query ? `Search for ${placeholderText}` : ""}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <button className={styles.searchButton}>< Search size={24} strokeWidth={3}/></button>
    </div>
  )
}

export default SearchBar;