import styles from './Searchbar.module.css'

const SearchBar = ({keyword, onChange}) => {
    return (
        <input
            className={styles.barstyle}
            key="search-bar"
            value={keyword}
            placeholder="Search character"
            onChange={(e) => onChange(e.target.value)}
        />
    );
}

export default SearchBar;