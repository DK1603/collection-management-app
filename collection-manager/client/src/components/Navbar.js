import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase-config'; 
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';
import './Navbar.css';
import { useTheme } from './ThemeContext';
import { useLanguage } from './LanguageContext';



function Navbar({ onSearch, onThemeChange, onLanguageChange }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [user, setUser] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage } = useLanguage();
  
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setIsAuthenticated(true);
          
          // Check for admin claim
          user.getIdTokenResult().then((idTokenResult) => {
            if (idTokenResult.claims.admin) {
              // The user is an admin
              setIsAdmin(true);
              console.log("admin claim");
            } else {
              // The user is not an admin
              setIsAdmin(false);
              console.log("User is not an admin");
            }
          });
        } else {
          setIsAuthenticated(false);
          setIsAdmin(false); // Correctly resets isAdmin on logout
        }
      });
    }, []);


  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        // User is signed in
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const googleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      console.error(error);
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery); 
  };

  return (
    <nav className={`navbar ${theme}-theme`}>
      <Link to="/" className="navbar-logo">  Collection Manager</Link>
      <div className="nav-links">
        <Link to="/collections" className="nav-link">
          {language === 'en' ? 'Collections' : 'Коллекции'}
        </Link>
        {isAuthenticated && (
          <Link to="/create" className="nav-link">
            {language === 'en' ? 'Create Collection' : 'Создать коллекцию'}
          </Link>
        )}
        {isAuthenticated ? (
          <>
            <Link to="/profile" className="nav-link">
              {language === 'en' ? 'Profile' : 'Профиль'}
            </Link>
            <button className="nav-button" onClick={googleSignOut}>
              {language === 'en' ? 'Logout' : 'Выйти'}
            </button>
          </>
        ) : (
          <button className="nav-button" onClick={googleSignIn}>
            {language === 'en' ? 'Login with Google' : 'Войти через Google'}
          </button>
        )}
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder={language === 'en' ? 'Search...' : 'Поиск...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">{language === 'en' ? 'Search' : 'Искать'}</button>
        </form>
        {/* Theme and Language Selector */}
        <button className="nav-button" onClick={toggleTheme}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
        <button className="nav-button" onClick={toggleLanguage}>
          {language === 'en' ? 'RU' : 'EN'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;



