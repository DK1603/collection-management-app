import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Collections from './pages/Collections';
import CreateCollection from './pages/CreateCollection';
import Profile from './pages/Profile';
import AdminDashboard from './pages/AdminDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider, useTheme } from './components/ThemeContext'; 
import { LanguageProvider } from './components/LanguageContext';

// New component for applying theme class to body
const ApplyTheme = () => {
  const { theme } = useTheme(); 

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return null; 
};

function App() {
  return (
    <Router>
      <ThemeProvider>
        <LanguageProvider>
          <ApplyTheme /> 
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/create" element={<CreateCollection />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </LanguageProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;





