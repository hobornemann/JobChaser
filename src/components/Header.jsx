import { BrowserRouter, Routes, Route, Navigate, Link, Outlet } from 'react-router-dom'
import Search from './Search'
import styles from './Header.module.css'
import HomePage from "../pages/HomePage"; 
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import Dashboard from '../pages/Dashboard'




function ProtectedRoute() {

  const isAuthenticated = false;
  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" replace />;
}

export default Header

function Header({searchTerm, onSearch, onClear, onChange, onSignOut}) {


  return (
    <header className='headerContainer'>
      <nav>
          <Link className="logo" to="/">
              <img src="./images/jobChaser-logo.svg" alt="" className={styles.jobChaserLogo}/>
          </Link>
          <Search 
            searchTerm={searchTerm}
            onChange={onChange}
            onSearch={onSearch}
            onClear={onClear}
          />
          <ul className='navigationLinks'>
              <li>
                  <Link to="/">Home</Link>
              </li>
              <li>
                  <Link to="/signin">Sign in</Link>
              </li>
              <li>
                  <Link to="/signup">Sign up</Link>
              </li>
              <li>
                  <button onClick={onSignOut}>Sign Out</button>
              </li>
          </ul>
      </nav>
    </header>
  );
}

