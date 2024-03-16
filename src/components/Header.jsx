import Search from './Search'
import styles from './Header.module.css'

export default Header

function Header({searchTerm, onSearch, onClear, onChange}) {
    return (
      <header>
        <img src="./images/jobChaser-logo.svg" alt="" className={styles.jobChaserLogo}/>
        <Search 
          searchTerm={searchTerm}
          onChange={onChange}
          onSearch={onSearch}
          onClear={onClear}
        />
      </header>
    );
}