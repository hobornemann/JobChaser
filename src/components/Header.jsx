import { BrowserRouter, Routes, Route, Navigate, Link, Outlet } from 'react-router-dom'
import Search from './Search'
import styles from './Header.module.css'


function ProtectedRoute() {

  const isAuthenticated = false;
  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" replace />;
}

export default Header

function Header({searchTerm, onSearch, onClear, onChange, onSignOut}) {


  return (
    <header className={styles.header}>
      <nav>
          <ul className={styles.navContainer}>
            <Link className={styles.logoLink} to="/">
                <img src="./images/jobChaser-logo.svg" alt="" className={styles.jobChaserLogo}/>
            </Link>
            <div className={styles.normalLinks}>
              <li className={styles.li}>
                  <Link to="/">Home</Link>
              </li>
              <li className={styles.li}>
                  <Link to="/signup">Sign up</Link>
              </li>
              <li className={styles.li}>
                  <Link to="/signin">Sign in</Link>
              </li>
              <li>
                  <button className={styles.signOutButton} onClick={onSignOut}>Sign out</button>
              </li>
            </div>
          </ul>
      </nav>
      <Search 
        searchTerm={searchTerm}
        onChange={onChange}
        onSearch={onSearch}
        onClear={onClear}
      />
    </header>
  );
}

