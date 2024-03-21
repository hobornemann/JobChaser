import { BrowserRouter, Routes, Route, Navigate, Link, Outlet } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import Dashboard from './pages/Dashboard'



function ProtectedRoute() {

  const isAuthenticated = false;
  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" replace />;
}


function App() {

    const handleSignOut = () => {
      // vi återkommer
    }

  return (
    <BrowserRouter>
          <header>
            <nav>
              <ul>
                <li>
                  <Link to="/signin">Sign in</Link>
                </li>
                <li>
                  <Link to="/signup">Sign up</Link>
                </li>
                <li>
                  <button onClick={handleSignOut}>Sign Out</button>
                </li>
              </ul>
            </nav>
          </header>
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/signup" element={<SignUpPage/>}/>
              <Route path="/signin" element={<SignInPage/>}/>
              <Route path="/dashboard" element={<ProtectedRoute/>}>
                 <Route path="/dashboard" element={<Dashboard/>}/> 
              </Route>
          </Routes>
    </BrowserRouter>
  )
}

export default App


/* hob's kod:

import { BrowserRouter, Routes, Route, Navigate, Outlet, Link } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage'; './components/HomePage';
import SignInPage from './components/SignInPage';
import SingUpPage from './components/SignUpPage';
import Dashboard from './components/Dashboard';


// Grundlogik för React Router läggs in i App

function ProtectedRoute(){
    const isAuthenticated = false  // simulerar användarstatus
    return isAuthenticated ? <Outlet/> : <Navigate to="/signin" replace />
    // Outlet kan tolkas som 'children', dvs det som finns som barn i ProtectedRoute elementet nedan
}



function App() {

    return (
        <BrowserRouter>
        <header>
            <nav>
                <ul>
                    <li><Link to="/signin">Sign In</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                    <button>Sing out</button>   
                </ul>
            </nav>
        </header>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/signin" element={<SignInPage/>}/>
                <Route path="/singup" element={<SingUpPage/>}/>
                <Route path="/dashboard" element={<ProtectedRoute/>}>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                </Route>
            </Routes>

        </BrowserRouter>
    );
}



export default App;



*/