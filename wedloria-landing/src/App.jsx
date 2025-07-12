import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfSale from './components/TermsOfSale';
import TermsConditions from './components/TermsConditions';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/gizlilik-politikasi" element={<PrivacyPolicy />} />
          <Route path="/mesafeli-satis-sozlesmesi" element={<TermsOfSale />} />
          <Route path="/sartlar-ve-kosullar" element={<TermsConditions />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
